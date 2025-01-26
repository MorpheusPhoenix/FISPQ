document.addEventListener('DOMContentLoaded', () => {
    const documents = [
    {
        title: "Marca A - Adesivo Para Juntas De Motores Diesel",
        department: "Manutenção",
    },
    {
        title: "Marca B - Base Laca Nitrocelulose",
        department: "Manutenção",
    },
    {
        title: "Marca C - Álcool 70° Inpm",
        department: "Manutenção",
    },
    {
        title: "Marca D - Thinner 2900",
        department: "Manutenção",
    },
    {
        title: "Marca E - Detector De Fumaça Aerossol",
        department: "Manutenção",
    },
    {
        title: "Marca F - Óleos Lubrificante - Tipo X",
        department: "Manutenção",
    },
    {
        title: "Marca G - Espuma Poliuretano Aerossol",
        department: "Manutenção",
    },
    {
        title: "Marca H - Óleo Lubrificante Hydra 68",
        department: "Manutenção",
    },
    {
        title: "Marca H - Hydra XP",
        department: "Manutenção",
    },
    {
        title: "Marca H - Óleo 20w40",
        department: "Manutenção",
    },
    {
        title: "Marca H - Gear 680",
        department: "Manutenção",
    },
    {
        title: "Marca H - Hydra 68",
        department: "Manutenção",
    },
    {
        title: "Marca H - Óleo Diesel Aditivado",
        department: "Manutenção",
    },
    {
        title: "Marca I - Desengraxante Alcalino Hepta 1000",
        department: "Manutenção",
    },
    {
        title: "Marca I - Sabão Desengraxante",
        department: "Manutenção",
    },
    {
        title: "Marca J - Óleo Lubrificante Para Bombas",
        department: "Manutenção",
    },
    {
        title: "Marca K - Fundo Galvanizado",
        department: "Manutenção",
    },
    {
        title: "Marca K - Super Piso Acrílico Premium Branco",
        department: "Manutenção",
    },
    {
        title: "Marca K - Tinta De Demarcação Verde",
        department: "Manutenção",
    },
    {
        title: "Marca L - Óleo DTE 26",
        department: "Manutenção",
    },
    {
        title: "Marca L - Óleo Moto 4T 20W-50",
        department: "Manutenção",
    },
    {
        title: "Marca M - Graxa Rolamento MP2",
        department: "Manutenção",
    },
    {
        title: "Marca N - Óleo LH",
        department: "Manutenção",
    },
    {
        title: "Marca O - Super Bonder Original",
        department: "Manutenção",
    },
    {
        title: "Marca P - Gesso Rápido",
        department: "Manutenção",
    },
    {
        title: "Marca H - Gear 220",
        department: "Manutenção",
    },
    {
        title: "Marca Q - Hidra AW 32",
        department: "Manutenção",
    },
    {
        title: "Marca R - Acrílico Premium Rende Plus",
        department: "Manutenção",
    },
    {
        title: "Marca R - Fosco Acrílico Premium Plus",
        department: "Manutenção",
    },
    {
        title: "Marca R - Piso Premium Plus",
        department: "Manutenção",
    },
    {
        title: "Marca R - Tradição Premium Azul Porcelana",
        department: "Manutenção",
    },
    {
        title: "Marca K - Massa Acrílica",
        department: "Manutenção",
    },
    {
        title: "Marca S - Aguarrás",
        department: "Manutenção",
    },
    {
        title: "Marca S - Demarcação Acrílica Amarelo",
        department: "Manutenção",
    },
    {
        title: "Marca S - Epóxi M298 II",
        department: "Manutenção",
    },
    {
        title: "Marca T - Vaselina Sólida",
        department: "Manutenção",
    },
    {
        title: "Marca U - Protetor Solar FPS 30",
        department: "Manutenção",
    },
    {
        title: "Marca V - Limpa Contatos",
        department: "Manutenção",
    },
    {
        title: "Marca W - Trava Rolamento",
        department: "Manutenção",
    },
    {
        title: "Marca X - Fluido Para Radiadores",
        department: "Manutenção",
    },
    {
        title: "Marca Y - Óleo De Corte",
        department: "Manutenção",
    },
    {
        title: "Marca Y - Fita Isolante Líquida",
        department: "Manutenção",
    },
    {
        title: "Marca Z - Fluido Radiador Coolant",
        department: "Manutenção",
    },
    {
        title: "Marca AA - Água Bi-Desmineralizada",
        department: "Manutenção",
    },
    {
        title: "Marca AB - Multiuso",
        department: "Administrativo",
    },
    {
        title: "Marca AC - Álcool Gel 70%",
        department: "Administrativo",
    }
].sort((a, b) => a.title.localeCompare(b.title)); // Ordenar os documentos pelo título

    const departments = [...new Set(documents.map(doc => doc.department))].sort();

    function displayDocuments(page, filteredDocs = documents) {
        const startIndex = (page - 1) * 10;
        const endIndex = Math.min(startIndex + 10, filteredDocs.length);
        const documentList = document.getElementById('documentList');
        documentList.innerHTML = '';

        // Scroll para o topo da lista de documentos
        documentList.scrollTop = 0;

        for (let i = startIndex; i < endIndex; i++) {
            const doc = filteredDocs[i];
            const docItem = document.createElement('div');
            docItem.className = 'document-item';

            const docTitle = document.createElement('h2');
            docTitle.innerText = doc.title;
            docItem.appendChild(docTitle);

            const docDetails = document.createElement('div'); // Criar um elemento pai para departamento e link
            docDetails.className = 'doc-details'; // Adicionar a classe para os estilos CSS
            docItem.appendChild(docDetails); // Adicionar o elemento pai ao item do documento

            const docDepartment = document.createElement('p');
            docDepartment.innerText = `Setor: ${doc.department}`;
            docDetails.appendChild(docDepartment); // Adicionar o parágrafo ao elemento pai

            if (doc.link) {
                const docLink = document.createElement('a');
                docLink.href = doc.link;
                docLink.className = 'file-link align-right';
                docLink.innerText = 'Abrir arquivo';
                docDetails.appendChild(docLink); // Adicionar o link ao elemento pai
            }

            documentList.appendChild(docItem);
        }

        const totalFilteredDocuments = filteredDocs.length;
        const totalPages = Math.ceil(totalFilteredDocuments / 10);
        updatePagination(totalPages, page, filteredDocs);
    }

    function updatePagination(totalPages, currentPage, filteredDocs) {
        const pagination = document.querySelector('.pagination');
        pagination.innerHTML = '';

        const maxButtons = 3; // Número máximo de botões de paginação a serem exibidos
        const halfMaxButtons = Math.floor(maxButtons / 2);
        let startPage = currentPage - halfMaxButtons;
        let endPage = currentPage + halfMaxButtons;

        if (startPage < 1) {
            startPage = 1;
            endPage = Math.min(totalPages, startPage + maxButtons - 1);
        } else if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxButtons + 1);
        }

        const prevButton = document.createElement('span');
        prevButton.innerText = '《';
        prevButton.style.color = '#fff'; // Cor do texto branco
        prevButton.style.marginRight = '10px'; // Ajuste de espaçamento
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                changePage(currentPage - 1, filteredDocs);
            }
        });
        pagination.appendChild(prevButton);

                for (let i = startPage; i <= endPage; i++) {
            const button = document.createElement('button');
            button.innerText = i;
            if (i === currentPage) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                changePage(i, filteredDocs);
            });
            pagination.appendChild(button);
        }

        const nextButton = document.createElement('span');
        nextButton.innerText = ' 》';
        nextButton.style.color = '#fff'; // Cor do texto branco
        nextButton.style.marginLeft = '5px'; // Ajuste de espaçamento
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                changePage(currentPage + 1, filteredDocs);
            }
        });
        pagination.appendChild(nextButton);

        if (totalPages > maxButtons) {
            const morePagesIndicator = document.createElement('span');
            morePagesIndicator.innerText = '';
            pagination.insertBefore(morePagesIndicator, nextButton);
        }
    }

    function changePage(page, filteredDocs) {
        const scrollPosition = window.scrollY; // Captura a posição atual de rolagem
        displayDocuments(page, filteredDocs);
        window.scroll(0, scrollPosition); // Mantém a posição de rolagem
    }

    function searchDocuments() {
        const input = document.getElementById('searchInput').value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos
        const filteredDocuments = documents.filter(doc => {
            const title = doc.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // Remover acentos
            return title.includes(input) || similarity(input, title) > 
0.8; // Pesquisa aproximada
        });

        displayDocuments(1, filteredDocuments);

        // Remover o foco do campo de pesquisa após a pesquisa ser concluída
        document.getElementById('searchInput').blur();
    }

    function similarity(s1, s2) {
        const longer = s1.length > s2.length ? s1 : s2;
        const shorter = s1.length > s2.length ? s2 : s1;
        const longerLength = longer.length;
        if (longerLength === 0) return 1.0;
        return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }

    function editDistance(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();

        const costs = new Array();
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0)
                    costs[j] = j;
                else {
                    if (j > 0) {
                        let newValue = costs[j - 1];
                        if (s1.charAt(i - 1) !== s2.charAt(j - 1))
                            newValue = Math.min(Math.min(newValue, lastValue + 1), costs[j] + 1);
                        costs[j - 1] = lastValue;
                        lastValue = newValue;
                    }
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    }

    function filterByDepartment(department) {
        const filteredDocuments = documents.filter(doc => doc.department === department);
        displayDocuments(1, filteredDocuments);
        closeModal();
    }

    function clearFilters() {
        document.getElementById('searchInput').value = ''; // Limpar campo de pesquisa
        displayDocuments(1); // Exibir todos os documentos novamente
        closeModal(); // Fechar a janela pop-up
    }

    function openModal() {
        const modalButtonGroup = document.querySelector('.modal-button-group');
        modalButtonGroup.innerHTML = ''; // Limpar botões existentes

        // Adicionar botões de departamento ordenados
        departments.forEach(department => {
            const button = document.createElement('button');
            button.className = 'filter-btn';
            button.dataset.department = department;
            button.innerText = department;
            modalButtonGroup.appendChild(button);
            button.addEventListener('click', () => {
                filterByDepartment(department);
            });
        });

        // Adicionar botão para limpar filtros
        const clearButton = document.createElement('button');
        clearButton.className = 'clear-btn';
        clearButton.innerText = 'Limpar Filtros';
        clearButton.addEventListener('click', clearFilters);
        modalButtonGroup.appendChild(clearButton);

        document.getElementById('filterModal').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('filterModal').style.display = 'none';
    }

    window.addEventListener('click', (event) => {
        const modal = document.getElementById('filterModal');
        if (event.target == modal) {
            closeModal();
        }
    });

    document.getElementById('searchButton').addEventListener('click', searchDocuments);
    document.getElementById('filterButton').addEventListener('click', openModal);
    document.getElementById('closeModal').addEventListener('click', closeModal);

    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchDocuments();
        }
    });

    displayDocuments(1);
});
