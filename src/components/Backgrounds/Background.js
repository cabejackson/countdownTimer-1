import React from 'react'

export default function Background() {
    return (
        <canvas id="canvas" height="500px" width="800px" />
    )
}

// //TO-DO: update this with the "react canvas"
// //
// // constants
// const COLOR_SPACE = "black"; //background
// const COLOR_STARS = "white";
// const STAR_NUM = 200; // number of stars in the starfield...increase = slower animation
// const STAR_SIZE = 0.005; // max star size as a fraction of screen width
// const STAR_SPEED = 0.05; // fraction of screen width per second...how fast they're moving

// // set up the canvas and context
// var canvas = document.createElement("canvas");
// var ctx = canvas.getConte;
// // canvas.height = document.documentElement.clientHeight;
// canvas.height = 1000;
// // canvas.width = document.documentElement.clientWidth;
// canvas.width = 1500;
// document.body.appendChild(canvas);

// //canvas - css?

// // set up the stars
// var stars = [];
// // var starSpeed = STAR_SPEED * canvas.width; //fraction of screen width/sec * screen width
// var starSpeed = STAR_SPEED * 1500; //fraction of screen width/sec * screen width
// //randomSign dictates the direction the stars are traveling
// //positive - towards the right
// //negative - towards the left
// var xv = starSpeed * randomSign() * Math.random();
// // Using Pythagoras' theorem, yVelocity = sqrt(starSpeed^2 - xv^2)
// //starSpeed^2 & xVelocity^2
// //randomSign - it will be traveling upwards or downwards

// var yv = Math.sqrt(Math.pow(starSpeed, 2) - Math.pow(xv, 2)) * randomSign();
// for (let i = 0; i < STAR_NUM; i++) {
//     //randomize star speed
//     let speedMult = Math.random() * 1.5 + 0.5;
//     stars[i] = {
//         r: Math.random() * STAR_SIZE * canvas.width / 2, //radius -- divide by 2 bc radius not diameter
//         x: Math.floor(Math.random() * canvas.width), //x position
//         y: Math.floor(Math.random() * canvas.height), //y position
//         xv: xv * speedMult, //x velocity * speedMultiplier
//         yv: yv * speedMult //y velocity * speedMultiplier
//     }
// }

// //animations in JS need loops
// // set up the animation loop
// let timeDifBetweenFrames, timeLastFrame = 0;
// requestAnimationFrame(loop);

// //better func name?
// //timeNow= time in ms
// function loop(timeNow) {

//     // calculate the time difference
//     timeDifBetweenFrames = timeNow - timeLastFrame;
//     timeLastFrame = timeNow; //keeps of the time for the next frame

//     // draws space background
//     ctx.fillStyle = COLOR_SPACE;
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     // context.fillRect(x, y, canvas.width, canvas.height);

//     // draw the stars
//     ctx.fillStyle = COLOR_STARS;
//     for (let i = 0; i < STAR_NUM; i++) {
//         ctx.beginPath(); //draws circles in JS
//         ctx.arc(stars[i].x, stars[i].y, stars[i].r, 0, Math.PI * 2);
//         ctx.fill();

//         // update the star's x position
//         stars[i].x += stars[i].xv * timeDifBetweenFrames * 0.001;

//         // reposition the star to the other side if it goes off screen
//         //stars[i].x < 0 if it goes off screen
//         //- stars[i].r it's fully off screen
//         if (stars[i].x < 0 - stars[i].r) {
//             stars[i].x = canvas.width + stars[i].r;
//         } else if (stars[i].x > canvas.width + stars[i].r) {
//             stars[i].x = 0 - stars[i].r;
//         }

//         // update the star's y position
//         stars[i].y += stars[i].yv * timeDifBetweenFrames * 0.001;

//         // reposition the star to the other side if it goes off screen
//         if (stars[i].y < 0 - stars[i].r) {
//             stars[i].y = canvas.height + stars[i].r;
//         } else if (stars[i].y > canvas.height + stars[i].r) {
//             stars[i].y = 0 - stars[i].r;
//         }
//     }

//     // call the next frame
//     requestAnimationFrame(loop);
// }

// function randomSign() {
//     //50% of the time randomSign will return a positive or negative
//     return Math.random() >= 0.5 ? 1 : -1;
// }
