function myImageFunction(productSmallImg) {
    console.log(productSmallImg.src)
    var productFullImg = document.getElementById("img-Box");
    console.log(productFullImg)
    productFullImg.src = productSmallImg.src;
}
var modal = document.getElementById("myModal");
var btn = document.getElementById("zoom");
var img=document.getElementById("img-Box");
var modalImg = document.getElementById("img01");

btn.onclick = function(){
  modal.style.display = "block";
  modalImg.src = img.src;
}

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }