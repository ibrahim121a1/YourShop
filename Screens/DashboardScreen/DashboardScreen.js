import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


export default function DashboardScreen() {
    const navigation = useNavigation();
    const CategoryList =[
        {
            id:1,
            name:'Jewellery',
            image:require('../../assets/images/jewelery.jpg')
        },
        {
            id:2,
            name:'Cloths',
            image:require('../../assets/images/shirts.webp')
        },
        {
            id:3,
            name:'Shoes',
            image:require('../../assets/images/shoes.jpg')
        },
        {
            id:4,
            name:'Sports',
            image:require('../../assets/images/sports.jpg')
        }
    ]
    const [data,SetArray] = React.useState([]);
    React.useEffect(()=>{
       dash()
    //    SetArray([{name:'Shoes',url:'https://robbreport.com/wp-content/uploads/2023/03/RR_Summer_Shoes_lead.jpg?w=1000'}]);
    },[])
    async function dash() {
        try {
          let dataDash = [];
          const querySnapshot = await firestore().collection('Demo').get();
          
          querySnapshot.forEach((doc) => {
            console.log(doc.id, ' => ', doc.data());
            const item = { id:doc.data().id,name: doc.data().name, url: doc.data().url };
            dataDash.push(item);
      
            const subCollectionRef = firestore().collection('Demo').doc(doc.id).collection(doc.data().name);
            subCollectionRef.get().then((subCollectionSnapshot) => {
              subCollectionSnapshot.forEach((subDoc) => {
                console.log('Subcollection document:', doc.data().name, ' => ', subDoc.data());
              });
            });
          });
      
          console.log('dataDash0', dataDash);

          
        SetArray(dataDash);

          
        } catch (error) {
          console.log('Error fetching documents:', error);
        }
      }
      
    
    const renderItem =({item,index})=>{
        console.log('dataItem',item);
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('GenderScreen',{name:item?.name})} style={{flex:1,height:100,backgroundColor:'#fff',marginStart:10,marginEnd:10,marginTop:30,shadowColor:'#000',shadowOpacity:0.5,shadowOffset:{width:1,height:1}}}>
                <Image resizeMode='stretch' style={{height:100,width:'100%'}} source={{uri :item?.url}}/>
                <View style={{position:'absolute',bottom:0,backgroundColor:'#fff'}}>
                <Text style={{fontFamily:'RobotoCondensed-Regular',fontSize:22}}>{item?.name}</Text> 
                </View>
                {/* <Text style={{fontFamily:'Roboto-Black'}}>{item.name}</Text> */}
            </TouchableOpacity>
        )
    }
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{height:50,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                <Text style={{fontFamily:'RobotoCondensed-Bold',fontSize:20}}>Your Shop</Text>
                <TouchableOpacity style={{position:'absolute',left:0,marginStart:10}} onPress={()=>navigation.openDrawer()}>
                    <Image style={{height:20,width:20}} source={require('../../assets/images/menu-burger.png')}/>
                </TouchableOpacity>
                <TouchableOpacity style={{position:'absolute',right:0,marginEnd:10}} onPress={()=>navigation.openDrawer()}>
                    <Image style={{height:20,width:20}} source={require('../../assets/images/cart-shopping-fast.png')}/>
                </TouchableOpacity>
            </View>
            <Text>This is dashboard</Text>
            <Text style={{fontFamily:'RobotoCondensed-Light',fontSize:22,marginStart:10,marginTop:10}}>What you want to buy?</Text>
            <View style={{flex:1}}>
            <FlatList renderItem={renderItem} data={data} keyExtractor={(item)=>item.id}/>
            </View>
            
        </SafeAreaView>
    ) 
}
