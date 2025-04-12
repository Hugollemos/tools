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
    for (const [category, subcategories] of Object.entries(toolsByCategory)) {
        console.log('Processando categoria:', category);

        // Criar o container da categoria
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';

        // Criar o item da categoria
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-item';
        categoryItem.innerHTML = `<i class="fas fa-folder"></i> ${category}`;

        // Criar o container de subcategorias
        const subcategoriesContainer = document.createElement('div');
        subcategoriesContainer.className = 'subcategories-container';

        // Itera sobre cada subcategoria
        for (const [subcategory, tools] of Object.entries(subcategories)) {
            console.log('Processando subcategoria:', subcategory, 'com', tools.length, 'ferramentas');

            // Criar o container da subcategoria
            const subcategoryContainer = document.createElement('div');
            subcategoryContainer.className = 'subcategory-container';

            // Criar o item da subcategoria
            const subcategoryItem = document.createElement('div');
            subcategoryItem.className = 'subcategory-item';
            subcategoryItem.innerHTML = `<i class="fas fa-folder-open"></i> ${subcategory}`;

            // Criar a lista de ferramentas
            const toolsList = document.createElement('div');
            toolsList.className = 'tools-list';

            // Adiciona cada ferramenta da subcategoria
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
            subcategoryItem.addEventListener('click', function() {
                // Fechar todas as outras listas de ferramentas
                document.querySelectorAll('.tools-list').forEach(list => {
                    if (list !== toolsList) {
                        list.classList.remove('visible');
                    }
                });

                // Alternar a visibilidade da lista atual
                toolsList.classList.toggle('visible');

                // Alternar a classe active da subcategoria
                document.querySelectorAll('.subcategory-item').forEach(item => {
                    item.classList.remove('active');
                });
                subcategoryItem.classList.add('active');
            });

            // Adicionar elementos ao DOM
            subcategoryContainer.appendChild(subcategoryItem);
            subcategoryContainer.appendChild(toolsList);
            subcategoriesContainer.appendChild(subcategoryContainer);
        }

        // Adicionar evento de clique para expandir/recolher as subcategorias
        categoryItem.addEventListener('click', function() {
            // Fechar todas as outras subcategorias
            document.querySelectorAll('.subcategories-container').forEach(container => {
                if (container !== subcategoriesContainer) {
                    container.classList.remove('visible');
                }
            });

            // Alternar a visibilidade das subcategorias
            subcategoriesContainer.classList.toggle('visible');

            // Alternar a classe active da categoria
            document.querySelectorAll('.category-item').forEach(item => {
                item.classList.remove('active');
            });
            categoryItem.classList.add('active');
        });

        // Adicionar elementos ao DOM
        categoryContainer.appendChild(categoryItem);
        categoryContainer.appendChild(subcategoriesContainer);
        tabsList.appendChild(categoryContainer);
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