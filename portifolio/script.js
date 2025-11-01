document.querySelectorAll('nav a').forEach(link =>{
    link.addEventListener('click', e =>{
        e.preventDefault();
        const target = link.getAttribute('data-target');
        const section = document.querySelector(`.${target}`);
        if(section) {
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }    
    });
});