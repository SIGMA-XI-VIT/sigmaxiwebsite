var fff = document.body;
fff.style.height = "100vh";
fff.style.width = "100vw";
fff.style.position = "absolute";
fff.style.left = "0";
fff.style.top = "0";
fff.style.overflow = "hidden";
const prefunc = () => {
    setTimeout(() => {
        document.querySelector(".main_preloader").style.display = "none";
        document.querySelector(".main_preloader2").style.display = "flex";
    }, 2010);
    setTimeout(() => {
        document.querySelector(".main_preloader2").style.display = "none";
        document.querySelector(".main_preloader3").style.display = "flex";
    }, 2400);
    setTimeout(() => {
        document.querySelector(".main_preloader3").style.display = "none";
        document.querySelector(".main_preloader").style.display = "flex";
        // console.log("times");
        prefunc();
    }, 3200);
};

prefunc();

const funcccc = () => {
    fff.style.height = "unset";
    fff.style.width = "unset";
    fff.style.overflowY = "unset";
    fff.style.position = "unset";
    fff.style.left = "unset";
    fff.style.top = "unset";
};

// const funcc2 = () =>{
//     document.querySelector(".main_div_home").style.animationDuration = "0.5s";
//     document.querySelector(".arrow").style.animationDuration = "0.5s";
//     // setTimeout(() => {
//     //     document.querySelector('.leftanimation1').style.display="none";
//     //     document.querySelector(".leftanimation2").style.display="none";
//     //     document.querySelector(".main_home").style.background = "url('images/homebg2.png')";
//     //     document.querySelector(".main_home").style.backgroundSize = "100% 100%";
//     // },1000);
// };

const allfunc = window.addEventListener("load", () => {
    clearTimeout();
    document.querySelector(".preloader").style.display = "none";
    funcccc();
    // funcc2();
});


document.querySelector(".main_home").addEventListener("mouseover", () => {
    let xyzabc = document.getElementById("homelink");
    xyzabc.classList.add("current");
});

document.querySelector(".main_home").addEventListener("mouseleave", () => {
    let xyzabc = document.getElementById("homelink");
    xyzabc.classList.remove("current");
});

document.querySelector(".about_us").addEventListener("mouseover", () => {
    let xyzabc = document.getElementById("aboutuslink");
    xyzabc.classList.add("current");
});

document.querySelector(".about_us").addEventListener("mouseleave", () => {
    let xyzabc = document.getElementById("aboutuslink");
    xyzabc.classList.remove("current");
});

document.querySelector(".allevents").addEventListener("mouseover", () => {
    let xyzabc = document.getElementById("eventslink");
    xyzabc.classList.add("current");
});

document.querySelector(".allevents").addEventListener("mouseleave", () => {
    let xyzabc = document.getElementById("eventslink");
    xyzabc.classList.remove("current");
});

document.querySelector(".publications").addEventListener("mouseover", () => {
    let xyzabc = document.getElementById("blogslink");
    xyzabc.classList.add("current");
});

document.querySelector(".publications").addEventListener("mouseleave", () => {
    let xyzabc = document.getElementById("blogslink");
    xyzabc.classList.remove("current");
});

document
    .querySelector(".our_team_section")
    .addEventListener("mouseover", () => {
        let xyzabc = document.getElementById("ourteamlink");
        xyzabc.classList.add("current");
    });

document
    .querySelector(".our_team_section")
    .addEventListener("mouseleave", () => {
        let xyzabc = document.getElementById("ourteamlink");
        xyzabc.classList.remove("current");
    });
document.querySelector(".footer_sigmaxi").addEventListener("mouseover", () => {
    let xyzabc = document.getElementById("contactuslink");
    xyzabc.classList.add("current");
});

document.querySelector(".footer_sigmaxi").addEventListener("mouseleave", () => {
    let xyzabc = document.getElementById("contactuslink");
    xyzabc.classList.remove("current");
});



var bigimg = document.getElementById("fimg");
var imgarr = document.querySelectorAll(".bimg");
var arrimglinks = [];
for (let x of imgarr) {
    arrimglinks.push(x.src);
}
var count_gall = 0;
const specialfunc = (linkofimg) => {
    bigimg.src = linkofimg;
};

