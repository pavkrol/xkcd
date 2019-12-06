import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./Home";
import ComicList from "./ComicList";
import ComicFullScreen from "./ComicFullScreen";

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
      headerTitle: "Recent Comics List"
    }
  },
  ComicFullScreen: {
    screen: ComicFullScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("comic", {}).title
    })
  }
});

export default createAppContainer(Navigation);
