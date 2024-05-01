import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image,
  FlatList
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProductListDetail(props) {
    const navigation = useNavigation();
    const [count,SetCount] = React.useState(1);
    console.log(props);
    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <View style={{backgroundColor:'#fff',height:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:20}}>{props.route.params.name}</Text>
            <TouchableOpacity style={{position:'absolute',left:0,marginStart:10}} onPress={()=>navigation.goBack()}>
                    <Image style={{height:20,width:20}} source={require('../../assets/images/angle-left.png')}/>
                </TouchableOpacity>
            </View>
            <View style={{height:200,marginTop:10}}>
            <Image resizeMode='stretch' style={{height:200,width:'100%'}} source={{uri :props?.route?.params?.url}}/>
            </View>
            <View style={{backgroundColor:'#C7C7C7',borderRadius:5,margin:10,flexDirection:'row',padding:8}}>
                <View style={{flex:1}}>
                <Text style={{fontFamily:'Roboto-Bold',fontSize:16}}>Price</Text>
                </View>
                <View style={{flex:5,alignItems:'flex-end'}}>
                <Text style={{fontFamily:'RobotoCondensed-Light',fontSize:16,}}>Rs {props?.route?.params?.price}</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',height:50,margin:10,borderRadius:5,backgroundColor:'#fff',shadowColor:'#000',shadowOpacity:0.22,shadowOffset:{width:1,height:0}}}>
                    <View style={{flexDirection:'row',flex:3,alignItems:'center'}}>
                    <Text style={{marginStart:10,fontFamily:'Roboto-Light',fontSize:15}}>Quantity</Text>
                    </View>
                    <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>SetCount(count-1)}>
                        <Image style={{height:30,width:30}} source={require('../../assets/images/minus-circle.png')}/>
                        </TouchableOpacity>
                        
                        <Text style={{fontFamily:'Roboto-Medium',marginStart:5}}>{count}</Text>
                        <TouchableOpacity style={{marginStart:5}} onPress={()=>SetCount(count+1)}>
                        <Image style={{height:30,width:30}} source={require('../../assets/images/add.png')}/>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>
            
            </ScrollView>
            <TouchableOpacity style={{flexDirection:'row',backgroundColor:'#000',justifyContent:'center',alignItems:'center',height:50,margin:10}} onPress={()=>navigation.navigate('CartScreen',{name:props.route.params.name,url:props.route.params.url,price:props.route.params.price,quantity:count})}>
                <Image style={{height:20,width:20}} source={require('../../assets/images/plus.png')}/>
                <Text style={{fontFamily:'Roboto-Bold',color:'#fff',fontSize:18,marginStart:5}}>Add to cart</Text>
            </TouchableOpacity>
            
        </SafeAreaView>
    )
}