/**
 * Created by Jacek on 2016-01-12.
 */

 var p1 = document.getElementsByClassName('first')[0].firstElementChild.children[2];
 console.log(p1);
 var p2 = document.getElementById('second').parentElement.children[3];
 console.log(p2);
 var x = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.firstElementChild.children.length;
 var p3 = document.querySelector('[data-ex="third"]').parentElement.parentElement.lastElementChild.firstElementChild.children[Math.floor(x/2)];
 console.log(p3);

 var p4 = document.querySelector('.forth').parentElement.querySelector('article').querySelectorAll('p')[1];
 console.log(p4);
