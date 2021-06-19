import React from 'react'
import {
    View,
    Text,
    TextInput
} from 'react-native'
import styles from './style'

export default function(props:any){
    return(
        <View style={styles.inputBox}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
            keyboardType='decimal-pad'
            style={styles.inputs}
            onChangeText={text => props.set(text)}
            />
        </View>
    )
}