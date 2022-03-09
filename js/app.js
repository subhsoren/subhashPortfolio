const header = document.querySelector('.header');
for(var i=0; i<=100; i++) {
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    header.appendChild(blocks);
}
function animateBlocks(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-700,700)
        },
        translateY: function(){
            return anime.random(-700,700)
        },
        scale: function(){
            return anime.random(1,5)
        },
        easing: 'linear',
        duration: 3000,
        delay: anime.stagger(10),
        complete: animateBlocks
    })
}
animateBlocks();