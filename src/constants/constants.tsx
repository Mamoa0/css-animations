interface Animations {
  [key: string]: {
    title: string;
    animations: {
      name: string;
      cssCode: string;
      title: string;
    }[];
  };
}

const animations: Animations = {
  fade: {
    title: "Fade Animations",
    animations: [
      {
        name: "fade-in",
        cssCode: `
      @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
          .fade-in:hover {
          animation: fadeIn 1s ease-in-out;
          animation-fill-mode: forwards;
        }
        
        `,
        title: "Fade In",
      },
      {
        name: "fade-out",
        cssCode: `
      @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
          .fade-out:hover {
          animation: fadeOut 1s ease-in-out;
          animation-fill-mode: forwards;
        }
        
        `,
        title: "Fade Out",
      },
      {
        name: "fade-in-up",
        cssCode: `
      @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
          .fade-in-up:hover {
          animation: fadeInUp 1s ease-in-out;
          animation-fill-mode: forwards;
        }
        
        `,
        title: "Fade In Up",
      },
      {
        name: "fade-in-down",
        cssCode: `
                    
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
          .fade-in-down:hover {
          animation: fadeInDown 1s ease-in-out;
          animation-fill-mode: forwards;
        } 
        `,
        title: "Fade In Down",
      },
      {
        name: "fade-in-left",
        cssCode: `  
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      
          .fade-in-left:hover {   
          animation: fadeInLeft 1s ease-in-out;
          animation-fill-mode: forwards;
        } 
        `,
        title: "Fade In Left",
      },
      {
        name: "fade-in-right",
        cssCode: `
                    @keyframes fadeOutUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
      
          .fade-in-right:hover {
          animation: fadeInRight 1s ease-in-out;
          animation-fill-mode: forwards;
        }
        `,
        title: "Fade In Right",
      },
      {
        name: "fade-out-up",
        cssCode: `
                    
        @keyframes fadeOutDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        }
      
          .fade-out-up:hover {
          animation: fadeOutUp 1s ease-in-out;
          animation-fill-mode: forwards;
        }
      
        `,
        title: "Fade Out Up",
      },
      {
        name: "fade-out-down",
        cssCode: `
      
        @keyframes fadeOutDown {
          0% {        
            opacity: 1;
            transform: translateY(0);
          }    
          100% {
            opacity: 0;
            transform: translateY(20px);
          }
        } 
          .fade-out-down:hover {      
          animation: fadeOutDown 1s ease-in-out;          
          animation-fill-mode: forwards;
        } 
      
        `,
        title: "Fade Out Down",
      },
      {
        name: "fade-out-left",
        cssCode: `   
      
      @keyframes fadeOutLeft {
        0% {
          opacity: 1;
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          transform: translateX(-20px);
        }
      }
      
          .fade-out-left:hover {
          animation: fadeOutLeft 1s ease-in-out;
          animation-fill-mode: forwards;
        }
      
        `,
        title: "Fade Out Left",
      },
      {
        name: "fade-out-right",
        cssCode: `
      
      
      @keyframes fadeOutRight {
        0% {
          opacity: 1;
          transform: translateX(0);
        }
        100% {
          opacity: 0;
          transform: translateX(20px);
        }
      }
      
          .fade-out-right:hover {
          animation: fadeOutRight 1s ease-in-out;
          animation-fill-mode: forwards;
        }
      
        `,
        title: "Fade Out Right",
      },
    ],
  },
  slide: {
    title: "Slide Animations",
    animations: [
      {
        name: "slide-in-up",
        cssCode: `
            
                @keyframes slideInUp {
                  from {
                    transform: translateY(100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                }
                  .slide-in-up {
                  animation: slideInUp 1s ease-in-out forwards;
                  `,
        title: "Slide In Up",
      },
      {
        name: "slide-in-down",
        cssCode: `@keyframes slideInDown {
                  from {
                    transform: translateY(-100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateY(0);
                    opacity: 1;
                  }
                } 
                 .slide-in-down {
                  animation: slideInDown 1s ease-in-out forwards;
                }
      
                `,
        title: "Slide In Down",
      },
      {
        name: "slide-in-left",
        cssCode: ` @keyframes slideInLeft {
                  from {
                    transform: translateX(-100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
      
                .slide-in-left {
                  animation: slideInLeft 1s ease-in-out forwards;
                }
      
                `,
        title: "Slide In Left",
      },
      {
        name: "slide-in-right",
        cssCode: `@keyframes slideInRight {
                  from {
                    transform: translateX(100%);
                    opacity: 0;
                  }
                  to {
                    transform: translateX(0);
                    opacity: 1;
                  }
                }
                .slide-in-right {
                  animation: slideInRight 1s ease-in-out forwards;
                }
                `,
        title: "Slide In Right",
      },
      {
        name: "slide-out-up",
        cssCode: `@keyframes slideOutUp {
                  from {
                    transform: translateY(0);
                    opacity: 1;
                  }
                  to {
                    transform: translateY(-100%);
                    opacity: 0;
                  }
                }
                .slide-out-up {
                  animation: slideOutUp 1s ease-in-out forwards;
                }
                `,
        title: "Slide Out Up",
      },

      {
        name: "slide-out-down",
        cssCode: `  @keyframes slideOutDown {
                  from {
                    transform: translateY(0);
                    opacity: 1;
                  }
                  to {
                    transform: translateY(100%);
                    opacity: 0;
                  }
                }
      
                .slide-out-down {
                  animation: slideOutDown 1s ease-in-out forwards;
                } 
      
                    `,
        title: "Slide Out Down",
      },
      {
        name: "slide-out-left",
        cssCode: `@keyframes slideOutLeft {
                  from {
                    transform: translateX(0);
                    opacity: 1;
                  }
                  to {
                    transform: translateX(-100%);
                    opacity: 0;
                  }
                }
                .slide-out-left {
                  animation: slideOutLeft 1s ease-in-out forwards;
                }
                `,
        title: "Slide Out Left",
      },

      {
        name: "slide-out-right",
        cssCode: ` @keyframes slideOutRight {
                  from {
                    transform: translateX(0);
                    opacity: 1;
                  }
                  to {
                    transform: translateX(100%);
                    opacity: 0;
                  }
                }
                .slide-out-right {
                  animation: slideOutRight 1s ease-in-out forwards;
                }
                `,
        title: "Slide Out Right",
      },
    ],
  },
  bounce: {
    title: "Bounce Animations",
    animations: [
      {
        name: "bounce",
        cssCode: `@keyframes bounce {
                  0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0);
                  }
                  40% {
                    transform: translateY(-30px);
                  }
                  60% {
                    transform: translateY(-15px);
                  }
                }
      
                .bounce {
                  animation: bounce 2s infinite;
                }`,
        title: "Bounce",
      },
      {
        name: "bounce-in",
        cssCode: `@keyframes bounceIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          60% {
            transform: scale(1.2);
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
          .bounce-in {
          animation: bounceIn 1s ease-in-out;
        }
      
        `,
        title: "Bounce In",
      },
      {
        name: "bounce-out",
        cssCode: `
      
            @keyframes bounceOut {
              0% {
                transform: scale(1);
                opacity: 1;
              }
              20% {
                transform: scale(1.2);
                opacity: 1;
              }
              100% {
                transform: scale(0);
                opacity: 0;
              }
            }
            .bounce-out {
              animation: bounceOut 1s ease-in-out;
            }
      
            `,
        title: "Bounce Out",
      },
      {
        name: "bounce-in-up",
        cssCode: `
        @keyframes bounceInUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          60% {
            opacity: 1;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
              .bounce-in-up {
          animation: bounceInUp 1s ease-in-out;
        }
            `,

        title: "Bounce In Up",
      },
      {
        name: "bounce-in-down",
        cssCode: `
            @keyframes bounceInDown {
              0% {
                opacity: 0;
                transform: translateY(-100%);
              }
              60% {
                opacity: 1;
                transform: translateY(30px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
            
              .bounce-out-down {
          animation: bounceOutDown 1s ease-in-out;
        }
      
            `,

        title: "Bounce In Down",
      },
      {
        name: "bounce-in-left",
        cssCode: `    
        @keyframes bounceInLeft {
          0% {
            opacity: 0;
            transform: translateX(-100%);
          }
          60% {
            opacity: 1;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
          }
        .bounce-in-left {
          animation: bounceInLeft 1s ease-in-out;
        }
            `,

        title: "Bounce In Left",
      },
      {
        name: "bounce-in-right",
        cssCode: `
        @keyframes bounceInRight {
          0% {
            opacity: 0;
            transform: translateX(100%);
          }
          60% {
            opacity: 1;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
              .bounce-in-right {
          animation: bounceInRight 1s ease-in-out;
        }
            `,

        title: "Bounce In Right",
      },
      {
        name: "bounce-out-up",
        cssCode: `
           @keyframes bounceOutUp {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          20% {
            transform: translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: translateY(-100%);
          }
        }
            .bounce-out-up {
          animation: bounceOutUp 1s ease-in-out;
        }
            `,

        title: "Bounce Out Up",
      },
      {
        name: "bounce-out-down",
        cssCode: `    
        @keyframes bounceOutDown {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          20% {
            transform: translateY(10px);
          }
          100% {
            opacity: 0;
            transform: translateY(100%);
          }
        }
            .bounce-out-down {
          animation: bounceOutDown 1s ease-in-out;
        }
      
            `,

        title: "Bounce Out Down",
      },
      {
        name: "bounce-out-left",
        cssCode: `
              @keyframes bounceOutLeft {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          20% {
            transform: translateX(-10px);
          }
          100% {
            opacity: 0;
            transform: translateX(-100%);
          }
        }
            .bounce-out-left {
          animation: bounceOutLeft 1s ease-in-out;
        }
            `,

        title: "Bounce Out Left",
      },
      {
        name: "bounce-out-right",
        cssCode: `       
        @keyframes bounceOutRight {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          20% {
            transform: translateX(10px);
          }
          100% {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
            .bounce-out-right {
          animation: bounceOutRight 1s ease-in-out;
        }
            `,
        title: "Bounce Out Right",
      },
    ],
  },
  zoom: {
    title: "Zoom Animations",
    animations: [
      {
        name: "zoom-in",
        cssCode: `
          @keyframes zoomIn {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
      
      
       .zoom-in {
        animation: zoomIn 1s ease-in-out;
      }
      `,
        title: "Zoom In",
      },
      {
        name: "zoom-out",
        cssCode: `
      @keyframes zoomOut {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(0);
          opacity: 0;
        }
      }
       .zoom-out {
        animation: zoomOut 1s ease-in-out;
      }
          `,
        title: "Zoom Out",
      },
      {
        name: "zoom-in-up",
        cssCode: `
      @keyframes zoomInUp {
        0% {
          transform: scale(0) translateY(100%);
          opacity: 0;
        }
        100% {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
      }
      
       .zoom-in-up {
        animation: zoomInUp 1s ease-in-out;
      }
      
          `,
        title: "Zoom In Up",
      },
      {
        name: "zoom-in-down",
        cssCode: `
          
      @keyframes zoomInDown {
        0% {
          transform: scale(0) translateY(-100%);
          opacity: 0;
        }
        100% {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
      }
      
       .zoom-in-down {
        animation: zoomInDown 1s ease-in-out;
      }
      
          `,
        title: "Zoom In Down",
      },
      {
        name: "zoom-in-left",
        cssCode: `
          @keyframes zoomInLeft {
        0% {
          transform: scale(0) translateX(-100%);
          opacity: 0;
        }
        100% {
          transform: scale(1) translateX(0);
          opacity: 1;
        }
      }
      
          .zoom-in-left {
        animation: zoomInLeft 1s ease-in-out;
      }
      
          `,
        title: "Zoom In Left",
      },
      {
        name: "zoom-in-right",
        cssCode: `
          @keyframes zoomInRight {
        0% {
          transform: scale(0) translateX(100%);
          opacity: 0;
        }
        100% {
          transform: scale(1) translateX(0);
          opacity: 1;
        }
      }
      
          .zoom-in-right {
        animation: zoomInRight 1s ease-in-out;
      }
          `,
        title: "Zoom In Right",
      },
      {
        name: "zoom-out-up",
        cssCode: `
          
      @keyframes zoomOutUp {
        0% {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        100% {
          transform: scale(0) translateY(-100%);
          opacity: 0;
        }
      }
      
          .zoom-out-up {
        animation: zoomOutUp 1s ease-in-out;
      }
      
          `,
        title: "Zoom Out Up",
      },
      {
        name: "zoom-out-down",
        cssCode: `
          @keyframes zoomOutDown {
        0% {
          transform: scale(1) translateY(0);
          opacity: 1;
        }
        100% {
          transform: scale(0) translateY(100%);
          opacity: 0;
        }
      }
      
          .zoom-out-down {
        animation: zoomOutDown 1s ease-in-out;
      }
      
          `,
        title: "Zoom Out Down",
      },
      {
        name: "zoom-out-left",
        cssCode: `
          @keyframes zoomOutLeft {
        0% {
          transform: scale(1) translateX(0);
          opacity: 1;
        }
        100% {
          transform: scale(0) translateX(-100%);
          opacity: 0;
        }
      }
      
          .zoom-out-left {
        animation: zoomOutLeft 1s ease-in-out;
      }
      
          `,
        title: "Zoom Out Left",
      },
      {
        name: "zoom-out-right",
        cssCode: `
          @keyframes zoomOutRight {
        0% {
          transform: scale(1) translateX(0);
          opacity: 1;
        }
        100% {
          transform: scale(0) translateX(100%);
          opacity: 0;
        }
      }
      
          .zoom-out-right {
        animation: zoomOutRight 1s ease-in-out;
      }
          `,
        title: "Zoom Out Right",
      },
    ],
  },
  filp: {
    title: " Filp Animations",
    animations: [
      {
        name: "flip",
        cssCode: `
            @keyframes flip {
        0% {
          transform: perspective(400px) rotateX(0);
        }
        100% {
          transform: perspective(400px) rotateX(360deg);
        }
      }
      
      .flip {
        animation: flip 1s ease-in-out;
      }
      
      `,
        title: "Flip",
      },
      {
        name: "flip-in-x",
        cssCode: `
            @keyframes flipInX {
        0% {
          transform: perspective(400px) rotateX(90deg);
          opacity: 0;
        }
        100% {
          transform: perspective(400px) rotateX(0);
          opacity: 1;
        }
      }
      
      .flip-in-x {
        animation: flipInX 1s ease-in-out;
      }
      
      `,
        title: "Flip In X",
      },
      {
        name: "flip-in-y",
        cssCode: `
            @keyframes flipInY {
        0% {
          transform: perspective(400px) rotateY(90deg);
          opacity: 0;
        }
        100% {
          transform: perspective(400px) rotateY(0);
          opacity: 1;
        }
      }
      
      .flip-in-y {
        animation: flipInY 1s ease-in-out;
      }
      
      `,
        title: "Flip In Y",
      },
      {
        name: "flip-out-x",
        cssCode: `
            @keyframes flipOutX {
        0% {
          transform: perspective(400px) rotateX(0);
          opacity: 1;
        }
        100% {
          transform: perspective(400px) rotateX(90deg);
          opacity: 0;
        }
      }
            .flip-out-x {
        animation: flipOutX 1s ease-in-out;
      }
      
      `,
        title: "Flip Out X",
      },
      {
        name: "flip-out-y",
        cssCode: `
            
      @keyframes flipOutY {
        0% {
          transform: perspective(400px) rotateY(0);
          opacity: 1;
        }
        100% {
          transform: perspective(400px) rotateY(90deg);
          opacity: 0;
        }
      }
        .flip-out-y {
        animation: flipOutY 1s ease-in-out;
      }
      
      `,

        title: "Flip Out Y",
      },
    ],
  },
  rotate: {
    title: " Rotate Animations",
    animations: [
      {
        name: "rotate-in",
        cssCode: `
        @keyframes rotateIn {
          from {
            transform: rotate(-200deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .rotate-in {
          animation: rotateIn 1s ease-in-out;
        }
        `,
        title: "Rotate In",
      },
      {
        name: "rotate-out",
        cssCode: `
        @keyframes rotateOut {
          from {
            transform: rotate(0);
            opacity: 1;
          }
          to {
            transform: rotate(200deg);
            opacity: 0;
          }
        }
        .rotate-out {
          animation: rotateOut 1s ease-in-out;
        }
        `,
        title: "Rotate Out",
      },
      {
        name: "rotate-in-up-left",
        cssCode: `
        @keyframes rotateInUpLeft {
          from {
            transform: rotate(-90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .rotate-in-up-left {
          animation: rotateInUpLeft 1s ease-in-out;
        }
        `,
        title: "Rotate In Up Left",
      },
      {
        name: "rotate-in-up-right",
        cssCode: `
        @keyframes rotateInUpRight {
          from {
            transform: rotate(90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .rotate-in-up-right {
          animation: rotateInUpRight 1s ease-in-out;
        }
        `,
        title: "Rotate In Up Right",
      },
      {
        name: "rotate-in-down-left",
        cssCode: `
        @keyframes rotateInDownLeft {
          from {
            transform: rotate(-90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .rotate-in-down-left {
          animation: rotateInDownLeft 1s ease-in-out;
        }
        `,
        title: "Rotate In Down Left",
      },
      {
        name: "rotate-in-down-right",
        cssCode: `
        @keyframes rotateInDownRight {
          from {
            transform: rotate(90deg);
            opacity: 0;
          }
          to {
            transform: rotate(0);
            opacity: 1;
          }
        }
        .rotate-in-down-right {
          animation: rotateInDownRight 1s ease-in-out;
        }
        `,
        title: "Rotate In Down Right",
      },
      {
        name: "rotate-out-up-left",
        cssCode: `
        @keyframes rotateOutUpLeft {
          from {
            transform: rotate(0);
            opacity: 1;
          }
          to {
            transform: rotate(-90deg);
            opacity: 0;
          }
        }
        .rotate-out-up-left {
          animation: rotateOutUpLeft 1s ease-in-out;
        }
        `,
        title: "Rotate Out Up Left",
      },
      {
        name: "rotate-out-up-right",
        cssCode: `
        @keyframes rotateOutUpRight {
          from {
            transform: rotate(0);
            opacity: 1;
          }
          to {
            transform: rotate(90deg);
            opacity: 0;
          }
        }
        .rotate-out-up-right {
          animation: rotateOutUpRight 1s ease-in-out;
        }
        `,
        title: "Rotate Out Up Right",
      },
      {
        name: "rotate-out-down-left",
        cssCode: `
        @keyframes rotateOutDownLeft {
          from {
            transform: rotate(0);
            opacity: 1;
          }
          to {
            transform: rotate(-90deg);
            opacity: 0;
          }
        }
        .rotate-out-down-left {
          animation: rotateOutDownLeft 1s ease-in-out;
        }
        `,
        title: "Rotate Out Down Left",
      },
      {
        name: "rotate-out-down-right",
        cssCode: `
        @keyframes rotateOutDownRight {
          from {
            transform: rotate(0);
            opacity: 1;
          }
          to {
            transform: rotate(90deg);
            opacity: 0;
          }
        }
        .rotate-out-down-right {
          animation: rotateOutDownRight 1s ease-in-out;
        }
        `,
        title: "Rotate Out Down Right",
      },
    ],
  },
  lightSpeed: {
    title: " Light Speed Animations",
    animations: [
      {
        name: "light-speed-in",
        cssCode: `
            @keyframes lightSpeedIn {
              from {
                transform: translateX(-100%) skewX(-30deg);
                opacity: 0;
              }
              to {
                transform: translateX(0) skewX(0);
                opacity: 1;
              }
            }
            .light-speed-in {
              animation: lightSpeedIn 1s ease-out;
            }
            `,
        title: "Light Speed In",
      },
      {
        name: "light-speed-out",
        cssCode: `
            @keyframes lightSpeedOut {
              from {
                transform: translateX(0) skewX(0);
                opacity: 1;
              }
              to {
                transform: translateX(100%) skewX(30deg);
                opacity: 0;
              }
            }
            .light-speed-out {
              animation: lightSpeedOut 1s ease-in;
            }
            `,
        title: "Light Speed Out",
      },
    ],
  },
  roll: {
    title: " Roll Animations",
    animations: [
      {
        name: "roll-in",
        cssCode: `
        @keyframes rollIn {
          from {
            transform: translateX(-100%) rotate(-120deg);
            opacity: 0;
          }
          to {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
        }
        .roll-in {
          animation: rollIn 1s ease-in-out;
        }
        `,
        title: "Roll In",
      },
      {
        name: "roll-out",
        cssCode: `
        @keyframes rollOut {
          from {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%) rotate(120deg);
            opacity: 0;
          }
        }
        .roll-out {
          animation: rollOut 1s ease-in-out;
        }
        `,
        title: "Roll Out",
      },
    ],
  },
  specialAnimations: {
    title: " Special Animations",
    animations: [
      {
        name: "hinge",
        cssCode: `
        @keyframes hinge {
          0% {
            transform: rotate(0);
            transform-origin: top left;
          }
          20% {
            transform: rotate(80deg);
            transform-origin: top left;
          }
          40% {
            transform: rotate(60deg);
            transform-origin: top left;
          }
          60% {
            transform: rotate(80deg);
            transform-origin: top left;
          }
          80% {
            transform: rotate(60deg);
            transform-origin: top left;
          }
          100% {
            transform: translateY(700px);
            opacity: 0;
          }
        }
        .hinge {
          animation: hinge 2s ease-in-out;
        }
        `,
        title: "Hinge",
      },
      {
        name: "jack-in-the-box",
        cssCode: `
        @keyframes jackInTheBox {
          from {
            opacity: 0;
            transform: scale(0.1) rotate(30deg);
            transform-origin: center bottom;
          }
          50% {
            transform: rotate(-10deg);
          }
          70% {
            transform: rotate(3deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }
        .jack-in-the-box {
          animation: jackInTheBox 1s ease-in;
        }
        `,
        title: "Jack in the Box",
      },
      {
        name: "rubber-band",
        cssCode: `
        @keyframes rubberBand {
          0% {
            transform: scale(1);
          }
          30% {
            transform: scale(1.25, 0.75);
          }
          40% {
            transform: scale(0.75, 1.25);
          }
          50% {
            transform: scale(1.15, 0.85);
          }
          65% {
            transform: scale(0.95, 1.05);
          }
          75% {
            transform: scale(1.05, 0.95);
          }
          100% {
            transform: scale(1);
          }
        }
        .rubber-band {
          animation: rubberBand 1s ease-out;
        }
        `,
        title: "Rubber Band",
      },
      {
        name: "wobble",
        cssCode: `
        @keyframes wobble {
          0% {
            transform: translateX(0%);
          }
          15% {
            transform: translateX(-25%) rotate(-5deg);
          }
          30% {
            transform: translateX(20%) rotate(3deg);
          }
          45% {
            transform: translateX(-15%) rotate(-3deg);
          }
          60% {
            transform: translateX(10%) rotate(2deg);
          }
          75% {
            transform: translateX(-5%) rotate(-1deg);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .wobble {
          animation: wobble 1s ease-in-out;
        }
        `,
        title: "Wobble",
      },
      {
        name: "jello",
        cssCode: `
        @keyframes jello {
          from, 11.1%, to {
            transform: none;
          }
          22.2% {
            transform: skewX(-12.5deg) skewY(-12.5deg);
          }
          33.3% {
            transform: skewX(6.25deg) skewY(6.25deg);
          }
          44.4% {
            transform: skewX(-3.125deg) skewY(-3.125deg);
          }
          55.5% {
            transform: skewX(1.5625deg) skewY(1.5625deg);
          }
          66.6% {
            transform: skewX(-0.78125deg) skewY(-0.78125deg);
          }
          77.7% {
            transform: skewX(0.390625deg) skewY(0.390625deg);
          }
          88.8% {
            transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
          }
        }
        .jello {
          animation: jello 1s ease-in-out;
        }
        `,
        title: "Jello",
      },
      {
        name: "heart-beat",
        cssCode: `
        @keyframes heartBeat {
          0% {
            transform: scale(1);
          }
          14% {
            transform: scale(1.3);
          }
          28% {
            transform: scale(1);
          }
          42% {
            transform: scale(1.3);
          }
          70% {
            transform: scale(1);
          }
        }
        .heart-beat {
          animation: heartBeat 1.5s ease-in-out infinite;
        }
        `,
        title: "Heart Beat",
      },
    ],
  },
  attentionSeekers: {
    title: " Attention Seekers Animations",
    animations: [
      {
        name: "pulse",
        cssCode: `
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        .pulse {
          animation: pulse 1s ease-in-out infinite;
        }
        `,
        title: "Pulse",
      },
      {
        name: "flash",
        cssCode: `
        @keyframes flash {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .flash {
          animation: flash 1s ease-in-out infinite;
        }
        `,
        title: "Flash",
      },
      {
        name: "swing",
        cssCode: `
        @keyframes swing {
          20% {
            transform: rotate(15deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          60% {
            transform: rotate(5deg);
          }
          80% {
            transform: rotate(-5deg);
          }
          100% {
            transform: rotate(0deg);
          }
        }
        .swing {
          animation: swing 1s ease-in-out;
        }
        `,
        title: "Swing",
      },
      {
        name: "tada",
        cssCode: `
        @keyframes tada {
          0% {
            transform: scale(1);
          }
          10%, 20% {
            transform: scale(0.9) rotate(-3deg);
          }
          30%, 50%, 70%, 90% {
            transform: scale(1.1) rotate(3deg);
          }
          40%, 60%, 80% {
            transform: scale(1.1) rotate(-3deg);
          }
          100% {
            transform: scale(1) rotate(0);
          }
        }
        .tada {
          animation: tada 1s ease-in-out;
        }
        `,
        title: "Tada",
      },
      {
        name: "shake",
        cssCode: `
        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-10px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(10px);
          }
        }
        .shake {
          animation: shake 1s ease-in-out;
        }
        `,
        title: "Shake",
      },
      {
        name: "bounce",
        cssCode: `
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-30px);
          }
          60% {
            transform: translateY(-15px);
          }
        }
        .bounce {
          animation: bounce 1s ease-in-out infinite;
        }
        `,
        title: "Bounce",
      },
    ],
  },
};
export default animations;

