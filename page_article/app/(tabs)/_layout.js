import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

import Home from '../../assets/svg/Home.svg'
import Profile from '../../assets/svg/Profile.svg'
import Notification from '../../assets/svg/Notification.svg'
import Icone from '../../assets/svg/iconamoon_news-light.svg'
import Plus from '../../assets/svg/Create.svg'
import { styled } from 'nativewind'
export default function _layout() {
  return (
  
  <Tabs>
        <Tabs.Screen name='Actulisation'  options={{
          tabBarIcon:()=><Home width={30} height={30}/>,
          tabBarStyle:{
            width:396,
            height:96
          },
         
          tabBarLabel:''}}/>
          <Tabs.Screen name='ChefereCle'options={{
            tabBarIcon:()=><Icone width={30} height={30}/>,tabBarLabel:'',
            tabBarStyle:{
              width:396,
              height:96
            },
            
            
          }}/>
         <Tabs.Screen name='Animate' options={{
           tabBarIcon:()=><Plus width={50} height={50}/>,
           tabBarLabel:'',
           tabBarStyle:{
             width:396,
             height:96
            },
          }}/>
          <Tabs.Screen name='No_site'  options={{
            tabBarIcon:()=><Notification width={30} height={30}/>,
            tabBarLabel:'',
            tabBarStyle:{
              width:396,
              height:96
            },}}/> 
        <Tabs.Screen name='Articles' options={{
          tabBarIcon:()=><Profile width={30} height={30}/>,tabBarLabel:'',
          tabBarStyle:{
            marginTop:30,
            width:396,
            height:90
          },
          
        }}/>
   </Tabs>

  )
}