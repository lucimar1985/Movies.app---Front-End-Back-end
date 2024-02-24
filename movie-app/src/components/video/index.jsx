import { Player, Youtube } from "@vime/react";
import * as C from './style';
import {AiOutlineArrowLeft} from 'react-icons/ai';


// eslint-disable-next-line react/prop-types
export const Video = ({linkVideo, playVideo, handleClosePlayVideo}) => {
    return (
            playVideo ? (
                <C.Container>
                <C.Button onClick={handleClosePlayVideo}>
                    <AiOutlineArrowLeft/>
                    Voltar
                </C.Button>
                    
                <Player controls>
                <Youtube videoId={linkVideo} />
                </Player>
            </C.Container>
            ) : null


       
    );
};