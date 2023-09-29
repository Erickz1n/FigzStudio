/* MENU ATIVO */


const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 700,
})

scrollReveal.reveal(
    `#header, #first .title, #first img, #second img, #second .subtitle, #third .title, #third .subtitle, #third .reference, #third img, #fourth .subtitle, #fourth .title, #fourth p, #fourth .line, #fourth a, #fifth details, #fifth summary, #sixth .words, #footer .footer-text, #footer li`,
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
            text_first: "Olá, eu dou vida a histórias através de marcas excepcionais.",
            text_second: "Muito prazer!",
            subtitle_second: "Por trás de todos esses projetos, existe eu, Figz, com mais de 6 anos de experiência e especialidade em logos e identidades visuais, desenvolvemos projetos completos e soluções como design, ilustração, redação, grafismos e criação de sites.",
            reference_second: "Figz, Direção & Design.",
            subtitle_fourth: "Como funciona o meu processo de",
            text_fourth: "Construção de Marcas",

            text_form: "1. Formulário",
            first_paragraph: "Na primeira etapa, faço algumas perguntas ao cliente para entender os objetivos que ele busca e assim, montar uma proposta comercial para podermos dar início ao projeto.",
            
            text_info: "2. Coleta de Informações",
            second_paragraph: "Depois, faço o levantamento de algumas perguntas para entender a real necessidade do cliente e do que ele precisa, é uma fase muito importante, pois é o principal ponto trabalhado para solucionar os problemas.",

            text_search: "3. Pesquisa",
            third_paragraph: "Com as principais informações da marca do cliente, começo a pesquisar sobre o mercado relacionado a sua profissão, toda sua história e informações relevantes.",

            text_map: "4. Mapa Mental",
            fourth_paragraph: "Com a principal característica da marca como base, escolho diversas palavras-chaves dentro de grupos, com o objetivo de buscar uma conceituação da marca e principalmente, um diferencial.",

            text_comp: "5. Composição",
            fifth_paragraph: "Com as principais informações em mãos e um conceito definido, começa a fase de estudo de cores, tipografias, formas, elementos, patterns, etc..",

            text_appli: "6. Aplicabilidade",
            sixth_paragraph: "Para o cliente conseguir enxergar como sua marca vai se comportar no mercado, faço diversas simulações em produtos diversos como cartão de visitas, acessórios, vestimentas, outdoors…",

            text_presentation: "7. Apresentação",
            seventh_paragraph: "Depois do projeto finalizado, monto uma apresentação com todo processo desenvolvido para o cliente.",

            text_delivery: "8. Entrega",
            eighth_paragraph: "Após o projeto ser aprovado, todo o material criado é organizado para entrega em formatos PDF, PNG e JPEG. Assim o cliente sempre terá todos os arquivos em alta qualidade para usar sempre que for necessário.",
            know_more: "Saiba Mais",

            text_briefing: "Será enviado um formulário completo com perguntas institucionais, visuais e conceitos para entendermos tudo sobre sua empresa. Assim, conseguimos definir uma linha de raciocínio eficiente para executar um projeto funcional e apropriado. Após o preenchimento, podemos marcar uma call para alinhar pontos importantes e analisar as perguntas e respostas como um todo.",

            strategy: "Estratégia",

            text_strategy: "Estudaremos os pontos institucionais do briefing para serem representados em características que nos ajudem a encontrar resultados para o seu posicionamento mercadológico. Atributos e o tom de voz da sua empresa serão definidos para designar um caminho comunicativo mais eficaz. Esta metodologia reforça ainda mais os resultados da parte estética geral.",

            synthesis: "Sínteste",
            text_synthesis: "Após a definição estratégica, serão feitas mais pesquisas voltadas para a parte de referências visuais, chegando em um resultado original e principalmente, funcional. O mapping das ideias e conceitos nos direciona para os rascunhos, ideias e execução digital.",

            strategy_slide: "ESTRATÉGIA",
            brand_slide: "MARCA",
            identity_slide: "IDENTIDADE",
            packaging_slide: "EMBALAGEM",
            web_slide: "WEB",



            },
            en: {
            header_contact_index: "CONTACT",
            portfolio_index: "PORTFOLIO",
            portuguese_index: "PORTUGUESE",
            english_index: "ENGLISH",
            text_first: "Hello, I bring stories to life through exceptional brands.",
            text_second: "Great pleasure!",
            subtitle_second: "Behind all these projects, there is me, Figz, with more than 6 years of experience and expertise in logos and visual identities, we develop complete projects and solutions such as design, illustration, writing, graphics and website creation.",
            reference_second: "Figz, Direction & Design.",
            subtitle_fourth: "How my Brand Building",
            text_fourth: "process works",

            text_form: "1. Form",
            first_paragraph: "In the first stage, I ask the client some questions to understand the objectives they are seeking and thus put together a commercial proposal so we can start the project.",

            text_info: "2. Information Collection",
            second_paragraph: "Then, I ask some questions to understand the customer's real needs and what they need, this is a very important phase, as it is the main point worked on to solve the problems.",

            text_search: "3. Search",
            third_paragraph: "With the main information about the client's brand, I begin researching the market related to their profession, all its history and relevant information.",
            
            text_map: "4. Mental map",
            fourth_paragraph: "With the main characteristic of the brand as a base, I choose several keywords within groups, with the aim of seeking a conceptualization of the brand and, mainly, a differentiator.",

            text_comp: "5. Composition",
            fifth_paragraph: "With the main information in hand and a defined concept, the phase of studying colors, typography, shapes, elements, patterns, etc. begins.",

            text_appli: "6. Applicability",
            sixth_paragraph: "For the client to be able to see how their brand will behave in the market, I do several simulations on different products such as business cards, accessories, clothing, billboards...",

            text_presentation: "7. Presentation",
            seventh_paragraph: "For the client to be able to see how their brand will behave in the market, I do several simulations on different products such as business cards, accessories, clothing, billboards...",

            text_delivery: "8. Delivery",
            eighth_paragraph: "After the project is approved, all material created is organized for delivery in PDF, PNG and JPEG formats. This way, the client will always have all the files in high quality to use whenever necessary.",
            
            know_more: "Know More",

            text_briefing: "A complete form will be sent with institutional questions, visuals and concepts so we can understand everything about your company. Thus, we were able to define an efficient line of reasoning to execute a functional and operational project. After completing it, we can schedule a call to align important points and analyze the questions and answers as a whole.",

            strategy: "Strategy",

            text_strategy: "We will study the institutional points of the briefing to be represented in characteristics that help us find results for your market positioning. Your company's attributes and tone of voice will be defined to designate a more effective communicative path. This methodology further reinforces the results of the general aesthetic part.",

            synthesis: "Synthesis",
            text_synthesis: "After the strategic definition, more research will be carried out focusing on visual references, arriving at an original and, mainly, functional result. The mapping of ideas and concepts directs us to drafts, ideas and digital execution.",

            strategy_slide: "STRATEGY",
            brand_slide: "BRAND",
            identity_slide: "IDENTITY",
            packaging_slide: "PACKAGING",
            web_slide: "WEB",


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

        // SECTIONS
        document.getElementById('text-first').style.opacity = 0;
        document.getElementById('text-second').style.opacity = 0;
        document.getElementById('subtitle-second').style.opacity = 0;
        document.getElementById('reference-second').style.opacity = 0;
        document.getElementById('subtitle-fourth').style.opacity = 0;
        document.getElementById('text-fourth').style.opacity = 0;
        document.getElementById('text-form').style.opacity = 0;
        document.getElementById('first-paragraph').style.opacity = 0;

        document.getElementById('text-info').style.opacity = 0;
        document.getElementById('second-paragraph').style.opacity = 0;

        document.getElementById('text-search').style.opacity = 0;
        document.getElementById('third-paragraph').style.opacity = 0;

        document.getElementById('text-map').style.opacity = 0;
        document.getElementById('fourth-paragraph').style.opacity = 0;
    
        document.getElementById('text-comp').style.opacity = 0;
        document.getElementById('fifth-paragraph').style.opacity = 0;

        document.getElementById('text-appli').style.opacity = 0;
        document.getElementById('sixth-paragraph').style.opacity = 0;

        document.getElementById('text-presentation').style.opacity = 0;
        document.getElementById('seventh-paragraph').style.opacity = 0;

        document.getElementById('text-delivery').style.opacity = 0;
        document.getElementById('eighth-paragraph').style.opacity = 0;
    
        document.getElementById('know-more').style.opacity = 0;

        document.getElementById('briefing').style.opacity = 0;
        document.getElementById('text-briefing').style.opacity = 0;


        document.getElementById('strategy').style.opacity = 0;
        document.getElementById('text-strategy').style.opacity = 0;


        document.getElementById('synthesis').style.opacity = 0;
        document.getElementById('text-synthesis').style.opacity = 0;

        document.getElementById('strategy-slide').style.opacity = 0;
        document.getElementById('brand-slide').style.opacity = 0;
        document.getElementById('identity-slide').style.opacity = 0;
        document.getElementById('packaging-slide').style.opacity = 0;
        document.getElementById('web-slide').style.opacity = 0;


        
    
        // Aguarde um curto período para a animação de fade out
        setTimeout(() => {
          // Atualize os elementos com as traduções
            document.getElementById('header_contact_index').textContent = translations[lang].header_contact_index;
            document.getElementById('portfolio_index').textContent = translations[lang].portfolio_index;
            document.getElementById('text-first').textContent = translations[lang].text_first;
            document.getElementById('text-second').textContent = translations[lang].text_second;
            document.getElementById('subtitle-second').textContent = translations[lang].subtitle_second;
            document.getElementById('reference-second').textContent = translations[lang].reference_second;
            document.getElementById('subtitle-fourth').textContent = translations[lang].subtitle_fourth;
            document.getElementById('text-fourth').textContent = translations[lang].text_fourth;
            document.getElementById('text-form').textContent = translations[lang].text_form;
            document.getElementById('first-paragraph').textContent = translations[lang].first_paragraph;

            document.getElementById('text-info').textContent = translations[lang].text_info;
            document.getElementById('second-paragraph').textContent = translations[lang].second_paragraph;

            document.getElementById('text-search').textContent = translations[lang].text_search;
            document.getElementById('third-paragraph').textContent = translations[lang].third_paragraph;

            document.getElementById('text-map').textContent = translations[lang].text_map;
            document.getElementById('fourth-paragraph').textContent = translations[lang].fourth_paragraph;
    
            document.getElementById('text-comp').textContent = translations[lang].text_comp;
            document.getElementById('fifth-paragraph').textContent = translations[lang].fifth_paragraph;
    
            document.getElementById('text-appli').textContent = translations[lang].text_appli;
            document.getElementById('sixth-paragraph').textContent = translations[lang].sixth_paragraph;

            document.getElementById('text-presentation').textContent = translations[lang].text_presentation;
            document.getElementById('seventh-paragraph').textContent = translations[lang].seventh_paragraph;

            document.getElementById('text-delivery').textContent = translations[lang].text_delivery;
            document.getElementById('eighth-paragraph').textContent = translations[lang].eighth_paragraph;

            document.getElementById('know-more').textContent = translations[lang].know_more;

            document.getElementById('text-briefing').textContent = translations[lang].text_briefing;
            document.getElementById('strategy').textContent = translations[lang].strategy;
            document.getElementById('text-strategy').textContent = translations[lang].text_strategy;
            document.getElementById('synthesis').textContent = translations[lang].synthesis;
            document.getElementById('text-synthesis').textContent = translations[lang].text_synthesis;

            document.getElementById('strategy-slide').textContent = translations[lang].strategy_slide;
            document.getElementById('brand-slide').textContent = translations[lang].brand_slide;
            document.getElementById('identity-slide').textContent = translations[lang].identity_slide;
            document.getElementById('packaging-slide').textContent = translations[lang].packaging_slide;
            document.getElementById('web-slide').textContent = translations[lang].web_slide;
            document.getElementById('portuguese_index').textContent = translations[lang].portuguese_index;
            document.getElementById('english_index').textContent = translations[lang].english_index;






        // Fazer o fade in dos elementos
        document.getElementById('header_contact_index').style.opacity = 1;
        document.getElementById('portfolio_index').style.opacity = 1;
        document.getElementById('portuguese_index').style.opacity = 1;
        document.getElementById('english_index').style.opacity = 1;
        document.getElementById('home').style.opacity = 1;
        document.getElementById('logo').style.opacity = 1;
        document.getElementById('switch').style.opacity = 1;

        // SECTIONS

        document.getElementById('text-first').style.opacity = 1;
        document.getElementById('text-second').style.opacity = 1;
        document.getElementById('subtitle-second').style.opacity = 1;
        document.getElementById('reference-second').style.opacity = 1;
        document.getElementById('subtitle-fourth').style.opacity = 1;
        document.getElementById('text-fourth').style.opacity = 1;

        document.getElementById('text-form').style.opacity = 1;
        document.getElementById('first-paragraph').style.opacity = 1;

        document.getElementById('text-info').style.opacity = 1;
        document.getElementById('second-paragraph').style.opacity = 1;

        document.getElementById('text-search').style.opacity = 1;
        document.getElementById('third-paragraph').style.opacity = 1;

        document.getElementById('text-map').style.opacity = 1;
        document.getElementById('fourth-paragraph').style.opacity = 1;
    
        document.getElementById('text-comp').style.opacity = 1;
        document.getElementById('fifth-paragraph').style.opacity = 1;

        document.getElementById('text-appli').style.opacity = 1;
        document.getElementById('sixth-paragraph').style.opacity = 1;

        document.getElementById('text-presentation').style.opacity = 1;
        document.getElementById('seventh-paragraph').style.opacity = 1;

        document.getElementById('text-delivery').style.opacity = 1;
        document.getElementById('eighth-paragraph').style.opacity = 1;

        document.getElementById('know-more').style.opacity = 1;

        document.getElementById('briefing').style.opacity = 1;
        document.getElementById('text-briefing').style.opacity = 1;


        document.getElementById('strategy').style.opacity = 1;
        document.getElementById('text-strategy').style.opacity = 1;


        document.getElementById('synthesis').style.opacity = 1;
        document.getElementById('text-synthesis').style.opacity = 1;

        document.getElementById('strategy-slide').style.opacity = 1;
        document.getElementById('brand-slide').style.opacity = 1;
        document.getElementById('identity-slide').style.opacity = 1;
        document.getElementById('packaging-slide').style.opacity = 1;
        document.getElementById('web-slide').style.opacity = 1;

        }, 500); // 500 milissegundos (0.5 segundos)
        }
    








































































    /// ------------------------------------------------------



    
    window.addEventListener('scroll', function () {
        backToTop()
        changeHeaderWhenScroll()
        activateMenuAtCurrentSection()
    })