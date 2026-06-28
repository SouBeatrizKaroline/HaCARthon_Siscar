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
// CENTRAL DE RESPOSTAS DA CISCA
// ==========================================
const ciscaKnowledge = {
    // ==========================================
    // GRUPO 1: CONCEITOS BÁSICOS (O "RG" DA TERRA)
    // ==========================================
    "car": "O CAR é o Cadastro Ambiental Rural, o 'RG' da sua terra. Ele puxa todas as informações ambientais do seu sítio (onde tem rio, mata, etc). Fazer o CAR é o primeiríssimo passo para deixar a terra regularizada. Sem ele, você fica travado para pegar crédito no banco, não consegue autorização para tirar árvore e nem desconto no imposto da terra (ITR)!",
    "sicar": "O SICAR é o Sistema Nacional de Cadastro Ambiental Rural. Pense nele como o grande computador de Brasília onde ficam guardados os 'RGs' (CAR) de todas as fazendas do Brasil. É lá que os técnicos do governo olham o mapa da sua terra.",
    "lei": "A lei que rege nosso campo é o Código Florestal (Lei 12.651/2012). Sei que parece complicada, mas meu papel é traduzir cada artigo para te dar segurança!",
    "central do proprietario": "A Central do Proprietário é a sua 'caixa de correio' com o governo. É um site onde você entra com seu CPF e o número do recibo do CAR. Por lá, você baixa a 2ª via do recibo, vê o andamento da análise, responde às mensagens dos técnicos do Estado e envia os documentos que eles pedirem sem precisar ir até a cidade.",

    // ==========================================
    // GRUPO 2: AS REGRAS DA NATUREZA (APP E RESERVA)
    // ==========================================
    "app": "APP é a Área de Preservação Permanente. É a mata protetora de rios, córregos e nascentes. Deixar a vegetação lá evita que a terra desmorone e falte água para sua própria plantação!",
    "reserva legal": "A Reserva Legal é uma fatia de vegetação nativa que todo sítio precisa guardar. Aqui na nossa região ela equivale a 20% do tamanho da sua fazenda (mas na Amazônia pode chegar a 80%). Você não pode desmatar ela, mas pode colher frutos, castanhas ou manejar com licença.",
    "corpo hidrico": "Para o governo, não importa se você chama de corguinho, igarapé, riacho, riozinho, brejo ou nascente: tudo isso entra na mesma gaveta chamada 'Corpo Hídrico'. A regra é a mesma para todos: a água precisa de uma mata em volta para não secar!",
    "nascente": "Nascente é o 'olho d'água', onde a água brota da terra. Pela lei, você precisa proteger um raio de 50 metros em volta dela com cerca e mata nativa para que ela nunca pare de correr.",

    // ==========================================
    // GRUPO 3: DINHEIRO E BENEFÍCIOS NO BOLSO
    // ==========================================
    "credito rural": "O banco só libera o dinheiro do Pronaf, Pronamp ou do custeio se o CAR estiver em dia. Cuidar do meio ambiente hoje é o segredo para conseguir o recurso da próxima safra!",
    "beneficios": "Estar com o CAR em dia traz muita vantagem: você ganha desconto no imposto ITR, consegue juros bem mais baixos e prazos maiores nos financiamentos do banco, tem desconto no seguro da lavoura, não precisa mais gastar dinheiro registrando a Reserva Legal no Cartório de Imóveis e ainda ganha isenção de imposto em materiais como arame farpado, postes e bombas d'água para cuidar da sua terra!",
    "itr": "O ITR é o imposto da sua terra. Se você declarar o CAR direitinho e comprovar as áreas de mata (APP e Reserva), você pode abater essas áreas e pagar um imposto bem menor todo ano!",

    // ==========================================
    // GRUPO 4: RESOLVENDO PROBLEMAS (PRA E PRADA)
    // ==========================================
    "pendencia": "Não se assuste! Uma pendência só significa que o técnico do governo viu um ponto de melhoria no mapa ou precisa de uma certidão atualizada.",
    "pra": "O PRA é o Programa de Regularização Ambiental. Se você teve algum passivo ou tirou mata antes de julho de 2008, o PRA é um acordo amigável com o governo. Ao entrar nele, todas as multas e processos antigos ficam congelados ('suspensos') enquanto você arruma a sua terra plantando as mudinhas ou regenerando a mata.",
    "prada": "PRADA é o Projeto de Recomposição de Áreas Degradadas. É apenas um plano simples onde combinamos onde e como você vai plantar as árvores que faltam.",
    "passivo ambiental": "Passivo ambiental significa que tem alguma 'dívida' com a natureza no seu sítio, tipo um pedaço de beira de rio desmatado ou menos Reserva Legal do que a lei pede. A boa notícia é que dá para parcelar e resolver essa dívida sem desespero.",
    "multa": "Se você tem medo de multa, o segredo é o CAR e o PRA. Quem entra no programa de regularização e cumpre o combinado não leva multa pelas derrubadas antigas (feitas antes de 2008). O governo quer que você arrume a terra, não quer te quebrar!",

    // ==========================================
    // GRUPO 5: QUEM MANDA EM QUÊ? (ÓRGÃOS E ESTADOS)
    // ==========================================
    "estados": "A regra do CAR vale para o Brasil inteiro, mas cada estado se organiza de um jeito. Alguns estados usam o sistema direto de Brasília (como Goiás, Pernambuco e Santa Catarina), enquanto outros têm um sistema próprio do estado (como São Paulo, Mato Grosso, Minas e Pará). Se o seu sistema for do próprio estado, o recibo pode demorar uns dias a mais para aparecer no computador de Brasília.",
    "servico florestal": "O Serviço Florestal Brasileiro (SFB) é o órgão do governo federal que cuida do grande sistema do CAR em Brasília. É o pessoal que ajuda os estados a organizarem os mapas e divulga para o país inteiro como está indo a regularização das terras.",
    "orgao ambiental": "É a Secretaria de Meio Ambiente do seu estado (como SEMAD, SEMA, CETESB, IEF). São os técnicos desse órgão que abrem o seu cadastro no computador para carimbar se o mapa está certo ou se precisa corrigir algo.",

    // ==========================================
    // GRUPO 6: FLUXOS DE INTERPRETAÇÃO E SUPORTE
    // ==========================================
    "ajuda": "Estou aqui para ajudar! Você pode me perguntar sobre 'APP', 'Reserva Legal', 'Pendências', 'Crédito Rural', 'PRA', 'Vantagens' ou 'Central do Proprietário'. Digite uma palavra ou selecione uma tag!",
    "medo de multa": "Calma, parceiro! Nem toda pendência ou aviso no sistema significa multa imediata. Na maioria das vezes, o governo só está pedindo para corrigir o desenho do mapa ou comprovar uma informação. Vamos dar uma olhada juntos antes de se preocupar.",
    "fluxo pendencia app": "Quando o sistema avisa que deu 'problema na beira do rio', a gente faz três passos: 1º Olhamos se tem mesmo uma pendência no seu CAR; 2º Consultamos o SICAR para ver o que o técnico escreveu; 3º Olhamos na Lei o que precisa ser feito (como o PRADA) para resolver sem você levar puxão de orelha."


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

// ==========================================================
// MOTOR DE CRUZA DE DADOS (FLUXO INTELIGENTE DE VALIDAÇÃO)
// ==========================================================
function processarRespostaComValidacao(textoProdutor) {
    const lower = textoProdutor.toLowerCase();
    const dadosDoCenario = scenarios[activeScenario];

    // 1. Dicionário de sinônimos da roça (Tudo vira Corpo Hídrico)
    const sinonimosAgua = ["corguinho", "igarapé", "riacho", "riozinho", "rio", "beira do rio", "córrego"];
    const mencionaAgua = sinonimosAgua.some(termo => lower.includes(termo));
    
    const mencionaMultaOuProblema = lower.includes("multa") || lower.includes("problema") || lower.includes("trem");

    // 2. INTERPRETAÇÃO: Se ele está perguntando de problema na água/rio
    if (mencionaAgua && mencionaMultaOuProblema) {
        
        // 3. VALIDAÇÃO: O sistema olha o cenário ativo para ver se REALMENTE tem pendência
        if (dadosDoCenario.hasApp && activeScenario === 2) {
            // Cenário 2: Tem pendência real de APP
            return `Olha, seu Raimundo, fica tranquilo! ${ciscaKnowledge["medo de multa"]} ` +
                   `Dei uma olhada aqui no sistema do seu CAR e **realmente consta uma recomendação de APP pendente** no seu ${dadosDoCenario.propName}. ` +
                   `O sistema aponta a necessidade de adequar cerca de 1,2 hectare na beira do rio. ` +
                   `Mas não é multa! É só a gente assinar o Termo de Compromisso (PRADA) e ajustar o mapa. Quer que eu te explique o que é o PRADA?`;
        } 
        
        if (activeScenario === 3) {
            // Cenário 3: O imóvel já está regularizado
            return `Seu Raimundo, o senhor pode ficar com o coração bem sossegado! Dei uma olhada aqui no sistema oficial agora mesmo e o seu cadastro está **100% Regularizado**. ` +
                   `Aquele problema antigo na beira do rio já foi validado e aprovado pelo analista. O seu CAR está verdinho e pronto para o Crédito Rural!`;
        }

        // Cenário 1 ou outros onde não há problema registrado de APP
        return `Seu Raimundo, consultei a base oficial aqui e o seu cadastro está na fila 'Em análise'. ` +
               `**Não consta nenhuma pendência ou multa de beira de rio (APP)** registrada para o ${dadosDoCenario.propName} no momento. ` +
               `Às vezes o pessoal se confunde, mas aqui no sistema está tudo correndo normalmente na fila do governo!`;
    }

    // 4. FALLBACK: Se não caiu no fluxo de validação da APP, busca por palavras-chave normais
    for (const k in ciscaKnowledge) {
        if (lower.includes(k)) {
            return ciscaKnowledge[k];
        }
    }

    // Se a IA não entender nada
    return "Essa funcionalidade de IA ainda está em evolução no protótipo do Siscar+. Na versão completa do produto, nossa Inteligência Artificial lerá o Código Florestal e os Manuais Oficiais para te responder com total certeza técnica!";
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

        // Roda o novo motor com validação de intenção e cenário real
        const reply = processarRespostaComValidacao(val);

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
