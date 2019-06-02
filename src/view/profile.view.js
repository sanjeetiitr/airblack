import React , {Component} from  "react";
import { ProfileHeader } from "../component/profile.header";
import { TabView } from "../component/tab";
import { StoryComp } from "../component/story";


export class ProfileView extends Component{


    render(){
        return(
            <div>
            <ProfileHeader/>
            <StoryComp/>
            <TabView/>
            </div>
        )
    }
}