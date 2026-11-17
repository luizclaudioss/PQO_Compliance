// Complementa WHY (sem sobrescrever entradas existentes).
(function () {
  var X = {
    214: {
      a: "Inclui o item II, que está errado: a B3 não faz compensação bilateral; a compensação é multilateral, com resultado líquido por participante.",
      c: "Inclui o item II, que está errado, pois a compensação é multilateral, e não bilateral.",
      d: "Inclui o item II, que está errado. Apenas os itens I e III estão corretos."
    },
    215: {
      b: "Inclui o item III, que está errado: a contraparte central não atua apenas por novação, pois há outros instrumentos legais de substituição.",
      c: "Inclui o item III, que está errado, já que a atuação da CCP não se limita à novação.",
      d: "Inclui o item III, que está errado. Os itens I e II estão corretos."
    },
    216: {
      a: "A bolsa é o ambiente de negociação, e não o responsável pela transferência e liquidação de ativos por registros eletrônicos.",
      b: "A contraparte central garante a liquidação, mas a definição descreve o sistema de liquidação, e não a CCP.",
      c: "A central depositária guarda e registra os ativos, mas quem processa a transferência e a liquidação é o sistema de liquidação."
    },
    217: {
      a: "Deixa de fora o item III, que também está correto: irrevogabilidade e finalidade das liquidações são características do SPB.",
      b: "Deixa de fora o item II, que descreve corretamente a certeza da liquidação dada pela contraparte central.",
      c: "Deixa de fora o item I. Atenção: a questão 224 traz o uso de contrapartes como facultativo, e a inconsistência entre as duas está registrada na justificativa."
    },
    218: {
      a: "Deixa de fora os itens II e III, que também descrevem o PFMI.",
      b: "Deixa de fora o item I, que também está correto.",
      c: "Deixa de fora o item II, que trata da base legal, da governança e dos riscos do PFMI."
    },
    219: {
      a: "Deixa de fora o item III, que também descreve corretamente o mercado de bolsa.",
      b: "Inclui o item II, que está errado: mercados de bolsa são multilaterais, e a bolsa não evita essas negociações.",
      c: "Inclui o item II, que está errado, e deixa de fora o item I, que está correto."
    },
    220: {
      a: "Limita a negociação a nome próprio, o que não corresponde ao funcionamento da bolsa.",
      b: "Dispensa a habilitação prévia, o que contraria a regra de habilitação das instituições.",
      d: "Cria uma distinção inexistente: a habilitação é exigida para negociar, seja em nome próprio, seja em nome de clientes."
    },
    221: {
      a: "Inclui o item I, que está errado: a entidade de registro não presta serviços de compensação e liquidação.",
      c: "Deixa de fora o item II, que trata de transparência e estabilidade financeira, objetivos da entidade.",
      d: "Inclui o item I, que está errado."
    },
    222: {
      b: "Reduz a compensação ao saldo líquido das obrigações, deixando de fora a apuração envolvendo mais de duas partes.",
      c: "Considera apenas direitos brutos, mas a compensação apura saldos, e não brutos.",
      d: "Fala em múltiplo resultado entre membros e câmara, o que não corresponde à definição de compensação, que envolve mais de duas partes."
    },
    223: {
      a: "Transparência e combate a fraudes são objetivos de outras entidades, como a de registro, e não o foco do SPB.",
      b: "Evitar perdas dos agentes não é o foco do SPB, que trata do gerenciamento de riscos de pagamentos e liquidação.",
      d: "Medir o desempenho e o volume financeiro do mercado não é função do SPB."
    },
    224: {
      b: "Inclui o item III, que está errado: o uso de contrapartes centrais é obrigatório em sistemas sistemicamente importantes, e não facultativo.",
      c: "Considera apenas o item III, que está errado, e deixa de fora os itens I e II, que estão corretos.",
      d: "Inclui o item III, que está errado. Atenção: a questão 217 traz o item I como obrigatório, e a inconsistência está registrada na justificativa."
    },
    225: {
      a: "O CMN é órgão normativo do sistema financeiro, e não o sistema de liquidação bruta em tempo real.",
      b: "A Selic é o sistema de liquidação e custódia de títulos públicos, e não de transferências de fundos entre contas.",
      d: "O SPB é o conjunto do sistema de pagamentos, e não o sistema específico de liquidação bruta."
    },
    226: {
      a: "Considera apenas o item II, que está errado: a câmara é participante do SFN, e o Bacen não é operador das câmaras.",
      c: "Deixa de fora o item III, que está correto: as transferências para as câmaras são irrevogáveis e finais.",
      d: "Inclui o item II, que está errado."
    },
    228: {
      a: "Brainly, Branding e Banking não são os termos que formam o nome B3.",
      c: "Bovespa e Bolsa Livre não são os termos que formam o nome B3; a referência é Brasil, Bolsa e Balcão.",
      d: "Bovespa e Bolsa de Mercadorias e Futuros são origens antigas ou de outras empresas, e não os termos que formam o nome B3."
    }
,
    229: {
      "a":"Inclui o item I, que está errado: emissão, resgate, juros e custódia dos títulos do Tesouro e do Bacen são feitos pelo Selic, e não pela CIP.",
      "b":"Inclui o item II, que está errado: a CIP é associação civil sem fins lucrativos, e não com fins lucrativos.",
      "d":"Inclui o item II, que está errado, pois a CIP não tem fins lucrativos."
    },
    230: {
      "a":"COMPEs são as câmaras de compensação de cheques, e não o conjunto de regras que viabiliza as transferências.",
      "b":"Câmaras Interbancárias de Pagamentos são entidades que compensam e liquidam pagamentos, e não as regras que os viabilizam.",
      "c":"Sistemas Especiais de Liquidação são sistemas de liquidação, e não o conjunto de regras de pagamento."
    },
    231: {
      "a":"1929 não é o ano de fundação da Bolsa Livre, que foi criada em 1890.",
      "b":"1952 não corresponde à fundação da Bolsa Livre, que foi criada em 1890.",
      "c":"1970 não corresponde à fundação da Bolsa Livre, que foi criada em 1890; é outro marco da história do mercado."
    },
    232: {
      "b":"CETIP foi uma das empresas que se fundiram, e não a nova empresa criada.",
      "c":"IBOVESPA é um índice, e não a empresa criada pela fusão.",
      "d":"Bolsa Brasil não é o nome da nova empresa formada pela fusão."
    },
    234: {
      "a":"NDF e Mercado a Termo são produtos ou mercados, e não segmentos da B3.",
      "b":"Registro de companhias abertas e NTN-F não são segmentos da B3; NTN-F é um título público.",
      "d":"SWAP é um derivativo e Clearing é a câmara, e nenhum dos dois é segmento da B3."
    },
    235: {
      "a":"Derivativos é um tipo de instrumento, e não o segmento de registro e liquidação de renda fixa e de balcão.",
      "b":"O Listado B3 é o segmento de negociação em bolsa, e não o de renda fixa e derivativos de balcão.",
      "d":"A Estrutura para Financiamento não é o segmento de registro e liquidação de renda fixa e balcão."
    },
    236: {
      "a":"Considera a asserção I verdadeira, mas o PN não acessa diretamente os sistemas da B3; quem faz isso é o PNP.",
      "b":"Considera a asserção II falsa, mas ela descreve corretamente os participantes autorizados e seus vínculos formais.",
      "d":"Considera as duas asserções falsas, mas a II é correta."
    },
    237: {
      "a":"Deixa de fora o item III, que também é critério de autorização, com exigências de capacitação financeira e operacional.",
      "b":"Deixa de fora o item I, que descreve os grupos de mercados nos quais as instituições podem operar.",
      "c":"Deixa de fora o item II, que trata da elegibilidade das instituições."
    },
    239: {
      "a":"CBLC e Banco BM&F não são as clearings atuais da B3.",
      "c":"Câmbio, derivativos e IPN não correspondem às clearings da B3, e IPN não é câmara.",
      "d":"Banco BM&F, dívida corporativa e mutualização não correspondem às clearings da B3."
    },
    240: {
      "b":"Diz que a II é falsa, mas ela descreve corretamente a transferência progressiva das quatro câmaras para a Clearing Única.",
      "c":"Diz que a I é falsa, mas a I descreve a estrutura única e integrada dos dois maiores segmentos.",
      "d":"Considera as duas asserções falsas, mas ambas estão corretas."
    },
    241: {
      "a":"CBLC é a câmara de liquidação e custódia, e não a empresa de supervisão de mercados.",
      "c":"ETF é um tipo de fundo negociado em bolsa, sem relação com supervisão de mercados.",
      "d":"CEPEA é um centro de estudos em economia aplicada, sem relação com a supervisão da B3."
    },
    244: {
      "a":"Limita o conteúdo às cotações de ações e à renda fixa, deixando de fora derivativos e câmbio, que também fazem parte do market data.",
      "c":"Restringe as informações a investidores pessoa física, o que não corresponde ao conteúdo do market data.",
      "d":"Inclui consolidação de balanço perante a CVM, que não faz parte do conteúdo do market data."
    }
,
    245: {
      a: "A CVM não administra o iBalcão, que é um sistema da B3 para o mercado de balcão.",
      c: "Câmbio pronto não é o foco do iBalcão, que registra derivativos e títulos de renda fixa.",
      d: "Cotação em tempo real de ativos é função do market data, e não do iBalcão."
    },
    246: {
      b: "Descreve o DATAWISE, sistema de dashboards da B3, e não o iBalcão.",
      c: "Descreve a função de retaguarda do SINACOR, e não o iBalcão.",
      d: "Descreve um sistema de negociação eletrônica, enquanto o iBalcão é um sistema de informações e registro."
    },
    247: {
      b: "Descreve a consolidação de contas e cadastros de investidores, que não é função do DATAWISE.",
      c: "Descreve o SINACOR, que otimiza a retaguarda das corretoras.",
      d: "O envio de ordens ao PUMA é função de negociação, e não do DATAWISE."
    },
    248: {
      a: "A inserção de ordens de pessoa física é função de sistemas de negociação, e não o que caracteriza o SINACOR.",
      c: "Contraparte central é função da câmara, e não do SINACOR.",
      d: "Negociar fora do ambiente de bolsa não é característica do SINACOR."
    },
    249: {
      a: "Contraparte central é função da câmara de compensação, e não do SINACOR.",
      b: "O SINACOR informatiza e integra corretoras, mas seu objetivo não é a maior lucratividade do mercado.",
      c: "O SINACOR não é restrito a corretoras com alta classificação de crédito, nem se limita ao mercado de câmbio."
    },
    250: {
      b: "Não está presente em todas as corretoras, e não é o sistema que repassa ordens ao pit de negociação.",
      c: "Não atua no registro de operações de câmbio; sua função é de controle e operação das corretoras.",
      d: "O acesso ao ambiente de negociação não é definido por regimentos do BACEN."
    },
    251: {
      b: "Oferta restrita ao valor do momento não define a apregoação, que envolve a intenção de comprar ou vender com ativo, lote e preço.",
      c: "Realizar lucro em oferta vendedora de ações não define a apregoação por oferta.",
      d: "Ofertas inseridas fora do ambiente de bolsa, via SINACOR, não caracterizam a apregoação."
    },
    252: {
      a: "Inclui o item I, que está errado: o conceito se aplica mesmo com mais de um sistema de negociação.",
      b: "Inclui o item I, que está errado, e deixa de fora o item II, que está correto.",
      d: "Inclui o item I, que está errado."
    },
    253: {
      a: "Inclui o item I, que está errado: o DvP, entrega contra pagamento, é mecanismo presente na liquidação.",
      b: "Inclui o item I, que está errado, e deixa de fora o item II, que está correto.",
      d: "Inclui o item I, que está errado."
    },
    254: {
      a: "Deixa de fora o item III, que também é responsabilidade da BSM.",
      b: "Deixa de fora o item II, que trata da supervisão e fiscalização da B3 e de seus participantes.",
      c: "Deixa de fora o item I, que também é responsabilidade da BSM."
    },
    256: {
      b: "Inclui o item II, que está errado: o mercado de derivativos de balcão é afetado pela entidade de registro.",
      c: "Inclui os itens II e III, que estão errados: a entidade de registro assegura um sistema centralizado, e não descentralizado.",
      d: "Inclui os itens II e III, que estão errados."
    },
    257: {
      a: "CETIP é entidade de registro e liquidação de títulos privados, e não o sistema de transferência de fundos do Banco Central.",
      c: "SITRAF é o sistema de transferência de fundos administrado pela CIP, e não pertence ao Banco Central.",
      d: "Selic é o sistema de liquidação e custódia de títulos públicos, e não de transferências de fundos."
    },
    258: {
      a: "Deixa de fora o item III, que também está correto: a B3 atua como central depositária de títulos de renda variável e renda fixa corporativa.",
      b: "Deixa de fora o item II, que trata da atuação como sistema de liquidação bruta e da compensação bilateral em alguns casos.",
      c: "Deixa de fora o item I, que descreve a atuação da B3 como contraparte central."
    }
,
    259: {
      a: "A central depositária guarda e registra os ativos, e não mantém sistemas de negociação.",
      c: "A contraparte central garante a liquidação das operações, e não mantém ambientes de negociação.",
      d: "O sistema de liquidação processa a transferência de ativos, e não os ambientes de negociação."
    },
    260: {
      a: "Auditoria indireta não é o tipo de auditoria que verifica as ferramentas de acesso direto ao mercado.",
      c: "A auditoria operacional não é a que verifica as ferramentas de acesso direto (DMA).",
      d: "Pré-operacional não é o tipo de auditoria que a BSM aplica a essas ferramentas."
    },
    261: {
      a: "Restringe a função apenas ao processo de IPO, deixando de fora captação, distribuição e movimentação de valores.",
      c: "A função das instituições não se limita a transferências entre investidores internos e externos.",
      d: "Deixa de fora a captação de recursos, que é função central das instituições do SFN."
    },
    262: {
      a: "A contraparte central garante a liquidação, e não a integridade dos ativos custodiados.",
      b: "A bolsa é ambiente de negociação, sem atribuição sobre a integridade dos ativos custodiados.",
      d: "O sistema de liquidação processa a transferência, e não a guarda e a integridade dos ativos."
    },
    263: {
      a: "Inclui o item I, que está errado: o Selic não é contraparte central.",
      b: "Inclui o item I, que está errado, e deixa de fora o item II, que está correto.",
      d: "Inclui o item I, que está errado."
    },
    264: {
      a: "Deixa de fora o item III, que também é função da central depositária.",
      b: "Deixa de fora o item II, que também está correto: a central pode manter estrutura de contas direta em nome do beneficiário final.",
      c: "Deixa de fora o item I, que também está correto: os ativos podem ser físicos ou desmaterializados."
    },
    265: {
      a: "O sistema de liquidação não atua como comprador de todos os vendedores nem como vendedor de todos os compradores.",
      b: "A bolsa mantém ambientes de negociação e não assume posição de comprador e vendedor nas operações.",
      c: "A central depositária guarda os ativos, sem atuar como contraparte das operações."
    },
    266: {
      a: "Deixa de fora o item III, que também descreve corretamente a bolsa de valores.",
      b: "Deixa de fora o item II, que também está correto: a bolsa assegura transparência e boa formação de preços.",
      c: "Deixa de fora o item I, que também está correto: a bolsa realiza a listagem dos emissores."
    },
    267: {
      a: "Deixa de fora o item III, que também está correto: a estrutura integrada de liquidação e depositária se estende ao Tesouro Direto.",
      b: "Deixa de fora o item II, que também está correto: o investidor pode usar a mesma conta de depósito para títulos públicos.",
      c: "Deixa de fora o item I, que também está correto: a instituição deve estar habilitada como agente de custódia da B3."
    },
    268: {
      a: "Inclui o item II, que está errado: a B3 mantém um sistema eletrônico de negociação integrado, e não sistemas diferentes para cada segmento.",
      c: "Inclui o item II, que está errado, e deixa de fora o item I, que está correto.",
      d: "Inclui o item II, que está errado."
    },
    269: {
      b: "Liquidação diferida é o momento posterior da liquidação, e não a diretriz de caráter final e irrevogável.",
      c: "Novação é a substituição de obrigações pela contraparte central, e não a diretriz de finalidade.",
      d: "Certeza de liquidação trata da garantia de que a operação será liquidada, e não do caráter final e irrevogável."
    },
    270: {
      b: "A liquidação bruta em tempo real processa transação por transação, e não casa ordens de clientes por preço e cronologia.",
      c: "A compensação multilateral apura saldos, e não casa ofertas de clientes.",
      d: "O acesso direto ao mercado é uma forma de acesso, e não a plataforma de casamento de ofertas."
    },
    272: {
      b: "Liquidação diferida não descreve a situação de ativos que existem apenas como registro eletrônico.",
      c: "Compensação multilateral apura saldos entre participantes, e não descreve a situação dos ativos.",
      d: "Liquidação bruta em tempo real processa transações individualmente, e não descreve a guarda eletrônica dos ativos."
    }
,
    274: {
      a: "Inclui o item I, que está errado: a emissão, o resgate e a custódia dos títulos do Tesouro são feitos pelo Selic, e não pela CIP.",
      b: "Inclui o item I, que está errado, e deixa de fora o item II, que está correto.",
      d: "Inclui o item I, que está errado."
    },
    275: {
      a: "O sistema direcionado por ordens é a plataforma de casamento de ofertas, e não o canal que conecta o cliente final.",
      c: "A liquidação bruta em tempo real é o sistema de liquidação, e não o canal de acesso ao ambiente de negociação.",
      d: "A compensação multilateral apura saldos, e não conecta o cliente ao ambiente de negociação."
    },
    277: {
      a: "A alíquota fixa de 15% não é o regime do COE, que segue a tabela regressiva de renda fixa.",
      c: "A alíquota de 20% não é a tributação do COE, que segue a tabela regressiva de renda fixa.",
      d: "A tabela regressiva de renda fixa vai de 22,5% a 15%, e não de 35% a 10%."
    },
    278: {
      b: "O prejuízo de day trade não pode ser compensado com operações que não são day trade.",
      c: "Os prejuízos de day trade podem ser compensados, desde que com ganhos de day trade.",
      d: "A compensação não vale para qualquer ganho do mercado financeiro; ela segue o tipo de operação."
    },
    279: {
      a: "BDR não é um recibo de ação brasileira negociado nos Estados Unidos; é um título negociado no Brasil.",
      b: "BDR não é uma ação brasileira de companhia fora do país; é um título com lastro em ações estrangeiras.",
      c: "O BDR é cotado em reais, e não em dólares, no mercado brasileiro."
    },
    280: {
      a: "O Nível 2 permite ações preferenciais além das ordinárias, e não exige apenas ações ON.",
      c: "O Nível 1 também admite ações preferenciais, sem exigir apenas ações ON.",
      d: "O segmento Tradicional não tem as exigências de governança do Novo Mercado e permite ações PN."
    },
    281: {
      a: "O ajuste diário é característica do mercado futuro, e não do mercado a termo.",
      c: "Os contratos a termo não são padronizados; são negociados sob medida.",
      d: "A opção de exercer o direito é característica de opções, e não de contratos futuros."
    },
    282: {
      a: "A perda do titular de put é limitada ao prêmio pago, e não é ilimitada.",
      b: "O preço de exercício não é a perda máxima; a perda do titular se limita ao prêmio.",
      d: "O beta mede a sensibilidade da ação ao mercado e não define a perda máxima da opção."
    },
    283: {
      a: "Comprar put de dólar protege contra queda do dólar, e não contra a alta, que é o risco da dívida.",
      b: "Vender call de dólar expõe o cliente à alta da moeda, sem proteger a dívida.",
      d: "Vender dólar futuro trava a venda da moeda, o oposto do que a dívida exige."
    },
    284: {
      a: "Os TIPS pagam cupons e expõem o investidor ao risco de reinvestimento, que não é um benefício.",
      b: "Negociar com deságio não é característica exclusiva dos TIPS.",
      d: "O TIPS é um título americano, e o conceito de ativo livre de risco brasileiro não se aplica a ele."
    }
,
    293: {
      a: "O IMA-S acompanha títulos pós-fixados atrelados à Selic, por isso o item I está correto.",
      b: "O IMA-B acompanha títulos atrelados ao IPCA, por isso o item II está correto.",
      d: "O IRF-M acompanha títulos prefixados, por isso o item IV está correto."
    },
    295: {
      a: "O Tesouro Nacional emite o título, mas não recolhe o IR do investidor nas operações do Tesouro Direto.",
      b: "O próprio investidor não recolhe o imposto: a retenção é feita na fonte pelo agente de custódia.",
      c: "A instituição emissora não é a responsável pelo recolhimento do IR nas operações do Tesouro Direto."
    },
    297: {
      a: "Ágio ocorre quando a taxa do título é maior que a do mercado, o que não é o caso.",
      c: "Ao par ocorre quando a taxa do título é igual à do mercado, o que não é o caso.",
      d: "Títulos podem ser negociados com taxa diferente da do mercado; o preço se ajusta, gerando ágio ou deságio."
    },
    302: {
      a: "O IRRF de R$ 1,50 não corresponde a 0,005% sobre a venda de R$ 130 mil, que resulta em R$ 6,50.",
      c: "R$ 300 e R$ 6.000 não correspondem nem ao IRRF de 0,005% nem ao IR de 15% sobre o lucro de R$ 30 mil.",
      d: "O IRRF de R$ 6,50 já é descontado na fonte e não se soma ao IR de R$ 4.500 apurado sobre o lucro."
    },
    303: {
      a: "T-Bills são títulos zero cupom, sem risco de reinvestimento de cupons, e não se encaixam no enunciado.",
      b: "T-Bills não pagam cupons; apenas os T-Bonds apresentam esse risco.",
      c: "T-Bills não pagam cupons, e apenas o TIPS entra na descrição de risco de reinvestimento."
    },
    305: {
      a: "Obter empréstimo e comprar ações descreve um financiamento de compra, e não a venda à vista com recompra futura.",
      b: "Comprar à vista e vender a termo inverte a lógica da operação de financiamento.",
      c: "Pagar prêmio para ter o direito de compra descreve uma opção, e não um financiamento a termo."
    },
    306: {
      a: "Padrões históricos de preços sinalizarem tendências contraria a hipótese de mercado eficiente.",
      b: "Ativos com VPL positivo não definem mercado eficiente.",
      c: "Retornos esperados iguais aos realizados não são a definição de mercado eficiente."
    },
    307: {
      a: "Dividendos de empresas brasileiras são isentos para pessoa física, e não tributados em até 22,5%.",
      b: "Dividendos de empresas estrangeiras não são isentos; a isenção vale apenas para empresas brasileiras.",
      d: "Dividendos de empresas brasileiras são isentos, e a alíquota de 15% não se aplica a eles."
    },
    308: {
      a: "O IMA-S acompanha títulos pós-fixados à Selic, e não o Ibovespa.",
      b: "O IGP-M não é o índice de referência do IMA-S.",
      c: "O CDI é próximo da Selic, mas a referência direta do IMA-S é a própria Selic."
    },
    309: {
      a: "Comprar com deságio faz o investidor receber mais que a Selic, e não menos.",
      b: "Comprar com deságio não resulta em rendimento igual à Selic.",
      c: "A LFT é atrelada à Selic, e não ao CDI."
    },
    310: {
      a: "O P/L não indica crescimento anual do lucro.",
      b: "O retorno do lucro sobre o preço é de cerca de 11,11%, e não de 1,80%.",
      d: "O retorno de 11,11% é anual, e não para um período de nove anos."
    },
    311: {
      a: "O Ibovespa mede o desempenho das ações e não protege da alta de preços.",
      b: "A TR é a taxa referencial e não é o índice oficial de inflação.",
      d: "A cotação do dólar protege contra variação cambial, e não contra a alta de preços internos."
    },
    312: {
      a: "Small caps têm risco de liquidez como principal, e não risco de crédito.",
      b: "Small caps têm também risco de liquidez, além do risco de mercado.",
      d: "Small caps têm risco de mercado, e não risco principal de crédito."
    },
    313: {
      b: "O market maker não garante o risco de crédito dos ativos.",
      c: "O market maker não vende ativos exclusivamente para fundos de investimento.",
      d: "O market maker não atua como contraparte de operações de altíssimo risco."
    },
    316: {
      a: "Inclui o item I, que está errado: debêntures incentivadas não contam com garantia do FGC.",
      b: "Deixa de fora o item III, que está correto: a LCI tem lastro em financiamento imobiliário com garantia.",
      d: "Inclui o item I, que está errado."
    },
    317: {
      b: "T-Bonds pagam cupons e não são títulos zero cupom.",
      c: "TIPS paga cupons e não corresponde à ordem exigida pelo enunciado.",
      d: "T-Notes pagam cupons, e portanto não atendem à descrição do enunciado."
    }
,
    298: {
      b: "A assinatura do termo de adesão é obrigatória, e não opcional.",
      c: "O DIE é obrigatório, e não opcional.",
      d: "Nenhum dos dois é opcional na distribuição de COE para investidores não profissionais."
    },
    318: {
      a: "T-Notes pagam cupom periódico, o que gera risco de reinvestimento.",
      b: "T-Bonds pagam cupom periódico e também têm risco de reinvestimento.",
      c: "O TIPS paga cupons, e a proteção contra a inflação não elimina o risco de reinvestimento."
    },
    319: {
      a: "Inclui o item I, que está errado: a taxa de cupom é fixa sobre o principal corrigido, e o que varia é o valor do principal.",
      b: "Inclui o item I, que está errado.",
      c: "Inclui o item III, que está errado."
    },
    321: {
      b: "O market maker não garante o risco de crédito dos ativos.",
      c: "O market maker não vende ativos exclusivamente para fundos de investimento.",
      d: "O market maker não atua como contraparte de operações de altíssimo risco."
    },
    322: {
      a: "A tributação não é fixa em 22,5%; ela varia conforme o prazo.",
      b: "A alíquota não é fixa em 15%; ela varia conforme o prazo.",
      d: "A tabela regressiva de renda fixa vai de 22,5% a 15%, e não de 35% a 10%."
    },
    323: {
      a: "A operação de IPO ocorre no mercado primário, e não no mercado secundário.",
      b: "A ordem está invertida: o IPO é mercado primário, e a negociação na bolsa é no mercado secundário.",
      c: "O IPO é feito no mercado primário, e a negociação na bolsa não é no mercado de balcão."
    },
    324: {
      a: "Com taxa de mercado de 4%, o título é negociado abaixo do valor de face, e não acima.",
      b: "O valor pode ser determinado pela taxa de 4% e pelo prazo do título.",
      c: "O preço só seria exatamente R$ 1.000 se a taxa de negociação fosse igual à taxa de emissão."
    },
    325: {
      b: "Inclui o item III, que está errado.",
      c: "Inclui o item III, que está errado.",
      d: "Deixa de fora o item I, que também está correto."
    },
    326: {
      a: "Em melhores esforços, a instituição coordenadora não assume o risco de não colocação dos títulos.",
      b: "O investidor não assume o risco de colocação dos títulos.",
      d: "Nesse modelo o risco fica com o emissor, e não é compartilhado."
    },
    329: {
      b: "Com cupom acima da taxa de mercado, o título é negociado com ágio, e não com deságio.",
      c: "O título só seria negociado ao par se o cupom fosse igual à taxa de mercado.",
      d: "O termo desconto não é o usado para título negociado acima do par; a referência é ágio."
    },
    330: {
      a: "O direito de subscrição equivale à compra de uma call, e não de uma put.",
      c: "A venda de uma call seria uma obrigação de vender, e não o direito de subscrever ações.",
      d: "A venda de uma put não corresponde ao direito de comprar ações a um preço definido."
    },
    331: {
      b: "10% não corresponde ao cupom de R$ 50 sobre o preço de R$ 910.",
      c: "Os dados permitem calcular o current yield, pois há cupom e preço de compra.",
      d: "7,25% não resulta do cupom de R$ 50 dividido pelo preço de R$ 910."
    },
    332: {
      a: "Ganhos com venda de BDR são tributados em 15%, e não em 20%.",
      c: "Ganhos com venda de BDR não são isentos quando há lucro.",
      d: "A alíquota de 27,5% é de renda fixa de prazo longo e não se aplica a BDR."
    },
    333: {
      a: "ADR é recibo para negociação nos Estados Unidos, e não em bolsa alemã.",
      b: "BDR é recibo de ações estrangeiras negociado no Brasil, e não na Alemanha.",
      d: "Debêntures são títulos de dívida, e não recibos para negociação em bolsa estrangeira."
    },
    337: {
      a: "Não há como desfazer a operação antes do prazo, mas a quitação antecipada é possível.",
      b: "Uma venda a termo não zera a posição; é uma nova operação que se soma à anterior.",
      c: "A quitação antecipada não é proporcional ao período; o valor segue o que seria pago no vencimento."
    },
    338: {
      b: "7,25% não resulta da relação entre as taxas de 14,5% e 8%.",
      c: "5,87% não é o resultado da relação entre as taxas da LTN e da NTN-B.",
      d: "6,80% não corresponde ao cálculo da inflação implícita pela relação entre as taxas."
    },
    339: {
      a: "T-Notes pagam cupom periódico, o que gera risco de reinvestimento.",
      b: "T-Bonds pagam cupom periódico e também têm risco de reinvestimento.",
      c: "O TIPS paga cupons, e a proteção contra a inflação não elimina o risco de reinvestimento."
    }
,
    335: {
      a: "Deixa de fora o item II, que também está correto: o índice reúne empresas com as melhores práticas de ESG.",
      b: "Deixa de fora o item I, que também está correto: o universo parte das 200 ações de maior negociabilidade.",
      c: "Deixa de fora o item III, que também está correto: a inclusão ocorre por questionário enviado às companhias."
    },
    342: {
      a: "Inclui o item II, que está errado.",
      c: "O item III está errado, e a alternativa deixa de fora o item I, que está correto.",
      d: "Inclui os itens II e III, que estão errados."
    },
    344: {
      a: "Inclui o item I, que está errado: o modelo foi feito para opções europeias.",
      b: "Inclui o item I, que está errado.",
      d: "Inclui o item I, que está errado."
    },
    345: {
      a: "Inclui o item I, que está errado: o IMA-Geral é formado apenas por títulos públicos da dívida pública.",
      b: "Inclui o item I, que está errado.",
      d: "Inclui os itens I e II, que estão errados."
    },
    346: {
      a: "Inclui o item I, que está errado: o valor do título zero cupom não é o valor de face na data de análise.",
      b: "Inclui o item III, que está errado.",
      d: "Inclui o item I, que está errado."
    },
    347: {
      a: "A alíquota de 20% está certa, mas o recolhimento é feito pela instituição emissora, e não pelo próprio investidor.",
      c: "A alíquota de 15% vale para prazos acima de 720 dias, e o prazo deste COE é de cerca de oito meses.",
      d: "A alíquota de 15% não se aplica a esse prazo, e o recolhimento não cabe ao próprio investidor."
    },
    348: {
      b: "Inclui o item III, que está errado.",
      c: "Deixa de fora o item I, que também está correto.",
      d: "Inclui o item III, que está errado."
    },
    349: {
      a: "O rendimento não é calculado pelo saldo médio, e sim pelo menor saldo do período.",
      b: "O rendimento não se dá pelo maior saldo do período.",
      c: "O rendimento não é fixo em 0,5% ao mês; ele depende da taxa Selic e das regras da poupança."
    },
    351: {
      a: "12,53% corresponderia a um cupom sobre metade do preço, o que não é o caso.",
      c: "10,75% não corresponde ao cupom de R$ 60 sobre o preço de R$ 957.",
      d: "5,94% não resulta do cupom de R$ 60 dividido pelo preço de R$ 957."
    },
    352: {
      a: "O CDB de banco pode ter risco de crédito da instituição emissora, o que contraria o enunciado.",
      b: "A NTN-B é atrelada ao IPCA, e não à taxa de juros.",
      c: "A NTN-F é prefixada, e não atrelada à taxa de juros."
    },
    353: {
      a: "Comprar put de dólar protege contra a queda do dólar, e não contra a alta, que é o risco do importador.",
      b: "Vender call de dólar expõe o importador à alta da moeda, sem proteger a dívida.",
      d: "Vender put de dólar expõe o importador à alta da moeda, sem proteção."
    },
    354: {
      a: "Ajuste diário é característica do mercado futuro, e não do NDF.",
      b: "A tributação não define a diferença entre NDF e mercado futuro, pois ambos são contratos de câmbio.",
      d: "O NDF é um contrato a termo sem entrega física, e não uma compra à vista."
    },
    355: {
      b: "Inclui o item III, que está errado.",
      c: "Deixa de fora o item I, que está correto: o principal do TIPS é ajustado pelo CPI americano.",
      d: "Inclui o item III, que está errado."
    },
    356: {
      a: "Com rating mais baixo, o risco sobe e a rentabilidade exigida aumenta, por isso não é menor.",
      b: "Com rating diferente, a taxa exigida muda, por isso não é igual.",
      c: "É possível determinar a variação pela relação entre risco e rentabilidade."
    },
    357: {
      b: "201 não corresponde a 1% do lucro de R$ 5.700.",
      c: "O IRRF de 1% não se aplica sobre o valor de R$ 1,00.",
      d: "No day trade há IRRF de 1% sobre o lucro, e não zero."
    },
    358: {
      a: "Box de quatro pontas combina travas de alta e de baixa, e não a compra de put e call.",
      b: "Short strangle é a venda de put e call, e não a compra.",
      c: "Long & Short é uma estratégia de compra e venda de ativos, e não de opções."
    },
    359: {
      b: "Inclui o item III, que está errado.",
      c: "Inclui o item III, que está errado.",
      d: "Deixa de fora o item I, que também está correto."
    },
    360: {
      b: "Inclui o item II, que está errado.",
      c: "Inclui o item II, que está errado.",
      d: "Deixa de fora o item I, que também está correto."
    },
    361: {
      a: "A NTN-F é prefixada, e não atrelada a índice de preços.",
      b: "O CDB-DI tem risco de crédito do banco emissor.",
      c: "A LFT é pós-fixada à Selic, e não atrelada a índice de preços."
    },
    363: {
      b: "Clubes não são fiscalizados pela corretora que os constitui; a fiscalização cabe à CVM.",
      c: "O gestor não define a quantidade máxima de cotas nesses termos.",
      d: "Não há prazo mínimo de 90 dias; o clube pode ter prazo determinado ou indeterminado."
    },
    364: {
      a: "O prefixado tem taxa definida na aplicação; o CDB ligado ao CDI não é prefixado.",
      c: "Híbrido mistura componentes de diferentes naturezas, o que não é o caso.",
      d: "O CDB descrito não é sem liquidez; o prazo é curto e o rendimento acompanha o CDI."
    }
,
    365: {
      a: "Vencimentos mensais não são os do contrato futuro de Ibovespa, que são bimestrais.",
      c: "Vencimentos semestrais não são os do contrato futuro de Ibovespa, que são bimestrais.",
      d: "Vencimentos anuais não são os do contrato futuro de Ibovespa, que são bimestrais."
    },
    366: {
      b: "O convenience yield cresce com a escassez, e não diminui.",
      c: "O convenience yield não avalia o Beta de um ativo; ele é o benefício de manter o estoque físico.",
      d: "O convenience yield não mensura a negociabilidade de ativos agropecuários."
    },
    367: {
      a: "A relação indicada inverte o sentido: o convenience yield sobe com a escassez.",
      b: "O convenience yield é maior com a escassez, e não menor.",
      d: "Não há igualdade: a escassez eleva o convenience yield."
    },
    370: {
      b: "Esse swap não protege a carteira pós-fixada, porque cria exposição a taxa pré em vez de reduzi-la.",
      c: "Comprar contratos de DI aumenta a exposição a juros, em vez de reduzir o risco.",
      d: "O Ibovespa não é referência de juros; vender o índice não protege contra oscilação de taxa."
    },
    371: {
      b: "O VaR mede a perda potencial, e não o retorno máximo.",
      c: "O VaR não é a média histórica de oscilação de um ativo.",
      d: "O VaR mede a perda potencial, e não o retorno a partir de um valor investido."
    },
    372: {
      a: "O risco principal em CDB de banco em liquidação é o de crédito, e não o legal.",
      b: "Liquidez é a dificuldade de vender o ativo; o risco principal aqui é o de crédito.",
      c: "Risco de mercado é oscilação de preços, e não a inadimplência do banco."
    },
    373: {
      b: "Oscilações naturais de preço são risco de mercado, e não de liquidez.",
      c: "Não pagamento pelo emissor é risco de crédito.",
      d: "Excesso de recursos em um mercado não é risco de liquidez."
    },
    374: {
      a: "O prazo de 70 dias tem a menor sensibilidade a juros entre os produtos.",
      b: "O prazo de 120 dias tem sensibilidade menor que a do prazo de 350 dias.",
      c: "O prazo de 250 dias tem sensibilidade inferior à do prazo de 350 dias."
    },
    375: {
      b: "A soma dos aportes não mede o risco de mercado do fundo.",
      c: "Os resgates não representam risco de mercado do fundo.",
      d: "A diferença entre aportes e resgates é fluxo de capital, e não risco de mercado."
    },
    376: {
      a: "Prazo maior eleva a sensibilidade, mas não define maior chance de inadimplência.",
      c: "Juros menores indicam menor risco, e não maior.",
      d: "Liquidez é outro risco; não é o que define o risco de crédito."
    },
    377: {
      a: "Prazo maior tende a ter maior rentabilidade, e não menor.",
      c: "Prazo maior aumenta o risco, e não o reduz.",
      d: "Prazo maior não reduz risco nem rentabilidade."
    },
    378: {
      a: "Risco sistemático não é eliminado pela diversificação.",
      c: "Risco não específico é sinônimo de sistemático, que não se reduz com diversificação.",
      d: "Risco de conjuntura é sistemático, e a diversificação não o elimina."
    },
    379: {
      a: "Não honrar o pagamento é risco de crédito, e não de liquidez.",
      c: "Oscilação de preço por condições naturais é risco de mercado.",
      d: "A confirmação do rating no prazo não corresponde ao risco de liquidez."
    },
    380: {
      b: "Mais compradores não aumentam a possibilidade de perdas.",
      c: "Mais interessados não aumentam a oscilação; aumentam a facilidade de venda.",
      d: "A correlação não é afetada pelo número de compradores."
    },
    381: {
      a: "Risco de mercado é oscilação de preços, e não falta de compradores.",
      c: "Risco de crédito é inadimplência do emissor, e não falta de compradores.",
      d: "Risco operacional decorre de falhas internas, e não de falta de compradores."
    },
    382: {
      b: "Não pagamento do emissor é risco de crédito.",
      c: "Impossibilidade de vender por falta de compradores é risco de liquidez.",
      d: "O risco de mercado não pode ser reduzido a zero com a diversificação."
    },
    383: {
      a: "O título A tem rating AAA, portanto é menos arriscado, e não mais.",
      b: "O título A tem rating AAA, portanto é menos arriscado, e não mais arriscado.",
      c: "Menor risco implica rentabilidade menor, e não maior."
    },
    384: {
      b: "Não há inadimplência de emissor envolvida; a perda decorre da oscilação de preço.",
      c: "Aqui há várias ofertas de compra, por isso não se trata de dificuldade de liquidez.",
      d: "Não há questão legal envolvida na venda."
    },
    385: {
      a: "A queda de preço isolada é risco de mercado, mas com oferta única o problema é de liquidez.",
      b: "Não há inadimplência de emissor na venda.",
      d: "Não há questão legal envolvida na venda."
    },
    386: {
      a: "Ações não têm risco de crédito como risco principal.",
      b: "CDB também tem risco de liquidez, que não foi listado.",
      c: "CDB tem risco de crédito do banco emissor, que não pode ser omitido."
    },
    387: {
      a: "A maior rentabilidade não se deve a maior possibilidade de lucros, mas ao risco de crédito.",
      c: "Títulos públicos têm menor risco de crédito; o maior risco é do título privado.",
      d: "O título privado tem maior, e não menor, risco de crédito."
    },
    388: {
      a: "Carteira de ações tem risco de liquidez.",
      b: "Carteira de ações tem risco de mercado.",
      d: "Carteira de ações tem risco sistemático."
    },
    389: {
      b: "Prefixados também têm risco de mercado, pois o preço oscila com os juros.",
      c: "Prazos maiores aumentam a sensibilidade ao risco de mercado, e não a reduzem.",
      d: "O FGC não cobre risco de mercado."
    },
    390: {
      a: "Ativos mais arriscados não reduzem a duration.",
      b: "Comprar ativos com prazo maior aumenta a duration, e não a reduz.",
      d: "Ativos defensivos não são o critério que reduz a duration; o que reduz é o prazo."
    },
    391: {
      a: "Cobrança de IR não é efeito da repactuação.",
      b: "A queda de rating aumenta o risco, e a taxa não cai.",
      c: "A queda de rating altera a taxa de juros da repactuação."
    },
    392: {
      a: "Small caps não têm risco operacional nem de crédito como principais.",
      b: "Risco operacional não é o principal em small caps.",
      c: "Small caps não têm risco de crédito como principal."
    },
    394: {
      a: "Distribuir dividendos não dá direito de voto às PN.",
      b: "Aumento de capital não confere voto às ações PN.",
      d: "Deixar de ter ações negociadas não é a hipótese de voto para PN."
    }
,
    396: {
      a: "Ação nominativa é a registrada em nome do titular, e não a emitida sem cautela.",
      c: "Preferencial é uma classe de ação, e não a forma de emissão sem cautela.",
      d: "Endossável é a forma de transferência de títulos, e não a emissão sem cautela."
    },
    397: {
      a: "Isso descreve uma operação a termo, e não a compra com conta margem.",
      c: "Conta margem aumenta o risco da carteira, porque alavanca a posição.",
      d: "Conta margem é alavancagem, pois usa recursos emprestados pela corretora."
    },
    398: {
      a: "Nível 2 e Novo Mercado são segmentos da bolsa, e não exclusivos do balcão.",
      b: "Níveis 1 e 2 são segmentos da bolsa, e não do balcão organizado.",
      c: "Nível 1 é segmento da bolsa; apenas o Bovespa Mais é do balcão organizado."
    },
    399: {
      a: "Ações PN não têm como característica maior proteção ao acionista minoritário.",
      b: "As PN não têm sempre cotação inferior às ON; isso depende do mercado.",
      c: "As PN normalmente não têm direito de participar das decisões da companhia."
    },
    400: {
      b: "Captar recursos é função do mercado primário, e não do secundário.",
      c: "No mercado secundário os recursos vão somente para os investidores; a empresa não recebe.",
      d: "Ofertas públicas e captação são função do mercado primário."
    },
    401: {
      a: "Fechada é a S.A. que não tem ações negociadas em bolsa.",
      b: "Financeira é uma classificação de atividade, e não de negociação em bolsa.",
      c: "Limitada é outro tipo societário, e não uma S.A."
    },
    402: {
      a: "Títulos de curto prazo não são o principal grupo de ativos emitidos por S.A.",
      b: "Títulos de longo prazo não formam o grupo principal de ativos emitidos por S.A.",
      d: "A alternativa deixa de fora commercial papers e debêntures, que são ativos principais de S.A."
    },
    403: {
      b: "A instituição financeira não é quem requer o fechamento de capital.",
      c: "IPO é oferta de abertura de capital, e não de fechamento.",
      d: "IPO é oferta de abertura de capital, e os recursos não vão para investidores nesse caso."
    },
    404: {
      a: "Underwriters são instituições financeiras, e não instituições não financeiras.",
      b: "Underwriters não são instituições não financeiras.",
      d: "O underwriter coordena a emissão, e não é quem emite ações no mercado primário."
    },
    405: {
      a: "O bookbuilding não define o preço sempre no teto.",
      b: "O bookbuilding não é sigiloso para a empresa; é uma consulta de intenções de compra.",
      c: "O bookbuilding não se limita a ativos de renda variável."
    },
    406: {
      a: "Na custódia fungível os títulos podem não ser exatamente os mesmos depositados.",
      c: "A custódia fungível não é exclusiva dos Estados Unidos.",
      d: "Os títulos recebidos são da mesma emissão, e não de outra companhia."
    },
    407: {
      a: "O mercado primário não é ambiente de negociação do mercado secundário.",
      b: "O mercado primário não é ambiente de negociação do mercado secundário.",
      c: "O mercado primário não é ambiente de negociação do mercado secundário."
    },
    408: {
      b: "Book entry é apenas eletrônico, e não envolve meio físico.",
      c: "Book entry é o contrário do meio físico: é registro eletrônico.",
      d: "Book entry é o registro eletrônico moderno, e não uma forma antiga."
    },
    409: {
      a: "Limite de preço é característica da ordem limitada, e não da discricionária.",
      b: "A ordem discricionária não exige obrigatoriamente uma compra e uma venda.",
      c: "A ordem discricionária não é o critério de ausência total de limite de preço."
    },
    411: {
      a: "Operações ex-pit permitem a precificação de posições a termo por preços futuros.",
      b: "Operações ex-pit não reduzem, por definição, a liquidez do mercado a termo.",
      c: "Operações ex-pit não ficam sujeitas à interferência do pregão."
    },
    412: {
      b: "O commercial paper é negociável, e não restrito.",
      c: "O commercial paper é negociável e de curto prazo, e não de longo prazo.",
      d: "O commercial paper é de curto prazo, e não de longo prazo."
    },
    413: {
      a: "Debêntures podem ser conversíveis ou permutáveis, e não necessariamente não conversíveis.",
      c: "Diferenciadas não é classificação de debênture quanto a classe e tipo.",
      d: "De crédito não é classificação de debênture quanto a classe e tipo."
    },
    414: {
      b: "A classificação de risco não é informação obrigatória na escritura.",
      c: "Os direitos variam por série, e não são necessariamente iguais para todas as debêntures.",
      d: "O agente fiduciário não garante o pagamento do risco de inadimplência."
    },
    415: {
      a: "Ações não são uma captação rápida de curto prazo para capital de giro.",
      b: "CDB é captação de instituições financeiras, e não de S.A. não financeira.",
      d: "LCI é título de instituição financeira ligado a crédito imobiliário."
    },
    416: {
      a: "A conversão não é em dinheiro; a debênture conversível se converte em ações.",
      b: "A recompra pelo emissor não define a debênture conversível.",
      d: "A conversão ocorre nas datas e condições definidas, e não a qualquer momento."
    },
    418: {
      a: "20% é alíquota de day trade, e não se aplica a essa operação de ações fora do day trade.",
      c: "Ações não são isentas acima de R$ 20 mil de vendas no mês, e a alíquota não depende do prazo."
    },
    419: {
      a: "Debêntures não dão direito a voto nas assembleias da companhia.",
      b: "Debêntures não participam dos lucros; elas recebem juros.",
      c: "Debêntures conversíveis podem ser convertidas em ações."
    },
    420: {
      a: "O dividendo é um direito essencial do acionista, e não pode ser retirado por assembleia.",
      b: "O dividendo não pode ser retirado por determinação do presidente da companhia.",
      c: "O estatuto não pode retirar o direito essencial ao dividendo."
    },
    422: {
      b: "As ações preferenciais geralmente não têm direito de voto.",
      c: "Subordinadas é classificação de debêntures, e não de ações com voto.",
      d: "Ações de fruição não são as que dão direito a voto nas assembleias."
    },
    423: {
      a: "O JSCP não é isento de IR e não se origina de lucros retidos.",
      b: "O JSCP não tem tabela regressiva; sua alíquota é fixa.",
      c: "O JSCP não é isento de IR."
    },
    424: {
      a: "No mercado primário os recursos vão para a empresa emissora, e não para os acionistas.",
      c: "Comercialização de títulos já existentes é mercado secundário, e não primário.",
      d: "No mercado primário os recursos não vão para os acionistas, e sim para a empresa."
    }
,
    425: {
      a: "O investidor não recolhe o IR na fonte; a retenção é feita pela corretora.",
      b: "A bolsa não é responsável pelo recolhimento do IR do investidor.",
      d: "O administrador do fundo não é responsável pelo IR de ações do investidor."
    },
    426: {
      a: "A alíquota total de day trade é 20%, mas o IRRF na fonte é de 1%, e não 0,005%.",
      b: "O IR total de day trade é 20%, e não 15%; o IRRF na fonte é de 1%.",
      c: "O IR total de day trade é 20%, e não 15%."
    },
    427: {
      b: "Ações são capital próprio, e não dívida de longo prazo.",
      c: "Notas promissórias são de curto prazo, e não de longo prazo.",
      d: "CDB é captação de instituição financeira, e não emissão de dívida de S.A."
    },
    428: {
      a: "Dividendos são distribuição de lucro, e não ganho de capital.",
      b: "JSCP é remuneração do capital próprio, e não ganho de capital.",
      d: "Vender por valor inferior ao de compra gera perda de capital, e não ganho."
    },
    429: {
      a: "Front runner é o uso de informação sobre ordens, e não a coleta de intenções de compra.",
      b: "Chinese wall é barreira de informação entre áreas, e não processo de coleta de intenções.",
      d: "Churning é giro excessivo da carteira, e não processo de oferta."
    },
    431: {
      a: "A agência não garante o pagamento; ela apenas classifica o risco de crédito.",
      c: "A agência não representa o emissor na oferta pública.",
      d: "A agência não representa os investidores na oferta pública."
    },
    432: {
      a: "Prejuízo não é hipótese de voto para a PN.",
      b: "Ser conversível não dá direito de voto à PN.",
      d: "Fechamento de capital não é hipótese de voto para a PN."
    },
    433: {
      a: "Direito de comprar a preço definido é subscrição, e não bonificação.",
      c: "Na bonificação não há captação de recursos, pois não há pagamento.",
      d: "Na bonificação o acionista recebe novas ações, e o número de ações aumenta."
    },
    434: {
      a: "A S.A. fechada não tem prazo de 180 dias; o prazo máximo é de 360 dias.",
      c: "O prazo máximo não é de 180 dias para ambas as categorias.",
      d: "A ordem está invertida: o prazo é de 360 dias para ambas."
    },
    435: {
      b: "O Novo Mercado exige apenas ações ON, e não há PN no segmento.",
      c: "O Nível 1 não exige 100% de tag along para ON e PN.",
      d: "O Tradicional não exige 100% de tag along para ON e PN."
    },
    436: {
      a: "ADR não é uma ação, e sim um título.",
      c: "ADR é cotado em dólares, e não em reais.",
      d: "ADR é negociado nos Estados Unidos, e não no Brasil."
    },
    437: {
      b: "O prejuízo de day trade não pode ser compensado com operações que não são day trade.",
      c: "Os prejuízos de day trade podem ser compensados com ganhos de day trade.",
      d: "A compensação não vale para qualquer ganho do mercado financeiro."
    },
    438: {
      a: "BDR não é recibo de ação brasileira; é um título negociado no Brasil.",
      b: "BDR é um título, e não uma ação brasileira.",
      c: "BDR é cotado em reais, e não em dólares."
    },
    439: {
      a: "O Nível 2 permite ações preferenciais, e não exige somente ON.",
      c: "O Nível 1 também admite ações preferenciais.",
      d: "O Tradicional não exige somente ações ON."
    },
    440: {
      a: "Essa descrição corresponde a uma ordem a mercado, sem limite de preço.",
      c: "Essa descrição corresponde a uma ordem discricionária.",
      d: "Essa descrição corresponde a uma ordem stop, e não a uma ordem limitada."
    },
    441: {
      a: "Essa descrição corresponde a uma ordem sem limite de preço, e não a uma ordem casada.",
      b: "Ordem executada no envio descreve a ordem a mercado, e não a casada.",
      c: "Essa descrição corresponde a uma ordem discricionária."
    },
    444: {
      a: "Essa descrição corresponde a uma ordem limitada.",
      b: "Essa descrição corresponde a uma ordem stop, disparada por gatilho.",
      d: "A ordem a mercado não é executada no preço de abertura, e sim ao melhor preço oposto."
    },
    446: {
      a: "A SPE emite títulos de crédito, e não cotas-parte para adquirir direitos.",
      b: "A SPE segrega o risco dos originadores, e não o aumenta.",
      c: "A SPE não vende recebíveis para comprar debêntures."
    },
    447: {
      a: "Os créditos saem do balanço do originador e passam à SPE.",
      c: "Os investidores não têm os créditos no balanço.",
      d: "Os devedores não têm os créditos no balanço."
    },
    448: {
      a: "CRA é lastreado em recebíveis do agronegócio, e não imobiliários.",
      c: "CDB é título de banco, sem lastro em recebíveis imobiliários.",
      d: "Poupança não é título lastreado em recebíveis."
    },
    449: {
      a: "O investidor recebe os títulos, e não o fluxo originário da securitização.",
      c: "O emissor da dívida é quem deve, e não quem recebe o fluxo.",
      d: "O devedor é quem paga, e não o destinatário do fluxo."
    },
    450: {
      a: "O banco múltiplo não é o emissor de CRI nessa função.",
      c: "O banco de investimento não é o emissor de CRI.",
      d: "A S.A. não financeira não emite CRI; quem emite é a securitizadora."
    },
    451: {
      a: "FIDC é fundo de direitos creditórios, sem a isenção de IR do CRI para pessoa física.",
      c: "Poupança não é título lastreado em recebíveis.",
      d: "Fundo de ações não é lastreado em recebíveis."
    },
    452: {
      a: "O cadastro não caracteriza a qualidade de cotista.",
      c: "O envio de documentos não define a qualidade de cotista.",
      d: "O aporte não define sozinho a qualidade de cotista."
    },
    454: {
      a: "A multa é de 0,5% do valor de resgate, e não de 0,1% do valor da carteira.",
      b: "A multa é de 0,5%, e não de 0,1%.",
      c: "A multa de 0,5% é paga pelo administrador do clube, e não por cada cotista."
    }
,
    455: {
      b: "150 excede o limite de participantes de um clube de ações.",
      c: "3 é o número mínimo de cotistas, e não o máximo.",
      d: "30 não é o limite máximo de participantes de um clube de ações."
    },
    457: {
      b: "95% excede o percentual mínimo de 67% exigido para ações.",
      c: "80% não é o percentual mínimo exigido para a carteira em ações.",
      d: "50% está abaixo do percentual mínimo de 67% exigido para ações."
    },
    458: {
      a: "Inclui o item III, que não se refere a instituição autorizada a administrar clube.",
      b: "Inclui o item III, que não se refere a instituição autorizada a administrar clube.",
      c: "Deixa de fora o item II, que também se refere a instituição autorizada a administrar clube."
    },
    460: {
      a: "Corretoras de valores não emitem LCI.",
      c: "Não são quaisquer bancos múltiplos, e sim os que concedem crédito imobiliário.",
      d: "Sociedades de arrendamento mercantil não emitem LCI."
    },
    461: {
      a: "A Letra Financeira não tem como característica aproveitar spread entre curto e longo prazo.",
      c: "A Letra Financeira não tem benefício tributário específico de menor imposto de renda.",
      d: "A Letra Financeira não tem como objetivo principal atrair capital externo."
    },
    464: {
      a: "O PU da LTN não é atualizado diariamente pela taxa de juros do mercado.",
      b: "A LTN não é atualizada por índice de preços; ela é prefixada.",
      c: "O PU da LTN não é sempre R$ 1.000; ele varia conforme a taxa de juros."
    },
    465: {
      b: "A LTN tem múltiplo de R$ 1.000, e não de R$ 100.",
      c: "O rendimento da LTN não é ajustável; ele é definido na compra.",
      d: "A LTN não tem rendimento ajustável nem valor de R$ 100."
    },
    468: {
      a: "Certificados de recebíveis imobiliários são emitidos por securitizadoras, e não por instituições financeiras para captação.",
      c: "Não existe letra de câmbio imobiliário como título desse tipo.",
      d: "Letras do Tesouro são títulos públicos, e não títulos emitidos por instituições financeiras para crédito imobiliário."
    },
    470: {
      a: "Queda na taxa de juros eleva o valor presente, e não o reduz.",
      b: "Queda na taxa de juros altera o preço do ativo.",
      d: "Alta na taxa de juros reduz o preço do ativo, e não o mantém."
    },
    473: {
      a: "O título com juros semestrais tem risco de reinvestimento dos cupons, e não é o pedido.",
      b: "A LFT é pós-fixada à Selic, e não corrigida pela inflação.",
      c: "A LTN é prefixada, e não corrigida pela inflação."
    },
    474: {
      a: "A alteração do valor do título com a taxa de juros é risco de mercado, e não de liquidez.",
      c: "O não pagamento pelo emissor é risco de crédito, e não de liquidez.",
      d: "A falta de cobertura do FGC não é o risco de liquidez."
    },
    476: {
      a: "O CDB tem garantia do FGC, mas não tem vantagem tributária para pessoa física.",
      c: "Ações não têm garantia do FGC.",
      d: "Debêntures incentivadas têm vantagem tributária, mas não garantia do FGC."
    },
    477: {
      a: "Essa é a data de come-cotas de fundos, e não o momento de incidência do IR do CDB.",
      b: "A tabela incide sobre o rendimento, e não sobre o valor total resgatado.",
      d: "A tabela de IR do CDB é regressiva, e não progressiva."
    },
    478: {
      b: "LFN é título pós-fixado, e não zero cupom negociado com deságio.",
      c: "NTN-B paga juros semestrais e não é zero cupom.",
      d: "NTN-F paga cupons semestrais e não é zero cupom."
    },
    479: {
      a: "LFT é pós-fixada à Selic, sem proteção específica contra a inflação.",
      b: "LCI é título de crédito imobiliário, e não título com proteção contra inflação.",
      d: "NTN-F é prefixada, sem proteção contra a inflação."
    },
    481: {
      a: "O IOF não incide após 30 dias, e o prazo é de 200 dias.",
      b: "O IOF não incide após 30 dias, e 22,50% não é a alíquota para 200 dias.",
      c: "Para 200 dias a alíquota de IR é 20%, e não 22,50%."
    },
    482: {
      a: "A LFT não paga rendimento semestral; é creditada no vencimento.",
      b: "A LFT é atualizada pela Selic, e não pelo CDI.",
      d: "A LFT é atualizada pela Selic, e não pelo CDI."
    },
    483: {
      b: "O investidor não recolhe o IR; a instituição emissora faz a retenção.",
      c: "A bolsa de valores não recolhe IR sobre CDB.",
      d: "O Bacen não é responsável pelo recolhimento do IR sobre CDB."
    },
    484: {
      a: "A LCI é isenta de IR para pessoa física, e não tributada a 22,50%.",
      b: "A LCI não tem alíquota de 15%; ela é isenta de IR para pessoa física.",
      d: "A LCI não tem alíquota de 17,50%; ela é isenta de IR para pessoa física."
    }
,
    485: {
      a: "LCI não pode ser emitida por qualquer banco; é emitida por instituições que concedem crédito imobiliário.",
      c: "A LCI tem garantia do FGC.",
      d: "LCI não é emitida por empresas de construção; é emitida por instituições financeiras."
    },
    486: {
      b: "A LTN é prefixada e perde valor quando os juros sobem.",
      c: "A NTN-B também perde valor quando a taxa real sobe.",
      d: "Ações não são o instrumento direto de proteção contra alta de juros."
    },
    487: {
      a: "A LTN é prefixada, e a carteira deveria ser apenas de títulos pós-fixados.",
      b: "CDB não é título público, e a carteira deveria conter apenas títulos públicos.",
      c: "A NTN-B é indexada à inflação, e não pós-fixada à taxa de juros."
    },
    488: {
      a: "A LFT tem rentabilidade pós-fixada nominal, e não real.",
      b: "O CDB prefixado é nominal, e não real.",
      d: "A LTN é prefixada e nominal, e não real."
    },
    489: {
      a: "A LFT é atrelada à Selic Over, e não à Selic Meta.",
      c: "A LFT é pós-fixada, e não prefixada.",
      d: "A LFT é atrelada à Selic, e não à inflação."
    },
    490: {
      a: "As garantias do mercado futuro nem sempre são iguais ou maiores que o valor operado.",
      b: "A fiança bancária é admitida como garantia no mercado futuro.",
      d: "Em prejuízo o investidor não resgata sempre o valor total depositado."
    },
    492: {
      a: "Para hedge de carteira de ações o gestor vende contratos, e não compra.",
      c: "O número de contratos depende do beta e do valor da carteira, e muda com a carteira.",
      d: "O hedge de carteira de ações exige venda de contratos, e não compra."
    },
    493: {
      a: "Contratos a termo não são padronizados.",
      b: "Swaps não são padronizados na bolsa.",
      c: "A descrição não corresponde à especificação de opções de compra."
    },
    494: {
      a: "Não ter mercados derivativos não evita especulação, que pode existir no mercado à vista.",
      b: "Exportadores que compram put estão se protegendo, e não especulando.",
      d: "Os reguladores devem estabelecer normas de contabilização de derivativos."
    },
    495: {
      a: "Os prêmios de opções são liquidados em D+1, e não em D+3.",
      b: "O mercado a termo não tem ajuste diário em D+1.",
      c: "Os ajustes do mercado futuro não ocorrem em D+0; ocorrem em D+1."
    },
    497: {
      a: "Swaps são contratos de balcão, sem padronização de bolsa.",
      c: "Os valores recebidos em swap não são sempre superiores ao valor investido.",
      d: "Swaps em balcão não contam com garantia da B3 como regra."
    },
    498: {
      a: "O Ibovespa tem ponderação, e não distribuição igual de pesos.",
      b: "A ponderação do Ibovespa é pela liquidez, e não pela capitalização de mercado.",
      d: "A ponderação do Ibovespa não é aleatória; segue critério de liquidez."
    },
    500: {
      b: "O direito de subscrição assemelha-se a uma call, e não a uma put.",
      c: "A venda de call é obrigação, e não o direito de subscrever ações.",
      d: "A venda de put é obrigação de compra, e não direito de subscrição."
    },
    501: {
      a: "Esse não é o documento exigido na declaração anual, que é o resumo de apuração.",
      b: "A relação de operações não é o documento exigido na declaração anual.",
      c: "Não se exige relação de corretoras na declaração anual."
    },
    502: {
      a: "O sentido está invertido: com alta do preço, compradores recebem e vendedores pagam.",
      c: "O sentido está invertido, e a liquidação do futuro não ocorre em D+0.",
      d: "A liquidação do ajuste futuro ocorre em D+1, e não em D+0."
    },
    503: {
      b: "Indústrias não têm a dispensa de IR na fonte aplicada às instituições da alternativa A.",
      c: "Empresas comerciais não têm a dispensa de IR na fonte para contratos futuros na B3.",
      d: "Pessoa física não tem a dispensa de IR na fonte descrita."
    },
    504: {
      a: "Opções exigem pagamento de prêmio, o que gera desembolso inicial de caixa.",
      b: "Opções exigem pagamento de prêmio, o que gera desembolso inicial de caixa.",
      d: "Opções exigem pagamento de prêmio, o que gera desembolso inicial de caixa."
    },
    505: {
      b: "Letra de câmbio não é isenta de IR na fonte para pessoa física.",
      c: "Recibo de depósito bancário não é isento de IR na fonte.",
      d: "Fundos de direitos creditórios não são a aplicação isenta descrita no enunciado."
    },
    506: {
      a: "Não há recolhimento por carnê leão no caso do cupom do Tesouro Direto.",
      b: "O IR do cupom não é pago por DARF no vencimento do título.",
      c: "O Tesouro Direto não recolhe o IR; o recolhimento é feito pela instituição intermediária."
    },
    507: {
      b: "A LCI não tem tabela regressiva de IR, pois é isenta para pessoa física.",
      c: "A LCI não tem alíquota de 10%, pois é isenta para pessoa física.",
      d: "A LCI não tem alíquota de 15%, pois é isenta para pessoa física."
    },
    510: {
      a: "Não se trata de limite comercial de transferências de custódia entre corretoras.",
      b: "Não se trata de limite operacional para ordens de ações.",
      d: "Não se trata do limite da Câmara de Liquidação; o limite é o da Câmara de Câmbio."
    },
    512: {
      b: "JSCP é remuneração do capital próprio, e não parcela de lucro estabelecida em estatuto.",
      c: "Direito de subscrição é preferência em novas ações, e não distribuição de lucro.",
      d: "Bonificação é entrega de novas ações, e não parcela de lucro distribuída."
    }
,
    518: {
      a: "Comprar call protege contra alta, e não contra queda do ativo.",
      b: "Vender call não protege contra queda; aumenta a exposição do investidor.",
      d: "Vender put aumenta a exposição à queda do ativo, em vez de proteger."
    },
    519: {
      a: "+ R$ 3,80 não corresponde ao prêmio de R$ 1,20 recebido pelo lançador.",
      b: "O lançador não tem perda de R$ 3,80; ele recebe o prêmio, e a put não é exercida.",
      d: "O lançador recebe o prêmio, e o resultado não é negativo quando a put não é exercida."
    },
    520: {
      b: "O sinal é o do lançador, e não o do titular comprador da call.",
      c: "A alternativa ignora o prêmio pago de R$ 2,50.",
      d: "A alternativa não corresponde ao resultado de quem exerce a call com lucro."
    },
    521: {
      a: "Nessa configuração a carteira ficaria mais exposta à inflação, e não protegida.",
      c: "Passivo pós-fixado não protege a taxa prefixada do cliente.",
      d: "Ativo pós-fixado com passivo em IPCA não corresponde à proteção pedida."
    },
    523: {
      a: "Comprar call protege contra alta do dólar, e o exportador precisa de proteção contra queda.",
      b: "Vender call não protege contra queda do dólar.",
      d: "Vender put não protege contra queda do dólar; expõe o exportador a ela."
    },
    524: {
      b: "Para o titular, a call dá direito de comprar; o lançador não tem esse direito.",
      c: "O lançador de call não tem obrigação de comprar o ativo.",
      d: "Direito de vender pertence ao titular de put, e não ao lançador de call."
    },
    525: {
      a: "Ajuste diário é característica do mercado futuro, e não do mercado a termo.",
      c: "Contratos a termo não são padronizados.",
      d: "A opção de exercer o direito é característica de opções, e não de futuros."
    },
    526: {
      a: "Put protege contra queda do dólar, e a dívida precisa de proteção contra alta.",
      b: "Vender call expõe a dívida à alta do dólar, sem proteção.",
      d: "Vender dólar futuro trava a venda da moeda, o oposto do que a dívida exige."
    },
    527: {
      a: "O titular não tem obrigação de comprar; ele tem o direito.",
      b: "O titular de call não tem obrigação de vender o ativo.",
      d: "O direito de vender pertence ao titular de put, e não de call."
    },
    529: {
      a: "Nominativas sem cautela não são classificadas como não endossáveis; são escriturais.",
      c: "Ação de gozo é a que já recebeu amortização, e não a ação sem cautela.",
      d: "Endossável não é o termo para ações sem cautela."
    },
    530: {
      b: "BDR não é ativo de companhia listada na B3 que compõe as carteiras dos índices.",
      c: "Bônus de subscrição não compõe as carteiras teóricas dos índices amplos.",
      d: "Debêntures não compõem as carteiras teóricas dos índices amplos."
    },
    531: {
      a: "O Bovespa Fix negocia renda variável, e não títulos privados de renda fixa.",
      b: "Não se trata de títulos lastreados em moedas.",
      d: "Não se trata de títulos lastreados em ouro."
    },
    533: {
      a: "OPA não é a oferta inicial, e a abertura de capital ocorre no mercado primário.",
      b: "OPA não é a oferta inicial, e a abertura de capital ocorre no mercado primário.",
      c: "A autorização da oferta é da CVM, e não da B3."
    },
    537: {
      a: "As normas contábeis dos clubes não são do Conselho Regional de Contabilidade.",
      b: "O BACEN não é o órgão de normas contábeis de clubes.",
      d: "O CMN não define as normas contábeis de clubes."
    },
    538: {
      a: "A Letra Financeira não serve para aproveitar spread entre curto e longo prazo.",
      c: "A Letra Financeira não tem benefício de menor imposto de renda como finalidade.",
      d: "A Letra Financeira não tem como finalidade atrair capital externo."
    },
    539: {
      a: "Letras imobiliárias não são emitidas por bancos de investimento.",
      b: "Não são emitidas por bancos comerciais; são emitidas por sociedades de crédito imobiliário.",
      d: "Corretoras não emitem letras imobiliárias."
    }
,
    549: {
      a: "Comprar call protege contra alta, e não contra queda do ativo.",
      b: "Vender call não protege contra queda; aumenta a exposição do investidor.",
      d: "Vender put aumenta a exposição à queda do ativo, em vez de proteger."
    },
    552: {
      b: "A classificação de risco não é informação obrigatória na escritura.",
      c: "Os direitos variam por série, e não são necessariamente iguais para todas as debêntures.",
      d: "O agente fiduciário não garante o pagamento do risco de inadimplência."
    },
    553: {
      a: "Ações não são uma captação rápida de curto prazo para capital de giro.",
      b: "CDB é captação de instituições financeiras, e não de S.A. não financeira.",
      d: "LCI é título de instituição financeira ligado a crédito imobiliário."
    },
    554: {
      a: "A conversão não é em dinheiro; a debênture conversível se converte em ações.",
      b: "A recompra pelo emissor não define a debênture conversível.",
      d: "A conversão ocorre nas datas e condições definidas, e não a qualquer momento."
    },
    558: {
      a: "A alteração do valor do título com a taxa de juros é risco de mercado, e não de liquidez.",
      c: "O não pagamento pelo emissor é risco de crédito, e não de liquidez.",
      d: "A falta de cobertura do FGC não é o risco de liquidez."
    },
    564: {
      a: "O CDB tem garantia do FGC, mas não tem vantagem tributária para pessoa física.",
      c: "Ações não têm garantia do FGC.",
      d: "Debêntures incentivadas têm vantagem tributária, mas não garantia do FGC."
    },
    565: {
      a: "Essa é a data de come-cotas de fundos, e não o momento de incidência do IR do CDB.",
      b: "A tabela incide sobre o rendimento, e não sobre o valor total resgatado.",
      d: "A tabela de IR do CDB é regressiva, e não progressiva."
    },
    566: {
      a: "+ R$ 3,80 não corresponde ao prêmio de R$ 1,20 recebido pelo lançador.",
      b: "O lançador não tem perda de R$ 3,80; ele recebe o prêmio, e a put não é exercida.",
      d: "O lançador recebe o prêmio, e o resultado não é negativo quando a put não é exercida."
    },
    568: {
      a: "Debêntures não dão direito a voto nas assembleias da companhia.",
      b: "Debêntures não participam dos lucros; elas recebem juros.",
      c: "Debêntures conversíveis podem ser convertidas em ações."
    },
    570: {
      a: "O dividendo é um direito essencial do acionista, e não pode ser retirado por assembleia.",
      b: "O dividendo não pode ser retirado por determinação do presidente da companhia.",
      c: "O estatuto não pode retirar o direito essencial ao dividendo."
    },
    571: {
      a: "Nessa configuração a carteira ficaria mais exposta à inflação, e não protegida.",
      c: "Passivo pós-fixado não protege a taxa prefixada do cliente.",
      d: "Ativo pós-fixado com passivo em IPCA não corresponde à proteção pedida."
    },
    574: {
      b: "LFN é título pós-fixado, e não zero cupom negociado com deságio.",
      c: "NTN-B paga juros semestrais e não é zero cupom.",
      d: "NTN-F paga cupons semestrais e não é zero cupom."
    },
    575: {
      a: "LFT é pós-fixada à Selic, sem proteção específica contra a inflação.",
      b: "LCI é título de crédito imobiliário, e não título com proteção contra inflação.",
      d: "NTN-F é prefixada, sem proteção contra a inflação."
    },
    577: {
      b: "As ações preferenciais geralmente não têm direito de voto.",
      c: "Subordinadas é classificação de debêntures, e não de ações com voto.",
      d: "Ações de fruição não são as que dão direito a voto nas assembleias."
    },
    578: {
      a: "O JSCP não é isento de IR e não se origina de lucros retidos.",
      b: "O JSCP não tem tabela regressiva; sua alíquota é fixa.",
      c: "O JSCP não é isento de IR."
    },
    579: {
      a: "No mercado primário os recursos vão para a empresa emissora, e não para os acionistas.",
      c: "Comercialização de títulos já existentes é mercado secundário, e não primário.",
      d: "No mercado primário os recursos não vão para os acionistas, e sim para a empresa."
    },
    580: {
      b: "150 excede o limite de participantes de um clube de ações.",
      c: "3 é o número mínimo de cotistas, e não o máximo.",
      d: "30 não é o limite máximo de participantes de um clube de ações."
    },
    581: {
      a: "O IOF não incide após 30 dias, e o prazo é de 200 dias.",
      b: "O IOF não incide após 30 dias, e 22,50% não é a alíquota para 200 dias.",
      c: "Para 200 dias a alíquota de IR é 20%, e não 22,50%."
    },
    582: {
      a: "A LFT não paga rendimento semestral; é creditada no vencimento.",
      b: "A LFT é atualizada pela Selic, e não pelo CDI.",
      d: "A LFT é atualizada pela Selic, e não pelo CDI."
    },
    585: {
      b: "O investidor não recolhe o IR; a instituição emissora faz a retenção.",
      c: "A bolsa de valores não recolhe IR sobre CDB.",
      d: "O Bacen não é responsável pelo recolhimento do IR sobre CDB."
    },
    588: {
      a: "A LCI é isenta de IR para pessoa física, e não tributada a 22,50%.",
      b: "A LCI não tem alíquota de 15%; ela é isenta de IR para pessoa física.",
      d: "A LCI não tem alíquota de 17,50%; ela é isenta de IR para pessoa física."
    },
    589: {
      a: "LCI não pode ser emitida por qualquer banco; é emitida por instituições que concedem crédito imobiliário.",
      c: "A LCI tem garantia do FGC.",
      d: "LCI não é emitida por empresas de construção; é emitida por instituições financeiras."
    },
    590: {
      a: "O investidor não recolhe o IR na fonte; a retenção é feita pela corretora.",
      b: "A bolsa não é responsável pelo recolhimento do IR do investidor.",
      d: "O administrador do fundo não é responsável pelo IR de ações do investidor."
    },
    591: {
      a: "A alíquota total de day trade é 20%, mas o IRRF na fonte é de 1%, e não 0,005%.",
      b: "O IR total de day trade é 20%, e não 15%; o IRRF na fonte é de 1%.",
      c: "O IR total de day trade é 20%, e não 15%."
    },
    592: {
      b: "A LTN é prefixada e perde valor quando os juros sobem.",
      c: "A NTN-B também perde valor quando a taxa real sobe.",
      d: "Ações não são o instrumento direto de proteção contra alta de juros."
    },
    593: {
      a: "A LTN é prefixada, e a carteira deveria ser apenas de títulos pós-fixados.",
      b: "CDB não é título público, e a carteira deveria conter apenas títulos públicos.",
      c: "A NTN-B é indexada à inflação, e não pós-fixada à taxa de juros."
    },
    595: {
      b: "Ações são capital próprio, e não dívida de longo prazo.",
      c: "Notas promissórias são de curto prazo, e não de longo prazo.",
      d: "CDB é captação de instituição financeira, e não emissão de dívida de S.A."
    },
    596: {
      a: "Dividendos são distribuição de lucro, e não ganho de capital.",
      b: "JSCP é remuneração do capital próprio, e não ganho de capital.",
      d: "Vender por valor inferior ao de compra gera perda de capital, e não ganho."
    },
    600: {
      a: "Front runner é o uso de informação sobre ordens, e não a coleta de intenções de compra.",
      b: "Chinese wall é barreira de informação entre áreas, e não processo de coleta de intenções.",
      d: "Churning é giro excessivo da carteira, e não processo de oferta."
    },
    601: {
      a: "A LFT tem rentabilidade pós-fixada nominal, e não real.",
      b: "O CDB prefixado é nominal, e não real.",
      d: "A LTN é prefixada e nominal, e não real."
    },
    605: {
      a: "A agência não garante o pagamento; ela apenas classifica o risco de crédito.",
      c: "A agência não representa o emissor na oferta pública.",
      d: "A agência não representa os investidores na oferta pública."
    },
    606: {
      a: "A LFT é atrelada à Selic Over, e não à Selic Meta.",
      c: "A LFT é pós-fixada, e não prefixada.",
      d: "A LFT é atrelada à Selic, e não à inflação."
    },
    610: {
      a: "Prejuízo não é hipótese de voto para a PN.",
      b: "Ser conversível não dá direito de voto à PN.",
      d: "Fechamento de capital não é hipótese de voto para a PN."
    },
    611: {
      a: "Direito de comprar a preço definido é subscrição, e não bonificação.",
      c: "Na bonificação não há captação de recursos, pois não há pagamento.",
      d: "Na bonificação o acionista recebe novas ações, e o número de ações aumenta."
    },
    613: {
      a: "Comprar call protege contra alta do dólar, e o exportador precisa de proteção contra queda.",
      b: "Vender call não protege contra queda do dólar.",
      d: "Vender put não protege contra queda do dólar; expõe o exportador a ela."
    },
    615: {
      a: "A S.A. fechada não tem prazo de 180 dias; o prazo máximo é de 360 dias.",
      c: "O prazo máximo não é de 180 dias para ambas as categorias.",
      d: "A ordem está invertida: o prazo é de 360 dias para ambas."
    },
    618: {
      b: "O Novo Mercado exige apenas ações ON, e não há PN no segmento.",
      c: "O Nível 1 não exige 100% de tag along para ON e PN.",
      d: "O Tradicional não exige 100% de tag along para ON e PN."
    },
    620: {
      a: "ADR não é uma ação, e sim um título.",
      c: "ADR é cotado em dólares, e não em reais.",
      d: "ADR é negociado nos Estados Unidos, e não no Brasil."
    },
    621: {
      b: "Para o titular, a call dá direito de comprar; o lançador não tem esse direito.",
      c: "O lançador de call não tem obrigação de comprar o ativo.",
      d: "Direito de vender pertence ao titular de put, e não ao lançador de call."
    }
,
    547: {
      a: "A suspensão não é do mercado de derivativos como regra; ela se refere às negociações à vista.",
      b: "A suspensão se refere às negociações à vista, e não às operações a termo.",
      d: "A suspensão não se refere às negociações de opções."
    },
    548: {
      a: "Put americana dá direito de vender, e não de comprar.",
      c: "Put europeia dá direito de vender e só pode ser exercida no vencimento.",
      d: "Call europeia só pode ser exercida na data de vencimento."
    },
    549: {
      a: "Call protege contra alta do ativo, e o investidor quer proteção contra queda.",
      b: "Vender call não protege contra queda; aumenta a exposição do investidor.",
      d: "Vender put expõe o investidor à queda do ativo, em vez de protegê-lo."
    },
    551: {
      a: "Opção europeia só pode ser exercida na data de vencimento.",
      b: "Brasileira não é tipo de exercício reconhecido nessa classificação.",
      d: "Opção de compra é o tipo de direito, e não define o momento de exercício."
    },
    556: {
      a: "O título com juros semestrais paga cupons, com risco de reinvestimento, diferente do pedido.",
      b: "A LFT é pós-fixada à Selic, sem correção pela inflação.",
      c: "A LTN é prefixada, sem correção pela inflação."
    },
    557: {
      a: "O T-Bond paga cupons fixos e não é corrigido pela inflação.",
      b: "O T-Bill é zero cupom e não é corrigido pela inflação.",
      d: "O T-Note paga cupons fixos e não é corrigido pela inflação."
    },
    559: {
      a: "A poupança não rende pela média do saldo mantido no período.",
      c: "A poupança não rende pelo maior saldo do período.",
      d: "A poupança não rende pela soma dos saldos do período."
    },
    562: {
      a: "20% é alíquota de day trade, e não se aplica a essa operação fora do day trade.",
      c: "A alíquota não depende do prazo nessa situação.",
      d: "Vendas acima de R$ 20 mil no mês não são isentas de IR."
    },
    569: {
      a: "Debêntures incentivadas têm vantagem fiscal, mas não garantia do FGC.",
      b: "CDB tem garantia do FGC, mas não tem vantagem fiscal para pessoa física.",
      d: "CRI não tem garantia do FGC."
    }
,
    555: {
      b: "O CDB não tem prazo máximo de 720 dias como característica definida para essa afirmação.",
      c: "O CDB segue a mesma tabela regressiva, seja prefixado ou pós-fixado.",
      d: "O CDB não é isento de IR para aplicações até R$ 20 mil."
    },
    567: {
      a: "Esse é o resultado do titular da call, e não do lançador.",
      c: "A alternativa ignora o prêmio recebido e a obrigação de vender a R$ 40.",
      d: "A alternativa não corresponde ao resultado do lançador, que inclui a obrigação de vender a R$ 40."
    },
    583: {
      a: "A poupança não é creditada mensalmente com taxa fixa de 0,5% nessa regra.",
      b: "A poupança não é creditada diariamente nesses termos.",
      c: "O limite de 9% não é o critério da regra da poupança."
    },
    584: {
      a: "O Bacen não emite títulos públicos federais; quem emite é o Tesouro Nacional.",
      c: "O Banco do Brasil não emite títulos públicos federais.",
      d: "O CMN é órgão normativo, e não emissor de títulos públicos."
    },
    586: {
      a: "Títulos públicos não podem ser comprados sem limite de valor como descrito.",
      c: "Títulos públicos não têm garantia do FGC.",
      d: "Títulos públicos são emitidos pelo governo, e não títulos privados."
    },
    587: {
      b: "Ações não têm garantia do FGC.",
      c: "Debêntures não têm garantia do FGC.",
      d: "Ações não têm garantia do FGC."
    },
    594: {
      a: "O IOF incide até o 29º dia, e não até o 30º.",
      c: "O IOF não se encerra no 180º dia; a regressividade vai até o 29º dia.",
      d: "O IOF não se encerra no 19º dia."
    },
    597: {
      b: "A oferta não pode ser feita apenas após a publicação do prospecto; o marco é o registro.",
      c: "A oferta não pode ser feita antes do registro na CVM.",
      d: "O critério não é a apresentação de todas as informações; o marco é o registro da oferta."
    },
    598: {
      a: "A LCA não tem cobertura integral do FGC; a cobertura é limitada.",
      c: "A LCA tem cobertura limitada do FGC, e não nenhuma cobertura.",
      d: "A LCA é isenta de IR para pessoa física."
    },
    608: {
      a: "A poupança tem cobertura do FGC.",
      b: "A LCI tem cobertura do FGC.",
      c: "O CDB tem cobertura do FGC."
    },
    609: {
      a: "Debêntures incentivadas são isentas de IR para pessoa física.",
      c: "A poupança é isenta de IR para pessoa física.",
      d: "A LCI é isenta de IR para pessoa física."
    },
    612: {
      a: "A liquidação física no mercado secundário é em D+2, e não em D+3.",
      b: "A liquidação financeira é em D+2, e não em D+3.",
      d: "A liquidação não é em D+4 na parte física."
    },
    614: {
      a: "Banco de investimento não emite CRI; quem emite é a securitizadora.",
      b: "Banco múltiplo não é o emissor típico de CRI.",
      c: "Sociedade de crédito imobiliário não é a emissora de CRI."
    },
    616: {
      a: "Títulos públicos federais não têm garantia do FGC e não se encaixam no enunciado.",
      c: "Debêntures incentivadas não têm garantia do FGC.",
      d: "O CDB tem garantia do FGC até o limite, e não acima dele."
    },
    617: {
      a: "A inflação implícita é a relação entre as taxas, e não 4,50%.",
      b: "3,25% não resulta da relação entre as taxas de 9,25% e 6,75%.",
      c: "2,50% não resulta da relação entre as taxas de 9,25% e 6,75%."
    },
    619: {
      a: "A análise técnica não se baseia no cenário macroeconômico.",
      b: "Balanço e demonstrações são análise fundamentalista, e não técnica.",
      c: "A análise técnica usa volume e preço, e não os despreza."
    },
    622: {
      a: "A taxa de administração também pode ser cobrada, e não apenas entrada, saída e carregamento.",
      c: "Entrada e saída também podem ser cobradas, e não apenas administração e performance.",
      d: "A taxa de administração também pode ser cobrada, além de entrada, saída e performance."
    },
    623: {
      a: "Banco múltiplo não tem essa obrigação legal de investir parte do patrimônio.",
      b: "Banco comercial não é a figura descrita na alternativa.",
      d: "Investidor profissional é categoria de capacidade, e não obrigação legal de investir."
    },
    624: {
      b: "Custodiante guarda os ativos, e não gere a carteira do fundo.",
      c: "Auditor externo fiscaliza as demonstrações, e não gere os ativos.",
      d: "Cotista é investidor, e não gestor da carteira."
    },
    625: {
      a: "A taxa de administração não depende do resultado da aplicação.",
      c: "A taxa de administração não é cobrada com base no desempenho global da carteira.",
      d: "A taxa de administração não é cobrada com base no desempenho mensal da carteira."
    }
,
    472: {
      b: "O CDB não tem prazo máximo de 720 dias como característica definida para essa afirmação.",
      c: "O CDB segue a mesma tabela regressiva, seja prefixado ou pós-fixado.",
      d: "O CDB não é isento de IR para aplicações até R$ 20 mil."
    }
,
    628: {
      a: "Fundo multimercado não tem exigência de mínimo de 50% em crédito privado.",
      b: "Fundo multimercado não tem exigência de 67% mínimo em ações; essa regra é de fundos de ações.",
      d: "Fundo multimercado diversifica os fatores de risco, e não concentra em um único fator."
    },
    629: {
      a: "CDB é título de banco e não oferece proteção cambial.",
      b: "CDI é uma taxa de juros, e não proteção contra variação cambial.",
      d: "LCI não oferece proteção contra variação cambial."
    },
    630: {
      a: "Essa combinação mistura fatores de juros e de moeda fora da definição de fundo cambial.",
      b: "A taxa de juros não é medida pelo dólar.",
      c: "A taxa de juros cambial não é o fator principal definido para fundos cambiais."
    },
    631: {
      a: "O gestor não compra ativos para cobrir resgates; ele vende ativos para isso.",
      b: "Comprar ativos de acordo com a política não cobre a necessidade de caixa para resgates.",
      d: "Fechar o fundo não é a medida correta para honrar resgates."
    },
    634: {
      a: "Em fundos de ações o cotista não recolhe o IR por DARF; a retenção é do administrador.",
      b: "O gestor não é responsável pelo recolhimento do IR do fundo.",
      d: "O custodiante não é responsável pelo recolhimento do IR do fundo."
    },
    636: {
      b: "Cotização e liquidação não ocorrem no dia útil anterior.",
      c: "A cota em D+1 é conhecida no dia seguinte, e não no segundo dia útil.",
      d: "A cota em D+1 não é conhecida no segundo dia útil."
    },
    637: {
      b: "Chinese wall não é metodologia de cobrança de taxa de performance.",
      c: "Day trade não é metodologia de cobrança de taxa de performance.",
      d: "Taxa over não é metodologia de cobrança de taxa de performance."
    },
    639: {
      b: "Multimercado tem vários fatores de risco, e não se define só por juros.",
      c: "Referenciado acompanha um índice específico, e não a taxa de juros doméstica em geral.",
      d: "Ações não se ligam à variação da taxa de juros."
    },
    640: {
      a: "Custodiante guarda os ativos, e não registra o fundo na CVM.",
      c: "Distribuidor vende cotas, e não registra o fundo na CVM.",
      d: "Gestor escolhe os ativos, e não registra o fundo na CVM."
    },
    641: {
      a: "O administrador não é proprietário dos ativos do fundo.",
      c: "O gestor não é proprietário dos ativos do fundo.",
      d: "O custodiante guarda os ativos, mas não é proprietário deles."
    },
    642: {
      a: "Desvalorização dos ativos não reduz o número de cotas.",
      b: "Valorização dos ativos não reduz o número de cotas.",
      d: "Mais aportes do que resgates aumentaria o número de cotas."
    },
    644: {
      a: "O administrador não escolhe os ativos da carteira.",
      b: "O custodiante não escolhe os ativos da carteira.",
      c: "O distribuidor não escolhe os ativos da carteira."
    },
    645: {
      b: "Esse critério descreve um fundo com carência, e não a definição de fundo fechado.",
      c: "Fundo exclusivo não é o mesmo que fundo fechado.",
      d: "Não há restrição de resgate apenas com variações positivas."
    },
    646: {
      a: "Replicar um índice é característica de gestão passiva.",
      c: "Gestão ativa não é definida como estratégia mais defensiva.",
      d: "Gestão ativa não se define por hedge da posição."
    },
    647: {
      a: "A alavancagem aumenta, e não diminui, a chance de perdas.",
      b: "Fundos alavancados não são considerados mais defensivos.",
      c: "Fundos alavancados não são indicados a investidores conservadores."
    },
    648: {
      a: "A taxa de administração não é cobrada só quando há rentabilidade superior a um índice.",
      b: "A taxa de administração é cobrada diariamente, e não anualmente.",
      d: "A taxa de administração incide sobre o patrimônio, e não sobre a rentabilidade."
    },
    649: {
      a: "Fundo de ações deve aplicar no mínimo, e não no máximo, 67% em ações.",
      b: "O mínimo é de 67%, e não de 80%.",
      c: "O mínimo é de 67%, e não há máximo de 80% nessa regra."
    },
    650: {
      a: "O fundo cambial exige 80% em ativos cambiais, e não 67%.",
      b: "O mínimo é de 80%, e não de 95%.",
      d: "O mínimo é de 80%, e não de 100%."
    },
    651: {
      a: "Fundo de renda fixa comum exige termo de adesão.",
      c: "Fundo cambial não dispensa o termo de adesão.",
      d: "Fundo referenciado também exige termo de adesão."
    },
    652: {
      b: "Curto prazo não tem prazo médio de 365 dias.",
      c: "O critério da CVM para curto prazo não é o limite de 375 dias.",
      d: "Curto prazo não tem prazo médio de 365 dias."
    },
    653: {
      a: "60 dias não é o critério da Receita Federal para fundo de curto prazo.",
      c: "O limite da Receita Federal para curto prazo é 365 dias, e não 375.",
      d: "180 dias não é o limite da Receita Federal para curto prazo."
    },
    655: {
      a: "A ordem é IOF primeiro e depois IR, e não IR antes do IOF.",
      b: "Além do IOF, também incide IR no resgate.",
      d: "O IOF também incide nesse resgate antes de 30 dias."
    },
    656: {
      a: "A taxa de administração não depende da rentabilidade do fundo.",
      b: "A taxa de administração não é devolvida ao cotista.",
      d: "A taxa de administração incide sobre o patrimônio, e não sobre a rentabilidade."
    },
    659: {
      a: "Fundo de renda fixa pode comprar ativos no exterior, dentro das regras da CVM.",
      b: "Fundo fechado não permite resgate a qualquer momento.",
      c: "Fundo exclusivo é o de um único cotista, e não o que investe em um setor."
    },
    660: {
      b: "O mínimo é de 95% em cotas de FIDC, e não de 80%.",
      c: "O mínimo de 95% é em cotas de FIDC, e não em direitos creditórios diretos.",
      d: "O mínimo de 95% é em cotas de FIDC, e não de 80% em direitos creditórios."
    },
    661: {
      a: "FIP investe em participações, e não em títulos do governo.",
      b: "FIP é fundo fechado, e não aberto.",
      c: "A exigência de 67% em ações não se aplica ao FIP da forma descrita."
    },
    662: {
      a: "O ETF é negociado por cota unitária; lote de 100 cotas não é o mínimo.",
      b: "O ETF não é negociado em lotes de 10 cotas.",
      c: "O ETF não é negociado em lotes de 100 cotas."
    },
    665: {
      a: "O mínimo é de 50% em direitos creditórios, e não de 67%.",
      b: "O mínimo é de 50% em direitos creditórios, e não de 80%.",
      d: "O mínimo é de 50% em direitos creditórios, e não de 95%."
    },
    667: {
      b: "As normas do Conselho Regional de Contabilidade não regem as demonstrações dos clubes.",
      c: "O BACEN não rege as demonstrações contábeis dos clubes.",
      d: "O CMN não regula as demonstrações contábeis dos clubes."
    },
    668: {
      a: "Operações ex-pit não reduzem a liquidez por definição.",
      b: "Operações ex-pit permitem a precificação de posições a termo.",
      c: "Operações ex-pit não ficam sujeitas à interferência do pregão."
    },
    669: {
      a: "O limite é em reais, e não em dólares.",
      c: "R$ 1 milhão é o limite de investidor qualificado, e não de profissional.",
      d: "O limite não é de US$ 500 mil."
    },
    671: {
      a: "A regra da forma fechada é o término do prazo, e não apenas o regulamento.",
      b: "O resgate não ocorre após o primeiro ano de criação do fundo.",
      d: "Não é necessária concordância de dois terços dos cotistas para o resgate."
    },
    672: {
      a: "Fundo de ações não aplica apenas em títulos de renda fixa.",
      b: "O fundo não é de renda variável ou cambial.",
      c: "Fundo multimercado não aplica exclusivamente em títulos de renda fixa."
    },
    673: {
      b: "ETF é aberto, e não fechado, e não tem valor fixo.",
      c: "A descrição não define o ETF, que replica um índice.",
      d: "ETF é negociado em bolsa, e não em mercado de balcão."
    },
    675: {
      a: "FIDC aplica maior, e não menor, que 50% em direitos creditórios.",
      b: "O mínimo é de 50%, e não de 95%.",
      d: "FIDC não aplica em cotas de fundos de cotas."
    },
    676: {
      a: "Deixa de fora o item III, que também está correto: a emissão de cotas para os atuais cotistas do fundo não se qualifica como oferta pública.",
      b: "Deixa de fora o item II, que também está correto: não é permitida nova oferta pública antes de subscrita a anterior ou cancelado o saldo remanescente.",
      c: "Deixa de fora o item I, que também está correto: a distribuição de cotas de FIP por oferta pública exige registro prévio na CVM."
    },
    677: {
      a: "22,50% é a alíquota de resgate para aplicações de até 180 dias, e não a alíquota da antecipação semestral (come-cotas).",
      b: "20% é a alíquota do come-cotas para fundos classificados como de curto prazo, enquanto em fundos de longo prazo a alíquota semestral é de 15%.",
      c: "17,50% é a alíquota de resgate para aplicações com prazo entre 181 e 360 dias, e não do come-cotas."
    },
    678: {
      a: "O fundo de renda fixa referenciado tem por objetivo acompanhar um índice de referência (como CDI), exigindo 95% do PL atrelado ao indicador.",
      c: "O fundo de curto prazo tem por característica essencial o prazo médio da carteira de no máximo 60 dias.",
      d: "O fundo de investimento em cotas (FIC) tem por regra aplicar no mínimo 95% do seu patrimônio em cotas de outros fundos de investimento."
    },
    679: {
      b: "No ganho de capital em bolsa o próprio investidor recolhe via DARF, mas para os rendimentos distribuídos a retenção é feita na fonte pela administradora.",
      c: "A isenção de IR sobre rendimentos distribuídos por FII beneficia apenas pessoas físicas sob condições regulamentares específicas, não se aplicando a pessoas jurídicas.",
      d: "A alíquota de IR sobre o ganho de capital na alienação de cotas de FII é fixa em 20%, e não regressiva."
    },
    680: {
      a: "A avaliação de ativos pelo valor atual de negociação no mercado é o conceito de marcação a mercado (MtM).",
      b: "A troca de fluxos financeiros e indicadores de rentabilidade define as operações de swap, e não o chinese wall.",
      d: "A compra e venda do mesmo ativo no mesmo dia pela mesma instituição e cliente é a definição de day trade."
    },
    681: {
      b: "A isenção de até R$ 20.000 por mês vale para a alienação de ações no mercado à vista por pessoas físicas, não se aplicando a cotas de fundos de ações.",
      c: "Fundos de ações não possuem incidência de come-cotas (tributação semestral em maio e novembro); a tributação ocorre exclusivamente no resgate.",
      d: "A alíquota de IR sobre os rendimentos auferidos no resgate de fundos de ações é fixa em 15%, não havendo tabela regressiva."
    },
    682: {
      a: "Nem todos os fundos sofrem come-cotas: fundos de ações, fundos fechados e fundos imobiliários não possuem incidência semestral.",
      b: "Fundos cambiais seguem a regra tributária de renda fixa (curto ou longo prazo) e sofrem incidência de come-cotas semestral.",
      c: "A alíquota semestral do fundo de curto prazo é de 20%, superior à de fundos de longo prazo, que é de 15%."
    },
    683: {
      a: "'Agremiação' não é uma figura jurídica ou veículo regulamentado pelo mercado financeiro para investimento coletivo em ações.",
      c: "Cooperativas financeiras são instituições de crédito mútuo destinadas a prestar serviços bancários a associados, e não veículos de investimento em ações.",
      d: "Assembleia é a reunião deliberativa dos cotistas ou acionistas para tomada de decisões, e não o veículo de investimento em si."
    },
    684: {
      a: "FIP (Fundo de Investimento em Participações) investe em empresas fechadas ou abertas com foco em participação e governança, não replicando índices de mercado.",
      b: "Fundo fechado é aquele cujas cotas só podem ser resgatadas ao término do prazo de duração, não sendo a definição de fundo referenciado em índice.",
      d: "Fundo exclusivo é voltado a um único investidor profissional, com regulamento moldado exclusivamente às suas preferências."
    },
    685: {
      a: "No fundo aberto para aplicação e resgate os cotistas podem aportar recursos e solicitar o resgate de cotas a qualquer momento.",
      c: "O fundo fechado apenas para resgate permitiria novas aplicações, ao passo que o fundo fechado veda aportes e resgates fora do prazo estipulado.",
      d: "Permitir resgates a qualquer tempo descaracterizaria a estrutura de fundo fechado, em que o resgate só ocorre no término do prazo ou liquidação."
    },
    686: {
      a: "Fundos fechados podem ser ofertados ao público em geral, não sendo restritos exclusivamente a investidores qualificados.",
      b: "Fundos fechados não permitem resgate de cotas a qualquer momento; o cotista deve aguardar a liquidação ou negociar as cotas no secundário.",
      c: "Fundos abertos permitem resgate a qualquer tempo pelo cotista (observada eventual carência), e não apenas no encerramento."
    },
    687: {
      a: "Taxa de ingresso (ou taxa de entrada) pode ser cobrada pelo fundo no momento da aplicação do cotista.",
      c: "Taxa de administração é a remuneração cobrada do fundo pela prestação dos serviços de administração e gestão.",
      d: "Taxa de performance pode ser cobrada pelo fundo quando a rentabilidade supera o benchmark estabelecido em regulamento."
    },
    688: {
      a: "A marcação a mercado tem por princípio a equidade e neutralidade entre cotistas, e não o favorecimento de quem realiza aportes.",
      b: "A marcação diária a mercado busca a precificação justa de saída, e não o benefício indevido de cotistas que resgatam.",
      d: "O administrador é remunerado pela taxa de administração contratada; a marcação a mercado destina-se a precificar a cota com justiça patrimonial."
    },
    689: {
      a: "Fundos Y (35%) e Z (55%) possuem alocação em ações abaixo do percentual mínimo regulamentar de 67% exigido pela CVM para fundos de ações.",
      b: "O Fundo Y possui apenas 35% em ações, não atingindo o piso obrigatório de 67% de ações para ser classificado como fundo de ações.",
      c: "Os fundos Z (55%) e W (65%) possuem alocação em ações inferior ao limite mínimo de 67% do patrimônio líquido."
    },
    690: {
      a: "A marcação na curva utiliza a taxa contratada de compra do papel até o vencimento, não refletindo o valor corrente de mercado.",
      b: "A marcação na curva gera justamente o oposto: quebra da equidade e favorecimento/prejuízo entre cotistas no momento do aporte ou resgate.",
      d: "O balanço social é demonstrativo de responsabilidade socioambiental, não tendo relação com ajustes contábeis de carteira de fundos."
    },
    691: {
      a: "Deixa de fora o item III, que também descreve atribuições da Central de Cadastro da B3.",
      c: "Deixa de fora o item II, que descreve corretamente a identificação do investidor por meio de sua conta nas infraestruturas da B3.",
      d: "Contraria o gabarito oficial da questão ao considerar todos os itens simultaneamente corretos."
    },
    692: {
      b: "A asserção II é verdadeira: é no nível de conta de custódia e liquidação que os direitos e obrigações ficam individualizados e protegidos.",
      c: "A asserção I é verdadeira: a estrutura de contas é peça central para conferir transparência, rastreabilidade e segurança ao investidor.",
      d: "Ambas as asserções são verdadeiras e guardam estrita relação de causa e justificativa entre si."
    },
    693: {
      a: "Deixa de fora o item II, que também está correto ao prever a obrigação de verificação periódica e atualização cadastral.",
      c: "Inclui o item III, que está incorreto: a instituição não pode realizar operações complexas ou inadequadas sem antes alertar formalmente o cliente e colher sua anuência expressa.",
      d: "Inclui o item III, que contraria as diretrizes normativas de suitability da CVM."
    },
    694: {
      b: "O investimento é a etapa operacional posterior à conclusão e aprovação cadastral do cliente.",
      c: "A especulação é uma estratégia de negociação que só pode ser exercida após a abertura e habilitação da conta do cliente.",
      d: "O financiamento é modalidade de crédito que depende de prévia formalização cadastral e análise de risco."
    },
    695: {
      a: "Embora o investidor declare as informações, a responsabilidade regulatória pela verificação, veracidade e manutenção perante o mercado é da instituição participante.",
      b: "O Bacen é órgão regulador e fiscalizador do SFN, não sendo responsável pela coleta ou validação de dados de clientes individuais.",
      d: "A empresa onde o cliente trabalha não possui qualquer responsabilidade perante a CVM ou a B3 sobre o cadastro do investidor."
    },
    696: {
      a: "A unificação de contas na Câmara B3 é uma faculdade operacional colocada à disposição dos participantes, não uma obrigação legal.",
      c: "A unificação nunca foi tornada compulsória pela CVM ou pela B3; o modelo respeita a escolha operacional do participante.",
      d: "Não se exige apresentação de justificativa documental formal à B3 para manter contas segregadas por mercado."
    },
    697: {
      a: "O investidor pode ter múltiplas contas em diferentes intermediários ou em diferentes modalidades (como margem e custódia própria).",
      b: "A abertura de contas subordina-se à aprovação cadastral e às regras de compliance de cada participante, não sendo um direito irrestrito e ilimitado.",
      c: "A B3 não estabelece um teto numérico fixo de três contas por comitente."
    },
    698: {
      b: "A conta de liquidação destina-se à movimentação de débitos e créditos financeiros e entrega de ativos na liquidação, não à guarda depositária contínua.",
      c: "A conta máster é utilizada para agrupar ordens de comitentes que serão posteriormente alocadas a contas individuais.",
      d: "Conta brokerage é denominação comercial para contas de intermediação, não a denominação técnica da conta de guarda na central depositária."
    },
    699: {
      a: "Inverte a correspondência: o investidor não residente com base na Resolução 2.687/2000 vincula-se ao perfil de titularidade correspondente.",
      c: "A ordem das associações não respeita a classificação regulatória prevista no manual de contas da B3.",
      d: "Associa incorretamente os códigos de perfil às modalidades de cadastro de investidores não residentes."
    },
    700: {
      a: "'Investidores' é termo genérico que engloba tanto residentes no país quanto pessoas domiciliadas fora do Brasil.",
      b: "'Investidores estrangeiros' é termo genérico coloquial, enquanto 'Investidor Não Residente (INR)' é o termo técnico oficial definido na regulamentação da CVM.",
      d: "'IEX' não é uma sigla normativa adotada pela Resolução CVM ou pelo CMN para designar investidores domiciliados no exterior."
    },
    701: {
      b: "Inclui o item II, que está incorreto: a CVM não exige representação por pessoa física estrangeira residente no exterior para atuar localmente.",
      c: "Deixa de fora o item I e inclui o item II, contrariando a regra da Resolução CMN 4.373.",
      d: "Inclui o item II, que traz exigência incompatível com o arcabouço normativo de investidores não residentes."
    },
    702: {
      a: "O representante legal responde administrativamente perante os órgãos reguladores (CVM e Bacen), mas a guarda e segregação dos ativos é função do custodiante.",
      b: "O representante fiscal tem por atribuição responder pelas obrigações tributárias e fiscais do investidor perante a Receita Federal.",
      d: "O investidor residente é uma categoria de investidor local, e não um prestador de serviço de custódia para o INR."
    },
    703: {
      a: "Inclui o item I, que contém a pegadinha: a intermediária estrangeira assume o compromisso perante a intermediária local brasileira, e não perante outra estrangeira.",
      c: "Inclui o item I e deixa de fora o item II, ambos contrariando a regulamentação do cadastro simplificado.",
      d: "Inclui o item I, que está incorreto na sua definição do compromisso entre as instituições."
    },
    704: {
      b: "Ser signatário da IOSCO é requisito aplicável ao regulador do país de origem da instituição estrangeira, não exigência do intermediário local.",
      c: "Rescisão de contrato é penalidade por descumprimento, e ser signatário do memorando da IOSCO diz respeito à jurisdição estrangeira.",
      d: "Constituição de mandatário é cláusula contratual entre as partes, não compondo o tripé das exigências normativas da B3 para o intermediário local."
    },
    705: {
      a: "A negociação de ações por investidor não residente exige obrigatoriamente prévio registro na CVM nos termos da Resolução CMN 4.373.",
      c: "A negociação de opções e derivativos no mercado de bolsa exige registro ativo do INR na CVM.",
      d: "Operações com ouro ativo financeiro sujeitam-se ao registro regulatório regular na CVM."
    },
    706: {
      a: "O representante legal responde perante a CVM pelo registro do investidor, não respondendo pelo controle dos ativos.",
      b: "O representante fiscal atua perante a Receita Federal nas obrigações tributárias, sem realizar o controle de custódia.",
      c: "A B3 fornece a infraestrutura de liquidação e compensação, não exercendo o papel de custodiante contratado pelo investidor."
    },
    707: {
      a: "O representante legal responde pelo registro cadastral e comunicação com a CVM, e não pelas obrigações fiscais perante a Receita Federal.",
      c: "A B3 opera os sistemas de negociação e liquidação, não atuando como representante fiscal do investidor.",
      d: "O custodiante guarda os ativos e controla a documentação, não prestando a representação tributária e fiscal."
    },
    708: {
      b: "O representante fiscal cuida exclusivamente das obrigações fiscais e tributárias perante as autoridades fiscais brasileiras.",
      c: "A B3 é a entidade administradora de mercado de bolsa e balcão organizado, não representando investidores perante órgãos reguladores.",
      d: "O custodiante é responsável pela custódia, controle de ativos em contas segregadas e fornecimento de extratos."
    },
    709: {
      a: "A conta admincom é destinada especificamente à identificação de ofertas originárias de ordens administradas concorrentes.",
      b: "A conta máster é utilizada para agrupar investidores que possuam vínculos em comum ou gestão compartilhada.",
      d: "A conta intermediária é mantida por participante de negociação pleno para posterior distribuição a contas normais."
    },
    710: {
      b: "A conta máster agrupa contas vinculadas por gestão comum ou intermediário internacional comum, não intermediando para distribuição posterior.",
      c: "A conta brokerage é utilizada para possibilitar vínculo de repasse entre participantes sem identificar o beneficiário final na origem.",
      d: "A conta de captura é mecanismo de controle operacional e de contingência de ofertas, não tendo essa finalidade de intermediação."
    },
    711: {
      a: "O representante fiscal é responsável perante a Secretaria da Receita Federal pelas obrigações tributárias decorrentes das aplicações.",
      b: "O representante legal responde administrativamente perante a CVM pelo registro e prestação de informações exigidas pela autarquia.",
      c: "'Representante normativo' não existe na estrutura regulatória da Resolução CMN 4.373."
    },
    712: {
      b: "O vínculo de custódia liga o investidor ao agente de custódia para a guarda de seus ativos na central depositária.",
      c: "A consolidação de margem destina-se a agregar e otimizar exigências de garantias entre contas coligadas.",
      d: "O vínculo de exercício de opções vincula participantes de negociação e liquidação para a operacionalização de exercícios de opções."
    },
    713: {
      b: "A conta de erro destina-se a acolher operações decorrentes de falhas operacionais comprovadas até a regularização.",
      c: "A conta de restrição é utilizada para impor limitações operacionais a determinados comitentes ou participantes.",
      d: "A conta de captura serve a procedimentos de registro de negociações em contingência, não a ordens administradas."
    },
    714: {
      a: "A conta de depósito é a conta padrão mantida na central depositária para controle de guarda dos ativos do comitente.",
      c: "A conta admincom acolhe especificamente ofertas provenientes de ordens administradas concorrentes.",
      d: "A conta intermediária permite a um participante pleno intermediar negócios para posterior rateio a contas comitentes."
    },
    715: {
      a: "A conta de restrição serve a fins disciplinares ou cautelares de bloqueio/limitação de negociação.",
      b: "A conta de captura é um recurso operacional de contingência da infraestrutura de negociação.",
      d: "A conta intermediária tem por escopo intermediar negócios com distribuição mandatória posterior para contas normais."
    },
    716: {
      b: "O vínculo de custodiante liga a conta do investidor ao custodiante para guarda de ativos, e não para consolidar margem sob um mesmo participante.",
      c: "O vínculo de exercício de opções destina-se a operacionalizar o exercício de posições em opções entre PN e PL.",
      d: "O vínculo por conta e ordem liga contas sob participantes distintos (um participante de negociação e um participante de negociação pleno)."
    },
    717: {
      a: "Deixa de fora os itens II e III, que também são condições obrigatórias do cadastro simplificado de investidores não residentes.",
      b: "Deixa de fora os itens I e III, que também representam pré-requisitos regulamentares fixados pela CVM.",
      c: "Deixa de fora os itens I e II, que também são requisitos essenciais previstos na normatização da CVM."
    },
    718: {
      b: "O representante legal responde administrativamente perante a CVM pelo registro do INR e pelo fornecimento de informações cadastrais.",
      c: "'Representante normativo' não existe no arcabouço normativo do Conselho Monetário Nacional ou da CVM.",
      d: "O custodiante responde pela guarda dos ativos, controle em contas segregadas e manutenção da documentação do investidor."
    },
    719: {
      a: "A conta de restrição é utilizada para imposição de limites ou bloqueios regulatórios e disciplinares a participantes ou comitentes.",
      c: "A conta brokerage possibilita a grandes investidores operar com múltiplos participantes com repasse sem identificação de origem.",
      d: "A conta intermediária permite ao PNP intermediar operações para posterior distribuição e alocação a contas normais."
    },
    720: {
      a: "Churning é a prática desleal de giro excessivo da carteira de clientes com a única finalidade de gerar corretagens para o intermediário.",
      c: "'Front trading' não é um termo técnico definido na regulamentação; o termo oficial para antecipação de ordens é front running.",
      d: "Insider trading consiste na negociação de valores mobiliários com base em informações privilegiadas e materiais ainda não divulgadas ao mercado."
    },
    721: {
      a: "O risco de crédito engloba não apenas o inadimplemento total, mas também o atraso ou não pagamento de parcelas (inadimplemento parcial).",
      c: "Risco de crédito decorre justamente da possibilidade de ocorrência de default (calote), e não da impossibilidade deste.",
      d: "A definição de risco de crédito é a possibilidade de o devedor não honrar suas obrigações financeiras."
    },
    722: {
      b: "Front running é o aproveitamento indevido por intermediários de ordens de clientes para se posicionar previamente no mercado.",
      c: "'Front trading' é uma corruptela terminológica que não corresponde à prática de excesso de negociação com foco em corretagem.",
      d: "Insider trading é o uso indevido de informações relevantes confidenciais obtidas antes de sua divulgação pública."
    },
    723: {
      a: "Risco de iliquidez é a impossibilidade ou custo excessivo para liquidar uma posição ao preço justo de mercado quando necessário.",
      b: "Risco operacional resulta de falhas em processos internos, sistemas, pessoas ou de eventos externos imprevisíveis.",
      c: "Risco de principal consiste na perda do valor principal do ativo por entrega do bem sem o correspondente recebimento financeiro."
    },
    724: {
      a: "Liquidez expressa a conversão ágil a preço justo em dinheiro disponível, e não em outros valores mobiliários.",
      c: "A conversão líquida destina-se a transformar o ativo em dinheiro/moeda corrente, e não especificamente em ações.",
      d: "O destino da liquidez financeira é o dinheiro (moeda de curso legal), e não valores mobiliários genéricos."
    },
    725: {
      a: "O risco ligado a um setor, emissor ou ativo específico é o risco não sistemático (específico ou idiossincrático).",
      c: "O risco sistemático atinge todo o mercado e não pode ser eliminado pela diversificação da carteira.",
      d: "Risco mitigável por diversificação setorial é classificado como risco específico (não sistemático)."
    },
    726: {
      a: "Risco de crédito refere-se à probabilidade de inadimplência da contraparte em honrar pagamentos devidos.",
      c: "Risco de mercado decorre da volatilidade e flutuações nos preços, taxas de juros, câmbio e índices de mercado.",
      d: "Risco de liquidez é a incapacidade de honrar compromissos financeiros ou negociar ativos sem perda substancial de valor."
    },
    727: {
      a: "Churning consiste na movimentação excessiva da carteira do cliente visando maximizar receitas de taxas de corretagem.",
      b: "Front running caracteriza-se pela execução de ordens próprias antes da execução de ordens de clientes de grande volume.",
      c: "'Front trading' não corresponde ao uso indevido de informação confidencial relevante (insider trading)."
    },
    728: {
      b: "Risco de crédito trata da possibilidade de inadimplemento parcial ou total das obrigações da contraparte.",
      c: "Risco de liquidez expressa a dificuldade ou custo desproporcional para transformar um ativo financeiro em dinheiro.",
      d: "Risco operacional resulta de falhas ou fraudes humanas, falhas em sistemas de TI, processos defeituosos ou eventos externos."
    },
    729: {
      a: "A fase de decisão refere-se à governança executiva e estratégia de negócios da alta administração da instituição.",
      b: "A fase de contratação formaliza os negócios e vínculos jurídicos com contrapartes e clientes.",
      c: "A fase de análise avalia a viabilidade econômica, perfil de crédito e retorno esperado da operação."
    },
    730: {
      a: "O primeiro item é verdadeiro: o modelo das três linhas é a metodologia padrão para estruturar governança, gestão de riscos e controles internos.",
      b: "Inverte a avaliação dos itens I e II, que tratam da estrutura consolidada e da independência da auditoria interna.",
      c: "Inverte a veracidade dos itens, ignorando a atribuição da auditoria interna como terceira linha independente."
    },
    731: {
      a: "A primeira linha é a própria linha de frente de negócios e áreas operacionais que gerenciam os riscos diretamente no dia a dia.",
      c: "A terceira linha é a auditoria interna, que atua com independência em relação às atividades de gestão e operação.",
      d: "A alta administração e o comitê de auditoria exercem supervisão geral sobre todas as linhas de defesa."
    },
    732: {
      a: "O item I está incorreto porque a primeira linha é a área executora das operações, sendo aquela com menor independência de controle.",
      b: "O item III está incorreto porque a verificação direta e cumprimento das rotinas operacionais de KYC cabe à primeira e à segunda linha.",
      d: "O item III está incorreto ao atribuir procedimentos executivos de cadastro diretamente à terceira linha (auditoria)."
    },
    733: {
      a: "A OICV/IOSCO é a organização internacional que congrega reguladores de valores mobiliários em âmbito global.",
      c: "O CRSFN é o tribunal administrativo de recursos de decisões sancionadoras do Bacen e da CVM no Brasil.",
      d: "FRA (Forward Rate Agreement) é um contrato derivativo de taxa de juros a termo, não uma comissão de controles internos."
    },
    734: {
      a: "Monitoramento e controle são componentes de suporte do COSO, e não as três categorias de objetivos estratégicos.",
      b: "Avaliação e controle são componentes operacionais, e não as categorias de objetivos da metodologia COSO.",
      d: "Avaliação e monitoramento integram os componentes estruturais do cubo, e não os objetivos primários."
    },
    735: {
      a: "Risco de mercado relaciona-se à flutuação de preços e taxas praticados no mercado financeiro.",
      b: "Risco de crédito traduz a possibilidade de não cumprimento de obrigações financeiras por devedores.",
      c: "Risco de liquidez é a impossibilidade de converter ativos em caixa a preços justos tempestivamente."
    },
    736: {
      b: "Risco financeiro engloba perdas econômicas diretas oriundas de volatilidade de mercado, inadimplência e liquidez.",
      c: "Risco regulamentar/legal decorre da inobservância de normas legais e sanções administrativas de órgãos fiscalizadores.",
      d: "Risco estratégico resulta de decisões inadequadas de posicionamento de mercado e modelo de negócios pela alta administração."
    },
    737: {
      b: "O item II descreve a regra geral de controles internos e governança do Bacen, não o conceito de carteira de negociação (trading book).",
      c: "Os itens II e III tratam de governança institucional e gestão de capital, e não dos instrumentos da carteira de negociação.",
      d: "O item III trata da atribuição estatutária de diretor de capital, não caracterizando a carteira de negociação."
    },
    738: {
      a: "Deixa de fora o item III, que também é atribuição essencial da auditoria interna ao colaborar com a avaliação de governança.",
      b: "O item II é incorreto: a auditoria interna não impede, mas sim fornece subsídios e asseguração para a administração avaliar os controles.",
      d: "Inclui o item II, que está diametralmente oposto à missão de asseguração prestada pela auditoria interna."
    },
    739: {
      a: "A asserção II é falsa: o monitoramento deve ser contínuo e permanente, pois controles internos exigem supervisão constante frente a novos riscos.",
      c: "A asserção I é verdadeira ao descrever com precisão o objetivo do Instituto dos Auditores Internos (IIA) para agregar valor.",
      d: "A asserção I é plenamente verdadeira na sua definição da missão e abordagem sistemática da auditoria interna."
    },
    740: {
      b: "Compliance é uma função especializada de segunda linha, não se limitando a um autocontrole operacional da própria área.",
      c: "A emissão pontual de relatórios de correção é apenas um instrumento acessório, e não o objetivo final de assegurar conformidade.",
      d: "Identificar atrasos operacionais é atividade de gestão de processos e produtividade, e não a essência da conformidade legal e regulatória."
    },
    741: {
      a: "Risco não diversificável é sinônimo de risco sistemático (macroeconômico), que afeta todos os ativos indistintamente.",
      b: "Risco sistemático é decorrente de variáveis macroeconômicas amplas (inflação, juros, PIB), e não de fatores microeconômicos do emissor.",
      d: "Risco de crédito é uma espécie de risco financeiro, mas não a denominação abrangente para o risco microeconômico."
    },
    742: {
      a: "O item I está incorreto porque os mercados organizados não se limitam a espaços físicos, operando preponderantemente por sistemas eletrônicos.",
      b: "O item II está incorreto ao afirmar exclusividade de sistemas eletrônicos, desconsiderando a definição legal ampla da Instrução CVM 461.",
      d: "Deixa de fora o item IV, que elenca expressamente bolsas e mercados de balcão organizado como espécies de mercado organizado."
    },
    743: {
      a: "Deixa de fora os mercados de balcão organizado e de câmbio, que também operam sob ambientes administrados pela B3.",
      b: "Deixa de fora o mercado de bolsa, que constitui o principal segmento listado centralizado de negociação da B3.",
      c: "Deixa de fora o mercado de balcão organizado, que integra os mercados com registro e negociação do segmento listado."
    },
    744: {
      a: "O mercado de derivativos e o mercado a termo operam tipicamente no ambiente de bolsa, não sendo privativos do balcão organizado.",
      c: "O mercado à vista de ouro e as estratégias estruturadas de bolsa são negociados no ambiente centralizado de bolsa.",
      d: "O mercado de dólar pronto tem especificidades próprias de liquidação de moeda, não compondo o rol típico de renda variável em balcão."
    },
    745: {
      a: "O item I está incompleto por desconsiderar a atuação com presença de formador de mercado e interação de ofertas multilaterais.",
      c: "Deixa de fora o item III, que também descreve modalidade de negociação admitida no ambiente de bolsa com formadores de mercado.",
      d: "Considera todas corretas, mas o item I restringe equivocadamente a atuação essencial de forma incompatível com o enunciado da norma."
    },
    746: {
      a: "A alternativa A é apenas uma repetição de enunciado, não indicando o segmento de mercado correto.",
      b: "O mercado de renda fixa privada possui prazos e rotinas específicas de registro, não sendo o mercado central de ações liquidadas em D+2.",
      d: "Mercados futuros possuem liquidação diária de ajustes e vencimentos padronizados, e não liquidação física em D+2 de ações."
    },
    747: {
      b: "Bônus de subscrição não é uma ação ordinária ou preferencial, mas um valor mobiliário acessório que confere o direito futuro de subscrever ações.",
      c: "Bônus de subscrição não é um contrato derivativo de swap de troca de fluxos, mas título emitido por companhias abertas.",
      d: "Não se confunde com debêntures conversíveis, pois o bônus não confere remuneração de renda fixa ou juros remuneratórios."
    },
    748: {
      b: "Inverte os julgamentos das características do RCSA como certificado representativo de cesta de ações.",
      c: "Desconsidera a afirmativa verdadeira sobre a constituição e fungibilidade dos recibos de carteira selecionada.",
      d: "Apresenta combinação incompatível com as regras de emissão e custódia do RCSA na B3."
    },
    749: {
      a: "Ouro mercadoria destina-se a fins comerciais e industriais, não tendo o tratamento de ativo financeiro disciplinado pelo Bacen e B3.",
      c: "Ouro como moeda de curso forçado não é adotado no sistema monetário nacional brasileiro.",
      d: "O ouro ativo financeiro possui disciplina própria da Lei 7.766/89, não sendo negociado como título cambial convencional."
    },
    750: {
      a: "O mercado à vista negocia ações e títulos com liquidação em D+2, e não contratos futuros e opções padronizados.",
      b: "O mercado de balcão organizado acolhe ativos registrados com regras próprias, ao passo que derivativos padronizados operam no mercado de derivativos de bolsa.",
      c: "O mercado a termo negocia ativos para liquidação em prazo determinado contratado, sem os ajustes diários típicos dos contratos futuros."
    },
    751: {
      a: "Contratos futuros na B3 dividem-se em financeiros (índices, juros, câmbio) e agropecuários (soja, boi, café, milho), e não industriais.",
      c: "Não há separação formal entre futuros de capitais e futuros de crédito na classificação dos contratos da B3.",
      d: "A B3 classifica os derivativos de bolsa em derivativos financeiros e derivativos agropecuários/mercadorias."
    },
    752: {
      a: "Inverte as relações funcionais entre rolagem de posições, operações de financiamento e operações combinadas de opções.",
      b: "Associa erroneamente os conceitos de reversão de posições a operações de spread de opções.",
      d: "Apresenta correlação incorreta entre as definições operacionais das estratégias estruturadas da B3."
    },
    753: {
      a: "A oferta no mercado de opções pode conter condições específicas de validade e execução, não sendo irrestrita e incondicional.",
      c: "As opções negociadas em bolsa possuem séries e especificações rigorosamente padronizadas pela B3.",
      d: "A colocação de ofertas de opções subordina-se às regras de transparência, lotes e limites operacionais estabelecidos pela câmara."
    },
    754: {
      b: "O prazo mínimo legal em mercado a termo de ações na B3 é de 16 dias corridos, não podendo ser de apenas 5 dias.",
      c: "O prazo máximo admitido na B3 para termo de ações é de 999 dias corridos, e não de 360 dias.",
      d: "O regulamento estabelece prazo mínimo de 16 dias corridos e máximo de 999 dias corridos para o mercado a termo."
    },
    755: {
      a: "O item I está correto: o mercado a termo estabelece previamente preço fixo e prazo para a liquidação futura.",
      b: "Deixa de fora o item I e inclui premissas que contrariam a estrutura padronizada de garantias e ajustes do mercado a termo.",
      c: "O item IV traz corretamente os direitos e proventos creditados durante a vigência do contrato a termo."
    },
    756: {
      b: "O primeiro item é falso, pois operações ex-pit possibilitam a precificação de posições a termo por meio de preços futuros.",
      c: "O segundo item é verdadeiro: as operações ex-pit, por sua natureza bilateral fora do livro central, não sofrem interferência de pregão.",
      d: "O terceiro item é verdadeiro: ex-pit significa literalmente negócios autorizados realizados fora do pit/pregão central de negociação."
    },
    757: {
      a: "Deixa de fora o item II, que expressa dever basilar de abstenção de criação de condições artificiais de mercado.",
      c: "O item III está incorreto: a B3 veda terminantemente práticas manipulativas como spoofing e layering (inserção e cancelamento simulado de ofertas).",
      d: "Inclui o item III, que descreve prática ilícita e proibida de manipulação de preços no livro de ofertas."
    },
    758: {
      a: "O PNP é um intermediário financeiro pleno com autorização de acesso ao sistema de negociação, e não a figura com dever contratual de liquidez.",
      c: "Comitente é denominação genérica de qualquer cliente investidor titular de conta, não possuindo obrigações de formador de mercado.",
      d: "'Assessor Bancário Responsável' não é uma categoria regulatória de participante comitente para fomento de liquidez na B3."
    },
    759: {
      b: "A asserção II é plenamente verdadeira: o formador de mercado deve pautar sua conduta com rigorosa ética e observância às normas da CVM e B3.",
      c: "A asserção I é verdadeira: o regulamento proíbe terminantemente que o formador atue criando distorções ou condições artificiais de mercado.",
      d: "Ambas as asserções são verdadeiras e a exigência de conduta ética e regulamentar (II) justifica a vedação a práticas manipulativas (I)."
    },
    760: {
      a: "Deixa de fora o item II, que também é responsabilidade indelegável do Membro de Compensação ao aportar garantias e fundos.",
      c: "O item III está incorreto: práticas não equitativas e desequilíbrios são expressamente proibidos pelo código de conduta e regulamento da B3.",
      d: "Inclui o item III, que descreve conduta manifestamente ilícita e contrária às normas de mercado."
    },
    761: {
      a: "A autorização exclusiva para intermediação própria e de terceiros descreve o escopo restrito do Participante de Negociação (PN).",
      b: "A custódia é prerrogativa de participantes habilitados como agentes de custódia na Central Depositária.",
      c: "A liquidação financeira direta perante a câmara é função exclusiva do Membro de Compensação (MC) ou Participante de Liquidação."
    },
    762: {
      a: "O segundo item é verdadeiro: a compensação multilateral calcula a soma algébrica de todas as posições credoras e devedoras.",
      b: "Os três itens são afirmações verdadeiras que compõem a exata definição técnica de compensação multilateral com novação pela câmara.",
      d: "Desconsidera que tanto a apuração de resultado líquido quanto a soma algébrica de débitos e créditos são premissas verdadeiras."
    }
  };
  Object.keys(X).forEach(function (k) {
    WHY[k] = WHY[k] || {};
    Object.keys(X[k]).forEach(function (l) {
      if (!WHY[k][l]) WHY[k][l] = X[k][l];
    });
  });
})();