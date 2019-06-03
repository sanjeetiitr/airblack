import React , {Component} from  "react";
import { ProfileHeader } from "../component/profile.header";
import { TabView } from "../component/tab";
import { StoryComp } from "../component/story";
import { HeaderComp } from "../component/header";


export class ProfileView extends Component{


    render(){
        return(
            <div>
            <HeaderComp/>
            <ProfileHeader/>
            <StoryComp/>
            <TabView/>
            </div>
        )
    }
}