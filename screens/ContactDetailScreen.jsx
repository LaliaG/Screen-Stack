import { StyleSheet, Text, View, Button, Linking } from 'react-native'
import React, { useLayoutEffect } from 'react'

export default function ContactDetailScreen({ route}) { 
    const { contact } = route.params;

    function handleCallPress(){
        Linking.openURL(`Appeler Contact via son nom et son n° tel`)
      }
    
      useLayoutEffect(() => {
          navigation.setOptions({ title: "Appeler"})
      },[])
  return (
    <View style={styles.container}>
      <Text>ContactDetailScreen</Text>
      <Text style={styles.text}>Nom: {contact.lastName}</Text>
      <Text style={styles.text}>Prénom: {contact.firstName}</Text>
      <Text style={styles.text}>N° Téléphone: {contact.phoneNumber}</Text>
      <Button title="Appeler" onPress={handleCallPress} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      text: {
        marginBottom: 10,
      },
})


