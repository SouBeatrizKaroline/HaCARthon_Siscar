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
// ==========================================
    // GRUPO 7: PASSO A PASSO DA INSCRIÇÃO NO CAR
    // ==========================================
    "como inscrever": "Para inscrever o seu sítio, o processo é feito com o órgão de meio ambiente do seu estado. Se o estado não tiver um sistema próprio, a gente usa o Módulo de Cadastro lá no site do governo (www.car.gov.br). Você escolhe o seu estado, baixa o programinha no computador e começa a preencher os dados do dono, os documentos da terra e o desenho do mapa com os rios e matas.",
    "modulo de cadastro": "O Módulo de Cadastro é o programinha de computador que você baixa no site do CAR para declarar a sua terra. Nele tem os botões para 'Baixar Imagens' do satélite, 'Cadastrar' os dados da fazenda, 'Gravar para Envio' e 'Enviar'. É como um bloco de notas digital onde você monta o desenho da sua propriedade antes de mandar para o governo.",
    "nao e titulo de posse": "Preste muita atenção nisso, parceiro: fazer o CAR **não vale como escritura ou documento de posse da terra**, e também não serve para regularizar a propriedade no cartório (Lei 10.267). O CAR cuida apenas da parte ambiental (árvores e águas). Para provar que a terra é sua, os documentos do cartório e a regularização fundiária continuam valendo do mesmo jeito!",
    "gravar para envio": "Essa é uma regra de ouro! Quando você termina de desenhar o mapa no programa, você clica em 'Gravar para Envio'. Isso gera um arquivo com o final **.car** e um Protocolo de Preenchimento. **Importante:** Depois que gravou, você não consegue mais editar esse arquivo! Se perceber um erro antes de mandar para a internet, vai ter que fazer um cadastro do zero.",
    "arquivo car": "O arquivo '.car' é a certidão digital da sua terra que o programinha gera no seu computador. É esse arquivo que guarda todas as informações que você preencheu. Se você precisar corrigir alguma coisa mais tarde (retificar), vai precisar desse arquivo salvo para não ter que refazer o trabalho todo.",
    "protocolo de preenchimento": "O Protocolo de Preenchimento é o papel que sai assim que você grava os dados no programa. Ele mostra o seu CPF e o resumo do que foi feito, mas atenção: **o Protocolo sozinho não prova que sua terra está inscrita no CAR!** Ele é só o comprovante de que você terminou de preencher o arquivo no computador.",
    "enviar arquivo": "Depois de gravar o arquivo '.car' no computador, você precisa de internet para mandá-lo para o governo. No programa, clique em 'Enviar', selecione o seu arquivo e digite os caracteres de segurança. Quando der certo, você recebe uma mensagem na tela com o link para baixar o seu **Recibo de Inscrição**. Guarde e imprima esse recibo com muito carinho!",
    "recibo do car": "O Recibo de Inscrição é o documento oficial que prova para o mundo (e para o banco!) que a sua terra está cadastrada no CAR conforme a lei manda. Com ele, você cumpre a regra do Código Florestal, comprova que entregou os mapas para análise e consegue liberar o crédito agrícola na hora!",
    "licenca ambiental": "Uma coisa é uma coisa, outra coisa é outra coisa! O Recibo do CAR prova que você cadastrou a terra, mas **ele não serve como licença ambiental** para tirar mata (supressão), explorar madeira ou tocar atividades econômicas que precisem de autorizações específicas. As outras licenças do estado continuam sendo obrigatórias!",

    // ==========================================
    // GRUPO 8: ENTENDENDO AS SITUAÇÕES DO CAR
    // ==========================================
    "aguardando analise": "Essa é a primeira etapa do seu cadastro assim que ele entra no sistema. Significa que o seu CAR está na fila oficial do Estado aguardando um técnico sentar na cadeira e começar a olhar os seus mapas. Essa consulta só pode ser feita por você ou pelo seu representante legal.",
    "analise do orgao": "Quando o seu cadastro entra em análise, os técnicos do Estado vão conferir se o que você desenhou bate com as imagens de satélite. Se eles acharem alguma coisa confusa ou faltar papel, eles vão te mandar uma mensagem pedindo documentos ou correções.",
    "status ativo": "O CAR fica com status 'Ativo' quando o envio do arquivo foi um sucesso e você está cumprindo todas as obrigações de manter os dados atualizados. Se o técnico já analisou e viu que as suas matas e rios estão todos na linha, ele continua ativo e regularizado!",
    "status pendente": "O seu CAR muda para 'Pendente' se o técnico achar alguma informação errada, se o mapa da sua fazenda estiver 'invadindo' o terreno do vizinho (sobreposição), ou se estiver em cima de Terras Indígenas, Unidades de Conservação ou áreas embargadas. Ele também fica pendente se o governo te passar uma tarefa e você não responder no prazo.",
    "status suspenso": "O status 'Suspenso' acontece por uma ordem direta de um juiz ou por uma decisão muito bem justificada do próprio órgão ambiental. É uma trava temporária enquanto se resolve alguma disputa ou investigação sobre o imóvel.",
    "status cancelado": "Esse é o caso mais sério. O CAR é 'Cancelado' se o governo descobrir que as informações declaradas são falsas, mentirosas ou omitiram a verdade de propósito. Também é cancelado se você receber notificações de erro, deixar o prazo passar batido e não consertar o cadastro.",

    // ==========================================
    // GRUPO 9: CENTRAL DO PROPRIETÁRIO AVALIAÇÃO
    // ==========================================
    "funcionalidades da central": "A Central do Proprietário serve para quase tudo: por lá você tira a segunda via do seu Recibo, baixa o arquivo '.car', vê a ficha completa do imóvel e puxa o 'Demonstrativo do CAR' (que detalha suas áreas de mata). Além disso, é por lá que você lê as cartinhas dos técnicos e envia os documentos para resolver as pendências.",
    "quando posso retificar": "Você pode atualizar ou retificar o seu CAR para corrigir erros usando o seu arquivo '.car' antigo, desde que o cadastro não esteja sendo analisado pelo técnico do governo naquele momento. **Atenção:** Assim que o órgão estadual começa a analisar o seu CAR, o sistema trava e você não pode mexer em nada, a menos que eles mesmos te mandem uma notificação pedindo a correção!",

    // ==========================================
    // GRUPO 10: ATIVOS FLORESTAIS E COMPENSAÇÃO
    // ==========================================
    "excedente de reserva": "Se o seu sítio tem mais mata nativa guardada do que a lei exige (mais que os 20% aqui na nossa região), essa sobra é um **Ativo Florestal**! Você pode negociar ou 'vender' esse pedaço excedente para um vizinho ou outro produtor que desmatou além da conta antes de 2008 e precisa arrumar a situação dele.",
    "compensacao de reserva legal": "A compensação de Reserva Legal é quando um produtor que tem falta de mata na terra dele resolve o problema ajudando a manter a mata de outra propriedade. Você pode fazer isso comprando Cotas (CRA), arrendando a área de outra pessoa, ou registrando outra terra sua que tenha mata sobrando, desde que as duas áreas fiquem no mesmo Bioma (Cerrado com Cerrado, por exemplo) e o Estado aprove!",
    "cota de reserva ambiental": "A CRA (Cota de Reserva Ambiental) é como um título, um papel de valor que representa uma área de mata nativa preservada ou em recuperação. Se você tem déficit de reserva no seu sítio, você pode comprar ou alugar essas cotas de quem tem mata sobrando para ficar em dia com a lei sem ter que parar de plantar na sua área produtiva.",
    "servidao ambiental": "A servidão ambiental é quando o dono da terra decide, por vontade própria, carimbar um pedaço do seu sítio para virar área protegida para sempre, além daquilo que a lei já pedia (além da APP e da Reserva comum). Esse pedaço a mais pode ser usado para vender como compensação para quem precisa de mata.",
    "doacao para unidade de conservacao": "Se um produtor precisa compensar a falta de reserva legal, ele pode comprar uma área de mata privada que esteja dentro de um Parque Nacional ou Reserva Pública (Unidade de Conservação) que o governo ainda não indenizou, e doar essa área para o poder público. Se o órgão ambiental der o 'de acordo', a dívida de mata dele está paga!",
    "cadastramento de outra area": "Essa é a opção de compensar o sumiço da mata usando outra terra. Pode ser um segundo sítio que seja do próprio bolso do produtor ou a área de um terceiro. Você faz o registro desse 'ativo florestal' excedente no sistema do SICAR para cobrir o buraco da terra que ficou sem árvore."

