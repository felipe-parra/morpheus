function imgPromo(){
    const $img = document.getElementById("imgPromos");
    $img.setAttribute("src","img/promos/logo.jpg");
}
function imgPromo2(){
    const $img = document.getElementById("imgPromos");
    $img.setAttribute("src","img/promos/logo2.jpg");
}
(function tiempoInter(){
    setInterval("imgPromo()",5000);
    setInterval("imgPromo2()",15000);
})();
function searchData(description){
    let mySearch = new Object();
}
