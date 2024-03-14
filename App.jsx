import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContactListScreen from './screens/ContactListScreen'
import ContactDetailScreen from './screens/ContactDetailScreen'


const Stack = createNativeStackNavigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ContactList'>
        <Stack.Screen name='ContactList' component={ContactListScreen} options={{title : "Liste des Contacts"}}/>
        <Stack.Screen name='ContactDetail' component={ContactDetailScreen} options={{title : "Details du Contact"}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})