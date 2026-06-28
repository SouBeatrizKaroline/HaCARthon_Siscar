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
// CENTRAL DE RESPOSTAS DA CISCA (MOCK DE IA EXPANDIDO)
// ==========================================
const ciscaKnowledge = {
    "app": "APP é a Área de Preservação Permanente. É a mata que protege as margens de rios, córregos e nascentes. Manter essa vegetação em pé evita que o barranco caia (assoreamento) e garante que a água do seu sítio não seque!",
    "reserva legal": "A Reserva Legal é uma fatia de mata nativa dentro da sua propriedade que não pode ser desmatada, mas pode ser usada para manejo sustentável. Em Goiás e na maior parte do país, ela corresponde a 20% da área total da sua terra.",
    "car": "O CAR (Cadastro Ambiental Rural) é o registro eletrônico obrigatório para todos os imóveis rurais. Ele funciona como o 'RG Ambiental' da sua terra e serve para planejar a conservação do nosso país.",
    "sicar": "O SICAR é o Sistema Nacional de Cadastro Ambiental Rural. É o sistema de computador do governo federal onde todos os estados unificam os mapas e dados do CAR. É lá que os analistas conferem as fotos de satélite.",
    "lei": "A lei principal é o Novo Código Florestal (Lei nº 12.651/2012). O Siscar+ serve justamente para traduzir esse textão de advogado para a linguagem prática de quem lida com a terra todo dia!",
    "pendencia": "Fique tranquilo! Uma pendência geralmente significa que o analista do Estado achou alguma divergência no desenho do mapa (como a largura de um rio) ou precisa que você envie uma foto ou documento complementar.",
    "credito rural": "Os bancos e cooperativas exigem o CAR regularizado (ou em processo de regularização com o PRA ativo) para liberar financiamentos como Pronaf, custeio ou investimentos. Quem está em dia com a Cisca consegue crédito mais rápido e barato!",
    "prada": "O PRADA é o Projeto de Recomposição de Áreas Degradadas e Alteradas. É um plano de ação bem simples onde a gente escreve como você vai recuperar a mata que sumiu: se vai plantar mudas, cercar para a natureza crescer sozinha ou plantar sementes.",
    "pra": "O PRA é o Programa de Regularização Ambiental. Se você teve algum desmatamento antigo (antes de julho de 2008), o governo te dá anistia de multas se você entrar no PRA e assinar o compromisso de recuperar o que falta.",
    "multa": "Se você tiver passivo ambiental anterior a 22 de julho de 2008 e fizer a inscrição no CAR e aderir ao PRA, as multas antigas ficam suspensas! É por isso que regularizar o quanto antes protege o seu bolso.",
    "modulo fiscal": "Módulo Fiscal é uma unidade de medida em hectares que muda de acordo com o seu município. Imóveis com até 4 módulos fiscais são considerados pequenas propriedades ou agricultura familiar e têm direito a regras muito mais fáceis e apoios do governo!",
    "ajuda": "Estou aqui para descomplicar! Pode me perguntar termos como: 'SICAR', 'APP', 'Reserva Legal', 'PRADA', 'PRA', 'Multa' ou 'Crédito Rural'. O que está tirando o seu sono hoje?"
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

        // Procura por palavras-chave no dicionário expandido
        for (const k in ciscaKnowledge) {
            if (lower.includes(k)) {
                reply = ciscaKnowledge[k];
                break;
            }
        }

        if (!reply) {
            reply = "Essa funcionalidade de IA ainda está em evolução no protótipo do Siscar+. Na versão completa do produto, nossa Inteligência Artificial lerá o Código Florestal e os Manuais Oficiais do SICAR para te responder com total certeza técnica!";
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

// Inicialização amigável de Listeners e Estado Inicial
document.addEventListener("DOMContentLoaded", () => {
    // Monitora tecla Enter no campo do Chat de forma segura após o DOM carregar
    const chatInput = document.getElementById('chat-input');
    if(chatInput) {
        chatInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') submitChatMessage();
        });
    }
    
    // Roda o cenário inicial
    selectScenario(1);
});
