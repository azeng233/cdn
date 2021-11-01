new TypeIt("#zcxws", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ZC && XWS")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第一年!")
    .pause(3000)
    .go();

new TypeIt("#talkToXWS", {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();