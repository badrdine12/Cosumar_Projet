import { View, Text } from 'react-native'
import React from 'react'
import Icon1 from '../../assets/svg/icon1.svg'
import Icon2 from '../../assets/svg/icon2.svg'
import Icon3 from '../../assets/svg/icon3.svg'
import Icon4 from '../../assets/svg/icon4.svg'
import Icon5 from '../../assets/svg/icon5.svg'
import Icon6 from '../../assets/svg/icon6.svg'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ChefreCle() {
  return (
    <SafeAreaView className=' bg-white flex-1'>
        <View className=' bg-white flex-1 items-center mx-3  justify-center'>
        <View className=' w-full flex-row  mt-5 '>
            <View  className='bg-blue1  w-1/2 h-44'>
                <View className='mt-10 ml-3'>
                    <Icon1  />
                    <Text className=' mt-4 text-[10px] text-textblue w-24 '>UNE PRÉSENCE DANS 3 PAYS</Text>
                </View>
            </View>
            <View style={{width:3}}></View>
            <View className='bg-Rouge  w-1/2 h-44'>
                <View className='mt-10 ml-3'>
                    <Icon2/>
                    <Text className=' mt-4 text-[10px] text-textblue w-[135px] h-[41px] '>8 UNITÉS INDUSTRIELLES AU MAROC, DONT UNE RAFFINERIE </Text>
                </View>
            </View>
        </View>
        <View style={{height:3}}></View>
        <View className=' w-full flex-row  '>
            <View className='bg-Rouge  w-1/2 h-44'>
                <View className='mt-6 ml-3'>
                    <Icon3/>
                    <Text className=' mt-4 text-[10px] text-textblue w-[150px] h-[55px] '>CAPACITÉ GLOBALE DE TRAITEMENT DES PLANTES SUCRIÈRES 5 MILLIONS DE TONNES </Text>
                </View>
            </View>
            <View style={{width:3}}></View>
            <View  className='bg-blue1  w-1/2 h-44'>
                <View className='mt-6 ml-3'>
                    <Icon4/>
                    <Text className=' mt-4 text-[10px] text-textblue w-[140px] h-[55px]'>CAPACITÉ GLOBALEDE PRODUCTIONDE SUCREBLANC2 MILLIONS DE TONNES</Text>
                </View>
            </View>
        </View>
        <View style={{height:3}}></View>
        <View className=' w-full flex-row  '>
            <View  className='bg-blue1  w-1/2 h-44'>
                <View className='mt-11 ml-3'>
                    <Icon5/>
                    <Text className=' mt-4 text-[10px] text-textblue w-[115px] h-[29px] '>1326 COLLABORATEURS</Text>
                </View>
            </View>
            <View style={{width:3}}></View>
            <View className='bg-Rouge  w-1/2 h-44'>
                <View className='mt-11 ml-3'>
                    <Icon6/>
                    <Text className=' mt-4 text-[10px] text-textblue  w-[126px] h-[27px] '>5000 EMPLOIS DIRECTS ET INDIRECTS </Text>
                </View>
            </View>
        </View>
        </View>
        </SafeAreaView>
    
  )
}