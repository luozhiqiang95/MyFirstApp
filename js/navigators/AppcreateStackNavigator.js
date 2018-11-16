import React,{Component}from 'react';
import SettingScreen from'../pages/scan/SettingScreen';
import CVScreen from'../pages/scan/CVScreen';
import AnotherScreen from'../pages/scan/AnotherScreen';
import {createStackNavigator} from 'react-navigation';
import MyPage from '../pages/my/MyPage';
import FindPage from "../pages/FindPage";
import OccPlanScreen from "../pages/scan/OccPlanScreen";
import ResumeOptimization from "../pages/scan/ResumeOptimization";
import ApplyJob from "../pages/scan/ApplyJob";
import InterviewGuidance from "../pages/scan/InterviewGuidance";
import JobSeek from "../pages/scan/JobSeek";
export  const AppcreateStackNavigator=createStackNavigator({
    MyPage:
        {
            screen:MyPage
        },

    SettingScreen:{
        screen:SettingScreen
    },
    AnotherScreen:{
        screen:AnotherScreen
    },
    CVScreen:{
        screen:CVScreen
    }

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

