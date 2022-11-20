import React from 'react';
import {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useFonts } from 'expo-font'; //importing hook useFonts
import { LinearGradient } from 'expo-linear-gradient';
import AppLoading from 'expo-app-loading';
import { Audio } from 'expo-av';




export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('./assets/Smile.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);




  const fontsLoad = useFonts({
    dance: require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });

  if (!fontsLoad) {
    return (
      <AppLoading />
    )
  }





  const [showValue, setShowValue] = useState(true);


  return (
    <LinearGradient style={styles.container} colors={["#2193b0","#753a88"]} start={{x:Math.random(0, 0.5), y:Math.random(0,0.5)}} end={{x:Math.random(0,0.8), y:Math.random(0,0.8)}}>
        <Text style={styles.header}>Satisfying Gradient Game</Text>
        <Text style={styles.areabody}> Tap the change button in order to change different gradient forms. Button will keep changing its position as you tap. Challenge involves tapping accurately on button each time. Have fun!</Text>
        <Text style={styles.areabody}> Play the sound and tap on the beat for tougher challenge.</Text>
        <View style={styles.button}>
        <Button title="Change" color="#030303" onPress={() => setShowValue(!showValue)} />
        {showValue? <Text style={{color: 'white', marginBottom: 20}}>Tap faster! Good Luck! </Text> : null}
        </View>
        <View style={styles.buttontwo}>
        <Button title="Play Sound" color="#030303" onPress={playSound} />
        </View>


        </LinearGradient>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  header:{
    fontFamily:'dance',
    fontSize:26,
    color:'white'
    
  },

  areabody:{
    marginTop:20,
    color:'white'
    


  },

  button:{
    marginTop:20,
    width:150,
    
  },

  buttontwo:{
    marginTop:20,
  }

});

