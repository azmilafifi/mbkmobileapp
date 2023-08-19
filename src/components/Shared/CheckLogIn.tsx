import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

const TOKEN = useSelector((state:any) => state.token)

const CheckLogIn = () => {
  return (
      <View>
          {TOKEN}
      <Text>CheckLogIn</Text>
    </View>
  )
}

export default CheckLogIn