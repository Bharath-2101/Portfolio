const mouseEnter = {
  Right: {
    Initial: "M100 0 H 100 Q 100 50 100 100 H 100 V0 Z",
    Final: "M100 0 H0 Q-20 50 0 100 H100 V0 Z",
  },
  Left: {
    Initial: "M0 0 H0 Q 0 50  0 100 H0 V0 Z",
    Final: "M0 0 H100 Q 120 50 100 100 H0 V0 Z",
  },
  Down: {
    Initial: "M0 100 V100 Q50 100 100 100 V100 H0 Z",
    Final: "M0 100 V 0 Q 50 -200  100 0 V 100 H0 Z",
  },
  Up: {
    Initial: "M0 0 V0 Q50 0 100 0 V0 H0 Z",
    Final: "M0 0 V100 Q 50 300 100 100 V0 H0 Z",
  },
};

const mouseLeave = {
  Right: {
    Initial: "M100 0 H-20 Q0 50 -20 100 H100 V0 Z",
    Final: "M100 0 H 100 Q 100 50 100 100 H 100 V0 Z",
  },
  Left: {
    Initial: "M0 0 H120 Q 100 50 120 100 H0 V0 Z",
    Final: "M0 0 H0 Q 0 50  0 100 H0 V0 Z",
  },
  Down: {
    Initial: "M0 100 V -200 Q 50 20  100 -200 V 100 H0 Z",
    Final: "M0 100 V100 Q50 100 100 100 V100 H0 Z",
  },
  Up: {
    Initial: "M0 0 V300 Q 50 100 100 300 V0 H0 Z",
    Final: "M0 0 V0 Q50 0 100 0 V0 H0 Z",
  },
};

export { mouseEnter, mouseLeave };
