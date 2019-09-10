import anime from 'animejs';

export const enter = (el, cb) => {
    const animation = anime({
        targets: [el],
        autoplay: false,
        translateX: [`100vw`, `0`],
        delay: anime.stagger([0,250]),
        easing: `spring(2, 100, 100, 0)`,
        opacity: [1, 1],
        background: (element, i, arr) => {
            if( i == 0 ){
            return ["#000", "#000"];
        }
        return ["#222", "#222"]
    },
    elasticity: 0,
    });

    animation.play();
}

// export const leave = (el, cb) => {
//     const animation = anime({
//         targets: [el],
//         autoplay: false,
//         translateX: [`0`, `-100vw`],
//         delay: anime.stagger([0,100]),
//         easing: `spring(0.05, 100, 100, 0)`,
//         background: (element, i, arr) => {
//             if( i == 0 ){
//             return ["#048", "#048"];
//         }
//         return ["#159", "#159"]
//     },
//     elasticity: 0,
//     });

//     animation.play();
// }


export const leave = (el, cb) => {


    return new Promise( (resolve, reject) => {
        const animation = anime({
            targets: [el],
            autoplay: false,
            translateX: [`0`, `-100vw`],
            delay: anime.stagger([250,0]),
            easing: `spring(2, 100, 100, 0)`,
            background: (element, i, arr) => {
                if( i == 0 ){
                return ["#000", "#000"];
            }
            return ["#222", "#222"]
            },
            complete: () => resolve(),
        elasticity: 0,
        });
    
        animation.play();
    } )


}