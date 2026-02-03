import { Variants } from "motion/react";




export const animateGradualSpacing: Variants = {
  offscreen: {
    x: -18,
    opacity: 0,
  },

  onscreen: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: index * 0.1,
    }
  })

}



export const animateBlurIn: Variants = {
  offscreen: {
    filter: 'blur(10px)',
    opacity: 0,
  },

  onscreen: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    },
  },

}




export const animateFadeUp: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },

  onscreen: (delayNo: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: delayNo,
    }
  }),

}



export const animateFadeDown: Variants = {
  offscreen: {
    opacity: 0,
    y: -40,
  },

  onscreen: (delayNo: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: delayNo,
    }
  }),

}


export const animatePullUp: Variants = {
  offscreen: {
    opacity: 0,
    y: 40,
  },

  onscreen: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      delay: index * 0.05,
    }
  })

}





export const animateVisible: Variants = {
  offscreen: {
    opacity: 0
  },
  onscreen: (index: number) => ({
    opacity: 1,
    transition: {
      duration: 3,
      delay: index
    },

  })
};




export const animateRotateFromLeft: Variants = {
  offscreen: {
    x: -100,
    rotate: -50,
    visibility: "hidden"
  },
  onscreen: (index: number) => ({
    x: 0,
    rotate: 0,
    visibility: "visible",
    transition: {
      duration: 1.2,
      delay: index
    },

  })
};


export const animateRotateFromRight: Variants = {
  offscreen: {
    x: 100,
    rotate: +50,
    visibility: "hidden"
  },
  onscreen: (index: number) => ({
    x: 0,
    rotate: 0,
    visibility: "visible",
    transition: {
      duration: 1.2,
      delay: index
    },

  })

};



export const animateDownTop: Variants = {
  offscreen: {
    y: 100,
    size: 0,
    opacity: 0
  },
  onscreen: {
    y: 0,
    size: 1,
    opacity: 1,
    transition: {
      duration: 1.2
    },

  }
};


export const animateTopDown: Variants = {
  offscreen: {
    y: -100,
    size: 0,
    opacity: 0
  },
  onscreen: {
    y: 0,
    size: 1,
    opacity: 1,

  }
};




export const animateFromLeft: Variants = {
  offscreen: {
    x: -40,
    opacity: 0
  },
  onscreen: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: index
    },

  })
};



export const animateFromRight: Variants = {
  offscreen: {
    x: 40,
    opacity: 0
  },
  onscreen: (index: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
      duration: 0.8,
      delay: index
    },

  })
};

export const visibleComponent: Variants = {
  offscreen: { visibility: "hidden" },
  onscreen: { visibility: "visible" }
}