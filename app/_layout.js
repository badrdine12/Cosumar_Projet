import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function _layout() {
  return (
   <Stack>
        <Stack.Screen name='home'/>
        <Stack.Screen name='nav'/>
   </Stack>
  )
}