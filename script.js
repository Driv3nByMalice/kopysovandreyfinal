document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.querySelector('input[type="text"]').value;
  const email = this.querySelector('input[type="email"]').value;
  const message = this.querySelector('textarea').value;

  if (!this.checkValidity()) {
    alert('Пожалуйста, заполните все поля корректно.');
    return;
  }

  const data = {
    name: name,
    email: email,
    message: message
  };

  localStorage.setItem('contactForm', JSON.stringify(data));
  alert(`Заявка отправлена!\nИмя: ${name}\nEmail: ${email}\nОписание проблемы: ${message}`);
});

document.getElementById('subscribe-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value;

  if (!this.checkValidity()) {
    alert('Пожалуйста, введите корректный email.');
    return;
  }

  localStorage.setItem('subscribeEmail', email);
  alert('Спасибо за подписку!');
});
