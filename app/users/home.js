import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <View>
      <Text>home</Text>
      <Link href='./nav'>go to</Link>
    </View>
  )
}