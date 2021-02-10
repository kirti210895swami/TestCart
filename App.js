import React from "react";
import {createAppContainer}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ProductScreen from "./screens/ProductScreen";
import ProductDetail from "./screens/ProductDetail";
 
const navigator = createStackNavigator({
   Home:ProductScreen,
   Detail:ProductDetail
});

export default createAppContainer(navigator);