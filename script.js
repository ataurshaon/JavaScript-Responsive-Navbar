var btnId = document.getElementById('btnId');
var containerId = document.getElementById('containerId');

btnId.addEventListener('click', function(){
    containerId.classList.toggle('open');
})