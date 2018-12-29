import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { View, Platform } from "react-native";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import { Icon } from "react-native-elements";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";

const MenuNavigator = createStackNavigator(
  {
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff"
      }
    }
  }
);

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff"
    }
  }
);

const AboutNavigator = createStackNavigator(
  {
    AboutUs: { screen: About }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff"
    }
  }
);

const ContactNavigator = createStackNavigator(
  {
    ContactUs: { screen: Contact }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#512DA8"
      },
      headerTitleStyle: {
        color: "#fff"
      },
      headerTintColor: "#fff"
    }
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      defaultNavigationOptions: {
        title: "Home",
        drawerLabel: "Home"
      }
    },
    "About Us": {
      screen: AboutNavigator,
      defaultNavigationOptions: {
        title: "About Us",
        drawerLabel: "About Us"
      }
    },
    Menu: {
      screen: MenuNavigator,
      defaultNavigationOptions: {
        title: "Menu",
        drawerLabel: "Menu"
      }
    },
    "Contact Us": {
      screen: ContactNavigator,
      defaultNavigationOptions: {
        title: "Contact Us",
        drawerLabel: "Contact Us"
      }
    }
  },
  {
    drawerBackgroundColor: "#D1C4E9"
  }
);

const AppContainer = createAppContainer(MainNavigator);

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight
        }}
      >
        <AppContainer />
      </View>
    );
  }
}

export default Main;
