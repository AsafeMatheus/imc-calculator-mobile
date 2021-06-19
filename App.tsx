import React, {useState} from 'react'
import {
  View, 
  Text
} from 'react-native'
import styles from './styles'

// IMPORT COMPONENTS
import Imput from './components/Input'
import IMCButton from './components/IMCButton'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [result, setResult] = useState('')

  const imc = () => {
    if (weight.length == 0 || height.length == 0){
      alert('Verifique os dados.')
    } else{
      let imc = Number(weight) / (Number(height) * Number(height))

      setResult(String(imc.toFixed(2)))
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <Imput label='Informe seu Peso' set={setWeight}/>
      <Imput label='Informe sua Altura' set={setHeight}/>
      <IMCButton calculate={imc} />

      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  )
}