// ==========================================
    // GRUPO 11: REGRAS E TRAVAS DO SISTEMA (FILTROS)
    // ==========================================
    "trava de limite": "O grande computador do CAR (SICAR) tem uns olhos de gavião chamados 'filtros automáticos'. Se você tentar cadastrar uma terra e o desenho do mapa passar mais de 1 quilômetro para fora da fronteira do Brasil, o sistema trava na hora e não deixa você terminar a inscrição!",
    "trava de estado e municipio": "O sistema confere onde sua terra está de verdade. Se a sua fazenda fica na divisa de dois estados, o CAR deve ser feito obrigatoriamente no estado onde está a maior parte da terra (mais de 50%). E o município que você colocar no papel precisa, pelo menos, encostar em um pedaço do desenho do seu mapa, senão o sistema rejeita!",
    "trava de sobreposicao": "Se você tentar cadastrar um imóvel e o desenho dele ficar mais de 30% em cima de uma outra terra que já foi declarada no sistema com o mesmo CPF ou CNPJ, o computador vai achar que você está tentando cadastrar a mesma fazenda duas vezes e vai bloquear o envio!",
    "trava de tamanho do mapa": "O sistema cruza o tamanho da terra que está escrito no seu documento (escritura) com o tamanho do mapa que você desenhou. Para sítios pequenos (até 4 módulos fiscais), se o desenho for o dobro do tamanho do documento, ou se o documento for o dobro do desenho, o programa dá erro de 100% de divergência e não deixa gerar o arquivo '.car'. Para fazendas grandes (mais de 4 módulos), a tolerância é menor: se errar por mais de 1,5 vez (50% de diferença), o sistema trava!",
    "trava de envio estadual": "Preste atenção para não mandar a carta para o endereço errado! Se o seu estado usa um sistema próprio com receptor do estado, você não pode tentar enviar o arquivo '.car' direto pelo site nacional de Brasília (car.gov.br). O envio tem que ser feito na página da internet do próprio sistema do seu estado.",

    // ==========================================
    // GRUPO 12: DE OLHO NAS RESERVAS E INDÍGENAS
    // ==========================================
    "pendencia terra indigena": "Se o mapa do seu sítio encostar ou ficar em cima de alguma Terra Indígena homologada pela FUNAI, o sistema do CAR vai mudar o seu status para 'Pendente' na mesma hora. É um aviso para o governo analisar de perto o que está acontecendo.",
    "pendencia unidade de conservacao": "Se a sua terra estiver em cima de Parques Nacionais, Estações Ecológicas ou Reservas Biológicas, o sistema muda o CAR para 'Pendente'. Existe apenas uma colher de chá (tolerância) para pequenos erros do desenho do mapa: 10% de lambuja para sítios pequenos, 5% para médios e só 3% de lambuja se a fazenda for grande.",
    "pendencia area embargada": "Se o proprietário levou um castigo do IBAMA no passado e teve algum pedaço da terra travado por desmatamento ilegal (área embargada), o sistema puxa essa informação direto do banco de dados do IBAMA e deixa o CAR 'Pendente' até que tudo seja esclarecido.",

    // ==========================================
    // GRUPO 13: QUEM COMPRA, QUEM VENDE E PRAZOS
    // ==========================================
    "prazo do car": "A lei estipulou que o prazo final para fazer o CAR e pedir para entrar no Programa de Regularização Ambiental (PRA) e garantir os benefícios das áreas antigas consolidadas foi até 31 de dezembro de 2018. Depois dessa data, quem não se inscreveu ficou impedido de pegar qualquer tipo de crédito ou financiamento no banco!",
    "quem precisa fazer": "O CAR é obrigatório para **absolutamente todo mundo** que tem terra no Brasil! Não importa se é um sítio pequeno, uma fazenda gigante, terras de comunidades tradicionais, quilombolas ou lotes de assentamento da Reforma Agrária. Todo chão precisa de CAR.",
    "quem pode preencher": "O cadastro pode ser preenchido por você mesmo (dono ou posseiro), por um técnico ou por um representante que você escolher e der autorização. No caso de assentamentos da Reforma Agrária ou terras de comunidades tradicionais, quem tem a obrigação de fazer o CAR é o próprio órgão do governo responsável por eles (como o INCRA).",
    "responsabilidade dos dados": "Tudo o que for escrito e desenhado no CAR é de inteira e total responsabilidade de quem é dono ou posseiro da terra. Se colocar informação errada ou mentir para o governo, o feitiço vira contra o feiticeiro e o dono responde pelo erro perante a lei (conforme as regras de propriedade do Código Civil).",
    "comprar e vender terra": "Se você vai comprar um sítio, a primeira coisa a fazer é pedir o número do Recibo do CAR do vendedor. Depois, entre no sistema e puxe o 'Demonstrativo' para ver se o mapa está certinho, se a Reserva Legal foi aprovada ou se tem alguma pendência (como briga de divisa com vizinho ou embargo do IBAMA). Assim que fechar o negócio, o novo dono precisa correr no sistema para atualizar o CAR para o seu nome!",
    "atualizar programa do car": "Se o programinha do CAR pedir atualização no computador, **nunca baixe um instalador novo direto do site para jogar por cima**, senão você apaga todos os cadastros que já digitou e ainda não enviou! O jeito certo é clicar no botão 'Atualizar' dentro do próprio programa que já está aberto na sua tela. Ele vai baixando as atualizações passo a passo até dizer que o sistema está em dia, sem sumir com o seu trabalho.",
    "onde achar manuais": "Se quiser ler os livrinhos de instrução do governo (Manuais), eles ficam guardados na aba 'Atendimento' lá no site nacional do CAR (car.gov.br/#/suporte). E se a dúvida persistir e o manual não ajudar, o jeito é pedir socorro para os técnicos da Secretaria de Meio Ambiente do seu próprio estado!"

