import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View , TouchableHighlight, } from 'react-native';

export default function App() {
  const [All,setAll] = useState(0);
  const [car,setCar] = useState(0);
  const [Truck,setTruck] = useState(0);
  const [Walker,setWalker]= useState(0)
  function handleDelButton(){
    setAll(0);
    setCar(0);
    setTruck(0);
    setWalker(0);
  }
  function handleCarButton(){
    setCar(car + 1);
    setAll(All + 1);
  }
  function handleTruckButton(){
    setTruck(Truck + 1);
    setAll(All + 1);
  }
  function handleWalkerButton(){
    setWalker(Walker + 1);
    setAll(All + 1);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Forgalom számláló!</Text>
      <Text style ={styles.allText} >Összes: {All}</Text>
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleDelButton}
          >
          <Text style={styles.runText}>Mindent töröl</Text>
      </TouchableHighlight>
    

      <StatusBar style="auto" />
      <Text style ={styles.Nemtudom} >Autó: {car}</Text>
      <TouchableHighlight
          style={styles.carButton}
          onPress={handleCarButton}
          >
          <Text style={styles.runText}>Autó</Text>
          
      </TouchableHighlight>
      <Text style ={styles.Nemtudom} >TeherAuto: {Truck}</Text>
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleTruckButton}
          >
          <Text style={styles.runText}>TeherAutó</Text>
          
      </TouchableHighlight>
      <Text style ={styles.Nemtudom}>Gyalogos: {Walker} </Text>
      <TouchableHighlight
          style={styles.runButton}
          onPress={handleWalkerButton}
          >
          <Text style={styles.runText}>Gyalogos</Text>
          
      </TouchableHighlight>
      </View>
  );
  }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F58200',
    alignItems: 'center',
    justifyContent: 'center',
  },
    runButton: {
    backgroundColor: '#5EF554',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
    onPress: 'red', 
    

  },
  runText: {
    color: '#000CF5',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18,
  },
  carButton:{
    backgroundColor:"#5EF554",
    padding: 10,
    margin: 10,
    fontWeight: 'bold',
    

  },
  Text:{
    color: 'white',
    fontSize: 35,
    fontWeight:'bold',
  },
  Nemtudom:{
    color: 'white',
    fontSize: 15,
    paddingTop: 25,
    justifyContent: 'center',
    
  },
  allText:{
    color: 'white',
    fontSize: 25,
    paddingTop:25,
    fontWeight: 'bold',
  }
});
  