const goleftgall = () => {
    let r = 0;
    for (let x in arrimglinks) {
        if (arrimglinks[x] == bigimg.src) {
            r = x;
            break;
        }
    }
    if (r >= 1) {
        r--;
        bigimg.src = arrimglinks[r];
    }
};

const gorightgall = () => {
    let r = 0;
    for (let x in arrimglinks) {
        if (arrimglinks[x] == bigimg.src) {
            r = x;
            break;
        }
    }
    if (r <= 7) {
        r++;
        bigimg.src = arrimglinks[r];
    }
};

document.getElementById("showmenuheader").addEventListener("click", () => {
    document.getElementById("showmenuheader").style.display = "none";
    document.getElementById("closemenuheader").style.display = "unset";
    document.querySelector(".right_header2").style.display = "flex";
});

document.getElementById("closemenuheader").addEventListener("click", () => {
    document.getElementById("closemenuheader").style.display = "none";
    document.getElementById("showmenuheader").style.display = "unset";
    document.querySelector(".right_header2").style.display = "none";
});

var jsonstring1 = `{
    "obj1":{
        "imglink":"images/researchgateway.png",
        "tag":"Research",
        "date":"6th November 2021",
        "heading":"Research Gateway",
        "desc":"Sigma Xi is here for you with an event, Research Gateway, to guide you in giving your research career a kickstart. The event will provide an in-depth idea of diverse aspects of research."
    },
    "obj2":{
        "imglink":"images/gcm_devansh.png",
        "tag":"Open Source",
        "date":"10th October 2021",
        "heading":"Git Commit Merge X Hacktober Fest 2021",
        "desc":"A promising session on GitHub and its benefits, for all the coders and aspiring coders out there! How to kick off your own journey on it, along with a step by step guide on how to get going with it."
    },
    "obj3":{
        "imglink":"images/counttofiveg.png",
        "tag":"5G Technology",
        "date":"2nd October 2021",
        "heading":"Count to 5G",
        "desc":"Count to 5G, a seminar on the evolution of 5G in an attempt to understand this journey. A journey that we deem important for it has led to the betterment of humans through the power of networking."
    },
    "obj4":{
        "imglink":"images/rendezvous.png",
        "tag":"Research",
        "date":"29th August 2021",
        "heading":"Rendezvous : The Research Stream Ep 1",
        "desc":"Sigma Xi presents the first episode of Rendezvous: The Research Stream. Anshuman Acharya joining us to inspire the young minds with his past research work, current objectives and future ideas."
    },
    "obj5":{
        "imglink":"images/gradience.png",
        "tag":"UI/UX",
        "date":"20th August 2021",
        "heading":"Gradience",
        "desc":"Sigma Xi is back with yet another workshop, Gradience. Accentuating the unique characteristics of UI/UX Design to help you kickstart your passion for UI/UX."
    },
    "obj6":{
        "imglink":"images/bioverse.png",
        "tag":"Bioprocessing",
        "date":"29th May 2021",
        "heading":"Bioverse",
        "desc":"Sigma Xi brings to you BioVerse. It will help bring insight into the technical applications, scope and industrial exposure of research in bioprocessing."
    },
    "obj7":{
        "imglink":"images/outworlds.png",
        "tag":"Astrophysics",
        "date":"21st March 2021",
        "heading":"Outerworlds",
        "desc":"A promising session on GitHub and its benefits, for all the coders and aspiring coders out there! How to kick off your own journey on it, along with a step by step guide on how to get going with it."
    },
    "obj8":{
        "imglink":"images/incryptus.png",
        "tag":"Open Source",
        "date":"13th February 2021",
        "heading":"Incryptus",
        "desc":"Incryptus, a one-stop solution to all of your questions. From the humble beginnings of distributed ledgers and the birth of blockchain as a concept, explore what makes this form of currency so unique."
    }
}`;
var jsonstring2 = `{
    "obj1":{
        "imglink":"images/researchunplugged.png",
        "tag":"Research",
        "date":"16th November 2020",
        "heading":"Research Unplugged",
        "desc":"Sigma Xi is back with another research-oriented event in collaboration with Phoenix Global -' Research Unplugged'. Mr. Sujay Pandey and Ms. Sanya Gupta joining the session to enlighten us about the art of writing research papers."
    },
    "obj2":{
        "imglink":"images/trendinganaltyics.png",
        "tag":"Data Analytics",
        "date":"8th November 2020",
        "heading":"Trending Analytics",
        "desc":"Sigma Xi is back with yet another event, 'Trending Analytics', with our speaker Mr. Sumitro Mukherjee, who could help you clear all your queries in an interactive mind-boggling talk show."
    },
    "obj3":{
        "imglink":"images/matrixexpo.png",
        "tag":"Competitive Coding",
        "date":"17th October 2020",
        "heading":"Matrix Exponentiation",
        "desc":"Sigma Xi is back with another event, 'Matrix Exponentiation' where we are collaborating with Coding blocks. Mr. Appaar Kamal will be providing the key aspects of techniques and his insights on optimizing the coding skills and helping in diving deep into the world of competitive coding."
    },
    "obj4":{
        "imglink":"images/latexpo.png",
        "tag":"Research Tools",
        "date":"30th September 2020",
        "heading":"LaTeXpo",
        "desc":"SIGMA XI brings to you LaTeXPO, a short beginner’s session on LaTeX. This will help you learn the core of TeX, a no-nonsense super-efficient document preparation system which can boost your productivity sky high."
    },
    "obj5":{
        "imglink":"images/breakin.png",
        "tag":"Cybersecurity",
        "date":"6th September 2020",
        "heading":"Break In",
        "desc":"Sigma Xi is here with yet another event, 'Break In', which will help you to secure yourself and your applications. It will introduce you to the basics of Ethical Hacking, Networking, Linux Fundamentals, Cryptography, Social Engineering, Bug Hunting and much more."
    },
    "obj6":{
        "imglink":"images/roadmaptosuccess.png",
        "tag":"Placement",
        "date":"22nd August 2020",
        "heading":"Roadmap To Success",
        "desc":"Sigma Xi is back with another event called “Roadmap to Success”. It will give an introduction to the recruitment methods of MNCs during placements. Mr Madhav Bahl will be giving tips and advice on how to build a profile to attract offers from MNCs."
    },
    "obj7":{
        "imglink":"images/kickstartux.png",
        "tag":"UI/UX",
        "date":"19th July 2020",
        "heading":"KickStart-UX",
        "desc":"Sigma Xi is conducting yet another research based event called Kickstart UX. It will be give a better insight into the field of UX design and Research."
    },
    "obj8":{
        "imglink":"images/timetoreact.png",
        "tag":"Web development",
        "date":"29th June 2020",
        "heading":"Time to React",
        "desc":"Sigma-XI is conducting a weekly event named 'Time to React'. The React community is an ever-growing, highly researched field, so it dwells well in our purpose.        "
    },
    "obj9":{
        "imglink":"images/healthcareai.png",
        "tag":"Artificial Intelligence",
        "date":"20th June 2020",
        "heading":"Revolutionizing Healthcare with AI",
        "desc":"Sigma-XI in collaboration with I-Quest brings you 'Revolutionizing Healthcare with AI'. Mr. Sanjeev Thukral will tell us about how AI could be of great help to healthcare workers."
    },
    "obj10":{
        "imglink":"images/timemachinequarantine.png",
        "tag":"Machine Learning",
        "date":"15th May 2020",
        "heading":"Tame Machine in Quarantine",
        "desc":"Sigma Xi brings to you a weekly event, Tame Machine in Quarantine which will indulge young minds into this extraordinary field, a helping hand to humans. It will introduce the core Machine Learning algorithms in a very practical and understandable way."
    },
    "obj11":{
        "imglink":"images/scientastic3.png",
        "tag":"Outreach",
        "date":"22nd February 2020",
        "heading":"Scientastic 3.0",
        "desc":"The event was an interactive session with the students of various  School of classes VI and VII in which the members of the Chapter interacted with the students and the activities conducted by the Chapter engaged the students and kept them on their toes throughout the session."
    }
}`;
var jsonstring3 = `{
    "obj1":{
        "imglink":"images/datawizard.png",
        "tag":"Machine Learning",
        "date":"16th October 2019",
        "heading":"Data Wizard",
        "desc":"Sigma Xi is conducting a weekly event 'Data Wizard' to shed light upon the basic concept about Data science; processes, algorithms and systems to extract knowledge and insights from structured and unstructured data."
    },
    "obj2":{
        "imglink":"images/speechtoaction.png",
        "tag":"Internet of Things",
        "date":"22nd September 2019",
        "heading":"Speech to Action",
        "desc":"Speech to Action is a hands on experience workshop. It is the perfect platform for anyone to acquire the motivation to explore the field of IOT using the most common way a person interacts ie verbal speech "
    },
    "obj3":{
        "imglink":"images/facemoji.png",
        "tag":"Machine Learning",
        "date":"21st September 2019",
        "heading":"FACEMOJI",
        "desc":"FACEMOJI is a hands on workshop that gives you an idea on how their face filter apps like the FaceApp works which makes you look 40 years older by guiding the participants to make their own program which will show emoticons based on the facial expressions provided. "
    },
    "obj4":{
        "imglink":"images/configurechatbot.png",
        "tag":"Artificial Intelligence",
        "date":"11th September 2019",
        "heading":"Configure Chatbot",
        "desc":"Configure Chatbot will give a new experience on how to actually build a complete functioning chatbot by engaging voice and text based conversational interfaces, powered by AI."
    },
    "obj5":{
        "imglink":"images/sensorexplore.png",
        "tag":"Electronics",
        "date":"24th August 2019",
        "heading":"Sensor Explore 1.0",
        "desc":"The event will feature the use of sensors in day to day life, its applications. The event will emphasis more on the working of Passive InfraRed sensor, ultrasonic sensor, accelerometer and its applications. "
    },
    "obj6":{
        "imglink":"images/netcom.png",
        "tag":"Computer Networks",
        "date":"7th August 2019",
        "heading":"Netcomm 1.0",
        "desc":"The event was based on the current trends and improvements in network and communication. TCP/IP specifies how data is exchanged over the internet by providing end-to-end communications."
    },
    "obj7":{
        "imglink":"images/analofiot.png",
        "tag":"Internet of Things",
        "date":"20th March 2019",
        "heading":"Nuanced Analysis of Internet of Things",
        "desc":"The event aimed to give the participants an idea about what IOT is and what are its applications in the real world and influence them to learn it by showing some projects based on IOT."
    },
    "obj8":{
        "imglink":"images/outreach19.png",
        "tag":"Outreach",
        "date":"28th February 2019",
        "heading":"Outreach’19",
        "desc":"Indeed an endeavor of showing the little children fundamental coding which they find intriguing, went fruitful! Children today, were instructed how to print the very feared numerical tables utilizing PCs and codes, amongst numerous different things."
    },
    "obj9":{
        "imglink":"images/divedeeptoos.png",
        "tag":"Open Source",
        "date":"20th February 2019",
        "heading":"Deep Dive to Open Source",
        "desc":"The event was based on the importance of open source and by one should contribute towards open Source Programming. It also included the uses of GitHub. They provided them with the vivid knowledge on Open source."
    },
    "obj10":{
        "imglink":"images/devicenmaster.png",
        "tag":"Software Development",
        "date":"6th February 2019",
        "heading":"Device n Master",
        "desc":"The event was based on the importance of writing good algorithms, calculation of time complexity, big O notation. It is an integral and vital part of any student's academics, be it in the field of computer science, electrical or mechanical."
    },
    "obj11":{
        "imglink":"images/dreamteam.png",
        "tag":"Riviera",
        "date":"7th January 2019",
        "heading":"Dream Team",
        "desc":"The event was based on cricket and football auction with aim of building a best team out of a certain pool of players. There were total of 2 rounds conducted, one for auctioning cricket players, and another for auctioning football players."
    }
    
}`;
var jsonstring4 = `{
    "obj1":{
        "imglink":"images/stepstoml.png",
        "tag":"Machine Learning",
        "date":"20th December 2018",
        "heading":"Steps to Machine Learning",
        "desc":"Sigma Xi organized an event on artificial neural network already and hence in continuation with that topic event on Machine Learning was organized."
    },
    "obj2":{
        "imglink":"images/annetwork.png",
        "tag":"Deep Learning",
        "date":"24th October 2018",
        "heading":"Artificial Neural Network",
        "desc":"Sigma Xi organized an interactive workshop on the Fundamentals of Quantum Computing, where the quantum theory was merged with practical computing to get into the depth of quantum computing and its implementations."
    },
    "obj3":{
        "imglink":"images/quantumen.png",
        "tag":"Quantum Mechanics",
        "date":"10th October 2018",
        "heading":"Quantum Entanglement",
        "desc":"Sigma Xi conducted a workshop entitled 'Quantum Entanglement', which portrayed the principles of quantum mechanics and computation. The workshop helped the students to understand the basics of the existence of the occurrence of cosmological events such as the Big Bang."
    },
    "obj4":{
        "imglink":"images/facemoji2018.png",
        "tag":"Machine Learning",
        "date":"9th September 2018",
        "heading":"FACEMOJI",
        "desc":"Sigma Xi conducted a workshop entitled 'Facemoji' which applied principles of Machine Learning, Image Processing and Python programming to design a model. Here we are, bringing Facemoji to life by tracking your face in real time."
    },
    "obj5":{
        "imglink":"images/plantifier.png",
        "tag":"Electronics",
        "date":"8th September 2018",
        "heading":"Plantifier",
        "desc":"Sigma Xi successfully conducted 'Plantifier' workshop on the 8th of September, 2018. The workshop was very interactive and informative which elaborated on the concepts of machine learning and image processing."
    },
    "obj6":{
        "imglink":"images/aero18.png",
        "tag":"Aerodynamics",
        "date":"1st August 2018",
        "heading":"Aero 18",
        "desc":"Sigma Xi organized an interactive event on aerodynamics in association with Falcons where the participants gained a lot of knowledge about the fundamental principles of Aerodynamics and had a glimpse into world of flight."
    },
    "obj7":{
        "imglink":"images/ideastoinnovate.png",
        "tag":"Research",
        "date":"28th March 2018",
        "heading":"Ideas To Innovate",
        "desc":"Sigma Xi organized 'Ideas To Innovate', which was an idea pitching event in which we encouraged students to come up with simple solutions that could improve our day to day life."
    },
    "obj8":{
        "imglink":"images/artofrap.png",
        "tag":"Research",
        "date":"14th March 2018",
        "heading":"Art of Research And Publication",
        "desc":"Sigma Xi conducted this event to enlighten the students about the importance of research and how students can pursue research at higher level. Students were inspired to choose various topics of their interest."
    },
    "obj9":{
        "imglink":"images/interactivereasearchersmeet.png",
        "tag":"Research",
        "date":"24th February 2018",
        "heading":"Interactive Researchers’ Meet 1.0 ",
        "desc":"Sigma Xi, in association with Hasura, a development platform, hosted an interactive session among developers which  is the first of its kind community of developers working across various chapters and clubs in VIT. "
    }
    
}`;