// ==========================================
    // GRUPO 14: DOCUMENTOS, VISTORIAS E DADOS DO CAR
    // ==========================================
    "precisa de documentos": "Olha, na hora de mandar o CAR você preenche tudo no computador, mas o governo pode pedir os documentos que provam o que você disse a qualquer momento! Eles analisam os papéis pela internet mesmo, mas se o técnico achar alguma coisa estranha, ele pode ir até o seu sítio fazer uma vistoria de surpresa ou te mandar uma mensagem cobrando correções.",
    "o que declarar": "O CAR tem que mostrar o retrato real da sua terra hoje. Você precisa colocar: quem é o dono ou posseiro (se tiver mais de um, tem que listar todo mundo), o documento da terra e o desenho do mapa com as coordenadas. Se o sítio for pequeno (até 4 módulos fiscais) ou terra de comunidade tradicional, pode fazer um desenho mais simples, tipo um croqui, usando as imagens de satélite do programa.",
    "terra de mais de um dono": "Se o sítio for uma herança ou tiver mais de um dono (seja parente, sócio ou empresa), a regra é clara: **faz apenas um único CAR para a terra toda**. Mas lá dentro do sistema você é obrigado a cadastrar o nome, CPF e o papel de cada uma das pessoas que fazem parte do negócio.",
    "propriedades coladas": "Se você é dono de dois ou mais sítios que ficam colados um no outro (em área contínua), a lei manda fazer **uma única inscrição no CAR** juntando tudo. O sistema não acha que estradas, rios ou pontes cortam a terra, então se estiver encostado, junta tudo num cadastro só para calcular as matas certinho.",
    "divisao de terra": "Se você decidir desmembrar ou vender um pedaço de um sítio que já tinha CAR, o dono antigo precisa entrar no sistema e atualizar o cadastro dele diminuindo o tamanho. E quem comprou ou pegou o pedaço novo vai ter que fazer um CAR do zero para essa nova área.",

    // ==========================================
    // GRUPO 15: DEFINIÇÕES ESPECIAIS DA TERRA (GEO)
    // ==========================================
    "servidao administrativa": "A servidão administrativa é quando o governo carimba um pedaço da sua terra para passar uma coisa de utilidade pública — tipo uma rodovia, linhas de transmissão de energia ou canal de água. O bom é que, na hora de calcular o tamanho da Reserva Legal que você precisa guardar, o sistema desconta esse pedaço da conta final!",
    "area consolidada": "Área consolidada é aquele pedaço do sítio que já estava aberto e sendo usado para plantação, pasto, criação de bicho ou que já tinha casa e benfeitoria desde antes do dia **22 de julho de 2008**. Se você abriu a terra antes dessa data, a lei deixa você continuar trabalhando nela, desde que o regime de descanso da terra (pousio) seja respeitado.",
    "reserva legal averbada": "Se você já tinha a sua Reserva Legal registrada e carimbada na escritura do cartório (averbada) antes do CAR nascer, você ainda é obrigado a fazer o CAR! A diferença é que você não precisa desenhar o mapa da reserva do zero se não quiser; basta colocar as coordenadas antigas ou anexar a certidão do cartório que comprova o registro.",
    "pantanal e ladeiras": "Se a sua terra fica no Pantanal, além da Reserva Legal você precisa marcar no mapa as áreas que já estavam abertas antes de 2008. E se o seu sítio tem ladeiras muito caídas (com inclinação entre 25 e 45 graus), o sistema exige que você desenhe e declare esses morros como áreas de uso restrito.",
    "recompor a reserva": "Se o seu sítio não tem o mínimo de mata que a lei exige, você pode resolver isso de vários jeitos no CAR: deixando a mata crescer sozinha (regeneração), plantando mudas novas (recomposição), juntando a sua reserva com a do vizinho (condomínio) ou fazendo a compensação em outro lugar.",
    "pequena propriedade frutas": "Para quem tem sítio pequeno (da agricultura familiar), a lei dá uma colher de chá maravilhosa: para bater a meta da Reserva Legal, você pode contar os pedaços onde plantou árvores de frutas, plantas ornamentais ou de comércio (como eucalipto), desde que estejam misturadas com as árvores nativas da região (sistema agroflorestal).",

    // ==========================================
    // GRUPO 16: CUSTOS, REQUISITOS E ERROS DE TELA
    // ==========================================
    "quanto custa o car": "A inscrição no CAR é **100% gratuita**, o governo não cobra nenhuma taxa ou imposto para registrar a terra! Mas ó, como mexer no programa de computador e entender as leis ambientais pode ser meio complicado, se você não se sentir seguro para fazer sozinho, pode contratar um técnico (como um engenheiro ou agrônomo) para fazer para você, e aí sim você paga o serviço dele. Para quem tem sítio pequeno (até 4 módulos), o governo tem o dever de dar apoio técnico de graça.",
    "computador para o car": "Para rodar o programinha do CAR (Módulo de Cadastro), você precisa de um computador simples com sistema Windows (pode ser o Windows 7, 8 ou os mais novos) e um processador de pelo menos 1.3 GHz. Você pode conferir a lista completa direto na página de download do site do CAR.",
    "castigos de ficar sem car": "O governo federal não colocou uma multa em dinheiro só por não ter o CAR, mas o castigo é pior: sem o CAR a sua terra fica 'bloqueada' para o mundo. Você não consegue pegar nenhum centavo de financiamento ou crédito no banco, não consegue autorização para tirar nenhuma árvore e fica de fora de todos os programas de ajuda do governo.",
    "erro de sumir imagem": "Se você estiver mexendo no mapa da sua terra, der um zoom para chegar mais perto e a imagem de satélite sumir da tela, não se desespere! Isso acontece porque a imagem do município não foi baixada inteira por causa de internet lenta. O jeito é ir na aba 'Baixar Imagens' de novo e mandar baixar até que o mapa fique firme na tela, sem sumir no zoom."

