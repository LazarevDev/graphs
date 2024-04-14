var nodes = [
    // { id: 1, label: '', level: 0, progress: 0 },
    { id: 1, label: '', level: 0 },
    { id: 2, label: 'ВК', level: 1, maxProgress: Math.floor(Math.random() * (100 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 3, label: 'Инста', level: 1, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 4, label: 'Фейсбук', level: 1, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 5, label: 'Твиттер', level: 1, maxProgress: Math.floor(Math.random() * (300 - 30 + 1)) + 30, step: Math.floor(Math.random() * 4) + 1 },
    
    { id: 6, label: 'vk-friends', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 7, label: 'vk-posts', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (100 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 8, label: 'vk-subscriptions', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (20 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 9, label: 'vk-comments', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (80 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    
    { id: 10, label: 'insta-followers', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (0 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 11, label: 'insta-posts', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (200 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 12, label: 'insta-subscriptions', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    
    // { id: 13, label: 'Комментарии', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (60 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 14, label: 'fb-friends', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 15, label: 'fb-posts', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 30 + 1)) + 30, step: Math.floor(Math.random() * 4) + 1 },
    { id: 16, label: 'fb-subscriptions', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 17, label: 'fb-comments', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    
    // { id: 18, label: 'Друзья', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 19, label: 'twitter-posts', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 20, label: 'twitter-subscriptions', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 },
    { id: 21, label: 'twitter-followers', level: 2, progress: 0, maxProgress: Math.floor(Math.random() * (300 - 10 + 1)) + 10, step: Math.floor(Math.random() * 4) + 1 }
    ];

    var edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 2, to: 6 },
    { from: 2, to: 7 },
    { from: 2, to: 8 },
    { from: 2, to: 9 },
    { from: 3, to: 10 },
    { from: 3, to: 11 },
    { from: 3, to: 12 },
    { from: 3, to: 13 },
    { from: 4, to: 14 },
    { from: 4, to: 15 },
    { from: 4, to: 16 },
    { from: 4, to: 17 },
    { from: 5, to: 18 },
    { from: 5, to: 19 },
    { from: 5, to: 20 },
    { from: 5, to: 21 }
    ];

    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        layout: {
            hierarchical: {
                direction: 'UD',
                sortMethod: 'directed'
            }
        },
        interaction: {
            dragNodes: false // запрет перетаскивания узлов
        },
        physics: {
            enabled: false,
        },
        nodes: {
            shape: 'circle',
            borderWidth: 2, // ширина обводки узлов
            color: {
                border: 'white', // цвет обводки узлов
                background: 'rgba(36, 38, 46, 1)', // прозрачный цвет внутри узлов (белый с нулевой прозрачностью)
                highlight: {
                    border: 'white', // цвет обводки узлов при выделении
                    background: 'rgba(36, 38, 46, 1)' // цвет внутри узлов при выделении
                },
                hover: {
                    border: 'white', // цвет обводки узлов при наведении
                    background: 'rgba(255, 255, 255, 0.3)' // цвет внутри узлов при наведении
                }
            },
            font: {
                color: 'white' // цвет текста внутри узлов
            },
        }
    };

    var network = new vis.Network(container, data, options);

    // Add hidden attribute to nodes that should be initially hidden
    nodes.forEach(function(node) {
        if (node.id !== 1 && node.id !== 2 && node.id !== 3 && node.id !== 4 && node.id !== 5) { // Exclude nodes with IDs 1, 2, 3, and 4
            node.hidden = true;
        }
    });

    var container = document.getElementById('mynetwork');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var network = new vis.Network(container, data, options);

    nodes.forEach(function(node) {
    if (node.maxProgress === undefined) {
        node.maxProgress = 100; // Устанавливаем значение по умолчанию (или любое другое значение)
    }
});

    function animateProgress() {
        var loadedNodesCount = 0; // Переменная для отслеживания количества загруженных узлов
        nodes.forEach(function(node) {
            if (node.maxProgress) {
                var delay = Math.floor(Math.random() * 13000);
                setTimeout(function() {
                    var interval = setInterval(function() {
                        if (node.progress < node.maxProgress) {
                            node.progress++;
                            updateNodeLabel(node);
                            updateSocialBlock(node.label.toLowerCase(), node.progress, node.maxProgress);
                            network.body.data.nodes.update({ id: node.id, hidden: false });
                        } else {
                            clearInterval(interval);
                            // Увеличиваем счетчик загруженных узлов
                            loadedNodesCount++;
                            console.log("Loaded nodes count:", loadedNodesCount);
                            if (loadedNodesCount === 18) { // Проверяем, все ли узлы загружены
                                openModal(); // Вызываем функцию открытия модального окна
                            }
                        }
                    }, 500);
                }, delay);
            }
        });
    }


    function updateNodeLabel(node) {
        var label;
        if (node.progress === node.maxProgress) {
            label = ' ' + node.progress + ' ';
        } else {
            // label =  ' (' + node.progress + '/' + node.maxProgress + ')';
            label =  ' (' + node.progress + '/' + node.maxProgress + ')';
        }
        network.body.data.nodes.update({ id: node.id, label: label });
    }

    function updateSocialBlock(nodeId, progress, maxProgress) {
        var nodeLabel = document.getElementById(nodeId);
        var progressText = progress + '/' + maxProgress;
        console.log(nodeLabel);
        if (nodeLabel) {
            nodeLabel.textContent = nodeLabel.textContent.split(' ')[0] + ' (' + progressText + ')';
        }
    }

    setTimeout(function() {
        animateProgress();
    }, 1000);

    window.addEventListener('load', function() {
        showLoadedText();
        animateProgress();
    }); 


    // Функция для отображения текста
    function showLoadedText() {
        var loadedText = document.getElementById('loadedText');
        loadedText.style.display = 'block';
    }

    // Функция для открытия модального окна
    function openModal() {
        var modal = document.getElementById('myModal');
        modal.style.display = 'block';
    }

    // Находим div с идентификатором myModal
    var modal = document.getElementById('myModal');

    // Добавляем обработчик события клика
    modal.addEventListener('click', function(event) {
        // Проверяем, был ли клик выполнен именно на div с идентификатором myModal
        if (event.target === modal) {
            // Закрываем модальное окно
            closeModal();
        }
    });

    function closeModal() {
        // Находим div с идентификатором myModal
        var modal = document.getElementById('myModal');
        
        // Устанавливаем стиль display в none, чтобы скрыть модальное окно
        modal.style.display = 'none';
    }