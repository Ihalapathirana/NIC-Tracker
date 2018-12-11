
import { StackNavigator } from 'react-navigation';
import IDTracker from './IDTracker';

const Routing = StackNavigator({
    IDTracker: { screen: IDTracker },
},
{
    initialRouteName: 'IDTracker',
});
export default Routing