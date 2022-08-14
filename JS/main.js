
var yuxari = document.getElementsByClassName("yuxari_cix")[0];
window.addEventListener("scroll", function () {

const mesafe = window.scrollY;

if ( mesafe > 500) {
    yuxari.classList.add("goster");
} else{
    yuxari.classList.remove("goster");
}
});

yuxari.addEventListener("click", function(){
    window.scrollTo(0, 0);
});



// loader


var myDiv;
function myFunction() {
    myDiv = setTimeout(ShowPage,3000);
}


function ShowPage() {
    document.getElementById('loader').style.opacity = "0";
    document.getElementById('all-site').style.opacity = "1";


}






