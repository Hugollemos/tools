// Dados das ferramentas organizadas por categorias e subcategorias
const toolsByCategory = {
    "Terraform": {
        "Security and Compliance": [
            {
                name: "Checkov",
                description: "Checkov is a static code analysis tool for infrastructure as code (IaC) and also a software composition analysis (SCA) tool for images and open source packages.",
                link: "https://github.com/bridgecrewio/checkov/",
                icon: "fas fa-shield-alt"
            },
            {
                name: "Tfsec",
                description: "tfsec uses static analysis of your terraform code to spot potential misconfigurations.",
                link: "https://github.com/aquasecurity/tfsec/",
                icon: "fas fa-bug"
            },
            {
                name: "Terrascan",
                description: "Terrascan is a static code analyzer for Infrastructure as Code. Terrascan allows you to:",
                link: "https://github.com/tenable/terrascan/",
                icon: "fas fa-user-secret"
            },
            {
                name: "Trivy",
                description: "Trivy (pronunciation) is a comprehensive and versatile security scanner. Trivy has scanners that look for security issues, and targets where it can find those issues.",
                link: "https://github.com/aquasecurity/trivy/",
                icon: "fa-solid fa-face-smile"
            },
        ],
    },
    "Bash": {
        "em breve": [
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
        ]
    },
    "Kubernetes": {
        "em breve": [
            {
                name: "Git",
                description: "Sistema de controle de versão distribuído",
                link: "https://git-scm.com/",
                icon: "fab fa-git-alt"
            }
        ],
        "em breve": [
            {
                name: "GitHub",
                description: "Plataforma de hospedagem de código",
                link: "https://github.com/",
                icon: "fab fa-github"
            }
        ]
    },
    "Docker": {
        "Security": [
            {
                name: "Chrome DevTools",
                description: "Ferramentas de desenvolvimento do Chrome",
                link: "https://developer.chrome.com/docs/devtools/",
                icon: "fab fa-chrome"
            }
        ],
        "Commands": [
            {
                name: "Chrome DevTools",
                description: "Ferramentas de desenvolvimento do Chrome",
                link: "https://developer.chrome.com/docs/devtools/",
                icon: "fab fa-chrome"
            }
        ]
    },
    
};

// Garantir que a variável seja acessível globalmente
window.toolsByCategory = toolsByCategory;