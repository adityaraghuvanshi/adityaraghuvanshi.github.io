// const sliderContainer = document.querySelector(".slider-container");
// const slideRight = document.querySelector(".right-slide");
// const slideLeft = document.querySelector(".left-slide");
// const slidesLength = slideRight.querySelectorAll("div").length;

// let activeSlideIndex = 0;

// let isMouseOverImages = false;

// sliderContainer.addEventListener("mouseenter", () => {
//     isMouseOverImages = true;
// });

// sliderContainer.addEventListener("mouseleave", () => {
//     isMouseOverImages = false;
// });

// slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

// if (activeSlideIndex <= 3) {
//     document.addEventListener("wheel", (event) => {
//         if (event.deltaY > 0) {
//             changeSlide("down");
//         } else {
//             changeSlide("up");
//         }
//     });
// }

// const changeSlide = (direction) => {
//     if (isMouseOverImages) {
//         const sliderHeight = sliderContainer.clientHeight;
//         if (direction === "up") {
//             activeSlideIndex++;
//             if (activeSlideIndex > slidesLength - 1) {
//                 activeSlideIndex = 0;
//             }
//         } else if (direction === "down") {
//             activeSlideIndex--;
//             if (activeSlideIndex < 0) {
//                 activeSlideIndex = slidesLength - 1;
//             }
//         }

//         slideRight.style.transform = `translateY(-${
//             activeSlideIndex * sliderHeight
//         }px)`;
//         slideLeft.style.transform = `translateY(${
//             activeSlideIndex * sliderHeight
//         }px)`;
//     }
// };

const cards = document.querySelectorAll(".card");

function checkScroll() {
    cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 200) {
            card.classList.add("enter");
        } else {
            card.classList.remove("enter");
        }
    });
}

window.addEventListener("scroll", checkScroll);

window.addEventListener("load", checkScroll);

const navBar = document.querySelector(".navBar");
window.addEventListener("scroll", fixNav);

function fixNav() {
    if (window.scrollY > navBar.offsetHeight + 700) {
        navBar.classList.add("active");
    } else {
        navBar.classList.remove("active");
    }
}

const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const username = document.querySelector(".username");
const progressBar = document.querySelector(".progress-bar");

const testimonials = [
    {
        name: "Customer 1",
        text: "We all love word games, don't we? Everyone from young to old loves word games. We remember the days when we used to play in the family, when we were driving in the car and we played the word derivation game from the last letter. Whether you play Scrabble or Text Twist or Word with Friends, they all have similar rules. But sometimes it annoys us when there are words we can't figure out.",
    },
    {
        name: "Customer 2",
        text: "At the beginning of each paragraph, you should aim to provide a clear topic sentence that tells the reader the subject of the paragraph and also connects the paragraph with the previous paragraph or the main topic of the assignment. The following words and expressions are frequently used as paragraph openers and linking expressions. Read through the list and see if  you can find useful ones for your own writing.",
    },
    {
        name: "Customer 3",
        text: "Commercial writing breaks all the rules. Whether or not you find it irritating, your task is to hold your readers attention and get them to read what youve written. The average person doesnt like to see solid blocks of text. It looks like its going to be difficult to get through, and nobody likes to work harder than they have to.",
    },
    {
        name: "Customer 4",
        text: "currently accepted knowledge (Phillips, 2014) with references. Bear in mind that your tutor will want to see some original thought, but will expect it to be motivated according to your reading (Williams et al, 1994). Smith (2004) supports this concept and confirms that academic writing requires longer paragraphs than those generally found in commercial writing or even story-telling. 200 words is really a bit long for any paragraph and since this one is just over 100 words, you’ll soon see why this should be the case (Me, 2015).",
    },
];
let idx = 1;
let isRotationPaused = false;
let progressBarTimeout;

function updateTestimonial() {
    if (isRotationPaused) {
        return;
    }

    const { name, text } = testimonials[idx];
    testimonial.innerHTML = text;
    username.innerHTML = name;

    idx++;

    if (idx > testimonials.length - 1) {
        idx = 0;
    }

    clearTimeout(progressBarTimeout);
    progressBar.style.width = "0";
    progressBarTimeout = setTimeout(() => {
        progressBar.style.width = "100%";
    });
}

setInterval(updateTestimonial, 5000);

testimonialsContainer.addEventListener("mouseenter", () => {
    isRotationPaused = true;
    progressBar.style.animationPlayState = "paused";
});
testimonialsContainer.addEventListener("mouseleave", () => {
    isRotationPaused = false;
    progressBar.style.animationPlayState = "running";
});
