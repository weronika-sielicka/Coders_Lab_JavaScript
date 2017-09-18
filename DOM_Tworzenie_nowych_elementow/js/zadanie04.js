/**
 * Created by Jacek on 2016-01-12.
 */
 var btn = document.getElementById('remove');
 var list = document.querySelectorAll('li');

 btn.addEventListener("click", function() {
   for (var i=0; i<list.length; i++) {
       list[i].parentNode.removeChild(list[i]);
   }
 });
