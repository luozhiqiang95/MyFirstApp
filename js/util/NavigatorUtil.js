import {StackActions,NavigationActions} from 'react-navigation'


export default class NavigatorUtil {




static resetToHomePage() {

const resetAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'HomePage' }),

    ],
});
navigation.dispatch(resetAction);}}