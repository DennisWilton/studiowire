import React from 'react';
import {useSpring, animated} from 'react-spring';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import {Hero} from './style';

export default () => {
    return(
        <React.Fragment>
           <ParallaxProvider>
               <Hero>
                    <Parallax y={["0px", "500px"]}>
                        <video autoPlay muted>
                            <source src="assets/videos/reel.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video> 
                    </Parallax>
               </Hero>
           </ParallaxProvider>
        </React.Fragment>
    )
}