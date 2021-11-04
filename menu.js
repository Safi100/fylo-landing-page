button = document.getElementById("menu_btn");
navigation = document.getElementById("navbar");
exit= document.getElementById("close_btn");
button.onclick = function () {
navigation.style.right="0";
}
exit.onclick = function(){
    navigation.style.right="-250px";
}