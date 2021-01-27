import React from "react";
import {Grid} from "./styles";
import ServerList from "../ServerList";
import ServerName from "../ServerName";
import ChannelInfo from "../ChanneInfo";
import ChanelList from "../ChannelList";
import UserInfo from "../UserInfo";
import ChannelData from "../ChannelData";
import UserList from "../UserList";

const Layout: React.FC = () => {
    return (
        <Grid>
            <ServerList/>
            <ServerName/>
            <ChannelInfo />
            <ChanelList/>
            <UserInfo />
            <ChannelData />
            <UserList />
        </Grid>
    );
}

export default Layout;