import React,{Component}from 'react';
import SettingScreen from'../pages/scan/SettingScreen';
import CVScreen from'../pages/scan/CVScreen';
import AnotherScreen from'../pages/scan/AnotherScreen';
import {createStackNavigator} from 'react-navigation';
import MyPage from '../pages/my/MyPage';
import FindPage from "../pages/FindPage";
import PositionPage from "../pages/PositionPage";
import OccPlanScreen from "../pages/scan/OccPlanScreen";
import ResumeOptimization from "../pages/scan/ResumeOptimization";
import ApplyJob from "../pages/scan/ApplyJob";
import InterviewGuidance from "../pages/scan/InterviewGuidance";
import JobSeek from "../pages/scan/JobSeek";
import SearchPage from "../pages/SearchPage";
import DetailsScreen from'../pages/scan/Details'
import PositionDetailsScreen from "../pages/scan/PositionDetails";
import CVScreenDetails from '../pages/my/CVScreenDetails'
export  const AppcreateStackNavigator=createStackNavigator({
    MyPage:
        {
            screen:MyPage
        },

    SettingScreen:{
        screen:SettingScreen,


    },
    AnotherScreen:{
        screen:AnotherScreen,

    },
    CVScreen:{
        screen:CVScreen,

    },
    CVScreenDetails:{
        screen:CVScreenDetails,

    },

});
export  const AppFindcreateStackNavigator=createStackNavigator({
    FindPage:
        {
            screen:FindPage
        },

    OccPlanScreen:{
        screen:OccPlanScreen
    },
    ResumeOptimization:{
        screen:ResumeOptimization
    },
    ApplyJob:{
        screen:ApplyJob
    },
    InterviewGuidance:{
        screen:InterviewGuidance
    },
    JobSeek:{
        screen:JobSeek
    },

});
export  const AppSeacrchcreateStackNavigator=createStackNavigator({
    SearchPage:
        {
            screen:SearchPage,
            navigationOptions: {
                header: null
            }
        },

    Details:{
        screen:DetailsScreen,



    },

});
export  const AppPositioncreateStackNavigator=createStackNavigator({
    PositionPage:
        {
            screen:PositionPage,
            navigationOptions: {
                header: null
            }
        },

    PositionDetailsScreen:{
        screen:PositionDetailsScreen,



    },
    AnotherScreen:{
        screen:AnotherScreen,

    },

});


