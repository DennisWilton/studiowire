import React from 'react';
import {useSpring, animated} from 'react-spring';

export default () => {

    const style = useSpring({
        from: {opacity: 1, background: `black`, fontSize: `2em`, top: `-20px`, position: `relative`,},
        position: `relative`,
        background: `#222`,
        fontSize: `2em`,
        top: `0px`,
        opacity: 1,
    })

    const fromLeft = useSpring({
        from: { position: 'relative', left: `-100px` },
        position: 'relative',
        left: `0`,
    })
    
    return(
    <React.Fragment>
        <animated.div>
            <div className="hello">
                <animated.h1 style={style}>Olá, Denis Wilton!</animated.h1>
                <animated.p style={fromLeft}>É um prazer vê-lo novamente.</animated.p>
            </div>
        </animated.div>
    </React.Fragment>
    )
}