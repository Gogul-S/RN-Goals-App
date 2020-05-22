import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const GoalItem = props => (

    <TouchableOpacity onLongPress = {props.onDelete.bind(this,props.id)}>
        <View style={styles.listStyle}><Text >{props.task}</Text></View>
    </TouchableOpacity>

)

const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        marginTop:8,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
    
    }
})

export default GoalItem
