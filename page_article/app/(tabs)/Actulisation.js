import { View, Text, Image, TextInput, Pressable, ScrollView } from 'react-native'
import React from 'react'
import png1 from '../../assets/pngcard.png';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import png3 from '../../assets/png3.png'
import { useFonts } from 'expo-font';
import { Link, router } from 'expo-router';
export default function Listview() {
  const [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
    'Gilroy-Regular': require('../../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-SemiBold': require('../../assets/fonts/Gilroy-SemiBold.ttf'),
  });

  return (
   <ScrollView className=' bg-white flex-1 '>
        <View className='w-[364px] h-[52px] bg-inputcolor rounded-2xl ml-4 flex-row '>
            <Feather style={{marginLeft:14,marginTop:10}} name="search" size={27} color="#1A348F" />
            <TextInput className='ml-5 text-[14px]' placeholder='Recherche' placeholderTextColor={'#1A348F'}/>
        </View>
        <View className='flex-row w-[367px] h-[171px] border-b-2 mt-10 ml-3  border-gray-300 '>
           <Pressable onPress={()=>router.push('./ChefereCle')}>
              <Image className='' source={png1}/>
           </Pressable>
            <View className='ml-3'>
                <Text style={{fontFamily:'Gilroy-Bold'}} className='w-[211px] h-[52px] text-[16px] tracking-[-0.17px] text-sm'>Cérémonie de remise de trois prix d'excellence </Text>
                <Text style={{fontFamily:"Gilroy-Regular"}} className='w-[209px] h-[43px] mt-2  text-gray-400 text-[11px] leading-3 '>📣 Le site de ZAIO a organisé le 2 et 3 janvier, deux  cérémonies de remise de trois prix</Text>
              <View>
                <Text style={{fontFamily:"Gilroy-Medium"}} className=' text-gray-500 mt-3 text-[15px] '>
                  <AntDesign  name="heart" size={15} color='red' /> 103  
                  <View>
                    {/* <Pressable onPress={()=>router.push('./article')}> */}
                      <Text href='./article.js' style={{fontFamily:'Gilroy-SemiBold'}}  className='ml-20 text-[11px]'>lire la suite</Text>
                    {/* </Pressable> */}
                  </View>
                </Text>
              </View>
            </View>
        </View>
        <View className='flex-row w-[367px] h-[171px] border-b-2 mt-10 ml-3  border-gray-300 '>
              {/* <Pressable onPress={()=>router.push('./article')}> */}
                <Image source={png3}/>            
              {/* </Pressable> */}
            <View className='ml-3'>
              <Text style={{fontFamily:'Gilroy-Bold'}} className='w-[211px] h-[52px] text-[16px] tracking-[-0.17px] text-sm'>
                  Session de formation
                  à Sidi bennour
              </Text>
              <Text style={{fontFamily:"Gilroy-Regular"}} className='w-[209px]  mt-1  text-gray-400 text-[11px] leading-3 ' >
                📣  Une nouvelle session de formation a 
                été lancée par La Direction du Capital Humain le
                 📅 15 et 16 Février...
              </Text>
              <View>
                <Text style={{fontFamily:"Gilroy-Medium"}} className=' text-gray-500 mt-2 text-[15px] '>
                  <AntDesign  name="heart" size={15} color='red' /> 99
                  <View>
                  {/* <Pressable onPress={()=>router.push('./article')}> */}
                     <Text style={{fontFamily:'Gilroy-SemiBold'}}  className='ml-20 text-[11px] '>Lire la suite</Text>
                  {/* </Pressable> */}
                  </View>
                </Text>
              </View>
            </View>
            
        </View> 
   </ScrollView>
  )
}