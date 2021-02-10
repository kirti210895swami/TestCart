import React,{useState} from 'react';
import {View,StyleSheet,Text,TextInput, Image, Button} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const ProductDetail =({result}) => {
    const [quantity, setQuantity] = useState('');
    console.log('result');
    console.log(result);
 return (
        <View style={styles.container}>
        <View style={styles.container1} >
        <Text>{result.name}</Text>
        <Image  style={styles.image} source={{uri:result.image}} />
        <Text>{result.price}</Text>
        </View>

        <View   style={styles.container2}>
        <AntDesign name="plussquareo" size={25} width={25} height={30} color="black" />
        <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Qty"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {setQuantity}/>
        <AntDesign name="minussquareo" size={25} width={25} height={30} color="black" />
        </View>
    </View>
 );
};
 
const styles = StyleSheet.create({
    container:{
        marginLeft:15,
        flexDirection:'row',
        flex:1,
        backgroundColor: "#f5f5f5",
        marginBottom:15,
        marginRight:15
    },
    container1:{
        marginLeft:15,
        flexDirection:'column',
        flex:1,
        backgroundColor: "#f5f5f5",
        marginBottom:15,
        marginRight:15
    },
    container2:{
        marginLeft:15,
        flexDirection:'column',
        flex:1,
        justifyContent: 'center',
        backgroundColor: "#f5f5f5",
        marginBottom:15,
        marginRight:15
    },
    image:{
        width:100,
        height:100,
        borderRadius:4,
        marginBottom:5

    },
    bd:{
        fontWeight:'bold',
        width:50,
        height:80
    },
    input: {
        marginTop: 15,
        height: 25,
        width: 30,
        borderWidth: 1,
        marginBottom:10
     },
});

export default ProductDetail;