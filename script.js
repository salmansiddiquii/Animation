/* gsap.from('.header', {
    duration: 1,
    y: '-100%',

})
*/

// document.querySelector("button").addEventListener("click", function () {
/*
gsap.from('.header', {
    duration: 1.5,
    y: '-100%',
    ease: "bounce",

})


gsap.from('.link', {
    duration: 2,
    opacity: 0,
    delay: 0.2,
    stagger: .2
})


gsap.from('.right', {
    duration: 2,
    x: '-100vw',
    delay: .5,
    ease: 'power2.in'

})

gsap.from('.left', {
    duration: 1.5,
    x: '-100%',
    delay: 1,
    ease: 'bounce',
    ease: 'power2.in'

})


gsap.from('.footer', {
    duration: 1,
    ease: 'elastic',
    y: '100%',
    delay: 2
})


gsap.fromTo('button', {
    opacity: 0,
    scale: 0,
    rotation: 720


},
    {
        duration: 1,
        opacity: 1,
        scale: 2,
        rotation: 0,
        delay: 2
    })

*/


/*
const obj = { x: 0 }


gsap.to(obj, {
    x: 100, onUpdate: () => console.log(obj.x)
})


const timeline = gsap.timeline({ default: { duration: 1 } })

timeline.from('.header', {
    y: '-100%',
    ease: "bounce",
    opacity: 0,
    duration: 2
})


    .from('.link', {
        opacity: 0,
        stagger: .2
    })

    .from('.right', {
        x: '-100vw',
        ease: 'power2.in'

    })
    .from('.left', {
        x: '-100%',

        ease: 'bounce',
        ease: 'power2.in'

    })
    .from('.footer', {
        ease: 'elastic',
        y: '100%',

    })

    .fromTo('button', {
        opacity: 0,
        scale: 0,
        rotation: 720


    },
        {
            opacity: 1,
            scale: 2,
            rotation: 0,

        })




const button = document.querySelector("button");

button.addEventListener("click", () => {
    timeline.reverse()
})

*/





document.querySelector("button").addEventListener("click", function () {



    const timeline = gsap.timeline({ default: { duration: 1 } })

    timeline.from('.header', {
        y: "-100%",
        ease: "expo.out",
        duration: 1
    })

        .from(".link", {
            opacity: 0,
            duration: 1,
            delay: 0.5
        })

        .from(".right", {
            x: "-100vw",
            ease: "sine.out",
        })


        .from(".left", {
            x: "-100%",
            ease: 'sine.out',
            delay: 0.5
        })


        .from(".footer", {
            y: "100%",
            ease: 'sine.out'

        })

        .fromTo("button", {
            opacity: 0,
            scale: 0,
            rotation: 0
        }, {
            opacity: 1,
            scale: 1,
            rotation: 720,
            duration: 1,

        })




})




document.querySelector("button").addEventListener("click", () => {

    timeline.reverse()
})
