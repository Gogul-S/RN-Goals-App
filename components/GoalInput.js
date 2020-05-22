
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredText, setEnteredText] = useState('');
    const onTextEntered = (text) => {
        setEnteredText(text);
    }

    const localGoalHandler = () => {
        props.onAddGoal(enteredText);
        setEnteredText('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.textInputContainer}>
                <TextInput placeholder="Add something" onChangeText={onTextEntered} style={styles.input} value={enteredText
                } />
                <View style={styles.buttonContainerStyle}>
                    <View style={styles.button}><Button title="CANCEL" color='red' style={styles.buttonStyle} onPress={props.onCancel} /></View>
                    <View style = {styles.button}><Button title="ADD" onPress={localGoalHandler} /></View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        flex: 1,
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    },
    input: {

        borderWidth: 2,
        padding: 8,
        width: '80%',
        margin: 32,
        borderColor: 'black'
    },
    buttonContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button:{
        width:'40%'
    }
})

export default GoalInput