$("#eventselect").change(() => {
    $(".main_main_events_showcase").empty();
    let count1 = 0;
    if ($("#eventselect").val() == "20212022") {
        var obj = JSON.parse(jsonstring1);
        for (let x in obj) {
            if (count1 >= 4) {
                break;
            }
            $(".main_main_events_showcase").append(`
            <div class="card_event_showcase">
    <img src="${obj[x].imglink}" class="dontcare">
    <div class="one_card">
        <p class="dontcare">${obj[x].tag}</p>
        <p class="dontcare">${obj[x].date}</p>
    </div>
    <div class="right_event">
        <p class="heading_event_showcase">${obj[x].heading}</p>
        <p class="event_desc_showcase">${obj[x].desc}</p>
    </div>
</div>`);
            count1++;
        }
    } else if ($("#eventselect").val() == "20202021") {
        var obj = JSON.parse(jsonstring2);
        for (let x in obj) {
            if (count1 >= 4) {
                break;
            }
            $(".main_main_events_showcase").append(`
            <div class="card_event_showcase">
    <img src="${obj[x].imglink}" class="dontcare">
    <div class="one_card">
        <p class="dontcare">${obj[x].tag}</p>
        <p class="dontcare">${obj[x].date}</p>
    </div>
    <div class="right_event">
        <p class="heading_event_showcase">${obj[x].heading}</p>
        <p class="event_desc_showcase">${obj[x].desc}</p>
    </div>
</div>`);
            count1++;
        }
    } else if ($("#eventselect").val() == "20192020") {
        var obj = JSON.parse(jsonstring3);
        for (let x in obj) {
            if (count1 >= 4) {
                break;
            }
            $(".main_main_events_showcase").append(`
            <div class="card_event_showcase">
    <img src="${obj[x].imglink}" class="dontcare">
    <div class="one_card">
        <p class="dontcare">${obj[x].tag}</p>
        <p class="dontcare">${obj[x].date}</p>
    </div>
    <div class="right_event">
        <p class="heading_event_showcase">${obj[x].heading}</p>
        <p class="event_desc_showcase">${obj[x].desc}</p>
    </div>
</div>`);
            count1++;
        }
    } else if ($("#eventselect").val() == "20182019") {
        var obj = JSON.parse(jsonstring4);
        for (let x in obj) {
            if (count1 >= 4) {
                break;
            }
            $(".main_main_events_showcase").append(`
            <div class="card_event_showcase">
    <img src="${obj[x].imglink}" class="dontcare">
    <div class="one_card">
        <p class="dontcare">${obj[x].tag}</p>
        <p class="dontcare">${obj[x].date}</p>
    </div>
    <div class="right_event">
        <p class="heading_event_showcase">${obj[x].heading}</p>
        <p class="event_desc_showcase">${obj[x].desc}</p>
    </div>
</div>`);
            count1++;
        }
    }
});

