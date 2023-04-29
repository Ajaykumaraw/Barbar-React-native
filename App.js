import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native';
import image from './assets/g1017.png';
import logo from './assets/g944.png';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './Screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import SignupScreen from './Screens/SignupScreen/SignupScreen';
import HomeScreen from './Screens/HomeScreen/HomeScreen';

const stack = createNativeStackNavigator();


export default function App() {
 
  return (
      <NavigationContainer>
        <stack.Navigator screenOptions={{headerShown:false}}>
            <stack.Screen name='welcome' component={WelcomeScreen}/>
            <stack.Screen name='LoginScreen' component={LoginScreen}/>
            <stack.Screen name='SignupScreen' component={SignupScreen}/>
            <stack.Screen name='HomeScreen' component={HomeScreen}/>
        </stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
     width:100,
     height:100,
  },
  image:{
    width:"100%",
    height:"100%",
  },
  logo:{
    marginTop:'35%',
    marginLeft:'28%',
    width:165,
    height:185,
    resizeMode:'cover',
    borderColor:'white'
  },
  buttonContainer:{
      marginTop:250,
      marginLeft:60,
      width:'100%'
  },
  button:{
    width:'60%',
    height:50,
    padding:10,
    backgroundColor:'#ccd2db',
    margin:10,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center',
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:16,
    
  }

});