// ==========================================
    // GRUPO 17: CONSULTAS, ANÁLISES E NOTIFICAÇÕES
    // ==========================================
    "saber se tem car": "Para descobrir se um sítio já tem o CAR feito, basta entrar na página de consulta do governo (car.gov.br/#/consultar). Lá o sistema só vai te pedir uma coisa: ou o número do Protocolo ou o número do Recibo de Inscrição. Digitou ali, o computador já te mostra a capivara completa da terra.",
    "acompanhar o car": "Para não ficar no escuro, o dono da terra pode espiar o andamento de tudo (desde o envio até a aprovação final) de dois jeitos: ou puxando o 'Demonstrativo da Situação' pelo link de consulta pública ou entrando direto na Central do Proprietário. É bom olhar de vez em quando para ver se o status mudou!",
    "saber se foi analisado": "Para saber se o técnico do governo já olhou o seu CAR, o melhor caminho é entrar na Central do Proprietário e clicar na aba 'Mensagens'. É por ali que o governo manda um aviso dizendo 'olha, começamos a analisar' ou 'terminamos a checagem'. Quem é de fora também consegue ver o status geral pela consulta pública se tiver o número do Recibo em mãos.",
    "quem analisa o car": "Quem senta na cadeira para olhar mapa por mapa e aprovar onde vai ficar a sua Reserva Legal é o órgão ambiental do seu próprio estado (a Secretaria de Meio Ambiente) ou alguma instituição que eles escolherem e derem esse poder.",
    "como e feita a analise": "O técnico do governo cruza tudo o que você declarou (seus documentos, as divisas da terra, as matas e rios) com fotos de satélite e sistemas automáticos. O computador avisa o técnico na hora se o seu mapa estiver invadindo a terra do vizinho, se pegou um pedaço de reserva indígena ou se você declarou que uma mata virgem é área aberta. **Atenção:** Enquanto o técnico estiver analisando o seu CAR, o sistema trava e você não consegue mexer ou corrigir nada, a menos que ele te mande uma ordem!",
    "recebi uma notificacao": "Se o governo te mandou uma notificação, não precisa tremer as pernas! Significa apenas que o técnico achou um erro ou quer ver um documento. O aviso vai aparecer em vermelho logo na página inicial da sua Central do Proprietário, lá na aba 'Mensagens', dizendo até o dia final que você tem para responder. Se pedirem documento, você manda pela aba 'Envio de Documentos'; se pedirem para arrumar o mapa, você faz pela aba 'Retificação'.",
    "prazo da notificacao": "O relógio começa a correr no exato momento em que você recebe o aviso do órgão ambiental. Esse prazo varia de estado para estado e vem escrito bem claro na cartinha da notificação. Pode ser entregue pelos Correios, pelo Diário Oficial ou direto na tela do computador. Se deixar o prazo passar em branco e não responder, seu CAR fica pendente ou pode até ser cancelado!",

    // ==========================================
    // GRUPO 18: CENTRAL DO PROPRIETÁRIO E GOV.BR
    // ==========================================
    "o que e a central": "A Central do Proprietário é a linha direta de conversa entre você e o órgão ambiental do estado. É a agência virtual do seu sítio! Por lá você resolve a vida toda: puxa segunda via de recibo, vê o que o técnico escreveu, manda documento, faz correção e até pede para entrar no programa de regularização de matas (PRA).",
    "como cadastrar na central": "Para quem vai entrar na Central pela primeira vez, vá no site (car.gov.br/#/central/acesso) e clique em 'Não tenho cadastro'. O sistema vai te pedir o número do Recibo (o do Protocolo não serve!) e o CPF ou CNPJ que foi usado no CAR. Depois ele vai te fazer umas perguntas de segurança (como a data de nascimento e o nome da sua mãe) e mandar uma senha provisória para o seu e-mail.",
    "bloqueio de seguranca": "Se você tentar entrar na Central e aparecer uma mensagem dizendo que seu registro foi bloqueado por 24 horas por errar as respostas, o motivo quase sempre é o mesmo: a data de nascimento ou os dados que você digitou agora não batem com o que foi escrito lá no dia em que fizeram o CAR da terra. O sistema desconfia de fraude e trava por segurança. O jeito é esperar um dia inteiro para tentar de novo.",
    "recuperar senha central": "Essa regra mudou e ficou mais segura! Agora, para recuperar o seu acesso ou entrar na Central do Proprietário, o sistema exige que você use a sua conta do **Gov.br** (aquela mesma do CPF e da carteira de motorista digital). Não tem mais senha separada para o CAR. Se perdeu o acesso do Gov.br, tem que resolver no site deles primeiro e depois voltar para o CAR.",
    "recuperar recibo pelo protocolo": "Se você perdeu o seu Recibo de Inscrição e só tem guardado aquele papel antigo do Protocolo de Preenchimento, dá para resolver: vá na página de consulta do site do CAR, digite o número do seu protocolo e o próprio sistema vai buscar e te mostrar o número do Recibo para você salvar.",
    "como fazer retificacao": "Para corrigir qualquer erro no CAR, você abre o programinha no computador, clica na aba 'Retificar', coloca o número do seu Recibo e puxa aquele arquivo antigo de final '.car'. Arrume o que estiver errado, grave de novo e envie o arquivo corrigido direto pela Central do Proprietário. Lembrando: só dá para fazer isso se o CAR não estiver travado na mesa de análise do técnico!",
    "o que sao bases de referencia": "As Bases de Referência são como uns mapas de apoio que o governo te dá. São arquivos com fotos de satélite e desenhos das matas cortados certinho no tamanho do seu sítio. Você pede esse pacote de mapas dentro da Central do Proprietário e o sistema te manda tudo por e-mail para te ajudar a desenhar o CAR sem errar a divisa.",
    "ler resultados da analise": "Quando a análise do técnico termina, chega um aviso na sua Central de Mensagens com o assunto 'seu imóvel foi analisado'. Dentro dela vem um arquivo PDF chamado **Relatório de Análise Técnica**. Esse papel é o raio-X do seu sítio: ele diz se está tudo aprovado ou se tem uma lista de coisas e recomendações que você precisa arrumar.",
    "gerenciar representante": "Se você contratou um técnico, um advogado ou um parente para cuidar do seu CAR, você pode dar ou tirar o poder deles na aba 'Gerenciar Vínculos' dentro da Central. É ali que você escolhe quem pode mexer nos papéis da sua terra e desvincula quem não trabalha mais com você."

