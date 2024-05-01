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
  FlatList,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GenderScreen(props) {
    const navigation = useNavigation();
    const GenderList=[
        {
            id:1,
            name:'Male'
        },
        {
            id:2,
            name:'Female'
        }
    ];
    const renderItem =({item,index})=>{
        return(
            <TouchableOpacity style={{height:50,flex:1,backgroundColor:'#fff',margin:10,shadowColor:'#000',shadowOffset:{width:1,height:1},shadowOpacity:0.5,justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('ProductListScreen',{name:props?.route?.params?.name})}>
                <Text>{item.name}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView>
            <View>
            <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}} >
                <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:20}}>Gender Screen</Text>
                <TouchableOpacity style={{position:'absolute',left:0,marginStart:10}} onPress={()=>navigation.goBack()}>
                    <Image style={{height:20,width:20}} source={require('../../assets/images/angle-left.png')}/>
                </TouchableOpacity>
            </View>
                
                <FlatList numColumns={2} renderItem={renderItem} keyExtractor={(item)=>item.id} data={GenderList}/>
            </View>
        </SafeAreaView>
    )
}