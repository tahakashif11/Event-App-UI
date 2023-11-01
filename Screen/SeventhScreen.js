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

function Message({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Calendar({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}
function ContactUs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Setting({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function HelpAndFaqs({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function Signout({ navigation }) {
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
              source={require('../Assets/topimage.png')}// Replace with the actual path to your image
              
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
              source={require('../Assets/person.png')} // Replace with the actual path to your image
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
              source={require('../Assets/messages2.png')}// Replace with the actual path to your image
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
              source={require('../Assets/calendar.png')}// Replace with the actual path to your image
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
              source={require('../Assets/bookmark.png')}// Replace with the actual path to your image
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
              source={require('../Assets/Message.png')}// Replace with the actual path to your image
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
              source={require('../Assets/setting.png')}// Replace with the actual path to your image
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
              source={require('../Assets/faq.png')}// Replace with the actual path to your image
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
              source={require('../Assets/signout.png')}// Replace with the actual path to your image
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
              source={require('../Assets/upgarde.png')}// Replace with the actual path to your image
              
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
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Message" component={Message} />
      <Drawer.Screen name="HelpAndFaqs" component={HelpAndFaqs} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Signout" component={Signout} />

      
    </Drawer.Navigator>
    
    
    

  );
}