// ==========================================
    // GRUPO 19: REGULARIZAÇÃO AMBIENTAL E O PRA
    // ==========================================
    "o que e regularizacao ambiental": "A Regularização Ambiental é o jeito de colocar o seu sítio na lei se ele tiver alguma pendência com a natureza. Significa ajeitar e recuperar as beiras de rio (APP), fechar o tamanho certo da sua Reserva Legal ou arrumar as áreas de uso restrito. O primeiríssimo passo para começar a limpar o nome da terra é fazer a inscrição no CAR.",
    "o que e o pra": "O PRA (Programa de Regularização Ambiental) é uma espécie de 'refis' ou acordo que o governo estendeu para quem desmatou além da conta nas áreas consolidadas (aquelas que já estavam abertas e em uso antes de 22 de julho de 2008). O programa te dá o caminho das pedras para você plantar o que precisa e ficar em dia com a fiscalização. Mas ó: só entra no PRA quem já tiver o CAR feito!",
    "o que e termo de compromisso": "O Termo de Compromisso é o contrato que você assina com o órgão ambiental do estado. Ali fica preto no branco o que você promete fazer (como plantar árvores ou cercar um rio) e o prazo que você tem para cumprir. Esse papel vale como um título extrajudicial, ou seja, é um compromisso sério!",
    "vantagens do termo de compromisso": "A maior vantagem de assinar esse termo é que, enquanto você estiver cumprindo o combinado direitinho, todas as multas e punições por desmatamentos feitos antes de 22 de julho de 2008 ficam congeladas (suspensas). Depois que você terminar de recuperar tudo e o técnico do governo der o visto de aprovação, essas multas antigas são perdoadas e extintas de vez!",
    "como regularizar reserva legal": "Se o seu sítio ficou com menos Reserva Legal do que a lei manda (por conta de desmatamentos antigos até 2008), você tem três caminhos para escolher, podendo até misturar eles: ou você planta mudas para recompor a mata, ou deixa a própria natureza crescer sozinha (regeneração), ou faz a compensação (comprando ou arrendando mata em outro lugar).",
    "como recompor a vegetacao": "Para fazer o mato crescer de novo nas áreas de preservação (APP) ou Reserva Legal, dá para cercar a área e deixar a natureza se virar sozinha, plantar mudas de árvores nativas da região, ou fazer as duas coisas juntas. Se o seu sítio for pequeno (até 4 módulos fiscais), a lei deixa você plantar metade da área com árvores frutíferas ou exóticas (como eucalipto ou pinus) misturadas com as nativas, e você ainda pode colher e tirar sustento dali!",
    "prazo para recuperar reserva": "O relógio do governo dá até 20 anos para você deixar a sua Reserva Legal tinindo! Mas não dá para deixar tudo para o último ano: a cada 2 anos, você tem que comprovar que recuperou pelo menos 1/10 (dez por cento) do pedaço que faltava. **Aviso importante:** Se a derrubada foi feita depois de 25 de maio de 2012, aí não tem moleza do PRA: tem que começar a recuperar imediatamente!",
    "como funciona a compensacao": "Compensar a Reserva Legal significa que, em vez de plantar no seu quintal, você assume a responsabilidade por uma mata que já existe em outro lugar. Dá para fazer isso comprando títulos de floresta (CRA), arrendando o pedaço de mata de um vizinho, doando para o governo uma terra privada que fica dentro de um Parque Nacional, ou cadastrando outra área verde que você tenha no mesmo bioma.",
    "limite para compensar": "Fique muito atento com as datas: você só pode compensar a Reserva Legal se o desmatamento da sua terra aconteceu antes de 22 de julho de 2008. Se alguém passou o trator e derrubou mata nativa depois dessa data, a lei proíbe a compensação. Nesse caso, o único remédio é plantar e recuperar dentro do próprio sítio!",
    "qual o prazo do pra": "Aqueles primeiros prazos que falavam em 2018 já passaram faz tempo, mas não se desespere! A lei foi mudando e ganhando fôlego, e os prazos para pedir a adesão ao PRA hoje dependem muito de como está a regulamentação aí no seu estado. O mais seguro é pedir a adesão logo na hora em que estiver fazendo o envio do seu CAR, para não perder o direito aos benefícios.",
    "diferenca de car e titulo da terra": "Essa aqui confunde muita gente, mas preste bem atenção: uma coisa é a Regularização Fundiária (que é o papel de posse, a escritura, o título que diz que a terra é sua por direito). Outra coisa bem diferente é a Regularização Ambiental (que cuida das matas e rios). Ter o CAR feito **não** serve como documento de propriedade e não garante direito de posse para ninguém. É um cadastro da natureza, não do cartório!",
    "regularizar sem o pra": "Sim, é totalmente possível! Se o seu sítio tem algum déficit ambiental, você é obrigado por lei a assinar o Termo de Compromisso para arrumar as coisas, mas entrar nas regras específicas do programa do PRA é uma escolha sua. Você pode escolher ajeitar a sua terra por conta própria, seguindo o Código Florestal direto com o órgão ambiental."


