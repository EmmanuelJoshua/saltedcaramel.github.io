window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar2").style.top = "0";
    } else {
        document.getElementById("navbar2").style.top = "-56px";
    }
}
