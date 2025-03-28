const tabLinks = document.querySelectorAll('.tab-list li');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
  
        tabLinks.forEach(link => link.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
        
     
        link.classList.add('active');
        const target = document.querySelector(link.getAttribute('data-target'));
        target.classList.add('active');
    });
});