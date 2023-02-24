import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, TextInput, ScrollView, Button } from 'react-native';
import styles from '../styles/style';
import NumericInput from 'react-native-numeric-input';
import { RadioButton, Switch } from 'react-native-paper';



export default function App() {

    const [weight,setWeight] = useState(0);
    const [bottles,setBottles] = useState(0);
    const [time,setTime] = useState(0);
    const [gender,setGender] = useState('');
    const [result,setResult] = useState(0);

    
    function alcometer(e){
        e.preventDefault();
        let alcohol = 0;
        let litres = bottles * 0.33;
        let grams = litres * 8 * 4.5;
        let burn = weight / 10;
        let gramsLeft = grams - (burn * time);
    
        if (gender === "male"){
          alcohol = gramsLeft / (weight * 0.7)
        }
        if (gender === "female"){
          alcohol = gramsLeft / (weight * 0.6)
        }
        if (gramsLeft <= 0){
          alcohol = 0
        }
        setResult(alcohol);
      };

      function RadioSelection({label, value}){
        return(
          <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
             <RadioButton value={value}/>
             <Text>{label}</Text>
          </View>
        );
      }


  return (
      <View style={styles.container}>
        <Text style={styles.title}>Alcometer</Text>
        <View style={styles.calculator}>
            <Text>Weight:</Text>
            <TextInput value={weight} style={styles.input} keyboardType="number-pad" onChangeText={weight => setWeight(weight)}/>
            <Text>Bottles:</Text>
            <NumericInput value={bottles} style={styles.numeric} onChange={bottles => setBottles(bottles)}/>
            <Text>Hours:</Text>
            <NumericInput value={time} style={styles.numeric} onChange={time => setTime(time)} />
            <RadioButton.Group  
                onValueChange={gender => setGender(gender)}
                value={gender}
                >
                <RadioSelection label={'Male'}   value={'male'}   onChange={gender => setGender(gender)}/>
                <RadioSelection label={'Female'} value={'female'} onChange={gender => setGender(gender)}/>
            </RadioButton.Group>
            <Button
                title='Calculate'
                onPress={alcometer}
            />
            <Text> Result {result.toFixed(2)}</Text>
        </View>
        <StatusBar style="auto" />
      </View> 
  );
}