let showfull = (a, b) => {
    document.querySelector(".fulleventinfo").style.display = "flex";
    $(".fulleventinfo").empty();
    fff.style.height = "100vh";
    fff.style.width = "100vw";
    fff.style.position = "absolute";
    fff.style.left = "0";
    fff.style.top = "0";
    fff.style.overflow = "hidden";
    let arrobj = a.children;
    let imlink = arrobj[0].src;
    let yy = arrobj[1].children;
    let yy1 = yy[0].innerHTML; //tag
    let yy2 = yy[1].innerHTML; //date
    let zz = arrobj[2].children;
    let zz1 = zz[0].innerHTML; //heading
    let zz2 = zz[1].innerHTML; //desc
    $(".fulleventinfo").append(`
    <div class="header_all_blogs">
                    <div class="aaaaalalalal">
                        <div class="left_abcd">
                            <img src="images/sigmalogowhite.png">
                        </div>
                        <div class="right_abcd">
                            <button id="header_go_back_btn_events_main_page">Go Back</button>
                        </div>
                    </div>
                </div>`);
    $(".fulleventinfo").append(`
    <div class="main_thing_fulleventinfo">
                    <div class="main_main_thing_fulleventinfo">
                        <img src="${imlink}">
                        <div class="right_full">
                            <div class="right_tagdate">
                                <p>${yy1}</p>
                                <p>${yy2}</p>
                            </div>
                            <p class="heading_full">${zz1}</p>
                            <p class="desc_full">${zz2}</p>
                        </div>
                    </div>
                </div>
    `);
    $("#header_go_back_btn_events_main_page").click(() => {
        document.querySelector(".fulleventinfo").style.display = "none";
        funcccc();
    });
    b();
};

