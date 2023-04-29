import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity, TextInput } from 'react-native';


export default function SignupScreen({navigation}){
  

    const moveToLogin =()=>{
        navigation.navigate('LoginScreen');
    }
  return (
    <View style={styles.container}>
        <View style={styles.loginFields}>
            <Text style={{margin:10,fontWeight:'bold'}}>Sign Up</Text>
            <TextInput style={styles.input} placeholder='User name'></TextInput>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input}  placeholder='Password'></TextInput>
        
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
        </View>
            <View>
                <Text style={{margin:10,textAlign:'center',marginRight:'30%',fontWeight:'bold'}} onPress={moveToLogin}>Already have account, Login!</Text>
           </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        margin:10,
    },
    loginFields:{
        marginTop:'60%',
        marginLeft:50,
    },
    buttonContainer:{
        marginTop:250,
        marginLeft:60,
        width:'100%'
    },
    button:{
      width:'70%',
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
    },
    input:{
        width:'70%',
        height:40,
        paddingLeft:10,
        backgroundColor:'lightgray',
        borderRadius:5,
        margin:10,
    }
})
