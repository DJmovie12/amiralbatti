
    
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
var divs = document.querySelectorAll('.kalan');
var idList = JSON.parse(sessionStorage.getItem('idList'));
console.log(idList);

divs.forEach(function(div) {
    if (div.classList.contains('kalan')) {
      if (idList.includes(div.id)) {
        div.classList.add('gemili-alan');
      }
    }
  });
  
