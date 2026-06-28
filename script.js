// ==========================================
// BANCO DE DADOS DOS CENÁRIOS DE DEMONSTRAÇÃO
// ==========================================
const scenarios = {
    1: {
        greeting: "Olá, Seu Raimundo!",
        propName: "Sítio Boa Vista",
        meta: "48 hectares • Rio Verde - GO",
        status: "Em análise",
        statusClass: "badge-warning",
        pendenciaText: "Seu CAR está na fila. Toque para entender.",
        explainText: "<p><strong>Seu Raimundo</strong>, o seu cadastro deu entrada e agora o técnico da Secretaria de Meio Ambiente está analisando seus documentos.</p><p>Vou te manter informado de cada passo, mas por enquanto sua única tarefa é relaxar e esperar a nossa notificação!</p>",
        hasApp: false,
        timeline: [true, 'active', false, false],
        docCompromisso: { title: "Termo de Compromisso", status: "Não Exigido", class: "text-muted", icon: "remove_circle_outline" }
    },
    2: {
        greeting: "Olá, Seu Raimundo!",
        propName: "Sítio Boa Vista",
        meta: "48 hectares • Rio Verde - GO",
        status: "Em análise",
        statusClass: "badge-warning",
        pendenciaText: "Recomendação de APP pendente na propriedade",
        explainText: "<p><strong>Seu Raimundo</strong>, descobrimos que passa um córrego por uma parte da sua propriedade.</p><p>Pela regra do nosso Código Florestal, precisamos manter árvores nativas em volta de qualquer curso d'água para proteger a nascente. Isso se chama <strong>Área de Preservação Permanente (APP)</strong>.</p><p>No seu caso, precisamos reflorestar mais ou menos <strong>1,2 hectare</strong>. Vou te mostrar como fazer isso sem mistério!</p>",
        hasApp: true,
        timeline: [true, true, 'active', false],
        docCompromisso: { title: "Termo de Compromisso (PRADA)", status: "Aguardando Assinatura", class: "text-orange", icon: "hourglass_empty" }
    },
    3: {
        greeting: "Olá, Seu Raimundo!",
        propName: "Sítio Boa Vista",
        meta: "48 hectares • Rio Verde - GO",
        status: "Regularizado",
        statusClass: "badge-success",
        pendenciaText: "Parabéns! Imóvel 100% em dia com a legislação.",
        explainText: "<p><strong>Seu Raimundo</strong>, ótimas notícias! O analista validou seu PRADA e aprovou seu mapa.</p><p>Agora seu imóvel rural está completamente regularizado. Com isso, as portas dos bancos estão abertas para você pegar aquele <strong>Crédito Rural</strong> com os juros mais baixos do mercado!</p>",
        hasApp: false,
        timeline: [true, true, true, true],
        docCompromisso: { title: "Termo de Compromisso Firmado", status: "✔ Validado", class: "text-green", icon: "verified" }
    },
    4: {
        greeting: "Olá, Analista Luana Silva!",
        propName: "Painel de Gestão e Impacto",
        meta: "Visão do Órgão Ambiental Estadual",
        status: "Operação Eficiente",
        statusClass: "badge-success",
        pendenciaText: "Redução de 76% nas filas presenciais de dúvida",
        explainText: "<p><strong>Visão do Analista do Estado (Luana):</strong> Sem o Siscar+, o produtor recebia uma notificação contendo apenas leis frias (Ex: <i>'Infracionou Artigo 61-A'</i>) e parava o processo por medo.</p><p>Com o Siscar+ traduzindo os termos jurídicos, o agricultor entende o que fazer, planta as mudas por conta própria e acelera a fila de aprovação das agências estaduais automaticamente.</p>",
        hasApp: false,
        timeline: [true, true, true, true],
        docCompromisso: { title: "Métricas Globais", status: "Aprovado", class: "text-green", icon: "trending_up" }
    }
};

