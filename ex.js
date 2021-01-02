import React, {Component} from 'react';
import {connect} from 'react-redux';
import {noInternetConnected, toggleDrawer} from 'app/store/global';
import NetInfo, {NetInfoSubscription} from '@react-native-community/netinfo';
import {Loader, NoInternet} from 'app/Component';
import {Container} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  Platform,
  BackHandler,
} from 'react-native';
import {color} from './Theme';
import {MainHeader} from 'app/Component';
import DoubleTapToClose from './Component/ExecuteOnlyOnAndroid ';
//-- TAB Bar Screen
import AddIncomeScreen from './Root/Screens/MainScreen/AddIncomeScreen';
import MyProfileScreen from './Root/Screens/MainScreen/MyProfileScreen';
import HomeScreen from './Root/Screens/MainScreen/HomeScreen';
import SelectSavingScreen from './Root/Screens/MainScreen/SelectSavingScreen';

//-- Top bar screen
import StepOneWelcome from './Root/Screens/WelcomeProfileScreen/StepOneWelcome';
import StepTwoWelcome from './Root/Screens/WelcomeProfileScreen/StepTwoWelcome';
import StepThreeWelcome from './Root/Screens/WelcomeProfileScreen/StepThreeWelcome';

//--Screens
import LoginScreen from './Root/Screens/LoginScreen';
import SplashScreen from './Root/Screens/SplashScreen';
import MobileVerificationScreen from './Root/Screens/MobileVerificationScreen';
import SettingsScreen from './Root/Screens/SettingsScreen';
import AddSavingScreen from './Root/Screens/AddSavingScreen';
import TotalSavingScreen from './Root/Screens/TotalSavingScreen';
import TotalIncomeScreen from './Root/Screens/TotalIncomeScreen';
import ContactUsScreen from './Root/Screens/ContactUsScreen';
import WebViewScreen from './Root/Screens/WebViewScreen';
import EditProfileScreen from './Root/Screens/EditProfileScreen';
import TaxCalculationScreen from './Root/Screens/TaxCalculationScreen';
import AddProfileScreen from './Root/Screens/AddProfileScreen';
import ProfileWelcomeScreen from './Root/Screens/ProfileWelcomeScreen';
//--EditPofile Tabs
import StepOneScreen from './Root/Screens/EditProfileScreen/TABS/StepOneScreen';
import StepTwoScreen from './Root/Screens/EditProfileScreen/TABS/StepTwoScreen';
import StepThreeScreen from './Root/Screens/EditProfileScreen/TABS/StepThreeScreen';
//---------------
import {addIncome, addSavings, user, dashboard} from './assets';
import styles from './CommonStyle';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Top = createMaterialTopTabNavigator();
//---------------
import {useIsFocused} from '@react-navigation/native';
function handleBackButton() {
  BackHandler.exitApp();
  return true;
}
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home Screen"
      tabBarOptions={{
        style: {height: 80},
        tabStyle: styles.tabStyle,
        labelStyle: styles.bottomNavlabelStyle,
      }}>
      <Tab.Screen
        name="Add Savings"
        component={SelectSavingScreen}
        listeners={{
          focus: () =>
            BackHandler.addEventListener('hardwareBackPress', handleBackButton),
          blur: () =>
            BackHandler.removeEventListener(
              'hardwareBackPress',
              handleBackButton,
            ),
        }}
        options={{
          tabBarLabel: 'Add Savings',
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.selectedviewStyle : styles.viewStyle}>
              <Image
                resizeMode="contain"
                source={addSavings}
                style={focused ? styles.selectedImageStyle : styles.imageStyle}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.selectedviewStyle : styles.viewStyle}>
              <Image
                resizeMode="contain"
                source={dashboard}
                style={focused ? styles.selectedImageStyle : styles.imageStyle}
              />
            </View>
          ),
        }}
        listeners={{
          focus: () =>
            BackHandler.addEventListener('hardwareBackPress', handleBackButton),
          blur: () =>
            BackHandler.removeEventListener(
              'hardwareBackPress',
              handleBackButton,
            ),
        }}
      />
      <Tab.Screen
        name="Add Income"
        component={AddIncomeScreen}
        listeners={{
          focus: () =>
            BackHandler.addEventListener('hardwareBackPress', handleBackButton),
          blur: () =>
            BackHandler.removeEventListener(
              'hardwareBackPress',
              handleBackButton,
            ),
        }}
        options={{
          tabBarLabel: 'Add Income',
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.selectedviewStyle : styles.viewStyle}>
              <Image
                resizeMode="contain"
                source={addIncome}
                style={focused ? styles.selectedImageStyle : styles.imageStyle}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={MyProfileScreen}
        listeners={{
          focus: () =>
            BackHandler.addEventListener('hardwareBackPress', handleBackButton),
          blur: () =>
            BackHandler.removeEventListener(
              'hardwareBackPress',
              handleBackButton,
            ),
        }}
        options={{
          tabBarLabel: 'My Profile',
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.selectedviewStyle : styles.viewStyle}>
              <Image
                resizeMode="contain"
                source={user}
                style={focused ? styles.selectedImageStyle : styles.imageStyle}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function WelcomeTabs() {
  return (
    <Top.Navigator
      tabBarOptions={{
        style: {borderTopRightRadius: 20, borderTopLeftRadius: 20},
        activeTintColor: '#00E0C6',
        inactiveTintColor: '#7F8896',
      }}>
      <Top.Screen name="Step 1" component={StepOneWelcome} />
      <Top.Screen name="Step 2" component={StepTwoWelcome} />
      <Top.Screen name="Step 3" component={StepThreeWelcome} />
    </Top.Navigator>
  );
}

class Containers extends Component {
  // _subscription: NetInfoSubscription | null = null;
  _subscription = null;

  constructor(props) {
    super(props);
    this.state = {
      isConnected: true,
      isUpdateAvailable: false,
    };
  }

  async componentDidMount() {
    this._subscription = NetInfo.addEventListener((state) => {
      this.setState({
        isConnected: state.isConnected,
      });
      this.props.noInternetConnected(state.isConnected);
    });
  }
  onUpdateButton() {}

  componentWillUnmount() {
    this._subscription && this._subscription();
  }

  render() {
    return (
      <Container>
        <SafeAreaView style={{flex: 0, backgroundColor: '#2A3950'}} />
        <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                options={{headerShown: false}}
                name="SplashScreen"
                component={SplashScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="AddProfileScreen"
                component={AddProfileScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="HomeScreen"
                component={HomeTabs}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="ProfileWelcomeScreen"
                component={ProfileWelcomeScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="LoginScreen"
                component={LoginScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="MobileVerificationScreen"
                component={MobileVerificationScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="SelectSavingScreen"
                component={SelectSavingScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="SettingsScreen"
                component={SettingsScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="AddSavingScreen"
                component={AddSavingScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="TotalSavingScreen"
                component={TotalSavingScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="TotalIncomeScreen"
                component={TotalIncomeScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="ContactUsScreen"
                component={ContactUsScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="WebViewScreen"
                component={WebViewScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="EditProfileScreen"
                component={EditProfileScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="StepOneScreen"
                component={StepOneScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="StepTwoScreen"
                component={StepTwoScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="StepThreeScreen"
                component={StepThreeScreen}
              />
              <Stack.Screen
                options={{headerShown: false}}
                name="TaxCalculationScreen"
                component={TaxCalculationScreen}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <Loader loading={this.props.globalLoding} />
          <NoInternet isInternetConnected={!this.props.isInternetConnected} />
          {/* <DoubleTapToClose /> */}
        </SafeAreaView>
      </Container>
    );
  }
}

const mapActionCreators = {
  noInternetConnected,
  toggleDrawer,
};

const mapStateToProps = (state) => {
  return {
    isInternetConnected: state.global.isInternetConnected,
    globalLoding: state.global.loading,
  };
};

export default connect(mapStateToProps, mapActionCreators)(Containers);