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
import firestore from '@react-native-firebase/firestore';

export default function ProductListScreen(props) {

    const navigation = useNavigation();
    const Product=[{
        id:1,
        name:'Shirts',
        image:require('../../assets/images/shirts.webp')
    },
    {
        id:2,
        name:'T-Shirts',
        image:require('../../assets/images/shirts.webp')
    },
    {
        id:3,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:3,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:4,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:5,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:6,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:7,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:8,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:9,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:10,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:11,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:12,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:13,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },
    {
        id:14,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    },{
        id:15,
        name:'Jeweleys',
        image:require('../../assets/images/jewelery.jpg')
    }
]
const [Data,SetData] = React.useState([]);
React.useEffect(()=>{
    GetProducts();
},[])
async function GetProducts() {
    try {
      console.log(props?.route?.params?.name);
      let dataDash = [];
      const querySnapshot = await firestore().collection('Demo').get();
      
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        
  
        const subCollectionRef = firestore().collection('Demo').doc(doc.id).collection(props?.route?.params?.name);
        subCollectionRef.get().then((subCollectionSnapshot) => {
          subCollectionSnapshot.forEach((subDoc) => {
            console.log('Subcollection document:', doc.data().name, ' => ', subDoc.data());
            const item = { id:subDoc.data().id,name: subDoc.data().name, url: subDoc.data().url, price:subDoc.data().price };
            dataDash.push(item);
            console.log('dataDash0', dataDash);
            SetData(dataDash);
          });
        });
      });
  
      

      
    // SetArray(dataDash);

      
    } catch (error) {
      console.log('Error fetching documents:', error);
    }
  }
const renderItem =({item,index})=>{
    return(
        <TouchableOpacity style={{flex:1,height:200,backgroundColor:'#fff',shadowColor:'#000',shadowOffset:{width:1,height:1},shadowOpacity:0.5,marginStart:10,marginEnd:10,marginTop:10}} onPress={()=>navigation.navigate('ProductListDetail',{url:item.url,name:item.name,price:item.price})} >
            <View style={{flex:1}}>
            <View style={{height:100,marginTop:5}}>
                <Image resizeMode='contain' style={{height:100,width:'100%'}} source={{uri :item?.url}}/>
            </View>
            <View style={{alignItems:'center'}}>
                <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:18}}>{item.name}</Text>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>Sizes</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <View style={{borderWidth:1,borderColor:'#000',flexDirection:'row'}}>
                <Text style={{marginStart:10}}>S</Text>
                <View style={{backgroundColor:'#000',width:1,marginStart:10}}/>
                <Text style={{marginStart:10}}>M</Text>
                <View style={{backgroundColor:'#000',width:1,marginStart:10}}/>
                <Text style={{marginStart:10,marginEnd:10}}>L</Text>
                {/* <View style={{backgroundColor:'#000',width:1}}/> */}
            </View>
            </View>
            <View style={{alignItems:'center',marginTop:5}}>
                <Text style={{fontFamily:'RobotoCondensed-Bold'}}>Price: {item?.price}</Text>
            </View>
            </View>
            
            
        </TouchableOpacity>
    )
}

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:'#fff',height:50,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:20}}>Products</Text>
            <TouchableOpacity style={{position:'absolute',left:0,marginStart:10}} onPress={()=>navigation.goBack()}>
                    <Image style={{height:20,width:20}} source={require('../../assets/images/angle-left.png')}/>
                </TouchableOpacity>
            </View>
            <FlatList style={{flex:1}} numColumns={2} renderItem={renderItem} keyExtractor={(item)=>item.id} data={Data}/>
            {/* <View style={{flex:1,height:50,justifyContent:'center',alignItems:'center'}}>
                <Text>Product</Text>
                <View>
                
                </View>
                
            </View> */}
        </SafeAreaView>
    )
}