export const buttons = [
  {
    content: "Click Me!",
    code: `.btn-1 {
  width: 150px;
  height: 50px;
  position: relative;
}
.btn-1::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: var(--tertiary-color);
  z-index: -1;
  transition: all 0.2s ease-in-out;
  transform: skew(30deg) translateY(-4px);
}
.btn-1::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: crimson;
  z-index: -1;
  transition: all 0.2s ease-in-out;
  transform: skew(30deg) translateY(4px);
}
.btn-1:hover:before {
  transform: skew(0) translateY(0);
  left: 50%;
}
.btn-1:hover:after {
  transform: skew(0) translateY(0);
  right: 50%;
}`,
  },
  {
    content: "Click Me!",
    code: `.btn-2 {
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  padding: 15px 30px;
  transition: background-position 0.5s;
  background-size: 200%;
}
.btn-2:hover {
  background-position: right;
}`,
  },
  {
    content: "Click Me!",
    code: `.btn-3 {
  background-color: #111;
  border: 2px solid #111;
  padding: 15px 30px;
  transition: box-shadow 0.3s ease-in-out;
}
.btn-3:hover {
  box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.6);
}
}`,
  },
  {
    content: "Click Me!",
    code: `.btn-4 {
  background-color: #4caf50;
  color: white;
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.btn-4::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  transition: left 0.5s ease-in-out;
}
.btn-4:hover::before {
  left: 100%;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-5 {
  background-color: #00bcd4;
  color: white;
  padding: 15px 30px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
}
.btn-5::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 300%;
  height: 300%;
  background-color: #0097a7;
  transform: rotate(45deg);
  transition: all 0.5s ease-in-out;
}
.btn-5::after {
  content: "Click me!";
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-5:hover::before {
  left: -25%;
}`,
  },
  {
    content: "Click Me!",
    code: `.btn-6 {
  background-color: #ff9800;
  color: white;
  padding: 15px 30px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: transform 0.4s ease-in-out;
}
.btn-6:hover {
  transform: rotateY(180deg);
  background-color: #f57c00;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-7 {
  background: none;
  color: var(--tertiary-color);
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
}
.btn-7::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  height: 3px;
  width: 0;
  background-color: var(--tertiary-color);
  transition: width 0.4s ease, left 0.4s ease;
}
.btn-7:hover::after {
  width: 100%;
  left: 0;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-8 {
  background-color: #e91e63;
  color: white;
  padding: 15px 30px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  position: relative;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(233, 30, 99, 0.7);
  }
  70% {
    transform: scale(1.05);
    box-shadow: 0 0 10px 10px rgba(233, 30, 99, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(233, 30, 99, 0);
  }
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-9 {
  background-color: #2196f3;
  color: white;
  padding: 15px 30px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  overflow: hidden;
  position: relative;
}
.btn-9::after {
  content: "Hover me";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: #2196f3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: left 0.5s;
}
.btn-9:hover::after {
  left: 0;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-10 {
  position: relative;
  overflow: hidden;
  background-color: #673ab7;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
}
.btn-10::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  transition: transform 0.5s ease-out;
}
.btn-10:active::before {
  transform: translate(-50%, -50%) scale(1);
  transition: 0s;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-11 {
  background-color: #ff5722;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 0 5px #d94d00;
  transition: all 0.1s ease-in-out;
}
.btn-11:active {
  box-shadow: 0 2px #d94d00;
  transform: translateY(3px);
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-12 {
  color: transparent;
  border: none;
  position: relative;
  width: 150px;
  height: 50px;
  padding: 15px 30px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
}
.btn-12::before {
  content: "Click me!";
  position: absolute;
  color: white;
  background-color: #00bbd469;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  transform: translateX(-100%) rotateY(180deg) scale(0);
  opacity: 0;
}
.btn-12:hover::before {
  transform: translateX(0) rotateY(0) scale(1);
  opacity: 1;
}
.btn-12::after {
  content: "Click me!";
  position: absolute;
  color: white;
  background-color: #00bbd469;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  transform: translateX(0) rotateY(0) scale(1);
  opacity: 1;
}
.btn-12:hover::after {
  transform: translateX(100%) rotateY(180deg) scale(0);
  opacity: 0;
}`,
  },
  {
    content: "Click Me!",
    code: `.btn-13 {
  background-color: transparent;
  color: #e91e63;
  border: 2px solid #e91e63;
  padding: 15px 30px;
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}
.btn-13::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background-color: #e91e63;
  z-index: -1;
  border-bottom-right-radius: 50%;
  border-bottom-left-radius: 50%;
  transition: transform 0.5s ease-in-out;
  transform: translateY(-100%);
}
.btn-13:hover::before {
  transform: translateY(0);
}
.btn-13:hover {
  color: white;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-14 {
  background-color: transparent;
  color: var(--secondary-color);
  border: 2px solid var(--secondary-color);
  padding: 15px 30px;
  position: relative;
  overflow: hidden;
}
.btn-14::before {
  content: "Click me!";
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--secondary-color);
  z-index: -1;
  transform: scale(2.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  opacity: 0;
}
.btn-14:hover::before {
  transform: scale(1);
  opacity: 1;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-15 {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 15px 30px;
  color: transparent;
  position: relative;
  overflow: hidden;
}
.btn-15::before {
  content: "Click me!";
  position: absolute;
  color: #000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: yellow;
  z-index: -1;
  transform: translate(-100%, 100%);
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-15:hover::before {
  transform: translate(0, 0);
}
.btn-15::after {
  content: "Click me!";
  position: absolute;
  color: #000000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: yellow;
  z-index: -1;
  transform: translate(0);
  transition: all 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-15:hover::after {
  transform: translate(100%, -100%);
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-16 {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 22px;
  font-family: verdana;
  letter-spacing: 3px;
  height: 60px;
  width: 200px;
  line-height: 60px;
  text-align: center;
  color: rgba(233, 30, 99, 0.7);
  position: relative;
}
.btn-16:before {
  content: "";
  position: absolute;
  height: 90px;
  width: 200px;
  top: -15px;
  left: 0;
  border-left: 2px solid rgba(233, 30, 99, 0.7);
  border-right: 2px solid var(--tertiary-color);
  transition: all 01s;
}
.btn-16:after {
  content: "";
  position: absolute;
  height: 60px;
  width: 230px;
  top: 0;
  left: -15px;
  border-top: 2px solid rgba(233, 30, 99, 0.7);
  border-bottom: 2px solid var(--tertiary-color);
  transition: all 1s;
}
.btn-16:hover:before {
  transform: rotateY(180deg);
}
.btn-16:hover:after {
  transform: rotateX(180deg);
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-17 {
  border: none;
  padding: 12px 40px;
  background-color: var(--tertiary-color);
  color: white;
  cursor: pointer;
  position: relative;
}

.btn-17:before {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  top: -5px;
  left: -5px;
  border-top: 2px solid var(--tertiary-color);
  border-left: 2px solid var(--tertiary-color);
  transition: all 0.25s;
}

.btn-17:hover:before,
.btn-17:hover:after {
  height: 100%;
  width: 100%;
}

.btn-17:after {
  content: "";
  position: absolute;
  width: 24px;
  height: 24px;
  bottom: -5px;
  right: -5px;
  border-bottom: 2px solid var(--tertiary-color);
  border-right: 2px solid var(--tertiary-color);
  transition: all 0.25s;
}
`,
  },
  {
    content: "Click Me!",
    code: `.btn-18 {
  position: relative;
  width: 150px;
  height: 50px;
  color: white;
  border: 1px solid #4caf50;
  text-transform: uppercase;
  transition: all 0.5s;
  overflow: hidden;
  
}

.btn-18::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 200px;
  height: 200px;
  background-color: #4caf50;
  z-index: -1;
  transition: all 0.5s;
}

.btn-18:hover::before {
  width: 0;
  height: 0;
 transform: translate(-50%, -50%) rotate(45deg) ;
}
.btn-18:hover {
  color: #4caf50;
}`,
  },
  {
    content: <span>Click Me!</span>,
    code: `
    /*HTML Code*/
    <button class="btn-19">
      <span>Click Me!</span>
    </button>
    /*CSS Code*/
    .btn-19 {
  text-decoration: none;
  text-transform: uppercase;
  font-family: verdana;
  color: #f6b93b;
  padding: 10px 20px;
  position: relative;
  border: 3px solid #f6b93b;
  transition: all 0.2s;
  overflow: hidden;
}

.btn-19:before,
.btn-19:after,
.btn-19 span:before,
.btn-19 span:after {
  content: "";
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #f6b93b;
  z-index: -1;
  transition: all 0.1s;
}

.btn-19:before {
  top: 100%;
  left: 0%;
}

.btn-19:hover:before {
  top: 0;
  left: 0;
}

.btn-19:after {
  top: -100%;
  right: 0;
  transition-delay: 0.3s
}

.btn-19:hover:after {
  top: 0;
  right: 0;
}

.btn-19 span:before {
  top: -100%;
  left: 25%;
  transition-delay: 0.1s;
}

.btn-19:hover span:before {
  top: 0;
  left: 25%;
}

.btn-19 span:after {
  bottom: -100%;
  right: 25%;
  transition-delay: 0.2s
}

.btn-19:hover span:after {
  bottom: 0;
  right: 25%;
}

.btn-19:hover {
  color: #222;
}`,
  },
  {
    content: <span>Click Me!</span>,
    code: `
    /* html code */
    <button class="btn-20">
    <span>Click Me!</span>
  </button>
    /* css code */
        .btn-20 {
  background-color: transparent;
  color: white;
  padding: 15px 30px;
  border: 2px solid var(--tertiary-color);
  position: relative;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
}
.btn-20::before,
.btn-20::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--tertiary-color);
  top: 50%;
  left: 50%;
  transition: all 0.4s ease-in-out;
  transform: translate(-50%, -50%);
}
.btn-20::before {
  width: 2px;
  height: 100%;
}
.btn-20:hover::before,
.btn-20:hover::after {
  width: 100%;
  height: 100%;
}
.btn-20 span {
  position: relative;
  z-index: 1;
}
      `,
  },
  {
    content: (
      <>
        <span>Click Me!</span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
      </>
    ),
    code: `
    /*HTML Code*/
    <button class="btn-21">
      <span>Click Me!</span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
        <span className="circle"></span>
    </button>
    /*CSS Code*/
      .btn-21 {
  background-color: #009688;
  color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.btn-21 .circle {
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #fff;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  transform-origin: center;
}

.btn-21 .circle:nth-child(2) {
  left: 50%;
  top: -10px;
  animation-delay: -0.5s;
}

.btn-21 .circle:nth-child(3) {
  right: -10px;
  top: 50%;
  animation-delay: -1s;
}

.btn-21 .circle:nth-child(4) {
  left: 50%;
  bottom: -10px;
  animation-delay: -1.5s;
}

.btn-21 .circle:nth-child(5) {
  left: -10px;
  top: 50%;
  animation-delay: -2s;
}

@keyframes spin {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(100px);
  }
  50% {
    transform: translateX(100px) translateY(100px);
  }
  75% {
    transform: translateY(100px) translateX(0);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}

.btn-21 span {
  position: relative;
  z-index: 1;
}
  `,
  },
  {
    content: (
      <>
        <span>Click Me!</span>
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
      </>
    ),
    code: `
    /*HTML Code*/
    <button class="btn-22">
      <span>Click Me!</span>
        <span className="corner top-left"></span>
        <span className="corner top-right"></span>
        <span className="corner bottom-left"></span>
        <span className="corner bottom-right"></span>
    </button>
    /*CSS Code*/
     .btn-22 {
  background-color: var(--tertiary-color);
  padding: 15px 30px;
  text-transform: uppercase;
  border: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.btn-22 .corner {
  position: absolute;
  width: 15px;
  height: 15px;
  background-color: var(--primary-color);
  transition: all 0.4s ease;
  z-index: 0;
}

.btn-22 .top-left {
  top: 0;
  left: 0;
  transform-origin: top left;
}

.btn-22 .top-right {
  top: 0;
  right: 0;
  transform-origin: top right;
}

.btn-22 .bottom-left {
  bottom: 0;
  left: 0;
  transform-origin: bottom left;
}

.btn-22 .bottom-right {
  bottom: 0;
  right: 0;
  transform-origin: bottom right;
}

.btn-22:hover .corner {
  transform: rotate(45deg);
}

.btn-22 span {
  position: relative;
  z-index: 1;
}
    `,
  },
  {
    content: (
      <>
        <span>Click Me!</span>
        <span className="dots"></span>
      </>
    ),
    code: `
    
    /*HTML Code*/
    <button class="btn-23">
    <span>Click Me!</span>
        <span className="dots"></span>
    </button>
      /*CSS Code*/
    .btn-23 {
  background-color: #607d8b;
  color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  position: relative;
  cursor: pointer;
  overflow: hidden;
}

.btn-23 .dots {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  animation: fade-dots 2s infinite ease-in-out;
}

@keyframes fade-dots {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
}

.btn-23 span {
  position: relative;
  z-index: 1;
}
    `,
  },
  {
    content: (
      <>
        <span>Click Me!</span>
        <span className="cut"></span>
      </>
    ),
    code: `
      /*HTML Code*/
      <button class="btn-24">
        <span>Diagonal</span>
        <span className="cut"></span>
      </button>
      /*CSS Code*/
    .btn-24 {
  background-color: #3f51b5;
  color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.btn-24 .cut {
  position: absolute;
  top: -100%;
  left: 0;
  width: 200%;
  height: 200%;
  background-color: #1a237e;
  transform: rotate(-45deg);
  transition: top 0.4s ease;
  z-index: 0;
}

.btn-24:hover .cut {
  top: 0;
}

.btn-24 span {
  position: relative;
  z-index: 1;
}`,
  },
  {
    content: "Click Me!",
    code: `
    .btn-pulse {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #3498db;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.btn-pulse:hover {
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}`,
  },
  {
    content: "Click Me!",
    code: `
    .btn-rotate {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #e74c3c;
  border: none;
 
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-rotate:hover {
  transform: rotate(360deg);
}
    `,
  },
  {
    content: "Click Me!",
    code: `
    .btn-shadow-lift {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #16a085;
  border: none;
 
  cursor: pointer;
  box-shadow: 0px 5px 0px 0px #117a65;
  transition: all 0.3s ease-in-out;
}

.btn-shadow-lift:hover {
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.4);
  transform: translateY(-5px);
}
    `,
  },
  {
    content: "Click Me!",
    code: `
.btn-skew {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #34495e;
  border: none;
 
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.btn-skew:hover {
  transform: skewX(-10deg);
}

    `,
  },
  {
    content: "Click Me!",
    code: `
    .btn-glow {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #f39c12;
  border: none;
 
  cursor: pointer;
  box-shadow: 0 0 5px #f39c12;
  transition: box-shadow 0.3s ease-in-out;
}

.btn-glow:hover {
  box-shadow: 0 0 20px #f39c12;
}

    `,
  },
  {
    content: "Click Me!",
    code: `
    .btn-bounce {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #9b59b6;
  border: none;
 
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.btn-bounce:hover {
  animation: bounce 0.5s;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

    `,
  },
  {
    content: "Click Me!",
    code: `
    .btn-slide {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #2ecc71;
  border: none;
 
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease-in-out;
}

.btn-slide:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  transition: left 0.3s ease-in-out;
}

.btn-slide:hover:before {
  left: 0;
}

    `,
  },
  {
    content: "Click Me!",
    code: `
    .btn-flash {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #c0392b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  animation: flash 2s infinite;
}

@keyframes flash {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

    `,
  },
  {
    content: "Click Me!",
    code: `
.btn-gradient-shift {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background: linear-gradient(45deg, #6a1b9a, #8e24aa);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.5s ease-in-out;
}

.btn-gradient-shift:hover {
  background: linear-gradient(45deg, #8e24aa, #6a1b9a);
}

    `,
  },
  {
    content: "Click Me!",
    code: `
    .btn-ripple {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #e67e22;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-ripple:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(255, 255, 255, 0.3);
  transition: transform 0.5s ease-in-out;
  transform: scale(0);
  border-radius: 50%;
}

.btn-ripple:hover:after {
  transform: scale(2.5);
  opacity: 0;
}

    `,
  },
  {
    content: "Click Me!",
    code: `
        .btn-text-fill {
  padding: 10px 20px;
  font-size: 16px;
  color: transparent;
  background: none;
  border: 2px solid #e74c3c;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.btn-text-fill:before {
  content: "Text Fill";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background-color: #e74c3c;
  transform: translateY(100%);
  transition: transform 0.4s ease;
}

.btn-text-fill:hover:before {
  transform: translateY(0);
}
`,
  },
  {
    content: "Click Me!",
    code: `
        .btn-shrink {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #27ae60;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.btn-shrink:hover {
  transform: scale(0.9);
}

        `,
  },
  {
    content: "Click Me!",
    code: `
        .btn-cross {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #34495e;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;
}

.btn-cross:before,
.btn-cross:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 120%;
  height: 2px;
  background-color: white;
  transition: transform 0.4s ease;
  transform: translate(-50%, -50%) rotate(45deg);
}

.btn-cross:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.btn-cross:hover:before,
.btn-cross:hover:after {
  transform: translate(-50%, -50%) rotate(0deg);
}

        `,
  },
  {
    content: "Click Me!",
    code: `
      .btn-expand {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #9b59b6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.btn-expand:hover {
  padding: 15px 30px;
  background-color: #8e44ad;
}

        `,
  },
];

