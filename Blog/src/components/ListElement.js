import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const ListElement = (props) => {
    return (
        <View style = {styles.blogStyle}>
            <TouchableOpacity
                onPress = {
                    () => {
                        props.navigation();
                    }
                }
            >
                <Text>{props.item.title}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                onPress = {
                    () => {
                        props.deleteBlog();
                        props.setX();  // for reloading the window in order to support multiple delete operation.
                    }
                }
                style = {styles.deleteButtonStyle}
            >
                <Text>Delete</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        blogStyle: {
            flexDirection: 'row',
            justifyContent:'space-between',
            borderWidth:2,
            borderRadius: 10,
            borderColor: 'black',
            marginHorizontal:10,
            marginTop: 10,
            padding:5
        },
        deleteButtonStyle: {
            borderRadius:5,
            borderWidth:1,
            padding:2
        }
    }
)

export default ListElement;