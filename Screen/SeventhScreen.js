import * as React from 'react';
import { Button, View, Text, Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}


const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
    <DrawerItem
        label={({ focused, color }) => (
          <View >
            <Image
              source={require('../Assets/topimage.png')}
              
            />
            <View style={{paddingTop:10}}>
            <Image source={require('../Assets/imagename.png')} />
            </View>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/person.png')} 
              style={styles.icon}
            />
            <Text style={{ color }}>My Profile</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Home')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/messages2.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>Messages</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/calendar.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>calendar</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/bookmark.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>Bookmark</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/Message.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>ContactUs</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/setting.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>Setting</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/faq.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>HelpAndFaqs</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={styles.drawerItem}>
            <Image
              source={require('../Assets/signout.png')}
              style={styles.icon}
            />
            <Text style={{ color }}>Signout</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
      <DrawerItem
        label={({ focused, color }) => (
          <View style={{paddingTop:10,}}>
            <Image
              source={require('../Assets/upgarde.png')}
              
            />
            
          </View>
        )}
        onPress={() => props.navigation.navigate('Notifications')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    
    paddingLeft:12
  },
  icon: {
    width: 24, 
    height: 24,
    marginRight: 10,
  },
});

export default function SeventhScreen() {
  return (
    
    <Drawer.Navigator initialRouteName="Home" drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      

      
    </Drawer.Navigator>
    
    
    

  );
}
