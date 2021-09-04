var fullmenu=["Pepperoni Pizza"," Cheese Pizza"," Veggie Pizza", " Full Meat"];
var updatedmenu=["Pepperoni Pizza"," Cheese Pizza"," Veggie Pizza", " Full Meat"];







function showmenu() {
document.getElementById("listmenu").innerHTML=fullmenu;
} 
function addmenu() {
    var t=("");
    t=document.getElementById("addmenutextbox").value;
    updatedmenu=updatedmenu+", "+t;
    document.getElementById("updatedlistmenu").innerHTML=updatedmenu;
}