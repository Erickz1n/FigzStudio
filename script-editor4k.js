/* MENU ATIVO */


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
})

scrollReveal.reveal(
    `#header, #video, #text-project, #images, .buttons, #footer .footer-text, #footer li`,
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
        const nextArrow = document.querySelector("#next-arrow")
        const backArrow = document.querySelector("#back-arrow")
        //substituir a imagem

        if(html.classList.contains('dark')) {
            //se tiver light mode, adicionar a imagem light
            img.setAttribute('src', './assets/images/logo-white.svg')
            img.setAttribute('alt', 'Logo Figz Studio branca')

            worldIcon.setAttribute('src', './assets/images/icon-world-white.svg')
            worldIcon.setAttribute('alt', 'icone de mundo')
            
            nextArrow.setAttribute('src', './assets/images/right-arrow-white.svg')
            nextArrow.setAttribute('alt', 'Seta branca para prosseguir para o próximo projeto')

            backArrow.setAttribute('src', './assets/images/left-arrow-white.svg')
            backArrow.setAttribute('alt', 'Seta branca para prosseguir para o projeto anterior')
        } else {
            //se tiver sem light mode, manter a imagem normal
            img.setAttribute('src', './assets/images/logo-black.svg')
            img.setAttribute('alt', 'Logo Figz Studio preta')

            worldIcon.setAttribute('src', './assets/images/icon-world.svg')
            worldIcon.setAttribute('alt', 'icone de mundo')

            nextArrow.setAttribute('src', './assets/images/right-arrow-black.svg')
            nextArrow.setAttribute('alt', 'Seta preta para prosseguir para o próximo projeto')

            backArrow.setAttribute('src', './assets/images/left-arrow-black.svg')
            backArrow.setAttribute('alt', 'Seta preta para prosseguir para o projeto anterior')

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

            subtitle: "Um tanto de sombra, um tanto de criatividade, um tanto de edição. Esse é um projeto que demonstra o poder de uma boa construção visual em um infoproduto. O curso Editor4K é para profissionais que desejam iniciar sua carreira como editor de vídeo de uma forma mais sofisticada e simples, para conseguir seus primeiros dígitos de faturamento em um curto período de tempo. Buscando uma transformação empresarial que mudasse a realidade de suas vidas.",
            follow_me: "Me siga:",
            project_info: "Cliente: Editor4K    |    Serviço: Identidade Visual    |    Ano: 2023    |    Diretor Estratégico: Figz    |    Motion: Fernando Madruga    |  ​​​​​​​Responsável: Figz Studio",

            subtitle_bobcoin: 'Conectando você ao mundo das criptomoedas com tecnologia e intuição. Uma tipografia futurística e elegante foi a melhor escolha para a construção da marca e identidade visual do projeto, onde a letra "b" pode ser utilizada como ícone em reduções ou grafismos. O Bobcoin é mais que um exchange, somos uma plataforma digital que oferece a compra, a venda e a troca de criptoativos. Mas, além disso, somos a primeira empresa digital que oferece formações 100% gratuitas na área. Você vai poder estudar, onde estiver e aprender a como investir em criptoativos, então você vai poder investir seu próprio dinheiro ou quem sabe até descobrir uma nova profissão no mercado financeiro.',


            footer_title: "Aguardo seu contato!",
            footer_subtitle: "Solicite um orçamento via email: contato@figzstudio.com",

            },
            en: {
            header_contact_index: "CONTACT",
            portfolio_index: "PORTFOLIO",
            portuguese_index: "PORTUGUESE",
            english_index: "ENGLISH",
            
            subtitle: "A bit of shading, a bit of creativity, a bit of editing. This is a project that demonstrates the power of a good visual construction in an infoproduct. The Editor4K course is for professionals who want to start their career as a video editor in a more sophisticated and simple way, in order to achieve their first revenue figures in a short period of time. Seeking a business transformation that would change the reality of their lives.",
            follow_me: "Follow me:",
            project_info: "Client: Editor4K    |    Service: Visual Identity    |    Year: 2023    |    Strategic Director: Figz    |    Motion: Fernando Madruga    |  ​​​​​​​Responsible: Figz Studio",


            subtitle_bobcoin: 'Connecting you to the world of cryptocurrencies with technology and intuition.A futuristic and elegant typography was the best choice for building the brand and visual identity of the project, where the letter "b" can be used as an icon in reductions or graphics. Bobcoin is more than an exchange, we are a digital platform that offers the purchase, sale and exchange of crypto assets. But, in addition, we are the first digital company that offers 100% free training in the area. You will be able to study wherever you are and learn how to invest in crypto assets, so you will be able to invest your own money or maybe even discover a new profession in the financial market.',

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
        document.getElementById('subtitle').style.opacity = 0;
        document.getElementById('follow-me').style.opacity = 0;
        document.getElementById('project-informations').style.opacity = 0;
        document.getElementById('instagramfigz').style.opacity = 0;
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
            document.getElementById('subtitle').textContent = translations[lang].subtitle;
            document.getElementById('follow-me').textContent = translations[lang].follow_me;
            document.getElementById('project-informations').textContent = translations[lang].project_info;





        // Fazer o fade in dos elementos
        document.getElementById('header_contact_index').style.opacity = 1;
        document.getElementById('portfolio_index').style.opacity = 1;
        document.getElementById('portuguese_index').style.opacity = 1;
        document.getElementById('english_index').style.opacity = 1;
        document.getElementById('home').style.opacity = 1;
        document.getElementById('logo').style.opacity = 1;
        document.getElementById('switch').style.opacity = 1;
        document.getElementById('instagramfigz').style.opacity = 1;
        document.getElementById('project-informations').style.opacity = 1;

        document.getElementById('footer_title').style.opacity = 1;
        document.getElementById('footer_subtitle').style.opacity = 1;
        document.getElementById('behance').style.opacity = 1;
        document.getElementById('instagram').style.opacity = 1;
        document.getElementById('subtitle').style.opacity = 1;
        document.getElementById('follow-me').style.opacity = 1;

        // SECTIONS

        }, 500); // 500 milissegundos (0.5 segundos)
        }
    








































































    /// ------------------------------------------------------



    
    window.addEventListener('scroll', function () {
        backToTop()
        changeHeaderWhenScroll()
        activateMenuAtCurrentSection()
    })