// ==========================================
    // GRUPO 20: COMPENSAÇÃO DE RESERVA LEGAL
    // ==========================================
    "o que e compensacao de reserva": "A Compensação de Reserva Legal é uma saída que a lei deu para quem tinha menos mata do que o exigido antes de 22 de julho de 2008. Em vez de parar de plantar e gastar dinheiro reflorestando o próprio quintal, você pode 'ajudar' a manter ou regularizar uma mata que já existe em outra propriedade, desde que o órgão ambiental aprove.",
    "modalidades de compensacao": "Para compensar a falta de mata na sua terra, você tem quatro caminhos: comprar um título de floresta (CRA), alugar ou arrendar a mata de um vizinho (servidão ambiental), comprar uma terra privada dentro de um Parque Nacional e doar para o governo, ou simplesmente cadastrar no sistema outra área de mata que você tenha e que esteja sobrando.",
    "regras para compensar": "Para a compensação valer, a lei exige três regras sagradas: as duas áreas precisam ser do mesmo Bioma (Cerrado com Cerrado, por exemplo), o tamanho da mata lá fora tem que ser igualzinho ao pedaço que falta na sua terra e, se a mata for em outro estado, precisa ser em uma área que o governo considera prioritária. E lembre-se: só compensa quem abriu a terra antes de julho de 2008!",
    "o que e cra": "A CRA (Cota de Reserva Ambiental) é um título, um papel passado que representa um pedaço de mata nativa que está de pé ou se recuperando. Quem tem floresta sobrando pode vender ou alugar essas cotas para quem está devendo mata. Mas atenção: o governo só deixa emitir a CRA se a mata for boa de verdade; se for um lugar onde a floresta não vinga, o sistema proíbe.",
    "como criar cotas cra": "As cotas de CRA podem nascer de quatro jeitos: em áreas de servidão ambiental, naquelas matas que o dono guardou por vontade própria além do que a lei pedia, dentro de Reservas Particulares (RPPN) ou em terras que estão dentro de Parques Públicos e que o governo ainda não pagou ao dono.",
    "ja pode emitir cra": "Aqui vai um aviso importante: o governo federal ainda não terminou de amarrar as regras da CRA (falta regulamentação). Por isso, na prática, ainda não dá para emitir essas cotas oficiais pelo sistema nacional, mas a estrutura já está toda desenhada na lei para quando liberarem.",
    "diferenca de cra e crf": "A CRF (Cota de Reserva Florestal) é uma regra antiga, lá do ano 2000, que era bem mais travada. O Código Florestal novo trocou a CRF pela CRA, que é mais moderna. Quem tem uma CRF antiga guardada pode transformá-lo em CRA, mas precisa passar pelo crivo e validação do órgão ambiental do estado primeiro.",
    "aluguel de servidao": "O arrendamento de servidão ambiental é quando você faz um contrato de aluguel com um vizinho que tem mata sobrando. Você paga uma quantia para ele (pode ser por tempo certinho ou para sempre) para usar a floresta dele para cobrir o seu buraco no CAR. Para valer, esse contrato precisa ser carimbado (averbado) na escritura dos dois sítios no cartório.",
    "doacao de terra em parque": "A doação para Unidade de Conservação funciona assim: existem muitas terras particulares que viraram Parques Nacionais ou Reservas no papel, mas o governo nunca indenizou os donos. Se você está devendo mata, você pode comprar um pedaço desses de outra pessoa e doar direto para o poder público. Feito isso, sua dívida de floresta está paga para o resto da vida!",
    "cadastrar sobra de terceiro": "Nessa modalidade, você procura alguém que tenha um 'excedente' de mata no CAR dele. Com o aceite dele no sistema, você cadastra esse pedaço que está sobrando na terra dele para cobrir o déficit do seu sítio. Pode ser em outra terra que já seja sua ou comprando esse direito de um terceiro, desde que o estado dê o visto de aprovação.",

    // ==========================================
    // GRUPO 21: OS BENEFÍCIOS DE TER O CAR
    // ==========================================
    "vantagens do car": "Fazer o CAR traz um balaio de coisas boas para o produtor: ajuda a planejar a fazenda, deixa as licenças para tirar árvore mais fáceis, tira a obrigação de gastar dinheiro registrando a reserva no cartório e, o melhor de tudo, desconta as áreas de mata do cálculo do ITR (Imposto Territorial Rural), fazendo você pagar menos imposto!",
    "desconto em insumos e juros": "Quem tem o CAR em dia consegue bater na porta do banco e exigir juros mais baixos e prazos maiores para pagar o financiamento da lavoura. Além disso, a lei dá isenção de impostos em materiais usados para recuperar a terra, como fios de arame, postes de madeira tratada e bombas d'água.",
    "beneficios de quem tem mata sobrando": "Se o seu sítio tem mais floresta do que o mínimo exigido, parabéns! Essa sobra vira dinheiro no seu bolso, porque você pode vender ou alugar esse pedaço para os vizinhos que estão devendo. Você também ganha prioridade para receber ajudas do governo, sementes, mudas e entrar nos programas de Pagamento por Serviços Ambientais (receber dinheiro só por manter a mata de pé).",
    "beneficios de quem tem pendencia": "Se a sua terra tem passivo ambiental (tá devendo árvore), o CAR é a sua única salvação para entrar no PRA (Programa de Regularização). Ao entrar no programa e começar a ajeitar as coisas, o governo congela todas as suas multas antigas e te dá o direito de continuar trabalhando na área aberta sem levar castigo da fiscalização.",
    "como usar a mata excedente": "A sua floresta que passa do limite da lei é um verdadeiro patrimônio (ativo florestal). Você pode usar essa sobra de três formas para ganhar uma renda ou negociar: emitindo as cotas (CRA) quando forem liberadas, alugando o pedaço por contrato de servidão ou permitindo que outro produtor cadastre a sua sobra para cobrir a falta dele.",
    "vantagens para sitio pequeno": "Para quem tem terra de até 4 módulos fiscais ou faz parte de comunidade tradicional, a lei foi muito mãe! Você ganha ajuda jurídica e técnica de graça do governo para fazer o CAR, pode limpar áreas em casos de baixo impacto com uma simples declaração, pode contar árvores de frutas na sua Reserva Legal e, se a sua terra já estava aberta em 2008, você não precisa desmanchar sua lavoura; a sua reserva será apenas a mata nativa que sobrou naquela data!"

