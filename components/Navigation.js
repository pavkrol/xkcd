import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/Home";
import ComicList from "../screens/ComicList";
import ComicFullScreen from "../screens/ComicFullScreen";
import About from "../screens/About";

const Navigation = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: "Home"
    }
  },
  ComicList: {
    screen: ComicList,
    navigationOptions: {
      headerTitle: "Recent Comics"
    }
  },
  ComicFullScreen: {
    screen: ComicFullScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("comic", {}).title
    })
  },
  About: {
    screen: About,
    navigationOptions: {
      headerTitle: "About xkcd"
    }
  }
});

export default createAppContainer(Navigation);
