/* MENU ATIVO */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 700,
})

scrollReveal.reveal(
    `#header, #form .title, #form .text, #form .subtext, #form input, #form select, #form textarea, #form button, #footer .text, #footer .link`,
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

// WHATSAPP INPUT

const input = document.getElementById('telefone');

function formatPhoneNumber() {
    const value = input.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
        formattedValue += '(' + value.substring(0, 2);
    }
    if (value.length > 2) {
        formattedValue += ') ' + value.substring(2, 7);
    }
    if (value.length > 7) {
        formattedValue += '-' + value.substring(7, 11);
    }

    input.value = formattedValue;
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


// SUBMIT

class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if (this.form) {
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event) {
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando...";
    }

    async sendForm(event) {
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });

            // Adicionar um atraso de 2 segundos (2000 milissegundos) antes do redirecionamento
            setTimeout(() => {
                window.location.href = "thanks.html";
            }, 0); // Tempo em milissegundos (2 segundos)

        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init() {
        if (this.form) this.formButton.addEventListener("click", this.sendForm);
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Mensagem enviada!</h1> ", 
    error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();


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

function changeLanguage(lang) {
    const translations = {
        pt: {
        greeting: "Contato.",
        story: "Sua história fará parte da nossa.",
        nome: "Nome",
        name_placeholder: "Nome Completo",
        required1: "(Obrigatório)",
        required2: "(Obrigatório)",
        required3: "(Obrigatório)",
        required4: "(Obrigatório)",
        required5: "(Obrigatório)",
        required6: "(Obrigatório)",
        required7: "(Obrigatório)",
        required8: "(Obrigatório)",
        required9: "(Obrigatório)",
        required10: "(Obrigatório)",

        enterprise: "Empresa",
        enterprise_placeholder: "Nome do Projeto ",

        employees: "Nº de colaboradores",
        employees_placeholder: "Escolha uma opção",
        option_employees1: "1-10 colaboradores",
        option_employees2: "11-50 colaboradores",
        option_employees3: "51-100 colaboradores",
        option_employees4: "100 ou mais",

        billing: "Qual o seu faturamento mensal?",
        billing_placeholder: "Digite um número aproximado",

        investment: "O valor que você espera investir está entre R$3.000,00 & R$15.000,00?",
        investment_placeholder: "Selecione uma opção",
        option_investment1: "Sim",
        option_investment2: "Não",

        where: "Onde nos encontrou?" ,
        where_placeholder: "Ex: Instagram",

        concurrent: "Quais são seus concorrentes",
        concurrent_placeholder: "Nome da(s) empresa(s)",

        message: "Mensagem",
        message_placeholder: "Conte-me um pouco sobre o projeto.",

        submit: "Enviar.",

        footer_title: "Aguardo seu contato!",
        footer_subtitle: "Solicite um orçamento via email: contato@figzstudio.com",

        header_contact: "CONTATO",
        portfolio: "PORTFÓLIO",

        portuguese: "PORTUGUÊS",
        english: "INGLÊS",
        language: "IDIOMA",

        },
        en: {
        greeting: "Contact.",
        story: "Your story will be part of ours.",
        nome: "Name",
        name_placeholder: "Full Name",
        required1: "(Required)",
        required2: "(Required)",
        required3: "(Required)",
        required4: "(Required)",
        required5: "(Required)",
        required6: "(Required)",
        required7: "(Required)",
        required8: "(Required)",
        required9: "(Required)",
        required10: "(Required)",

        enterprise: "Company",
        enterprise_placeholder: "Project Name",

        employees: "No. of employees",
        employees_placeholder: "Select an option",
        option_employees1: "1-10 employees",
        option_employees2: "11-50 employees",
        option_employees3: "51-100 employees",
        option_employees4: "100 or more",

        billing: "What is your monthly billing?",
        billing_placeholder: "Enter an approximate value",

        investment: "Is the amount you expect to invest between R$3,000.00 & R$15,000.00?",
        investment_placeholder: "Select an option",
        option_investment1: "Yes",
        option_investment2: "No",

        where: "Where did you find us?" ,
        where_placeholder: "Eg: Instagram",

        concurrent: "Who are your competitors",
        concurrent_placeholder: "Name of company(ies)",

        message: "Message",
        message_placeholder: "Tell me a little about the project.",

        submit: "Submit.",

        footer_title: "Waiting for your contact!",
        footer_subtitle: "Request a quote via email: contato@figzstudio.com",

        header_contact: "CONTACT",
        portfolio: "PORTFOLIO",

        portuguese: "PORTUGUESE",
        english: "ENGLISH",
        language: "LANGUAGE",
        }
    };

    // Fazer o fade out dos elementos
    document.getElementById('greeting').style.opacity = 0;
    document.getElementById('story').style.opacity = 0;
    document.getElementById('nome').style.opacity = 0;
    document.getElementById('whatsapp').style.opacity = 0;
    document.getElementById('telefone').style.opacity = 0;
    document.getElementById('email').style.opacity = 0;
    document.getElementById('email_placeholder').style.opacity = 0;
    document.getElementById('fullname').style.opacity = 0;
    document.getElementById('required1').style.opacity = 0;
    document.getElementById('required2').style.opacity = 0;
    document.getElementById('required3').style.opacity = 0;
    document.getElementById('required4').style.opacity = 0;
    document.getElementById('required5').style.opacity = 0;
    document.getElementById('required6').style.opacity = 0;
    document.getElementById('required7').style.opacity = 0;
    document.getElementById('required8').style.opacity = 0;
    document.getElementById('required9').style.opacity = 0;
    document.getElementById('required10').style.opacity = 0;
    document.getElementById('enterprise').style.opacity = 0;
    document.getElementById('enterprise_placeholder').style.opacity = 0;
    document.getElementById('employees').style.opacity = 0;
    document.getElementById('employees_placeholder').style.opacity = 0;
    document.getElementById('option_employees1').style.opacity = 0;
    document.getElementById('option_employees2').style.opacity = 0;
    document.getElementById('option_employees3').style.opacity = 0;
    document.getElementById('option_employees4').style.opacity = 0;
    document.getElementById('billing').style.opacity = 0;
    document.getElementById('billing_placeholder').style.opacity = 0;
    document.getElementById('opcoes').style.opacity = 0;
    document.getElementById('investment').style.opacity = 0;
    document.getElementById('investment_placeholder').style.opacity = 0;
    document.getElementById('option_investment1').style.opacity = 0;
    document.getElementById('option_investment2').style.opacity = 0;
    document.getElementById('where').style.opacity = 0;
    document.getElementById('where_placeholder').style.opacity = 0;
    document.getElementById('concurrent').style.opacity = 0;
    document.getElementById('concurrent_placeholder').style.opacity = 0;
    document.getElementById('message').style.opacity = 0;
    document.getElementById('message_placeholder').style.opacity = 0;
    document.getElementById('opcoes2').style.opacity = 0;
    document.getElementById('button').style.opacity = 0;
    document.getElementById('footer_title').style.opacity = 0;
    document.getElementById('footer_subtitle').style.opacity = 0;
    document.getElementById('header_contact').style.opacity = 0;
    document.getElementById('portfolio').style.opacity = 0;
    document.getElementById('home').style.opacity = 0;
    document.getElementById('switch').style.opacity = 0;
    document.getElementById('logo').style.opacity = 0;
    document.getElementById('portuguese').style.opacity = 0;
    document.getElementById('english').style.opacity = 0;
    document.getElementById('language').style.opacity = 0;
    document.getElementById('behance').style.opacity = 0;
    document.getElementById('instagram').style.opacity = 0;





    // Aguarde um curto período para a animação de fade out
    setTimeout(() => {
      // Atualize os elementos com as traduções
        document.getElementById('greeting').textContent = translations[lang].greeting;
        document.getElementById('story').textContent = translations[lang].story;
        document.getElementById('nome').textContent = translations[lang].nome;
        document.getElementById('fullname').placeholder = translations[lang].name_placeholder;
        document.getElementById('required1').textContent = translations[lang].required1;
        document.getElementById('required2').textContent = translations[lang].required2;
        document.getElementById('required3').textContent = translations[lang].required3;
        document.getElementById('required4').textContent = translations[lang].required4;
        document.getElementById('required5').textContent = translations[lang].required5;
        document.getElementById('required6').textContent = translations[lang].required6;
        document.getElementById('required7').textContent = translations[lang].required7;
        document.getElementById('required8').textContent = translations[lang].required8;
        document.getElementById('required9').textContent = translations[lang].required9;
        document.getElementById('required10').textContent = translations[lang].required10;
        document.getElementById('enterprise').textContent = translations[lang].enterprise;
        document.getElementById('enterprise_placeholder').placeholder = translations[lang].enterprise_placeholder;
        document.getElementById('employees').textContent = translations[lang].employees;
        document.getElementById('employees_placeholder').textContent = translations[lang].employees_placeholder;
        document.getElementById('option_employees1').textContent = translations[lang].option_employees1;
        document.getElementById('option_employees2').textContent = translations[lang].option_employees2;
        document.getElementById('option_employees3').textContent = translations[lang].option_employees3;
        document.getElementById('option_employees4').textContent = translations[lang].option_employees4;

        document.getElementById('billing').textContent = translations[lang].billing;
        document.getElementById('billing_placeholder').placeholder = translations[lang].billing_placeholder;
        document.getElementById('investment').textContent = translations[lang].investment;
        document.getElementById('option_investment1').textContent = translations[lang].option_investment1;
        document.getElementById('option_investment2').textContent = translations[lang].option_investment2;
        document.getElementById('investment_placeholder').textContent = translations[lang].investment_placeholder;
        document.getElementById('where').textContent = translations[lang].where;
        document.getElementById('where_placeholder').placeholder = translations[lang].where_placeholder;
        document.getElementById('concurrent').textContent = translations[lang].concurrent;
        document.getElementById('concurrent_placeholder').placeholder = translations[lang].concurrent_placeholder;
        document.getElementById('message').textContent = translations[lang].message;
        document.getElementById('message_placeholder').placeholder = translations[lang].message_placeholder;
        document.getElementById('button').textContent = translations[lang].submit;
        document.getElementById('footer_title').textContent = translations[lang].footer_title;
        document.getElementById('footer_subtitle').textContent = translations[lang].footer_subtitle;
        document.getElementById('header_contact').textContent = translations[lang].header_contact;
        document.getElementById('portfolio').textContent = translations[lang].portfolio;
        document.getElementById('portuguese').textContent = translations[lang].portuguese;
        document.getElementById('english').textContent = translations[lang].english;
        document.getElementById('language').textContent = translations[lang].language;


      // Fazer o fade in dos elementos
        document.getElementById('greeting').style.opacity = 1;
        document.getElementById('story').style.opacity = 1;
        document.getElementById('nome').style.opacity = 1;
        document.getElementById('fullname').style.opacity = 1;
        document.getElementById('whatsapp').style.opacity = 1;
        document.getElementById('telefone').style.opacity = 1;
        document.getElementById('email').style.opacity = 1;
        document.getElementById('email_placeholder').style.opacity = 1;
        document.getElementById('required1').style.opacity = 1;
        document.getElementById('required2').style.opacity = 1;
        document.getElementById('required3').style.opacity = 1;
        document.getElementById('required4').style.opacity = 1;
        document.getElementById('required5').style.opacity = 1;
        document.getElementById('required6').style.opacity = 1;
        document.getElementById('required7').style.opacity = 1;
        document.getElementById('required8').style.opacity = 1;
        document.getElementById('required9').style.opacity = 1;
        document.getElementById('required10').style.opacity = 1;
        document.getElementById('enterprise').style.opacity = 1;
        document.getElementById('enterprise_placeholder').style.opacity = 1;
        document.getElementById('employees').style.opacity = 1;
        document.getElementById('employees_placeholder').style.opacity = 1;
        document.getElementById('option_employees1').style.opacity = 1;
        document.getElementById('option_employees2').style.opacity = 1;
        document.getElementById('option_employees3').style.opacity = 1;
        document.getElementById('option_employees4').style.opacity = 1;
        document.getElementById('billing').style.opacity = 1;
        document.getElementById('billing_placeholder').style.opacity = 1;
        document.getElementById('opcoes').style.opacity = 1;
        document.getElementById('investment').style.opacity = 1;
        document.getElementById('option_investment1').style.opacity = 1;
        document.getElementById('option_investment2').style.opacity = 1;
        document.getElementById('investment_placeholder').style.opacity = 1;
        document.getElementById('where').style.opacity = 1;
        document.getElementById('where_placeholder').style.opacity = 1;
        document.getElementById('concurrent').style.opacity = 1;
        document.getElementById('concurrent_placeholder').style.opacity = 1;
        document.getElementById('message').style.opacity = 1;
        document.getElementById('message_placeholder').style.opacity = 1;
        document.getElementById('opcoes2').style.opacity = 1;
        document.getElementById('button').style.opacity = 1;
        document.getElementById('footer_title').style.opacity = 1;
        document.getElementById('footer_subtitle').style.opacity = 1;
        document.getElementById('header_contact').style.opacity = 1;
        document.getElementById('portfolio').style.opacity = 1;
        document.getElementById('home').style.opacity = 1;
        document.getElementById('switch').style.opacity = 1;
        document.getElementById('logo').style.opacity = 1;
        document.getElementById('portuguese').style.opacity = 1;
        document.getElementById('english').style.opacity = 1;
        document.getElementById('language').style.opacity = 1;
        document.getElementById('behance').style.opacity = 1;
        document.getElementById('instagram').style.opacity = 1;
    }, 500); // 500 milissegundos (0.5 segundos)
    }

    // ABRIR LANGUAGE QUANDO PASSAR O MOUSE EM CIMA

    // function openOptions() {
    //     const selectElement = document.getElementById('language-select');
    //     selectElement.size = selectElement.options.length;
    // }

    // function closeOptions() {
    //     const selectElement = document.getElementById('language-select');
    //     selectElement.size = 1;
    // }

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