export const homeCards = [
  {
    name: "fade-in",
    cssCode: `
    @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
        .fade-in:hover {
        animation: fadeIn 1s ease-in-out;
        animation-fill-mode: forwards;
      }
      
      `,
    title: "Fade In",
  },
  {
    name: "bounce",
    cssCode: `@keyframes bounce {
                0%, 20%, 50%, 80%, 100% {
                  transform: translateY(0);
                }
                40% {
                  transform: translateY(-30px);
                }
                60% {
                  transform: translateY(-15px);
                }
              }
    
              .bounce {
                animation: bounce 2s infinite;
              }`,
    title: "Bounce",
  },
  {
    name: "slide-in-up",
    cssCode: `
          
              @keyframes slideInUp {
                from {
                  transform: translateY(100%);
                  opacity: 0;
                }
                to {
                  transform: translateY(0);
                  opacity: 1;
                }
              }
                .slide-in-up {
                animation: slideInUp 1s ease-in-out forwards;
                `,
    title: "Slide In Up",
  },
  {
    name: "zoom-in",
    cssCode: `
        @keyframes zoomIn {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    
     .zoom-in {
      animation: zoomIn 1s ease-in-out;
    }
    `,
    title: "Zoom In",
  },
  {
    name: "flip",
    cssCode: `
          @keyframes flip {
      0% {
        transform: perspective(400px) rotateX(0);
      }
      100% {
        transform: perspective(400px) rotateX(360deg);
      }
    }
    
    .flip {
      animation: flip 1s ease-in-out;
    }
    
    `,
    title: "Flip",
  },
  {
    name: "rotate-in",
    cssCode: `
      @keyframes rotateIn {
        from {
          transform: rotate(-200deg);
          opacity: 0;
        }
        to {
          transform: rotate(0);
          opacity: 1;
        }
      }
      .rotate-in {
        animation: rotateIn 1s ease-in-out;
      }
      `,
    title: "Rotate In",
  },
  {
    name: "hinge",
    cssCode: `
      @keyframes hinge {
        0% {
          transform: rotate(0);
          transform-origin: top left;
        }
        20% {
          transform: rotate(80deg);
          transform-origin: top left;
        }
        40% {
          transform: rotate(60deg);
          transform-origin: top left;
        }
        60% {
          transform: rotate(80deg);
          transform-origin: top left;
        }
        80% {
          transform: rotate(60deg);
          transform-origin: top left;
        }
        100% {
          transform: translateY(700px);
          opacity: 0;
        }
      }
      .hinge {
        animation: hinge 2s ease-in-out;
      }
      `,
    title: "Hinge",
  },
  {
    name: "pulse",
    cssCode: `
      @keyframes pulse {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
      }
      .pulse {
        animation: pulse 1s ease-in-out infinite;
      }
      `,
    title: "Pulse",
  },
  {
    name: "roll-in",
    cssCode: `
      @keyframes rollIn {
        from {
          transform: translateX(-100%) rotate(-120deg);
          opacity: 0;
        }
        to {
          transform: translateX(0) rotate(0);
          opacity: 1;
        }
      }
      .roll-in {
        animation: rollIn 1s ease-in-out;
      }
      `,
    title: "Roll In",
  },
];

