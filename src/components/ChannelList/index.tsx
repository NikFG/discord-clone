import React from "react";
import {Container, Category, AddCategoryIcon} from "./styles";
import ChannelButton from "../ChannelButton";


const ChanelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de texto</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName={'geral'}/>
            <ChannelButton channelName={'dotinha-da-alegria'}/>
            <ChannelButton channelName={'memes'}/>
            <ChannelButton channelName={'programação'}/>
            <ChannelButton channelName={'admin'}/>
            <Category>
                <span>Canais de voz</span>
                <AddCategoryIcon/>
            </Category>
            <ChannelButton channelName={'geral'} isVoice={true}/>
            <ChannelButton channelName={'chat-do-dotinha'} isVoice={true}/>
            <ChannelButton channelName={'ajuda-programação'} isVoice={true}/>
            <ChannelButton channelName={'admin'} isVoice={true}/>
        </Container>
    );
}

export default ChanelList;