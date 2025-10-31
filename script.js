document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  window.location.href = `mailto:tyler.nicholasefs@gmail.com?subject=New message from ${name}&body=${message}%0AFrom: ${email}`;
});
