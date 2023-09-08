/* MENU ATIVO */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 700,
})

scrollReveal.reveal(
    `#header, #home .title, #home img`,
    { interval: 100}
    )


    document.addEventListener("DOMContentLoaded", function() {
        const menuLinks = document.querySelectorAll("nav li a");
        const sections = document.querySelectorAll("section");
    
        function setActiveLink() {
        const scrollPosition = window.scrollY;
    
        sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute("id");
    
        if (scrollPosition >= sectionTop - 50 && scrollPosition < sectionTop + sectionHeight - 50) {
            menuLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
            }
            });
        }
        });
        }
    
        window.addEventListener("scroll", setActiveLink);
    });
    
    const header = document.querySelector('#header')
    const navHeight = header.offsetHeight
    
    function changeHeaderWhenScroll() {
        if (window.scrollY >= navHeight) {
            // scroll é maior que a altura do header
    
            header.classList.add('scroll')
        } else {
            // menor que a altura do header
            header.classList.remove('scroll')
        }
    }

    const backToTopButton = document.querySelector('.back-to-top')

    function backToTop() {
        if (window.scrollY >= 100) {
            backToTopButton.classList.add('show')
        } else {
            backToTopButton.classList.remove('show')
        }
    }

    const sections = document.querySelectorAll('main section[id]')
    function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document
            .querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active')
        }
    }
}


// CLIQUE NO SANDUICHE PARA ELE SUMIR


// ABRE FECHA O MENU

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}


// QUANDO CLICAR EM UM ITEM DO MENU, ESCONDER O MENU

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

// MUDANÇA DE IDIOMA -------------------------------------------------------------
// const languageSelect = document.getElementById("language-select");
// const greeting = document.getElementById("greeting");
// const story = document.getElementById("story");
// const name = document.getElementById("Nome");

// const inputFullName = document.getElementById("fullname")
// const placeholderFullName = inputFullName.getAttribute("placeholder")


// languageSelect.addEventListener("change", () => {
//     const selectedLang = languageSelect.value;
    // Simule troca de idioma com fade
    // story.style.opacity = 0
    // greeting.style.opacity = 0;
    // nome.style.opacity = 0
    // placeholderFullName = 0
    // setTimeout(() => {
    //     switch (selectedLang) {
    //         case "pt":
    //             greeting.textContent = "Contato.";
    //             story.textContent = "Sua história fará parte da nossa"
    //             nome.textContent = "Nome"
                // placeholderFullName.textContent = "Nome Completo."
            //     break;
            // case "en":
            //     greeting.textContent = "Contact.";
            //     story.textContent = "Your story will be part of ours."
            //     nome.textContent = "Name"
                // placeholderFullName.textContent = "Full Name."

            //     break;
            // case "es":
            //     greeting.textContent = "Contacto.";
            //     break;
            // Adicione mais casos para outros idiomas
        // }
        // setTimeout(() => {
        //     greeting.style.opacity = 1;
        //     story.style.opacity = 1;
        //     nome.style.opacity = 1;
            // placeholderFullName.style.opacity = 1
        // }, 300); // Tempo da animação
    // }, 300); // Tempo da animação
// });


    // SWITCH 

    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle('dark')

            //pegar a tag img
        const img = document.querySelector("#header img")
        const worldIcon = document.querySelector(".language-selector img")
        const arrowSubmit = document.querySelector("#button img")
        //substituir a imagem

        if(html.classList.contains('dark')) {
            //se tiver light mode, adicionar a imagem light
            img.setAttribute('src', './assets/images/logo-white.svg')
            img.setAttribute('alt', 'Logo Figz Studio branca')

            worldIcon.setAttribute('src', './assets/images/icon-world-white.svg')
            worldIcon.setAttribute('alt', 'icone de mundo')

            arrowSubmit.setAttribute('src', './assets/images/submit-arrow-black.svg')
            arrowSubmit.setAttribute('alt', 'ícone de flecha na diagonal preta simbolizando envio')
            

        } else {
            //se tiver sem light mode, manter a imagem normal
            img.setAttribute('src', './assets/images/logo-black.svg')
            img.setAttribute('alt', 'Logo Figz Studio preta')

            worldIcon.setAttribute('src', './assets/images/icon-world.svg')
            worldIcon.setAttribute('alt', 'icone de mundo')

            arrowSubmit.setAttribute('src', './assets/images/submit-arrow.svg')
            arrowSubmit.setAttribute('alt', 'ícone de flecha na diagonal branca simbolizando envio')


        }
    }



    
    window.addEventListener('scroll', function () {
        backToTop()
        changeHeaderWhenScroll()
        activateMenuAtCurrentSection()
    })