// ==========================================
    // GRUPO 22: DADOS PÚBLICOS, RELATÓRIOS E ATLAS DO CAR
    // ==========================================
    "onde ver dados do car": "Se você tiver curiosidade de saber como anda o CAR no seu município, no seu estado ou no Brasil inteiro, o governo deixa tudo aberto no site do Serviço Florestal Brasileiro (florestal.gov.br). Lá você encontra três ferramentas ótimas para espiar isso: o Módulo de Relatórios Público, o Boletim Informativo e o Atlas do CAR. Dá para ver quanta terra já foi cadastrada, o tamanho das matas que o povo declarou e até onde tem mais nascente.",
    "o que e modulo de relatorios": "O Módulo de Relatórios Público é uma página na internet (florestal.gov.br/modulo-de-relatorios) que funciona como um contador do governo. Ele junta tudo o que foi declarado desde o comecinho do CAR lá em 2014 e atualiza todo mês. O bom é que dá para mexer nos filtros e ver os números separados por tamanho de sítio (pequeno, médio ou grande) ou por tipo (assentamento, quilombola, etc.), e ainda baixar uma planilha no computador.",
    "o que e boletim informativo": "O Boletim Informativo é uma revistinha digital que o Serviço Florestal Brasileiro publica todo mês. Ela mostra o ritmo das inscrições, quais estados estão cadastrando mais e traz matérias especiais sobre o andamento do programa em bacias importantes, como a do Rio São Francisco e do Rio Doce, além de mostrar como andam os dinheiros e os treinamentos do CAR.",
    "o que e atlas do car": "O Atlas do CAR é um livrão de mapas que o governo fez para desenhar a cara da natureza no Brasil. Ele pega os dados das declarações e transforma em mapas coloridos que mostram direitinho onde estão os remanescentes de mata nativa, as APPs, as Reservas Legais e as nascentes de cada estado. É um prato cheio para quem gosta de ver as coisas desenhadas!",
    "diferenca de boletim e modulo": "Às vezes você olha o Boletim e o Módulo de Relatórios e os números não batem direitinho, mas não precisa achar que é erro! É que o Módulo Público é um computador que soma tudo no automático de forma simples. Já o Boletim passa pelo pente fino dos técnicos: eles tiram cadastros que parecem falsos, contam cada família de assentamento separada e somam os dados daqueles estados que usam sistema próprio e ainda estão mandando os papéis para Brasília.",

    // ==========================================
    // GRUPO 23: CANAIS DE DÚVIDAS E APOIO GRATUITO
    // ==========================================
    "onde tirar duvidas do car": "Como cada canto do Brasil tem as suas próprias regras e o seu jeito de cuidar do meio ambiente, o melhor lugar para tirar dúvidas é direto no site nacional do CAR (car.gov.br) nas abas 'Sobre' e 'Perguntas Frequentes'. Se a conversa for mais complicada, procure a Secretaria de Meio Ambiente do seu estado; no site do CAR tem uma lista com o telefone e o e-mail de cada uma delas.",
    "ajuda para pequeno produtor": "Se o seu sítio tem até 4 módulos fiscais e você vive da terra (com agricultura ou criação), a lei garante que você não precisa pagar ninguém para fazer o seu CAR! O governo do estado tem a obrigação de dar apoio técnico e jurídico de graça para fazer a sua inscrição e te ajudar a desenhar a Reserva Legal sem te cobrar um tostão.",
    "ajuda para comunidades tradicionais": "Para os povos e comunidades tradicionais (como os quilombolas e ribeirinhos), o registro do território também tem apoio garantido. Além de tirar dúvidas no site do CAR, os grupos podem pedir socorro direto para a CONAQ, para a Fundação Cultural Palmares ou para a FUNAI (no caso dos povos indígenas), que eles ajudam a cuidar do cadastro das terras coletivas.",
    "ajuda para assentados da reforma agraria": "Se você é assentado da reforma agrária, quem tem a obrigação de resolver o CAR do assentamento é o órgão de terra. Nos projetos federais, o responsável é o INCRA! Você pode procurar a sede do INCRA do seu estado ou a Diretoria de Obtenção de Terras em Brasília para saber como anda o cadastro da sua parcela.",
    "duvidas sobre analise da reserva": "Se o seu CAR já foi enviado e você quer saber por que o técnico aprovou ou reprovou o desenho da sua Reserva Legal, a resposta está com o órgão ambiental do seu estado. Como cada secretaria estadual tem seus critérios e leis próprias, o jeito é entrar em contato com eles pelos canais oficiais que ficam na aba 'Contatos' do site do CAR.",
    "saber a situacao de regularizacao": "Para ver se a situação da sua terra está verde ou vermelha perante a natureza, você tem dois caminhos no site do CAR: puxar o 'Demonstrativo da Situação' na consulta pública (usando o número do seu recibo) ou entrar na sua Central do Proprietário. Ali o sistema te diz claramente se o seu CAR está ativo, pendente ou cancelado, e se o técnico já analisou o seu mapa de Reserva Legal."
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
