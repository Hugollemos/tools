document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM carregado, verificando toolsByCategory...');

    const tabsList = document.querySelector('.tabs-list');

    // Verificar se a variável toolsByCategory está disponível
    if (typeof toolsByCategory === 'undefined') {
        console.error('Erro: toolsByCategory não está definido');
        tabsList.innerHTML = '<div class="error">Erro ao carregar os dados. Verifique o console para mais detalhes.</div>';
        return;
    }

    console.log('toolsByCategory carregado com sucesso:', toolsByCategory);
    console.log('Número de categorias:', Object.keys(toolsByCategory).length);

    // Itera sobre cada categoria
    for (const [category, tools] of Object.entries(toolsByCategory)) {
        console.log('Processando categoria:', category, 'com', tools.length, 'ferramentas');

        // Criar o container da aba
        const tabContainer = document.createElement('div');
        tabContainer.className = 'tab-container';

        // Criar o item da aba
        const tabItem = document.createElement('div');
        tabItem.className = 'tab-item';
        tabItem.innerHTML = `<i class="fas fa-folder"></i> ${category}`;

        // Criar a lista de ferramentas
        const toolsList = document.createElement('div');
        toolsList.className = 'tools-list';

        // Adiciona cada ferramenta da categoria
        tools.forEach(tool => {
            const toolItem = document.createElement('div');
            toolItem.className = 'tool-item';
            toolItem.innerHTML = `
                <i class="${tool.icon}"></i>
                <span>${tool.name}</span>
            `;

            // Adicionar evento de clique para mostrar detalhes da ferramenta
            toolItem.addEventListener('click', function() {
                showToolDetails(tool);
            });

            toolsList.appendChild(toolItem);
        });

        // Adicionar evento de clique para expandir/recolher a lista de ferramentas
        tabItem.addEventListener('click', function() {
            // Fechar todas as outras listas
            document.querySelectorAll('.tools-list').forEach(list => {
                if (list !== toolsList) {
                    list.classList.remove('visible');
                }
            });

            // Alternar a visibilidade da lista atual
            toolsList.classList.toggle('visible');

            // Alternar a classe active da aba
            document.querySelectorAll('.tab-item').forEach(item => {
                item.classList.remove('active');
            });
            tabItem.classList.add('active');
        });

        // Adicionar elementos ao DOM
        tabContainer.appendChild(tabItem);
        tabContainer.appendChild(toolsList);
        tabsList.appendChild(tabContainer);
    }

    console.log('Renderização concluída');

    // Configurar o botão de tema
    setupThemeToggle();
});

// Função para mostrar os detalhes da ferramenta no conteúdo principal
function showToolDetails(tool) {
    const toolDetails = document.getElementById('tool-details');

    // Atualizar o conteúdo
    toolDetails.innerHTML = `
        <h2><i class="${tool.icon}"></i> ${tool.name}</h2>
        <p>${tool.description}</p>
        <a href="${tool.link}" target="_blank" class="tool-link">
            <i class="fas fa-external-link-alt"></i> Acessar
        </a>
    `;
}

// Função para configurar o botão de tema
function setupThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');

    // Configurar o botão de tema
    themeToggle.addEventListener('click', function() {
        // Alternar entre os temas
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        // Aplicar o novo tema
        root.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Atualizar o ícone e o texto
        const icon = this.querySelector('i');
        const text = this.querySelector('span');

        if (newTheme === 'dark') {
            icon.className = 'fas fa-sun';
            text.textContent = 'Modo Claro';
        } else {
            icon.className = 'fas fa-moon';
            text.textContent = 'Modo Escuro';
        }
    });

    // Verificar se o tema escuro está ativado
    const savedTheme = localStorage.getItem('theme') || 'light';
    const root = document.documentElement;
    root.setAttribute('data-theme', savedTheme);

    // Configurar o ícone e texto inicial
    const icon = themeToggle.querySelector('i');
    const text = themeToggle.querySelector('span');

    if (savedTheme === 'dark') {
        icon.className = 'fas fa-sun';
        text.textContent = 'Modo Claro';
    } else {
        icon.className = 'fas fa-moon';
        text.textContent = 'Modo Escuro';
    }
}