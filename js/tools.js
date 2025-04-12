// Dados das ferramentas organizadas por categorias
const toolsByCategory = {
    "Editores de Código": [
        {
            name: "Visual Studio Code",
            description: "Editor de código fonte leve e poderoso",
            link: "https://code.visualstudio.com/",
            icon: "fas fa-code"
        },
        {
            name: "Sublime Text",
            description: "Editor de texto rápido e leve",
            link: "https://www.sublimetext.com/",
            icon: "fas fa-file-code"
        }
    ],
    "Controle de Versão": [
        {
            name: "Git",
            description: "Sistema de controle de versão distribuído",
            link: "https://git-scm.com/",
            icon: "fab fa-git-alt"
        },
        {
            name: "GitHub",
            description: "Plataforma de hospedagem de código",
            link: "https://github.com/",
            icon: "fab fa-github"
        }
    ],
    "Desenvolvimento Web": [
        {
            name: "Chrome DevTools",
            description: "Ferramentas de desenvolvimento do Chrome",
            link: "https://developer.chrome.com/docs/devtools/",
            icon: "fab fa-chrome"
        }
    ],
    "Security and Compliance": [
        {
            name: "Checkov",
            description: "Checkov is a static code analysis tool for infrastructure as code (IaC) and also a software composition analysis (SCA) tool for images and open source packages.",
            link: "https://github.com/bridgecrewio/checkov/",
            icon: "fas fa-shield-alt"
        },
        {
            name: "Burp Suite",
            description: "Ferramenta para teste de segurança de aplicações web",
            link: "https://portswigger.net/burp",
            icon: "fas fa-bug"
        },
        {
            name: "Metasploitat",
            description: "Framework para testes de penetração",
            link: "https://www.metasploit.com/",
            icon: "fas fa-user-secret"
        },
        {
            name: "Metasploitt",
            description: "Framework para testes de penetração",
            link: "https://www.metasploit.com/",
            icon: "fas fa-user-secret"
        }
    ]
};

// Garantir que a variável seja acessível globalmente
window.toolsByCategory = toolsByCategory;