// ==========================================
// CENTRAL DE RESPOSTAS DA CISCA (MOCK DE IA)
// ==========================================
const ciscaKnowledge = {
    "app": "APP é a Área de Preservação Permanente. É a mata protetora de rios, córregos e nascentes. Deixar a vegetação lá evita que a terra desmorone e falte água para sua própria plantação!",
    "reserva legal": "A Reserva Legal é uma fatia de vegetação nativa que todo sítio precisa guardar. Aqui na nossa região de Cerrado/Mata ela equivale a 20% do tamanho da sua fazenda.",
    "car": "O CAR é o Cadastro Ambiental Rural. Pense nele como o RG da sua terra. Ele serve para mostrar ao governo que você produz respeitando os recursos naturais.",
    "lei": "A lei que rege nosso campo é o Código Florestal (Lei 12.651/2012). Sei que parece complicada, mas meu papel é traduzir cada artigo para te dar segurança!",
    "pendencia": "Não se assuste! Uma pendência só significa que o técnico do governo viu um ponto de melhoria no mapa ou precisa de uma certidão atualizada.",
    "credito rural": "O banco só libera o dinheiro do Pronaf ou do custeio se o CAR estiver em dia. Cuidar do meio ambiente hoje é o segredo para conseguir o recurso da próxima safra!",
    "prada": "PRADA é o Projeto de Recomposição de Áreas Degradadas. É apenas um plano simples onde combinamos onde e como você vai plantar as árvores que faltam.",
    "ajuda": "Estou aqui para ajudar! Você pode me perguntar sobre 'APP', 'Reserva Legal', 'Pendências' ou 'Crédito Rural'. Digite uma palavra ou selecione uma tag!"
};

let activeScenario = 1;

