import { createAppContainer, createSwitchNavigator } from "react-navigation";

import New from "./pages/New";
import Login from "./pages/Login";
import TimeLine from "./pages/TimeLine";

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    New,
    TimeLine
  })
);

export default Routes;
