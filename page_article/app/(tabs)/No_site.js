import { View, Text, ImageBackground, Pressable, ScrollView } from 'react-native'
import React, { useState } from 'react'
import maroc from '../../assets/images/Vector (1).png'
import { useFonts } from 'expo-font'

export default function No_site() {
  const[adress,setadress]=useState('')
  const[telefone,settelofon]=useState('')
  const [fontsLoaded] = useFonts({
    'Gilroy-Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
    'c': require('../../assets/fonts/Gilroy-Regular.ttf'),
    'Gilroy-Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    'Gilroy-SemiBold': require('../../assets/fonts/Gilroy-SemiBold.ttf'),
  });
  return (
    <ScrollView className='bg-white'>
      <View className='items-center justify-center mt-6'>
        <ImageBackground className=' relative m-3 w-[361px] h-[390]' source={maroc}>
          <View className='ml-5 w-[145px] h-[50px] '>
              <Text  className='text-Blue font-black leading-[25px] text-[23px]'>Raffinerie </Text>
              <Text  className='text-Blue text-[23px]  font-semibold  '>Casablanca</Text>
          </View>
              <Pressable className='bg-Blue absolute w-4 h-4 rounded-full right-[50] top-[13]' onPress={()=>{setadress('8, Rue Al Mouatamid Ibnou Abbad,B.P 3098 Roches noires, 2030 Casablanca / Maroc'),settelofon('+212 529 028 300')}}></Pressable>
              <Pressable className=' bg-yellow-400 absolute w-7 h-7 rounded-full top-[50] right-[140]' onPress={()=>{setadress('8, Rue Al Mouatamid Ibnou Abbad,B.P 3098 Roches noires, 2030 Casablanca / Maroc'),settelofon('+212 529 028 333')}}></Pressable>
              <Pressable className='bg-Blue absolute w-4 h-4 rounded-full top-[44] right-[103]' onPress={()=>{setadress('8, Rue Al Mouatamid Ibnou Abbad,B.P 3098 Roches noires, 2030 Casablanca / Maroc'),settelofon('+212 529 028 399')}}></Pressable>
              <Pressable className='bg-Blue absolute w-4 h-4 rounded-full top-[24] right-[90]' onPress={()=>{setadress('8, Rue Al Mouatamid Ibnou Abbad,B.P 3098 Roches noires, 2030 Casablanca / Maroc'),settelofon('+212 529 028 390')}}></Pressable>
              <Pressable className='bg-Blue absolute w-4 h-4 rounded-full top-[100] right-[122] ' onPress={()=>{setadress('8, Rue Al Mouatamid Ibnou Abbad,B.P 3098 Roches noires, 2030 Casablanca / Maroc'),settelofon('+212 529 028 390')}}></Pressable>
              <Pressable className='bg-Blue absolute w-4 h-4 rounded-full top-[85] right-[173] ' onPress={()=>{setadress('8, Rue Al Mouatamid Ibnou Abbad,B.P 3098 Roches noires, 2030 Casablanca / Maroc'),settelofon('+212 529 028 390')}}></Pressable>
        </ImageBackground>
          <View className='bg-blue-800 w-[365px] h-[155px]  rounded-r-2xl rounded-l-2xl justify-center items-center  mt-11'>
                <View className=''>
                    <View className='flex-row mt-2'>
                        <Text style={{fontFamily:'Gilroy-SemiBold'}}  className='text-white text-[12px] mt-1 ' >Adresse :</Text>
                        <Text style={{fontFamily:'Gilroy-Regular'}} className='w-[256px] h-[88px] leading-6 text-[12px] text-white ml-4'>{adress}</Text>
                    </View>
                    <View className='flex-row'>
                        <Text style={{fontFamily:'Gilroy-SemiBold'}}  className='text-white text-[12px]'>Téléphone:</Text>
                        <Text style={{fontFamily:'Gilroy-Regular'}} className='text-[12px] text-white ml-1 '>{telefone}</Text>
                    </View>
                </View>
          </View>
      </View>
    </ScrollView>
  )
}