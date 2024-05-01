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
  FlatList,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CartScreen(props) {
    console.log(props);
    const navigation = useNavigation();
    const [count,SetCount] = React.useState(props?.route?.params?.quantity);

    return(
        <SafeAreaView style={{flex:1}}>
            <ScrollView>
            <View style={{backgroundColor:'#fff',height:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:20}}>Cart</Text>
            <TouchableOpacity style={{position:'absolute',left:0,marginStart:10}} onPress={()=>navigation.goBack()}>
                    <Image style={{height:20,width:20}} source={require('../../assets/images/angle-left.png')}/>
                </TouchableOpacity>
            </View>
                <View style={{flexDirection:'row',alignItems:'center',height:50,margin:10,borderRadius:5,backgroundColor:'#fff',shadowColor:'#000',shadowOpacity:0.22,shadowOffset:{width:1,height:0}}}>
                    <View style={{flexDirection:'row',flex:3,alignItems:'center'}}>
                    <Image resizeMode='stretch' style={{height:50,width:50}} source={{ uri:props?.route?.params?.url}}/>
                    <Text style={{marginStart:10,fontFamily:'Roboto-Light',fontSize:15}}>{props?.route?.params?.name}</Text>
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
                <View style={{backgroundColor:'#fff',borderRadius:5,margin:8,padding:10,shadowColor:'#000',shadowOpacity:0.2,shadowOffset:{width:1,height:1}}}>
                    <View style={{flexDirection:'row'}}>
                    <View style={{flex:1}}>
                        <Text style={{fontFamily:'Roboto-Bold',fontSize:17}}>Price</Text>
                    </View>
                    <View style={{flex:5,alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Roboto-Light',fontSize:17}}>Rs {props?.route?.params?.price}</Text>
                    </View>
                    </View>
                    <View style={{flexDirection:'row',marginTop:10}}>
                    <View style={{flex:1.5}}>
                        <Text style={{fontFamily:'Roboto-Bold',fontSize:17}}>Quantity</Text>
                    </View>
                    <View style={{flex:5,alignItems:'flex-end'}}>
                        <Text style={{fontFamily:'Roboto-Light',fontSize:17}}>{count}</Text>
                    </View>
                    </View>
                    <Text style={{fontFamily:'Roboto-Bold',marginTop:10}}>Note: Your will deleviour with 3-4 days</Text>
                    <Text style={{fontFamily:'Roboto-Bold'}}>There is only one payment method COD (Cash on delivery)</Text>
                    
                </View>
            </ScrollView>
            <View style={{backgroundColor:'#fff',shadowColor:'#000',shadowOffset:{width:1,height:1}}}>
                <View style={{flexDirection:'row',marginStart:10,marginTop:10}}>
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:17}}>Total</Text>
                    <View style={{flex:1,alignItems:'flex-end',marginEnd:10}}>
                    <Text style={{fontFamily:'Roboto-Bold',fontSize:17}}>{parseInt(props?.route?.params?.price)*count}</Text>
                    </View>
                </View>
            <TouchableOpacity style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'#000',height:50,margin:10}} onPress={()=>Alert.alert('Your order has been placed you will recieve a confirmation message soon')}>
                <Text style={{fontFamily:'Roboto-Bold',color:'#fff',fontSize:18,marginStart:5}}>Place order</Text>
            </TouchableOpacity>
            </View>
            
        </SafeAreaView>
    )
    
}