if ($(window).width() <800) {
    showfull = (a,b) => {
        console.log("no");
    };
}

$(window).resize(function () {
    if ($(window).width() <800) {
        // showfull = (a,b) => {
        //     console.log("no");
        // };
    }   
});


var teamobjs20222023 = `{
"obj2":{
    "imglink":"team_images/rujul.jpeg",
    "insta_link":"https://www.instagram.com/rujulsrivastava",
    "linkedin_link":"https://www.linkedin.com/in/rujul-srivastava-5654911b9",
    "name":"Rujul Srivastava",
    "position":"Chairperson"
},
"obj3":{
    "imglink":"team_images/krish.jpeg",
    "insta_link":"https://www.instagram.com/_kri5h92_",
    "linkedin_link":"https://www.linkedin.com/in/krish-g-jain-1b4709204/",
    "name":"Krish Jain",
    "position":"Vice - Chairperson"
},
"obj4":{
    "imglink":"team_images/ananya.jpeg",
    "insta_link":"https://www.instagram.com/not_a_cursed_child/",
    "linkedin_link":"https://www.linkedin.com/in/ananya-pantvaidya-715255210/",
    "name":"Ananya Pantvaidya",
    "position":"Secretary"
},
"obj5":{
    "imglink":"team_images/anushka.jpeg",
    "insta_link":"https://www.instagram.com/srivas_anu/",
    "linkedin_link":"https://www.linkedin.com/in/anushka-srivastava-45bb23207/",
    "name":"Anushka Srivastava",
    "position":"Co - Secretary"
},
"obj6":{
    "imglink":"team_images/aaditya.jpeg",
    "insta_link":"https://www.instagram.com/aadityakumra_",
    "linkedin_link":"https://www.linkedin.com/in/aaditya-kumra",
    "name":"Aaditya Kumra",
    "position":"Research and Development Head"
},
"obj7":{
    "imglink":"team_images/devansh.jpeg",
    "insta_link":"https://www.instagram.com/devv.ansh",
    "linkedin_link":"https://www.linkedin.com/in/devansh-sehgal/",
    "name":"Devansh Sehgal",
    "position":"Technical Head"
},
"obj8":{
    "imglink":"team_images/kinit.jpeg",
    "insta_link":"https://www.instagram.com/kinitsai",
    "linkedin_link":"https://www.linkedin.com/in/kinit-sai-devatha",
    "name":"Kinit Sai",
    "position":"Design Head"
},
"obj9":{
    "imglink":"team_images/sabrina.jpeg",
    "insta_link":"https://www.instagram.com/sabrinamanickam31",
    "linkedin_link":"https://www.linkedin.com/in/sabrina-manickam",
    "name":"Sabrina Manickam",
    "position":"Editorial Head"
},
"obj10":{
    "imglink":"team_images/shreyas.jpeg",
    "insta_link":"https://www.instagram.com/shrey.ass_",
    "linkedin_link":"https://www.linkedin.com/in/shreyas-singh-0ab98a208/",
    "name":"Shreyas Singh",
    "position":"PR Head"
},
"obj11":{
    "imglink":"team_images/master.jpeg",
    "insta_link":"https://www.instagram.com/its_master_1",
    "linkedin_link":"https://www.linkedin.com/in/mastermuskan",
    "name":"Master Muskan",
    "position":"Finance Head"
},
"obj12":{
    "imglink":"team_images/saaketh.jpeg",
    "insta_link":"https://www.instagram.com/saaketh_9616/",
    "linkedin_link":"https://www.linkedin.com/in/priya-saaketh-madabhushi-2341691bb/",
    "name":"Priya Saaketh Madabhushi",
    "position":"Web Lead"
},
"obj13":{
    "imglink":"team_images/durgashree.jpeg",
    "insta_link":"https://www.instagram.com/durgashree.n15/",
    "linkedin_link":"https://www.linkedin.com/in/durga-shree-n-87271a1ba/",
    "name":"Durga Shree N",
    "position":"Operations Lead"
}
}`;

