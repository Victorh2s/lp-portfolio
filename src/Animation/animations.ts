export const VisibleTwoColumns = {
  hidden: {
    scale: 0.8,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.6,
    },
  },
};

export const VisbleGridImage = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: 'tween',
      duration: 0.5,
    },
  },
};

export const VisbleGridText = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.4,
      type: 'tween',
      duration: 0.5,
    },
  },
};
