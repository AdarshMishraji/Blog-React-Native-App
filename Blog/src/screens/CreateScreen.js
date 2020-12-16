import React, { useState, useContext } from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import { withNavigation } from "react-navigation";
import BlogContext from '../context/BlogContext'

const CreateScreen = (props) => {

    const [title, setTitle] = useState('');
    const [blog, setBlog] = useState('');
    const addBlogPost = useContext(BlogContext).addBlogPost;
    var blogInput = undefined;

    return <View style ={{flex: 1}}>
        <Text style = {styles.headerStyle}>Create Blog</Text>
        <TextInput
            autoCapitalize = 'sentences'
            autoCorrect = {true}
            style = {styles.titleInputStyle}
            placeholder = 'Title'
            value = {title}
            onChangeText = {
                (newTitle) => {
                    setTitle(newTitle);
                }
            }
            onEndEditing = {
                () => {
                    blogInput.focus()
                }
            }
        />
        <TextInput
            autoCapitalize = 'sentences'
            autoCorrect = {true}
            style = {{...styles.titleInputStyle, height: 250}}
            placeholder = 'Blog'
            value = {blog}
            multiline = {true}
            numberOfLines = {10}
            textAlignVertical = 'top'
            ref = {(input) => {blogInput = input}}
            onChangeText = {
                (newBlog) => {
                    setBlog(newBlog);
                }
            }
        />
        <TouchableOpacity 
            onPress = {
                () => {
                    addBlogPost(
                        {title: title, blog:blog}, 
                        () => {
                            props.navigation.navigate('Index');
                        }
                    );
                }
            }
            style = {styles.createBlogButton}
        >
            <Text>Create Blog</Text>
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create(
    {
        titleInputStyle: {
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'black',
            alignSelf: 'stretch',
            padding: 10,
            fontSize: 20,
            marginVertical: 20
        },
        createBlogButton : {
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 10,
            alignSelf: 'center',
            padding: 10,
            backgroundColor: 'skyblue'
        },
        headerStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            marginStart:20,
            marginTop:10
        }
    }
)

export default withNavigation(CreateScreen);