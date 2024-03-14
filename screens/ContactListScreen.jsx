import { StyleSheet, Text, View, FlatList, Pressable  } from 'react-native'
import React from 'react'

const data = [
    { id: 1, firstName: 'Youssoupha', lastName: 'GUEYE', phoneNumber: '123-456-7890' },
  { id: 2, firstName: 'Lalia', lastName: 'SY', phoneNumber: '987-654-3210' },
  { id: 1, firstName: 'Babacar', lastName: 'DOUMBOUYA', phoneNumber: '123-456-2003' },
  { id: 2, firstName: 'Mame Fatou', lastName: 'DOUMBOUYA', phoneNumber: '987-654-2006' },
  { id: 1, firstName: 'Fatou Marieme', lastName: 'DOUMBOUYA', phoneNumber: '123-456-2009' },
  { id: 2, firstName: 'Rokhaya Makha', lastName: 'DOUMBOUYA', phoneNumber: '987-654-2012' },


];

export default function ContactListScreen({ navigation}) {
    const renderItem = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('ContactDetail', { contact: item })}>
          {({ pressed }) => (
            <View style={[styles.item, { backgroundColor: pressed ? '#e0e0e0' : 'white' }]}>
              <Text>{item.firstName} {item.lastName}</Text>
            </View>
          )}
        </Pressable>
      );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      },
      item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
})