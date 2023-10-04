/* MENU ATIVO */


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 700,
})

scrollReveal.reveal(
    `#header, .clients, #footer .footer-text, #footer li`,
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


    // SWITCH 

    function toggleMode() {
        const html = document.documentElement
        html.classList.toggle('dark')

            //pegar a tag img
        const img = document.querySelector("#header img")
        const worldIcon = document.querySelector(".language-selector img")
        const arrowButtom = document.querySelector("#arrow-more")
        //substituir a imagem

        if(html.classList.contains('dark')) {
            //se tiver light mode, adicionar a imagem light
            img.setAttribute('src', './assets/images/logo-white.svg')
            img.setAttribute('alt', 'Logo Figz Studio branca')

            worldIcon.setAttribute('src', './assets/images/icon-world-white.svg')
            worldIcon.setAttribute('alt', 'icone de mundo')

            arrowButtom.setAttribute('src', './assets/images/submit-arrow-black.svg')
            arrowButtom.setAttribute('alt', 'ícone de flecha na diagonal preta simbolizando envio')
            

        } else {
            //se tiver sem light mode, manter a imagem normal
            img.setAttribute('src', './assets/images/logo-black.svg')
            img.setAttribute('alt', 'Logo Figz Studio preta')

            worldIcon.setAttribute('src', './assets/images/icon-world.svg')
            worldIcon.setAttribute('alt', 'icone de mundo')

            arrowButtom.setAttribute('src', './assets/images/submit-arrow.svg')
            arrowButtom.setAttribute('alt', 'ícone de flecha na diagonal branca simbolizando envio')


        }
    }


    ////// ------------------------------------------------------------------------



    function changeLanguage(lang) {
        const translations = {
            pt: {
            header_contact_index: "CONTATO",
            portfolio_index: "PORTFÓLIO",
            portuguese_index: "PORTUGUÊS",
            english_index: "INGLÊS",

            footer_title: "Aguardo seu contato!",
            footer_subtitle: "Solicite um orçamento via email: contato@figzstudio.com",

            },
            en: {
            header_contact_index: "CONTACT",
            portfolio_index: "PORTFOLIO",
            portuguese_index: "PORTUGUESE",
            english_index: "ENGLISH",

            footer_title: "Waiting for your contact!",
            footer_subtitle: "Request a quote via email: contato@figzstudio.com",
            }

            

        };
    
        // Fazer o fade out dos elementos
        // HEADER
        document.getElementById('header_contact_index').style.opacity = 0;
        document.getElementById('portfolio_index').style.opacity = 0;
        document.getElementById('portuguese_index').style.opacity = 0;
        document.getElementById('english_index').style.opacity = 0;
        document.getElementById('home').style.opacity = 0;
        document.getElementById('logo').style.opacity = 0;
        document.getElementById('switch').style.opacity = 0;
        document.getElementById('footer_title').style.opacity = 0;
        document.getElementById('footer_subtitle').style.opacity = 0;
        document.getElementById('behance').style.opacity = 0;
        document.getElementById('instagram').style.opacity = 0;
    

        // SECTIONS



        
    
        // Aguarde um curto período para a animação de fade out
        setTimeout(() => {
          // Atualize os elementos com as traduções
            document.getElementById('header_contact_index').textContent = translations[lang].header_contact_index;
            document.getElementById('portfolio_index').textContent = translations[lang].portfolio_index;
            document.getElementById('portuguese_index').textContent = translations[lang].portuguese_index;
            document.getElementById('english_index').textContent = translations[lang].english_index;
            document.getElementById('footer_title').textContent = translations[lang].footer_title;
            document.getElementById('footer_subtitle').textContent = translations[lang].footer_subtitle;





        // Fazer o fade in dos elementos
        document.getElementById('header_contact_index').style.opacity = 1;
        document.getElementById('portfolio_index').style.opacity = 1;
        document.getElementById('portuguese_index').style.opacity = 1;
        document.getElementById('english_index').style.opacity = 1;
        document.getElementById('home').style.opacity = 1;
        document.getElementById('logo').style.opacity = 1;
        document.getElementById('switch').style.opacity = 1;
        document.getElementById('footer_title').style.opacity = 1;
        document.getElementById('footer_subtitle').style.opacity = 1;
        document.getElementById('behance').style.opacity = 1;
        document.getElementById('instagram').style.opacity = 1;
    

        // SECTIONS

        }, 500); // 500 milissegundos (0.5 segundos)
        }
    








































































    /// ------------------------------------------------------



    
    window.addEventListener('scroll', function () {
        backToTop()
        changeHeaderWhenScroll()
        activateMenuAtCurrentSection()
    })