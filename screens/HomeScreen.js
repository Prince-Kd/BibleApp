import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return(
    <ScrollView>
    <View style={{backgroundColor:"white" }}>
      <View style={{
        flexDirection:'row',
        marginTop:10,
        borderWidth:1, 
        borderColor:'white',
        borderBottomColor:"#dedede", 
        height:80, alignItems:"center",
        paddingLeft:10 
        }}>
        <View style={{flex:8,}}><Text style={{fontWeight:"bold", fontSize:20}}>YouVersion</Text></View>
        <View style={{borderRadius:30, flex:1,marginTop:10, height:40}}>
          <Ionicons name="md-people" size={26}/>
        </View>
        <View style={{borderRadius:50, flex:1.5, height:50,   }}>
          <Image source={require('../assets/images/kd.jpg')}
          style={{marginTop:4 ,width: 40, height: 40, borderRadius: 30 }}/>
        </View>
      </View>
      <View style={styles.box}>
          <View style={{paddingLeft:10, flex:2,  flexDirection:'row'}}>
           <View style={{flex:8,justifyContent:'center'}}><Text style={{fontWeight:'bold', fontSize:16}}>Bible App Activity</Text></View> 
           <View style={{flex:1.5,justifyContent:'center'}}><Text style={{fontWeight:'bold', fontSize:16, color:'#1bab35'}}>More</Text></View>
          </View>
          <View style={{flex:3, flexDirection: 'row'}}>
          <View style={{paddingLeft:10,flex:2}}>
              <Text>Streak</Text>
              <Text style={{color:'#1bab35', fontWeight:'bold', fontSize:19}}>8</Text>

            </View>
            <View style={{flex:8}}>
            <Text>Perfect Weeks</Text>
            <Text style={{color:'#065c15', fontWeight:'bold', fontSize:19}}>5</Text>
            </View>

          </View>
          <View style={{justifyContent:'center', marginHorizontal:10, flex:2,borderTopWidth:1, borderTopColor:'#dedede'}}>
          <Text style={{fontWeight:'bold', fontSize:12}}>41 days in the app this year</Text>
          </View>



      </View>
      <View style={styles.box}>
          <View style={{flexDirection:'row', paddingLeft:20,flex:1.5}}>
            <View style={{justifyContent:'center',flex:1}}>
              <Ionicons name='md-sunny' size={26} />
            </View>
            <View style={{justifyContent:'center',flex:8}}>
              <Text style={{fontSize:16}}>Verse of the Day</Text>
              <Text style={{fontWeight:'bold', fontSize:16}}>Jeremiah 17:7 NIV</Text>
            </View>
          </View>
          <View style={{paddingLeft:20, flex:1.7, justifyContent:'center'}}>
            <Text style={{fontSize:16}}>7 "But blessed is the one who trusts in the Lord, whose confidence is in him.</Text>
          </View>
          <View style={{paddingLeft:20,flex:1.2, flexDirection:'row'}}>
            <View style={{justifyContent:'center',flex:7}}>
              <Text style={{fontWeight:'bold', color:'#1bab35',fontSize:14}}>COMPARE VERSIONS</Text>
            </View>
            <View style={{justifyContent:'center',flex:2}}><Ionicons name='md-share' size={25} color='#dedede'/>
            </View>
            <View style={{justifyContent:'center',flex:2}}><Ionicons name='md-image' size={25} color='#dedede'/></View>
            <View style={{justifyContent:'center',flex:1}}><Ionicons name='md-more' size={25} color='#dedede'/></View>

          </View>
        </View>
        <View style={{
          backgroundColor: "white",
          height: 500,
          margin: 5,
          flexDirection: "column",
          borderWidth: 1,
          borderColor: "#dedede",
          borderRadius:3
          }}>
            <View style={{paddingLeft:20, flex:2, flexDirection:'row'}}>
              <View style={{ flex:1, justifyContent:'center'}}><Ionicons name='md-image' size={25}/></View>
              <View style={{ flex:8, justifyContent:'center'}}><Text style={{fontSize:16}}>Verse of the Day Image</Text></View>
              <View style={{ flex:1, justifyContent:'center'}}><Text style={{color:'#dedede',fontSize:12}}>12h</Text></View>
            </View>
            <View style={{paddingHorizontal:20, justifyContent:'center', alignItems:'center', flex:19}}>
              <Image source={require('../assets/images/verseImage.jpg')} style={{width:365, height:400, borderRadius:2}}/>
            </View>
            <View style={{paddingLeft:20, flex:2, flexDirection:'row'}}>
            <View style={{ flex:8, justifyContent:'center'}}><Text style={{fontWeight:'bold', color:'#1bab35',fontSize:16}}>SHARE</Text></View>
            <View style={{ flex:1, justifyContent:'center'}}><Ionicons color='#dedede' name='md-more' size={25}/></View>
            </View>


        </View>

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box:  {
  backgroundColor: "white",
  height: 200,
  margin: 5,
  flexDirection: "column",
  borderWidth: 1,
  borderColor: "#dedede",
  borderRadius:3
  }
});

HomeScreen.navigationOptions = {
  title: "YouVersion",
  header: null,
  headerRight:
  <View style={{borderRadius:20, height:5}}>
    <Image source={require('../assets/images/robot-dev.png') } />
  </View>
  
  //<View style={{flexDirection:'row', width:30, backgroundColor:"blue", borderRadius:20}}></View>


};
