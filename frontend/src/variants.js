export const fadeIn = (direction,delay)=>{
    return{
        hidden:{
            y:direction === "up"?40:direction === "down"?-40:0,
            x:direction === "left"?40:direction === "right"?-40:0,

        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
    }
}
export const fadeIn1 = (direction,delay)=>{
    return{
        hidden:{
            y:direction === "up"?50:direction === "down"?-50:0,
            x:direction === "left"?50:direction === "right"?-50:0,

        },
        show:{
            y:0,
            x:0,
            opacity:1,
            transition:{
                type:"tween",
                duration:1.2,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75]
            }
        }
    }
}

export const fadeInSpeed = (direction, delay) => {
    return {
      hidden: {
        opacity: 0,
        x: direction === "right" ? 70 : direction === "left" ? -70 : 0,
        y: direction === "up" ? 70 : direction === "down" ? -70 : 0,
      },
      show: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.2, // Reduced from 0.8 to 0.3 for faster animation
          delay: delay,
          ease: [0.25,0.25,0.75,1],
        },
      },
    };
  };
  