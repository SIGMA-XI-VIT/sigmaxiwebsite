setTimeout(() => {
    document.querySelector(".main_preloader").style.display = "none";
    document.querySelector(".main_preloader2").style.display = "flex";
}, 5400);

setTimeout(() => {
    document.querySelector(".main_preloader2").style.display = "none";
    document.querySelector(".main_preloader3").style.display = "flex";
}, 5900);

setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
}, 6900);

document.querySelector(".main_home").addEventListener("mouseover", () => {
    let xyzabc = document.getElementById("homelink");
    xyzabc.classList.add("current");
});

document.querySelector(".main_home").addEventListener("mouseleave", () => {
    let xyzabc = document.getElementById("homelink");
    xyzabc.classList.remove("current");
});

const counters = document.querySelectorAll(".counter");
counters.forEach((xyz) => {
    xyz.innerHTML = 0;
    const updatecounter = () => {
        const tarcount = +xyz.getAttribute("data-target");
        const start = Number(xyz.innerHTML);
        var incr = 0.5;
        if (tarcount == 20) {
            incr = 0.5;
        } else if (tarcount == 40) {
            incr = 1;
        } else if (tarcount == 5000) {
            incr = 125;
        }

        if (start < tarcount) {
            xyz.innerHTML = `${Math.round(start + incr)}`;
            setTimeout(updatecounter, 5);
        } else {
            xyz.innerHTML = tarcount;
        }
    };
    updatecounter();
});


var bigimg = document.getElementById("fimg");
var imgarr = document.querySelectorAll(".bimg");
var arrimglinks = [];
for(let x  of imgarr){
    arrimglinks.push(x.src);
} 
var count_gall = 0;
const specialfunc = (linkofimg) => {
    bigimg.src = linkofimg;
};

const goleftgall = () => {
    let r = 0;
    for(let x in arrimglinks){
        if(arrimglinks[x]==bigimg.src){
            r=x;
            break;
        }
    }
    if(r>=1){
        r--;
        bigimg.src=arrimglinks[r];
    }
};

const gorightgall = () => {
    let r = 0;
    for(let x in arrimglinks){
        if(arrimglinks[x]==bigimg.src){
            r=x;
            break;
        }
    }
    if(r<=7){
        r++;
        bigimg.src=arrimglinks[r];
    }
};

// var rrr=null;
// document.getElementById("showmoreblogs").addEventListener('click',() => {
//     rrr=window.URL.toString();
// });

// document.getElementById("headerbtn_all_blogs").click('click',() => {
//     window.URL=rrr;
// });

