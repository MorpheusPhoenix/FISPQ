document.addEventListener('DOMContentLoaded', () => {
    const documents = [
    { 
        title: "Air Liquide Brasil - Oxigênio Comprimido.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20AIR%20LIQUIDE%20BRASIL%20-%20OXIG%C3%8ANIO%20COMPRIMIDO.PDF" 
    },
    { 
        title: "Albiquim - Cloreto Férrico.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20ALBIQUIM%20-%20CLORETO%20F%C3%89RRICO.pdf" 
    },
    { 
        title: "Alphacarbo - Carvão Ativado.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20ALPHACARBO%20-%20CARV%C3%83O%20ATIVADO.pdf" 
    },
    { 
        title: "AMC Química - Aluminato de Sódio.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20AMC%20QU%C3%8DMICA%20-%20ALUMINATO%20DE%20S%C3%93DIO.pdf" 
    },
    { 
        title: "Anidrol - Peróxido de Hidrogênio.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20ANIDROL%20-%20PEROXIDO%20DE%20HIDROGENIO.pdf" 
    },
    { 
        title: "BR - Diesel B S500.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20BR%20-%20DIESEL%20B%20S500.pdf" 
    },
    { 
        title: "BR - Gasolina Comum C.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20BR%20-%20GASOLINA%20COMUM%20C.pdf" 
    },
    { 
        title: "Chemicals Universal - Desengraxante Alcalino Hepta 100.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20CHEMICALS%20UNIVERSAL%20-%20DESENGRAXANTE%20ALCALINO%20HEPTA%20100.pdf" 
    },
    { 
        title: "Chemicals Universal - Desengraxante Alcalino Hepta 1000.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20CHEMICALS%20UNIVERSAL%20-%20DESENGRAXANTE%20ALCALINO%20HEPTA%201000.pdf" 
    },
    { 
        title: "Chemicals Universal - Sabão Desengraxante.pdf", 
        department: "Operação", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20CHEMICALS%20UNIVERSAL%20-%20SABAO%20DESENGRAXANTE.pdf" 
    },
    { 
        title: "Dryller - Hidróxido de Cálcio.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20DRYLLER%20-%20HIDR%C3%93XIDO%20DE%20C%C3%81LCIO.pdf" 
    },
    { 
        title: "Dinâmica - Solução Padrão de Condutividade 12,88 mS/cm.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20Din%C3%A2mica%20-%20Sol.%20Padr%C3%A3o%20de%20Condutividade%2012%2C88_mS%20-%20cm.pdf" 
    },
    { 
        title: "Dinâmica - Solução Padrão de Condutividade 1413 uS/cm.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20Din%C3%A2mica%20-%20Sol.%20Padr%C3%A3o%20de%20Condutividade%201413%20uScm.pdf" 
    },
    { 
        title: "Dinâmica - Solução Padrão de Condutividade 5000 uS/cm.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20Din%C3%A2mica%20-%20Sol.%20Padr%C3%A3o%20de%20Condutividade%205000%20us-cm.pdf" 
    },
    { 
        title: "GR Química - Cal Hidratada.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20GR%20QU%C3%8DMICA%20-%20CAL%20HIDRATADA.pdf" 
    },
    { 
        title: "GR Química - Metabissulfito de Sódio.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20GR%20QU%C3%8DMICA%20-%20METABISSULFITO%20DE%20S%C3%93DIO.pdf" 
    },
    { 
        title: "GR Química - Polímero Aniônico.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20GR%20QU%C3%8DMICA%20-%20POLIMERO%20ANI%C3%94NICO.pdf" 
    },
    { 
        title: "GR Química - Ácido Sulfúrico 50%.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20GR%20QU%C3%8DMICA-%20%C3%81CIDO%20SULF%C3%9ARICO%2050_.pdf" 
    },
    { 
        title: "Nheel Química - Floculan C30.pdf", 
        department: "Manutenção", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20NHEEL%20QUIMICA%20LTDA%20-%20FLOCULAN%20C30.pdf" 
    },
    { 
        title: "Projesan - Policloreto de Alumínio (PAC).pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20PROJESAN-POLICLORETO%20DE%20ALUMINIO%20(PAC).pdf" 
    },
    { 
        title: "Quallocal - Hidróxido de Cálcio.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20QUALLICAL%20-%20HIDR%C3%93XIDO%20DE%20C%C3%81LCIO.pdf" 
    },
    { 
        title: "Safra - Álcool 98,2 INPM.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20SAFRA%20-%20ALC%C3%93OL%2098%2C2%20INPM.pdf" 
    },
    { 
        title: "Suall - Sulfato Ferroso.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20SUALL%20-%20SULFATO%20FERROSO.pdf" 
    },
    { 
        title: "Sumatex - Soda Cáustica Líquida.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20SUMATEX%20-%20SODA%20C%C3%81USTICA%20L%C3%8DQUIDA.pdf" 
    },
    { 
        title: "Top Color - Dióxido de Titânio Rutilo R110.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20TOP%20COLOR%20-%20DI%C3%93XIDO%20DE%20TIT%C3%82NIO%20RUTILO%20R110.pdf" 
    },
    { 
        title: "TQA Vitta - Cloreto de Polialumínio.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20TQA%20VITTA-%20CLORETO%20DE%20POLIALUM%C3%8DNIO.pdf" 
    },
    { 
        title: "Ultragaz - GLP.pdf", 
        department: "Administrativo", 
        link: "https://github.com/Obaiderrom/Documentos-AttendAmbiental/blob/e0ed188fa2bf31e5009955926214b00179d974dd/Opera%C3%A7%C3%A3o/FISPQ%20-%20ULTRAGAZ%20-%20GLP.pdf" 
    }
];

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
        prevButton.innerText = '<Anterior';
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
        nextButton.innerText = 'Próximo>';
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
            morePagesIndicator.innerText = '...';
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