var teamobjs20212022 = `{
"obj2":{
    "imglink":"team_images/reva.jpeg",
    "insta_link":"https://www.instagram.com/reva_0012/",
    "linkedin_link":"https://www.linkedin.com/in/revamunish/",
    "name":"Reva Munish",
    "position":"Chairperson"
},
"obj3":{
    "imglink":"team_images/samabrita.jpg",
    "insta_link":"https://www.instagram.com/samabrita_biswas/",
    "linkedin_link":"https://www.linkedin.com/in/samabritabiswas/",
    "name":"Samabrita Biswas",
    "position":"Secretary"
},
"obj4":{
    "imglink":"team_images/vaibhav.jpg",
    "insta_link":"https://www.instagram.com/vaibhav_dh/",
    "linkedin_link":"https://www.linkedin.com/in/vaibhav-dhirendra/",
    "name":"Vaibhav Dhirendra",
    "position":"Vice Chairperson"
},
"obj5":{
    "imglink":"team_images/shakti.jpeg",
    "insta_link":"https://www.instagram.com/shakthit_01/",
    "linkedin_link":"https://www.linkedin.com/in/shakthi-thanigaivel/",
    "name":"Shakthi T",
    "position":"Editorial Head"
},
"obj6":{
    "imglink":"images/team1.png",
    "insta_link":"https://www.instagram.com/_anish.pattnaik_/",
    "linkedin_link":"https://www.linkedin.com/in/anish-pattnaik-b41994196/",
    "name":"Anish Pattnaik",
    "position":"Design Head"
},
"obj7":{
    "imglink":"images/team1.png",
    "insta_link":"https://www.instagram.com/vicek_s/",
    "linkedin_link":"https://www.linkedin.com/in/vivek-sinha-780b1b1a4/",
    "name":"Vivek Sinha",
    "position":"Program Chair"
},
"obj8":{
    "imglink":"team_images/priyanshu.jpeg",
    "insta_link":"https://www.instagram.com/priyanshu5378/",
    "linkedin_link":"https://www.linkedin.com/in/priyanshu-raj-5a37381a3/",
    "name":"Priyanshu Raj",
    "position":"Technical Head"
},
"obj9":{
    "imglink":"images/team1.png",
    "insta_link":"https://www.instagram.com/poorneshadhithya/",
    "linkedin_link":"https://www.linkedin.com/in/poorneshadhithya/",
    "name":"Poornesh Adhithya",
    "position":"Technical Head"
},
"obj10":{
    "imglink":"images/team1.png",
    "insta_link":"https://www.instagram.com/satyampadhi/",
    "linkedin_link":"https://www.linkedin.com/in/satyam-padhi-3315b91a3/",
    "name":"Satyam Padhi",
    "position":"PR Head"
},
"obj11":{
    "imglink":"images/team1.png",
    "insta_link":"https://www.instagram.com/somilkuchhal/",
    "linkedin_link":"https://www.linkedin.com/in/somilkuchhal/",
    "name":"Somil Kuchhal",
    "position":"Finance Head"
}
}
`;


