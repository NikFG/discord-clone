import React from 'react';

import {Container, HashtagIcon, InviteIcon, SettingsIcon, VoiceIcon} from './styles';

export interface Props {
    channelName: string;
    selected?: boolean;
    isVoice?: boolean;
}

const ChannelButton: React.FC<Props> = ({channelName, selected, isVoice}) => {
    return (
        <Container className={selected ? 'active' : ''}>
            <div>
                {isVoice ? <VoiceIcon/> : <HashtagIcon/>}
                <span>{channelName}</span>
            </div>

            <div>
                <InviteIcon/>
                <SettingsIcon/>
            </div>
        </Container>
    );
};

export default ChannelButton;