import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native';
import image from '../../assets/g1017.png';
import logo from '../../assets/g944.png';
import { useEffect } from 'react';




export default function WelcomeScreen({navigation}) {

    const moveToLogin = ()=>{
        navigation.navigate('LoginScreen');
    }
    const moveToSignup = ()=>{
        navigation.navigate('SignupScreen');
    }

  return (
        <ImageBackground source={image} resizeMode='cover' style={styles.image}>
            <Image style={styles.logo} source={logo}></Image>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={moveToLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={moveToSignup}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
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
