import React, {useState, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation';
import BlogContext from '../context/BlogContext';

const EditScreen = (props) => {
    const editBlogPost = useContext(BlogContext).editBlogPost;
    const title = props.navigation.state.params.title;
    const [blog, setBlog] = useState(props.navigation.state.params.blog)

    return (
        <View>
            <Text style = {styles.titleStyle}>Title: {title}</Text>
            <TextInput
                autoCorrect = {true}
                autoCapitalize = 'sentences'
                value = {blog}
                style = {styles.blogInputStyle}
                multiline = {true}
                numberOfLines = {10}
                textAlignVertical = 'top'
                onChangeText = {
                    (newBlog) => {
                        setBlog(newBlog)
                    }
                }
            />
            <TouchableOpacity
                onPress = {
                    () => {
                        console.log('in onpress', title, blog)
                        editBlogPost(
                            {title, blog},
                            () => {
                                props.navigation.navigate('Index');                                
                            }
                        )
                    }
                }
                style = {styles.submitButtonStyle}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {   
        blogInputStyle: {
            height: 250,
            alignSelf:'stretch',
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 15,
            marginHorizontal: 10,
            marginVertical: 10.,
            padding:10
        },
        titleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
            marginStart: 10,
            marginVertical: 10
        },
        submitButtonStyle: {
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 10,
            alignSelf: 'center',
            padding: 10,
            backgroundColor: 'skyblue'
        }
    }
)

export default withNavigation(EditScreen);