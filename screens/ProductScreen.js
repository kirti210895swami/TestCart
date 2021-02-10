import React from 'react';
import {Text,StyleSheet,View,FlatList, Button} from 'react-native';
import ProductDetail from './ProductDetail';
import {ShoppinReducer} from '../calculation/reducer'
import { connect } from 'react-redux';
import {addToCart, addQuantity, subtractQuantity} from '../calculation/action'
const styles=StyleSheet.create({
    container:{
       marginBottom:10,
      
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5
    },
    product:{
        marginTop:10,
        fontSize:18,
        width: 50,
        height:70
     },
     checkoutButton:{
        marginTop:10,
        fontSize:18,
        width: 50,
        height:70,
        justifyContent: 'flex-end'
     }
});

 
const ProductScreen=({navigation})=>{
    //console.log(results);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product Catalog</Text>
            <Button title="Checkout"
            style={styles.checkoutButton}
            //onPress={}

            />
            <FlatList 
             horizontal={false}
             showsHorizontalScrollIndicator={true}
             data={DATA}
             keyExtractor={(item) => item.id}
             renderItem={({item})=> {
                //return console.log(item)
               return <ProductDetail add_qty={() =>{}} sub_qty={() => {}} style={styles.product} result={item}/>
             }}
            
            />
            
        </View>
      ); 

            }

      
     //data for products
     const DATA =  [
        {
            id : "1",
            image : "https://www.cutiskart.com/image/cache/catalog/cutis-products/dankare-plus-lotion-270x270.jpg",
             name : "Dankare Plus Lotion",
            price : "₹160.00"
             },
        {
            id : "2",
            image : "https://www.cutiskart.com/image/cache/catalog/cutis-products/doxid-l-caps-270x270.jpg",
            name : "A Doxid L Caps",
             price: "₹55.00",
        },
        {
            id : "3",
            image : "https://www.cutiskart.com/image/cache/catalog/cutis-products/acnerex-face-wash-75ml-270x270.jpg",
            name : "Acnerex Face Wash 75ml",
            price: "₹288.00"
        },
        {
            id: "4",
            image: "https://www.cutiskart.com/image/cache/catalog/cutis-products/i-gl0wvit-vc1000-tab-270x270.jpg",
            name: "I-gl0wvit Vc1000 Tab",
            price: "₹3,999.00"
        },
        {
            id: "5",
            image: "https://www.cutiskart.com/image/cache/catalog/amma/New%20Doc%202020-12-28%2015.37.15_57-270x270.jpg",
            name: "Zenoxidil -f Pro 5%",
            price: "₹750.000"        },
        {
            id : "6",
            image : "https://www.cutiskart.com/image/cache/catalog/cutis-products/xpecia-gel-5-pro-270x270.jpg",
            name: "Xpecia Gel 5% Pro",
            price: "₹695.00",
            
        },
        {
            id: "7",
            image: "https://www.cutiskart.com/image/cache/catalog/dec-25/New%20Doc%202020-12-24%2016.30.13_49-100x100.jpg",
            name: "Syntran 100mg Tabs",
            price: "₹215.00"
        },
        {
            id: "8",
            image: "https://www.cutiskart.com/image/cache/catalog/cutis-products/acnedap-gel-15g-02-100x100.jpg",
            name: "Acnedap Gel 15g",
            price: "₹362.03"
        },
        {
            id: "9",
            image: "https://www.cutiskart.com/image/cache/catalog/cutis-products/arcolane-60ml-solution-100x100.jpg",
            name: "Arcolane 60ml Solution",
            price: "₹362.03"
        },
        {
            id: "10",
            image: "https://www.cutiskart.com/image/cache/catalog/cutis-products/aqua-oat-mois-cream-100g-100x100.jpg",
            name: "Aqua Oat Mois.cream 100g",
            price: "₹299.00"
        }
       
    ];


 
export default ProductScreen;