// NAVEGAÇÃO DE TELAS PRINCIPAIS
function changeScreen(screenId) {
    document.querySelectorAll('.app-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function performLogin() {
    changeScreen('screen-login');
    document.getElementById('screen-login').classList.remove('active');
    document.getElementById('app-core').classList.remove('hidden');
    switchSubScreen('sub-dashboard');
}

// NAVEGAÇÃO ENTRE ABAS DA INTERFACE (SUB-SCREENS)
function switchSubScreen(subId) {
    document.querySelectorAll('.sub-screen').forEach(s => s.classList.remove('active'));
    document.getElementById(subId).classList.add('active');
    
    // Controle do botão Voltar Superior
    const backBtn = document.getElementById('btn-global-back');
    if (subId === 'sub-dashboard') {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }

    // Atualiza estado visual da barra inferior
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if(subId === 'sub-dashboard') document.getElementById('nav-dash').classList.add('active');
    if(subId === 'sub-timeline') document.getElementById('nav-time').classList.add('active');
    if(subId === 'sub-chat') {
        document.getElementById('nav-chat').classList.add('active');
        initChatWindow();
    }
    if(subId === 'sub-perfil') document.getElementById('nav-perf').classList.add('active');
}

function goBackToDashboard() {
    switchSubScreen('sub-dashboard');
}

// GERENCIADOR DE CENÁRIOS DO HACKATHON
function selectScenario(num) {
    activeScenario = num;
    document.querySelectorAll('.demo-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`demo-c${num}`).classList.add('active');

    const data = scenarios[num];
    
    // Atualização de elementos dinâmicos baseados no JSON do Cenário
    document.getElementById('dash-greeting').innerText = data.greeting;
    document.getElementById('dash-prop-name').innerText = data.propName;
    document.getElementById('dash-prop-meta').innerHTML = `<span class="material-icons text-small">place</span> ${data.meta}`;
    
    const badge = document.getElementById('dash-status-badge');
    badge.innerText = data.status;
    badge.className = `badge ${data.statusClass}`;

    document.getElementById('dash-pendencia-text').innerText = data.pendenciaText;
    document.getElementById('explique-text-container').innerHTML = data.explainText;

    // Ajuste do Mapa Dinâmico
    const river = document.getElementById('map-river-line');
    const zone = document.getElementById('map-app-zone');
    const tagApp = document.getElementById('map-tag-app');
    const btnActionReg = document.getElementById('btn-action-regularizar');

    if (data.hasApp) {
        river.style.display = "block"; zone.style.display = "block"; tagApp.style.display = "block"; btnActionReg.style.display = "block";
    } else {
        river.style.display = "none"; zone.style.display = "none"; tagApp.style.display = "none"; btnActionReg.style.display = "none";
    }

    // Atualização da Linha do Tempo
    data.timeline.forEach((state, index) => {
        const nodes = [document.getElementById('tl-node-analise'), document.getElementById('tl-node-pendencia'), document.getElementById('tl-node-concluido')];
        const target = nodes[index - 1];
        if (target) {
            target.className = "tl-item";
            if (state === true) target.classList.add('done');
            if (state === 'active') target.classList.add('active');
        }
    });

    // Atualização do Card de Documento Dinâmico
    document.getElementById('doc-compromisso-title').innerText = data.docCompromisso.title;
    const docStatus = document.getElementById('doc-compromisso-status');
    docStatus.innerText = data.docCompromisso.status;
    docStatus.className = data.docCompromisso.class;
    document.getElementById('doc-compromisso-icon').className = `material-icons ${data.docCompromisso.class}`;
    document.getElementById('doc-compromisso-icon').innerText = data.docCompromisso.icon;

    // Disparar Notificação Toast para feedback ao Avaliador
    triggerNotification(`Modo Cenário ${num} Carregado`, `Exibindo a jornada de: ${data.greeting.replace('Olá, ','')}`);
}

// INTERATIVIDADE DO CHAT DA CISCA (SIMULAÇÃO INTELIGENTE DE IA)
let isChatReady = false;
function initChatWindow() {
    if (isChatReady) return;
    const box = document.getElementById('chat-messages-box');
    box.innerHTML = '';
    insertMessage("🐔 Cisca", "Olá! Sou a Cisca. Estou aqui para traduzir qualquer complicação da lei ambiental. Sobre o que você deseja conversar?", "received");
    isChatReady = true;
}

function insertMessage(sender, text, side) {
    const box = document.getElementById('chat-messages-box');
    const d = document.createElement('div');
    d.className = `msg ${side}`;
    d.innerHTML = `<strong>${sender}</strong><p>${text}</p>`;
    box.appendChild(d);
    box.scrollTop = box.scrollHeight;
}

function submitChatMessage() {
    const input = document.getElementById('chat-input');
    const val = input.value.trim();
    if (!val) return;

    insertMessage("Você", val, "sent");
    input.value = '';

    // Efeito de Carregamento da IA da Cisca
    const box = document.getElementById('chat-messages-box');
    const loading = document.createElement('div');
    loading.className = "typing";
    loading.id = "cisca-typing";
    loading.innerHTML = "<span></span><span></span><span></span>";
    box.appendChild(loading);
    box.scrollTop = box.scrollHeight;

    setTimeout(() => {
        const l = document.getElementById('cisca-typing');
        if (l) l.remove();

        let reply = "";
        const lower = val.toLowerCase();

        // Procura por palavras-chave no dicionário amigável
        for (const k in ciscaKnowledge) {
            if (lower.includes(k)) {
                reply = ciscaKnowledge[k];
                break;
            }
        }

        if (!reply) {
            reply = "Essa funcionalidade de IA ainda está em evolução no protótipo do Siscar+. Na versão completa do produto, nossa Inteligência Artificial lerá o Código Florestal e os Manuais Oficiais para te responder com total certeza técnica!";
        }

        insertMessage("🐔 Cisca", reply, "received");
    }, 1200);
}

function sendQuickMessage(txt) {
    document.getElementById('chat-input').value = txt;
    submitChatMessage();
}

function openChatContext(topic) {
    switchSubScreen('sub-chat');
    sendQuickMessage(topic);
}

// MODAL DIDÁTICO
function triggerModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = text;
    document.getElementById('custom-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('custom-modal').classList.add('hidden');
}

// GESTÃO DE TOAST NOTIFICATION
function triggerNotification(title = "Alerta Siscar+", msg = "Seu cadastro possui atualizações pendentes.") {
    document.getElementById('toast-title').innerText = title;
    document.getElementById('toast-body').innerText = msg;
    const t = document.getElementById('custom-toast');
    t.classList.remove('hidden');
    setTimeout(() => t.classList.add('hidden'), 4000);
}

function handleToastNavigation() {
    document.getElementById('custom-toast').classList.add('hidden');
    switchSubScreen('sub-explique');
}

// Monitora tecla Enter no campo do Chat
document.getElementById('chat-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') submitChatMessage();
});

// Inicialização Padrão
window.onload = () => {
    selectScenario(1);
};
