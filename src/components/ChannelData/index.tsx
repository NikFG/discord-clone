import React, {useRef, useEffect} from 'react';

import ChannelMessage, {Mention} from '../ChannelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;

        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="NikFG"
                        date="27/01/2021"
                        content="Hoje está uma maravilha meu caro amigo!"
                    />
                ))}

                <ChannelMessage
                    author="Arildo"
                    date="27/01/2021"
                    content={
                        <>
                            <Mention>@NikFG</Mention> me carrega no Dotinha de novo!!
                        </>
                    }
                    hasMention
                />
                <ChannelMessage
                    author="Faustão"
                    date="27/01/2021"
                    content={
                        <>
                            OLOOOOCO MEEEU!! TA PEGANDO FOGO ESSE SERVIDOR BICHO!!!
                        </>
                    }
                    isBot
                />

                <ChannelMessage
                    author="Bot de música"
                    date="27/01/2021"
                    content={
                        <>
                            Tocando as melhores do rock requisitadas por <Mention>@Bruno</Mention>
                        </>
                    }
                    isBot
                    hasMention
                />
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #geral"/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    );
};

export default ChannelData;