export const clipPaths = [
  {
    code: `
    <div className="box-wrap ">
<div className="box"></div>
<div className="content">Click Me!</div>
</div>
////////////////////// css code ////////////////////////
  margin: 8px;
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
    no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
 
.content {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
}

.box-wrap:hover .box {
  clip-path: circle(150% at 100% 100%);
}

`,
className: "",
},
{
  code: `<div className="box-wrap ">
<div className="box type-2"></div>
<div className="content">Click Me!</div>
</div>  
////////////////////// css code ////////////////////////
margin: 8px;
position: relative;
width: 300px;
height: 300px;
  cursor: pointer;
  background: #222;
  }
  
  .box {
    background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
    no-repeat center center;
    background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  }
  
  .content {
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
  }
  

    
    .type-2 {
     clip-path: polygon(50% 50%, 100% 0, 50% 50%, 0% 100%);
    }
    
    `,
    className: "type-2",
  },
  {
    code: `<div className="box-wrap ">
    <div className="box type-3"></div>  
<div className="content">Click Me!</div>
</div>  
////////////////////// css code ////////////////////////
margin: 8px;
position: relative;
width: 300px;
height: 300px;
cursor: pointer;
background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
  no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.content {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
  }
  

    
    .type-3 {
      clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
    }
    
    
    
`,
    className: "type-3",
  },
  {
    code: `<div className="box-wrap ">
    <div className="box type-4"></div>
    <div className="content">Click Me!</div>
    </div>  
    ////////////////////// css code ////////////////////////
    margin: 8px;
    position: relative;
    width: 300px;
    height: 300px;
    cursor: pointer;
    background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
  no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  }
  
  .content {
    font-size: 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555;
    font-family: sans-serif;
    }
    
    .box-wrap:hover .box {
      clip-path: circle(150% at 100% 100%);
      }
      .type-3 {
        clip-path: polygon(0 0, 100% 0, 0 0, 0% 100%);
        }
      
      
        
        
`,
className: "type-4",
},
{
  code: `<div className="box-wrap ">
<div className="box type-5"></div>        
<div className="content">Click Me!</div>
</div>  
////////////////////// css code ////////////////////////
margin: 8px;
position: relative;
width: 300px;
height: 300px;
cursor: pointer;
background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
  no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  }
  
  .content {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
  }
  .type-4 {
    clip-path: polygon(
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%,
  50% 50%
  );
  




`,
    className: "type-5",
  },
  {
    code: `<div className="box-wrap ">
<div className="box type-6"></div>
<div className="content">Click Me!</div>
</div>  
////////////////////// css code ////////////////////////
  margin: 8px;
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
    no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.content {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
}

.box-wrap:hover .box {
  clip-path: circle(150% at 100% 100%);
}

.type-5 {
  clip-path: circle(0% at 50% 50%);
}



`,
    className: "type-6",
  },
  {
    code: `<div className="box-wrap ">
<div className="box type-7"></div>
<div className="content">Click Me!</div>
</div>  
////////////////////// css code ////////////////////////
  margin: 8px;
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
    no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.content {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
}

.box-wrap:hover .box {
  clip-path: circle(150% at 100% 100%);
}

.type-6 {
  clip-path: inset(0 0 100% 0);
}



`,
    className: "type-7",
  },
  {
    code: `<div className="box-wrap ">
<div className="box type-8"></div>
<div className="content">Click Me!</div>
</div>  
////////////////////// css code ////////////////////////
  margin: 8px;
  position: relative;
  width: 300px;
  height: 300px;
  cursor: pointer;
  background: #222;
}

.box {
  background: url("https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg")
    no-repeat center center;
  background-size: cover;
  clip-path: circle(0% at 100% 100%);
  transition: clip-path 0.17s linear;
  z-index: 10;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.content {
  font-size: 1.5rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  font-family: sans-serif;
}

.box-wrap:hover .box {
  clip-path: circle(150% at 100% 100%);
}
.type-7 {
  clip-path: polygon(0 0, 50% 100%, 50% 100%, 100% 0, 100% 0, 50% 100%, 0 0);
}

`,
    className: "type-8",
  },
];
