document.querySelectorAll('.social-links a').forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault(); 

    const url = link.getAttribute('href');

    window.open(url, '_blank');

  });
  
});