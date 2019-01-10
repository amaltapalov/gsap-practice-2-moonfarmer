/**
 * Default Libraries
 * If you don't need some libraries, remove unnesessary imports and that's it.
 * -------------------------------------------------------------------------- */
// Importing styles
import './styles.scss';

import './js/space-background';

// GreenSock tools + ScrollMagic
import TweenMax from 'gsap/src/minified/TweenMax.min';
import TimelineMax from 'gsap/src/minified/TimelineMax.min';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// Commen this line for prodution
import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
/* -------------------------------------------------------------------------- */


/* Start coding here ---------------------------------------------------------*/
(() => {
    // init controller
    const controller = new ScrollMagic.Controller();
    // build scene
    const scene = new ScrollMagic.Scene({
          offset: 350,
          triggerHook: 'onLeave'
    })
    .setTween("#planet", 1, {
        css: {
            rotation: -90
        },
        ease: Power0.easeNone,
    })
    .addIndicators({name: "2 (duration: 100)"})
    .addTo(controller);
})();
/* -------------------------------------------------------------------------- */
