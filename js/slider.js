
// This slider is for atleast 5 numbers of slides to n numbers of slides
// you can go through by clicking left or right button or swipe left or right
console.clear()
var sliders = document.querySelectorAll(".slide");
var center = Math.floor(sliders.length / 2);
var leftEndBack = center - 3 >= 0 ? center - 3 : undefined;
var leftEnd = center - 2 >= 0 ? center - 2 : undefined;
var leftMid = center - 1 >= 0 ? center - 1 : undefined;
var rightMid = center + 1 < sliders.length ? center + 1 : undefined;
var rightEnd = center + 2 < sliders.length ? center + 2 : undefined;
var rightEndBack = center + 3 < sliders.length ? center + 3 : undefined;
let touchstartX = 0
let touchendX = 0
let container = document.getElementById('slider-content');
let i = 0
let j = 0
var time = 0;


while (j != center + 1) {
    setTimeout(() => {
        if (i - 3 >= 0) {
            sliders[i - 3].classList.add("position-none")
            sliders[i - 3].classList.remove("position-1")
        }
        if (i - 2 >= 0) {
            sliders[i - 2].classList.add("position-1")
            sliders[i - 2].classList.remove("position-2")
        }
        if (i - 1 >= 0) {
            sliders[i - 1].classList.add("position-2")
            sliders[i - 1].classList.remove("position-3")
        }
        sliders[i].classList.add("position-3")
        sliders[i].classList.remove("position-4")

        sliders[i + 1].classList.add("position-4")
        sliders[i + 1].classList.remove("position-5")

        sliders[i + 2].classList.add("position-5")
        sliders[i + 2].classList.remove("position-none")

        sliders[i + 3].classList.add("position-none")
        i++;
    }, j * 350)
    j++;
}


if (sliders.length > 0) $('.slide').addClass('position-none');


function leftScroll() {
    console.log("happy")

    if (leftEndBack != undefined) {
        sliders[leftEndBack].classList.remove("position-none");
        sliders[leftEndBack].classList.add("position-1");
    }
    else {
        sliders[rightEnd].classList.remove("position-none");
        sliders[rightEnd].classList.add("position-1");
    }

    if (leftEnd != undefined) {
        sliders[leftEnd].classList.remove("position-1");
        sliders[leftEnd].classList.add("position-2");
    }

    if (leftMid != undefined) {
        sliders[leftMid].classList.remove("position-2");
        sliders[leftMid].classList.add("position-3");
    }

    if (center != undefined) {
        sliders[center].classList.remove("position-3");
        sliders[center].classList.add("position-4");
    }

    if (rightMid != undefined) {
        sliders[rightMid].classList.remove("position-4");
        sliders[rightMid].classList.add("position-5");
    }

    if (rightEnd != undefined) {
        sliders[rightEnd].classList.remove("position-5");
        sliders[rightEnd].classList.add("position-none");
    }
    // if(rightEndBack != undefined){
    //   sliders[rightEndBack].classList.remove("position-5");
    //   sliders[rightEndBack].classList.add("position-none");
    // }

    leftEndBack != undefined ? leftEndBack-- : leftEndBack;
    leftEnd != undefined ? leftEnd-- : leftEnd;
    leftMid != undefined ? leftMid-- : leftMid;
    center != undefined ? center-- : center;
    rightMid != undefined ? rightMid-- : rightMid;
    rightEnd != undefined ? rightEnd-- : rightEnd;
    rightEndBack != undefined ? rightEndBack-- : rightEndBack;

    if (leftEndBack != undefined && leftEndBack == -1)
        leftEndBack = sliders.length - 1;
    if (leftEnd != undefined && leftEnd == -1)
        leftEnd = sliders.length - 1;
    if (leftMid != undefined && leftMid == -1)
        leftMid = sliders.length - 1;
    if (center != undefined && center == -1)
        center = sliders.length - 1;
    if (rightMid != undefined && rightMid == -1)
        rightMid = sliders.length - 1;
    if (rightEnd != undefined && rightEnd == -1)
        rightEnd = sliders.length - 1;
    if (rightEndBack != undefined && rightEndBack == -1)
        rightEndBack = sliders.length - 1;
}

function rightScroll() {

    if (leftEnd != undefined) {
        sliders[leftEnd].classList.remove("position-1");
        sliders[leftEnd].classList.add("position-none");
    }
    if (leftMid != undefined) {
        sliders[leftMid].classList.remove("position-2");
        sliders[leftMid].classList.add("position-1");
    }
    if (center != undefined) {
        sliders[center].classList.remove("position-3");
        sliders[center].classList.add("position-2");
    }
    if (rightMid != undefined) {
        sliders[rightMid].classList.remove("position-4");
        sliders[rightMid].classList.add("position-3");
    }
    if (rightEnd != undefined) {
        sliders[rightEnd].classList.remove("position-5");
        sliders[rightEnd].classList.add("position-4");
    }
    if (rightEndBack != undefined) {
        sliders[rightEndBack].classList.remove("position-none");
        sliders[rightEndBack].classList.add("position-5");
    }
    else if (leftEndBack != undefined) {
        sliders[leftEndBack].classList.remove("position-none");
        sliders[leftEndBack].classList.add("position-5");
    }
    else {
        sliders[leftEnd].classList.remove("position-none");
        sliders[leftEnd].classList.add("position-5");
    }

    leftEndBack != undefined ? leftEndBack++ : leftEndBack;
    leftEnd != undefined ? leftEnd++ : leftEnd;
    leftMid != undefined ? leftMid++ : leftMid;
    center != undefined ? center++ : center;
    rightMid != undefined ? rightMid++ : rightMid;
    rightEnd != undefined ? rightEnd++ : rightEnd;
    rightEndBack != undefined ? rightEndBack++ : rightEndBack;

    if (leftEndBack != undefined && leftEndBack == sliders.length)
        leftEndBack = 0;
    if (leftEnd != undefined && leftEnd == sliders.length)
        leftEnd = 0;
    if (leftMid != undefined && leftMid == sliders.length)
        leftMid = 0;
    if (center != undefined && center == sliders.length)
        center = 0;
    if (rightMid != undefined && rightMid == sliders.length)
        rightMid = 0;
    if (rightEnd != undefined && rightEnd == sliders.length)
        rightEnd = 0;
    if (rightEndBack != undefined && rightEndBack == sliders.length)
        rightEndBack = 0;
}

class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof (element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function (evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    handleTouchMove(evt) {
        if (!this.xDown || !this.yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if (Math.abs(this.xDiff) > Math.abs(this.yDiff)) {
            if (this.xDiff > 0) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if (this.yDiff > 0) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function (evt) {
            this.handleTouchMove(evt).bind(this);
        }.bind(this), false);
    }
}

var swiper = new Swipe(container);


//left scroll
$(".left-arrow").on("click", () => {
    setTimeout(() => {
        if (time + 500 < Date.now()) {
            time = Date.now()
            leftScroll()
        }
    }, 0)

});

swiper.onRight(function () {
    leftScroll();
});
swiper.run();


// right scroll
$(".right-arrow").on("click", () => {
    setTimeout(() => {
        if (time + 500 < Date.now()) {
            time = Date.now()
            rightScroll()
        }
    }, 0)
});

swiper.onLeft(function () {
    rightScroll();
});
swiper.run();

function knowMoreToggle(position) {
    const slide = document.querySelectorAll('.slide')[position]
    slide.classList.toggle('active')
}