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

const form = document.getElementById('formCont');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const txtarea = document.getElementById('txtarea').value.trim();

    if(name == ""){
        alert('Por favor preencha o campo Nome !');
        return;
    }

    if(email == ""){
        alert('Por favor preencha o campo Email !');
        return;
    }

    if(txtarea == ""){
        alert('Por favor preencha o campo Mensagem !');
        return;
    }

    alert('Mensagem enviada com sucesso !');
    form.reset();
});

