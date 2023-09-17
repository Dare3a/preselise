let dropDownTab = document.querySelector(".dropdown");
let dropDownTabClicable = document.querySelector("#navbarDropdownMenuLink");
let dropDownMenu = document.querySelector(".dropdown-menu");
// Otvaranje dropdown menija u navigaciji onhover
if (dropDownTabClicable) {
    dropDownTab.addEventListener("mouseenter", () => {
        dropDownMenu.classList.add("show");
        console.log("radim");
    });
}
// Zatvaranje dropdown menija u navigaciji na izlaz misa
if (dropDownMenu) {
    let dropDownList = [dropDownTab];
    dropDownList.forEach((element) => {
        element.addEventListener("mouseleave", () => {
            dropDownMenu.classList.remove("show");
            console.log("radim na izlas");
        });
    });
}
// SCROLL TO TOP
document.addEventListener("DOMContentLoaded", function (event) {

    const button = document.querySelector('#back-to-top');

    button.addEventListener('click', function () {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    });

    window.addEventListener('scroll', function () {
        if (window.scrollY < 200) {
            button.style.opacity = "0";
        } else {
            button.style.opacity = "1";
        }
    });

});
// Toast za poslatu poruku u kontakt formi
// namesteno je na click zbog testa na lokalu u produkciji promeniti na submit
$(document).ready(function () {
    $("#form-contact, #form-contact-modal").submit(function () {
        $(".toast").toast({ delay: 1200 });
        $(".toast").toast("show");
        resetForm();
    });
});
// Reset kontakt forme i modal kontakt forme
function resetForm() {
    setTimeout(() => {
        $("#form-contact")[0].reset();
        $("#form-contact-modal")[0].reset();
    }, 1000);

    console.log("resetovao sam formu");
}

const windowWidth = window.innerWidth;
const navigacija = document.querySelector(".navbar");
const navigacijaUl = document.querySelector(".navbar-nav");
const navbarDropped = document.querySelector(".navbar-collapse");
const hamburgerDugme = document.querySelector(".navbar-toggler");
if (windowWidth < 992) {
    let navItems = navigacijaUl.querySelectorAll(".nav-item");
    for (let item of navItems) {
        if (!item.classList.contains("dropdown")) {
            item.addEventListener("click", () => {
                navigationColapse(800);
            });
        } else {
            item.addEventListener("click", () => {
                setTimeout(() => {
                    item.children[1].classList.toggle("prikazan");
                }, 100);
                if (item.children[1].classList.contains("prikazan")) {
                    item.children[1].classList.remove("show");
                } else {
                    item.children[1].classList.add("show");
                }
            });
        }
    }
}

function navigationColapse(interval) {
    setTimeout(() => {
        hamburgerDugme.click();
    }, `${interval}`);
}