document.getElementById("teamselect").addEventListener('change',() => {
    $(".our_team_main").empty();
    if(document.getElementById("teamselect").value=="20222023"){
        var obj2022 = JSON.parse(teamobjs20222023);
        for(var x in obj2022){
            $(".our_team_main").append(`
            <div class="card_our_team">
                    <img src="${obj2022[x].imglink}">
                    <a href="${obj2022[x].linkedin_link}" target="blank">
                        <ion-icon name="logo-linkedin" class="linkboard"></ion-icon>
                    </a>
                    <a href="${obj2022[x].insta_link}" target="blank">
                        <ion-icon name="logo-instagram" class="instaboard"></ion-icon>
                    </a>
                    <div>
                        <p class="heading_div_team">${obj2022[x].name}</p>
                        <p class="role_our_team">${obj2022[x].position}</p>
                    </div>
                </div>
            `);
        }
    }
    else if(document.getElementById("teamselect").value=="20212022"){
        var obj2021 = JSON.parse(teamobjs20212022);
        for(var x in obj2021){
            $(".our_team_main").append(`
            <div class="card_our_team">
                    <img src="${obj2021[x].imglink}">
                    <a href="${obj2021[x].linkedin_link}" target="blank">
                        <ion-icon name="logo-linkedin" class="linkboard"></ion-icon>
                    </a>
                    <a href="${obj2021[x].insta_link}" target="blank">
                        <ion-icon name="logo-instagram" class="instaboard"></ion-icon>
                    </a>
                    <div>
                        <p class="heading_div_team">${obj2021[x].name}</p>
                        <p class="role_our_team">${obj2021[x].position}</p>
                    </div>
                </div>
            `);
        }
    }
});