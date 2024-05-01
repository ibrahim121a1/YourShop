import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

import DashboardScreen from '../DashboardScreen/DashboardScreen';
import 'react-native-gesture-handler';  
  const Drawer = createDrawerNavigator();
//   const Stack = createStackNavigator();

export default function DrawerScreen() {
    return(
        <MyDrawer />
    )
}

function CustomDrawerContent(props) {
    console.log(props);
    const width = useWindowDimensions().width * 0.3;
    const [ViewWomenCategory,SetViewWomenCategory] = React.useState(false);
    const [ViewmenCategory,SetViewmenCategory] = React.useState(false);
    return (
      <DrawerContentScrollView {...props}>
        <View>
          <TouchableOpacity style={{marginTop:10,marginStart:10}} onPress={()=>props.navigation.closeDrawer()}>
            <Image style={{height:20,width:20}} source={require('../../assets/images/angle-left.png')}/>
          </TouchableOpacity>
          <View style={{marginTop:10,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontFamily:'Roboto-Medium',fontSize:17}}>Select your product</Text>
            <Text style={{fontFamily:'Roboto-Medium',fontSize:17}}>according to category!</Text>
          </View>
            <TouchableOpacity style={{marginTop:10,marginStart:10,marginEnd:10}} onPress={()=>SetViewWomenCategory(!ViewWomenCategory)}>
                <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Women</Text>
                <View style={{position:'absolute',right:0}}>
                  {
                    ViewWomenCategory?(
                      <Image style={{height:20,width:20}} source={require('../../assets/images/angle-up.png')}/>
                    ):
                    <Image style={{height:20,width:20}} source={require('../../assets/images/angle-down.png')}/>
                  }
                
                </View>
                
            </TouchableOpacity>
            <View>
              {
                ViewWomenCategory?(
                  <View>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Jewellery</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Shirts</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Shoes</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Sports</Text>
                    </TouchableOpacity>
                    {/* <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/> */}
                    </View>
                ):null
              }
            </View>
            <View style={{backgroundColor:'#000',marginStart:10,marginEnd:10,height:1,marginTop:10}}/>
            <TouchableOpacity style={{marginStart:10,marginEnd:10,marginTop:10}} onPress={()=>SetViewmenCategory(!ViewmenCategory)}>
                <Text style={{fontFamily:'Roboto-Medium',fontSize:16}}>Men</Text>
                <View style={{position:'absolute',right:0}}>
                {
                    ViewmenCategory?(
                      <Image style={{height:20,width:20}} source={require('../../assets/images/angle-up.png')}/>
                    ):
                    <Image style={{height:20,width:20}} source={require('../../assets/images/angle-down.png')}/>
                  }
                </View>
                
            </TouchableOpacity>
            <View>
              {
                ViewmenCategory?(
                  <View>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Jewellery</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Shirts</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Shoes</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/>
                    <TouchableOpacity style={{marginStart:20,marginEnd:20,marginTop:10}}>
                      <Text style={{fontFamily:'Roboto-Light'}}>Sports</Text>
                    </TouchableOpacity>
                    {/* <View style={{backgroundColor:'#000',marginStart:20,marginEnd:20,marginTop:10,height:0.5}}/> */}
                    </View>
                ):null
              }
            </View>
        </View>
      </DrawerContentScrollView>
    );
  }

function MyDrawer() {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown:false,
        }}>
        <Drawer.Screen name="DashboardScreen" component={DashboardScreen} />
        {/* <Drawer.Screen name="StackNav" component={TabNav} /> */}
      </Drawer.Navigator>
    );
  }