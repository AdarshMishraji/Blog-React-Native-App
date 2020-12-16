import React, { createContext, useReducer} from 'react';

const BlogContext = createContext(); // creating contexr, a store which provide a array of object.
// context is used to provide a value to all of its children. Accessed by just passing BlogContext in useContext() callback.

const reducer = (state, action) => {
    switch (action.type) {
        case 'addBlogPost': {
            return [...state, action.payload];
        }
        case 'editBlogPost': {
            var blogs = state;
            for (let i = 0; i < blogs.length; i++) {
                if (blogs[i].title == action.payload.title){
                    blogs[i].blog = action.payload.blog;
                    break;
                }
            }
            return blogs;
        }
        case 'deleteBlogPost': {
            var blogs = state;
            for (let i = 0; i < blogs.length; i++) {
                if (blogs[i].title == action.payload.title){
                    blogs.splice(i, 1);
                    break;
                }
            }
            return blogs;
        }
        default: {
            console.log('no operation had done');
            return state;
        }
    }
}

export const BlogProvider = ({children}) => {
    // children => App of App.js

    // const [blogPost, setBlogPost] = useState([{title:'Blog Title #1', blog: 'Blog #1'}]); // a store of all post
    const [state, dispatch] = useReducer(reducer, [])

    // const addBlogPost = (blog) => { // create blog.
    //     setBlogPost([...blogPost, blog])
    // }

    // const editBlog = (newBlog) => { // update blog
    //     var blogs = blogPost;
    //     for (let i = 0; i < blogs.length; i++){
    //         if (blogs[i].title == newBlog.title) {
    //             blogs[i].blog = newBlog.blog;
    //             break;
    //         }
    //     }
    //     setBlogPost(blogs);
    // }

    // const deleteBlog = (title) => { // delete blog
    //     var blogs = blogPost;
    //     for (let i = 0; i < blogs.length; i++){
    //         if (blogs[i].title == title){
    //             blogs.splice(i, 1);
    //             break;
    //         }
    //     }
    //     setBlogPost(blogs);
    // }

    const addBlogPost = (blog, navigate) => {
        console.log(blog.title, blog.blog);
        dispatch({type: 'addBlogPost', payload: blog});
        navigate();
    }

    const editBlogPost = (blog, navigate) => {
        console.log('in callback', blog.title, blog.blog);
        dispatch({type: 'editBlogPost', payload: blog});
        navigate();
    }

    const deleteBlogPost = (blog) => {
        console.log('in callback',blog.title, blog.blog);
        dispatch({type: 'deleteBlogPost', payload: blog})
    }


    return <BlogContext.Provider value = {{data: state, addBlogPost, editBlogPost, deleteBlogPost}}>
        {children}
    </BlogContext.Provider>
    // Provider here is providing the value to the nested children of it.
}

export default BlogContext;