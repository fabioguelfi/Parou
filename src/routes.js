import {
  StackNavigator,
  TabNavigator,
} from 'react-navigation';
import Welcome from './pages/Welcome';
import Wallets from './pages/Wallets';
import Voucher from './pages/Voucher';
import Profile from './pages/Profile';

const Router = StackNavigator(
  {
    Welcome: {
      screen: Welcome,
    },
    Main: {
      screen: TabNavigator({
        Wallets: { screen: Wallets },
        Voucher: { screen: Voucher },
        Profile: { screen: Profile },
      }),
    },
  },
  {
    initialRouteName: 'Welcome',
  },
);

export default Router;
