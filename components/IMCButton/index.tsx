import React from 'react'
import {
    TouchableOpacity,
    Text
} from 'react-native'
import styles from './style'

export default function(props:any){
    return(
        <TouchableOpacity style={styles.button} onPress={() => props.calculate()}>
            <Text style={styles.buttonText}>CALCULAR IMC</Text>
        </TouchableOpacity>
    )
}