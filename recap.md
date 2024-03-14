Oui, vous pouvez remplacer `TouchableOpacity` par `Pressable` dans votre code. Voici comment vous pouvez le faire :

```javascript
// ContactListScreen.js
import React from 'react';
import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '987-654-3210' },
  // Add more contacts here if needed
];

const ContactListScreen = ({ navigation }) => {
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
});

export default ContactListScreen;
```

```javascript
// ContactDetailScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  const handleCallPress = () => {
    // Implement your call functionality here
    console.log('Calling', contact.firstName, contact.phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nom: {contact.lastName}</Text>
      <Text style={styles.text}>Prénom: {contact.firstName}</Text>
      <Text style={styles.text}>N° Téléphone: {contact.phoneNumber}</Text>
      <Button title="Appeler" onPress={handleCallPress} />
    </View>
  );
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
});

export default ContactDetailScreen;
```

Dans le composant `ContactListScreen`, j'ai remplacé `TouchableOpacity` par `Pressable`. Notez que `Pressable` est plus générique et peut être utilisé pour détecter plusieurs types de gestes, tels que les pressions longues, les pressions rapides, etc. Vous pouvez également voir comment modifier le style lorsque l'élément est pressé en utilisant la prop `pressed` fournie par `Pressable`.

Dans le composant `ContactDetailScreen`, il n'y a pas de changement nécessaire car il n'y a pas de composant `Pressable`.























// ContactDetailScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  const handleCallPress = () => {
    // Implement your call functionality here
    console.log('Calling', contact.firstName, contact.phoneNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nom: {contact.lastName}</Text>
      <Text style={styles.text}>Prénom: {contact.firstName}</Text>
      <Text style={styles.text}>N° Téléphone: {contact.phoneNumber}</Text>
      <Button title="Appeler" onPress={handleCallPress} />
    </View>
  );
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
});

export default ContactDetailScreen;






// ContactListScreen.js
import React from 'react';
import { View, FlatList, Text, Pressable, StyleSheet } from 'react-native';

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '987-654-3210' },
  // Add more contacts here if needed
];

const ContactListScreen = ({ navigation }) => {
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
});

export default ContactListScreen;



Voici un exemple d'implémentation de l'application React Native avec la navigation et les fonctionnalités que vous avez décrites :

Assurez-vous d'avoir installé les dépendances nécessaires avec les commandes que vous avez fournies :

```bash
npm install @react-navigation/native
npm install react-native-screens react-native-safe-area-context
npm i @react-navigation/native-stack
```

Ensuite, voici un exemple de code pour votre application :

```javascript
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/native-stack';
import ContactListScreen from './screens/ContactListScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactList">
        <Stack.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Liste des Contacts' }} />
        <Stack.Screen name="ContactDetail" component={ContactDetailScreen} options={{ title: 'Détails du Contact' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

```javascript
// screens/ContactListScreen.js
import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const data = [
  { id: 1, firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', phoneNumber: '987-654-3210' },
  // Add more contacts here if needed
];

const ContactListScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ContactDetail', { contact: item })}>
      <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{item.firstName} {item.lastName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default ContactListScreen;
```

```javascript
// screens/ContactDetailScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const ContactDetailScreen = ({ route }) => {
  const { contact } = route.params;

  const handleCallPress = () => {
    // Implement your call functionality here
    console.log('Calling', contact.firstName, contact.phoneNumber);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Nom: {contact.lastName}</Text>
      <Text>Prénom: {contact.firstName}</Text>
      <Text>N° Téléphone: {contact.phoneNumber}</Text>
      <Button title="Appeler" onPress={handleCallPress} />
    </View>
  );
}

export default ContactDetailScreen;
```

Cet exemple comprend deux écrans: `ContactListScreen` pour afficher la liste de contacts et `ContactDetailScreen` pour afficher les détails d'un contact spécifique. Lorsque vous appuyez sur un contact dans la liste, il vous dirigera vers l'écran de détail avec les informations du contact.