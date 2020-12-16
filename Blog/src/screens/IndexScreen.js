import React, {useContext, useState} from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import ListElement from '../components/ListElement';
import BlogContext from '../context/BlogContext';
import Feather from '@expo/vector-icons';

const noView = function () {
    // shows when there is nothing in the blogPost.
    return (
        <View style = {{flex:1, justifyContent:'center'}}>
            <Text style = {{fontSize:30, alignSelf:'center'}}>No Blogs are there!</Text> 
        </View>
    );
}

const IndexScreen = (props) => {
    // console.log(props)

    const data = useContext(BlogContext).data;
    const deleteBlogPost = useContext(BlogContext).deleteBlogPost;
    const [x, setX] = useState('')

    if (data.length == 0){
        return noView();
    }
    return <View style = {{flex: 1}}>
        <TouchableOpacity
            style = {styles.addButtonStyle}
            onPress = {
                () => {
                    props.navigation.navigate('Create')
                }
            }
        >
            <Text>Add Blogs</Text>
        </TouchableOpacity>
        <FlatList
            keyExtractor = {
                (item) => {
                    return item.title;
                }
            }
            data = {data}
            renderItem = {
                ({item}) => {
                    return <ListElement 
                                navigation = {
                                    () => {
                                        props.navigation.navigate('Edit', {title:item.title, blog:item.blog})
                                    }
                                } 
                                setX = {
                                    () => {
                                        setX(x + 1)
                                    }
                                } 
                                deleteBlog = {
                                    () => {
                                        deleteBlogPost(item)
                                    }
                                } 
                                item = {item}
                            />
                }
            }
        />
    </View>
}

IndexScreen.navigationOptions = (props) => {
    return {
        title: 'Blog',
        headerRight: () => (
            <TouchableOpacity 
                onPress = {() => {props.navigation.navigate('Create')}}
                style = {{
                    fontSize: 20, 
                    borderWidth: 1,
                    borderRadius: 10,
                    backgroundColor: 'skyblue',
                    marginHorizontal: 10,
                    padding: 5
                }}
            >
                <Text>Add Blog</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create(
    {
        addButtonStyle: {
            borderWidth: 2,
            borderColor: 'black',
            borderRadius: 10,
            alignSelf: 'center',
            padding: 10,
            backgroundColor: 'skyblue',
            marginTop:10
        }
    }   
)

export default withNavigation(IndexScreen);