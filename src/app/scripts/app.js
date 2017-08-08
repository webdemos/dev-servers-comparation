(function () {
  
  console.log('This is app');
  
  var h1 = document.createElement('h1');
  h1.textContent = 'Hello World! 12';
  
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(h1);
  
  
})();