import { StyleSheet, Text, View,ImageBackground,Image, TouchableOpacity } from 'react-native';
import logo from '../../assets/g1029.png';


const HomeScreen = () => {
  return (
    <View>
        <View style={styles.profile} >
           <Image style={styles.profileImg} source={logo}></Image>
           <Text style={{marginRight:10}}>User Name</Text>
        </View>
        <View>

        </View>
    </View>
  )
}



const styles = StyleSheet.create({
  profile:{
    width:'100%',
    height:'30%',
    marginTop:'10%',
    alignItems:'flex-end',
  },
  profileImg:{
    width:'20%',
    height:'80%',
    borderColor:'gray',
    borderWidth:1,
    margin:10,
    borderRadius:30,
  },
})

export default HomeScreen