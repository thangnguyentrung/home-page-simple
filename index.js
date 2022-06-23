const checkbox = document.getElementById('checkbox1');
const menuItem = document.getElementById('menu-item1');


checkbox.addEventListener('click',function() {
   if(checkbox.checked) {
      menuItem.style.right = '0';
      menuItem.style.transition = '0.3s';
   } else {
      menuItem.style.right = '-100%';
   }
})