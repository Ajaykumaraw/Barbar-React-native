import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity, TextInput } from 'react-native';


const LoginScreen = ({navigation}) => {

    const goToSignup = ()=>{
        navigation.navigate('SignupScreen');
    }
    const movetoLogin = ()=>{
      navigation.navigate('HomeScreen');
    }
  return (
    <View style={styles.container}>
        <View style={styles.loginFields}>
            <Text style={{margin:10,fontWeight:'bold'}}>Login</Text>
            <TextInput style={styles.input} placeholder='User name'></TextInput>
            <TextInput style={styles.input}  placeholder='Password'></TextInput>
            <View>
            <Text style={{width:'72%',textAlign:'right',margin:8,marginRight:'10%',fontWeight:'bold'}}>Forgot password</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={movetoLogin}>
                    <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
           <View >
                <Text onPress={goToSignup} style={{margin:10,textAlign:'center',marginRight:'30%',fontWeight:'bold'}} >Don't have Account, Create</Text>
           </View>
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

export default LoginScreen