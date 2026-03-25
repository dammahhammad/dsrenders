export default {
  theme: {
    extend: {
      keyframes: {
        "move-tl": {
          "90%": { opacity: "0.6" },
          "100%": { top: "-3px", left: "-3px", opacity: "1" },
        },
        "move-tr": {
          "80%": { opacity: "0.6" },
          "100%": { top: "-3px", right: "-3px", opacity: "1" },
        },
        "move-br": {
          "80%": { opacity: "0.6" },
          "100%": { bottom: "-3px", right: "-3px", opacity: "1" },
        },
        "move-bl": {
          "80%": { opacity: "0.6" },
          "100%": { bottom: "-3px", left: "-3px", opacity: "1" },
        },
        "draw-x": {
          "100%": { transform: "rotate(0deg) scaleX(1)" },
        },
        "draw-y": {
          "100%": { transform: "rotate(0deg) scaleY(1)" },
        },
      },
      animation: {
        "move-tl": "move-tl 0.35s ease-in-out forwards",
        "move-tr": "move-tr 0.35s ease-in-out forwards 0.2s",
        "move-br": "move-br 0.35s ease-in-out forwards 0.4s",
        "move-bl": "move-bl 0.35s ease-in-out forwards 0.6s",
        "draw-top": "draw-x 0.35s ease-in-out forwards 0.3s",
        "draw-bottom": "draw-x 0.35s ease-in-out forwards 0.7s",
        "draw-left": "draw-y 0.35s ease-in-out forwards 0.85s",
        "draw-right": "draw-y 0.35s ease-in-out forwards 0.5s",
      },
    },
  },
};