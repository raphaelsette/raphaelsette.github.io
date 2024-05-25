document.getElementById('alterar-tema').textContent='🌙 Dark';
function mudaTema() {
   var element = document.getElementsByTagName('body')[0];   
   element.classList.toggle("dark");
   
   var button = document.getElementById('alterar-tema');
   if(button.textContent == '🌙 Dark')button.textContent='☀️ Light';
   else button.textContent='🌙 Dark';
}