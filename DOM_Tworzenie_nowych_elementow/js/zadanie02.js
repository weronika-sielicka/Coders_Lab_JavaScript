/**
 * Created by Jacek on 2016-01-12.
 */

var orderId = document.getElementById("orderId");
var item =document.getElementById("item");
var quantity =document.getElementById('quantity');
var button =document.getElementById('addBtn');
var table =document.getElementById('orders');


button.addEventListener("click", function(){
//console.log(orderId.value);
var tr = document.createElement("tr");
table.appendChild(tr);
var td1 = document.createElement("td");
td1.innerText = orderId.value;
tr.appendChild(td1);
var td2 = document.createElement("td");
td2.innerText = item.value;
tr.appendChild(td2);
var td3 = document.createElement("td");
td3.innerText = quantity.value;
tr.appendChild(td3);
table.appendChild(newTr);



})
