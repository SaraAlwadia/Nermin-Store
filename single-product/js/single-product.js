var MianImg = document.getElementById("main-img");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = function() {
    MianImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
    MianImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
    MianImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
    MianImg.src = smallImg[3].src;
}