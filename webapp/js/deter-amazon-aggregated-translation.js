var Translation={
	'pt-br':{
		/* texts into HTML entities */
		'old-biome-info':'Informações sobre os dados no antigo limite do bioma.',
		'old-biome-btn':'Dados congelados',
		'cloud-info':'Informações sobre os dados de cobertura de nuvens.',
		'cloud-btn':'Cobertura de nuvens',
		'cloud-header':'Sobre os dados de cobertura de nuvens',
		'cloud-main-info':'A estação de processamento das imagens CBERS 4/4A gera '+
		'sistematicamente/automaticamente, como um dos seus produtos, '+
		'uma imagem de cobertura de nuvens e suas sombras para cada cena '+
		'do sensor WFI recebida (cloud mask).'+
		'<br/><br/>'+
		'Uma rotina seleciona todas as cenas WFI/CBERS 4 '+
		'utilizadas no DETER em determinado mês e gera um mosaico '+
		'mensal das áreas cobertas por nuvens.'+
		'<br/><br/>'+
		'Em seguida uma segunda rotina calcula a porcentagem de nuvem '+
		'em cada estado da Amazônia Legal e Cerrado e alimenta o dashboard '+
		'do TerraBrasilis.',
		'cloud-close':'Fechar',
		'page-title-amz': 'Amazônia Legal - Avisos de Desmatamento',
		'txt-civil':'Ano Civil',
		'txt-prodes':'Ano Referência',
		'allTime':'Exibindo dados para todo o intervalo do gráfico:',
		'someMonths':'Exibindo dados para os filtros do gráfico:',
		'goto_about':'Ver informações sobre o projeto e a equipe.',
		'goto_video':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'txt1c':'Informações de ajuda para uso do painel',
		'txt1d':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'txt1e':'Fechar',
		'txt1':'Painel DETER - mensal',
		'txt2':'Abrir o Painel Diário',
		'txt2a':'Informação de alteração nos dados',
		'txt2b':'O limite dos biomas brasileiros foram alterados <a href="https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/25798-ibge-lanca-mapa-inedito-de-biomas-e-sistema-costeiro-marinho" target="_blank">conforme publicação do IBGE</a> de 30/10/2019. Os dados de supressão e/ou degradação de vegetação publicados na plataforma TerraBrasilis foram ajustados para o novo recorte em fevereiro de 2022. Acesse <a href="/app/dashboard/alerts/biomes/cerrado/aggregated/">aqui</a> os resultados congelados até o dia 31 de Dezembro de 2021, relativos ao antigo limite.',
		'txt2c':'Fechar',
		'txt3':'Baixar Dados',
		'downloadBtn':'Baixar os dados em formato CSV.',
		'txt4':'Imprimir Gráficos',
		'txt4p':'Imprimir Gráficos',
		'txt5':'Escurecer/clarear',
		'txt6':'Entrar',
		'txt7':'Filtro:',
		'txt8':'Problema na comunicação com o servidor.<br>Aguarde alguns minutos e recarregue a página.',
		'txt9':'Filtro:',
		'txt10':'Filtro:',
		'txt11':'Filtro:',
		'txt30':'A impressão deste documento utiliza os recursos do navegador e pode apresentar diferenças entre eles.<br />'+
		'A impressão acomoda bem os gráficos quando as configurações são as seguintes:<br />'+
		'&nbsp;&nbsp;&nbsp;- A orientação do papel é do tipo paisagem;<br />'+
		'&nbsp;&nbsp;&nbsp;- O tamanho de papel é A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- E margens padrão do navegador.<br />',
		'txt31':'A porcentagem de cobertura de nuvem para o mês de abril de 2022 foi calculada com dados referentes somente a segunda quinzena do mes devido a problemas na geração da mascara de nuvens.',
		'txt13':'Aviso',
		'txt14':'Este painel não é afetado pelos filtros definidos no mapa.',
		'title-chart-amz':'Análise - Amazônia Legal',
		'title-chart-agreg-amz':'Variação mensal de área do projeto DETER',
		'title-chart-by-state':'Áreas por Estados',
		'title-chart-by-class':'Áreas por Classes',
		'title-chart-by-year':'Áreas por Anos',
		'txt16':'Filtros por Estados, Classes e Anos',
		'txt18':'Limpar este filtro.',
		'txt19':'Limpar este filtro.',
		'txt20':'Limpar este filtro.',
		'txt21':'Limpar este filtro.',
		'txt22a':'Informações complementares',
		'txt22b':'A classe <b>Corte Seletivo</b> refere-se ao somatório das classes Corte Seletivo Geométrico e Corte Seletivo Desordenado para o ano referência 2015/2016, quando estas classes ainda não eram discretizadas.',
		'txt22c':'Informações completas sobre o projeto DETER',
		'txt22d':'Fechar',
		'header-panel-amz':'| DETER (Avisos)',
		'header-menu-amz':'DETER (Avisos)',
		'maps-sup':'Mapas',
		'analysis-sup':'Gráficos',
		'analysis-des':'Desmatamento',
		'analysis-war':'DETER (Avisos)',
		'map-des':'Desmatamento',
		'map-war':'DETER (Avisos)',
		'map-veg':'Vegetação',
		'analysis-fire':'Focos (Queimada)',
		'goto_video_sup':'Veja o vídeo introdutório que mostra a interação de um usuário com as ferramentas do painel.',
		'help-sup':'Ajuda',

		'deforestation':'Avisos de desmatamento',
		'degradation':'Avisos de degradação',
		'degrad_defor':'Avisos de desmatamento e degradação',
		'num_alerts':'Número de avisos',
		'txt23':'Avisos de desmatamento',
		'txt24':'Avisos de degradação',
		'txt25':'Todas as classes de aviso',
		'updated':'Atualizado até:',

		'txt26':'Baixar os dados.',
		'txt26a':'Baixar a tabela com os avisos de desmatamento em formato CSV.',
		'txt26b':'Baixar o arquivo completo dos avisos de desmatamento em formato Shapefile.',
		'txt27':'Com filtros.',
		'txt28':'Sem filtros.',
		'txt29':'Fechar',

		/* titles for HTML entities */
		'aggregate_daily':'Alternar para o painel de consulta de dados diários.',
		'prepare_print':'Imprimir esta página utilizando o recurso do navegador.',
		'change_style':'Alternar o estilo de apresentação claro/escuro.',
		'print_page':'Imprimir esta página utilizando o recurso do navegador.',
		'display_warning':'Mais informações sobre as classes.',

		'deforestation-bt-title':'Ver dados de avisos de desmatamento.',
		'deforestation-classes':'Área total de avisos de desmatamento.',
		'degradation-bt-title':'Ver dados de avisos de degradação.',
		'degradation-classes':'Área total de avisos de degradação.',
		'custom-bt-title':'Ver todos os dados de avisos, desmatamento e degradação.',
		'custom-classes':'Área total de avisos de desmatamento e degradação.',
		'numpolygons':'Número de avisos.',

		/* Texts inside javascript. */
		'months_of_prodes_year':['Ago','Set','Out','Nov','Dez','Jan','Fev','Mar','Abr','Mai','Jun','Jul'],
		'months_of_civil_year':['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],
		'footer1':'Gerado pelo INPE/OBT/DPI/TerraBrasilis em',
		'footer2':'sob licença <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">CC BY-SA 4.0</a>',
		'failure_load_data':'Falhou ao carregar os dados.',
		'alerts_y_label':'Área dos avisos (km²)',
		'clouds_y_label':'Cobertura de nuvem (%)',
		'txt-cloud':'Mostrar/esconder nuvem',
		'txt-defor':'Mostrar/esconder desmatamento',
		'overview_x_label':'Seleção temporal (granularidade mensal)',
		'area': 'Área Agregada',
		'percentage': 'Porcentagem de cobertura de nuvem',
		'unit': 'km²',
		'warning_class_prodes':'Classe válida apenas para o ano referência 2015/2016',
		'warning_class':'Classe válida apenas para o ano 2015',
		'barArea_x_label_prodes':'Ano referência (Agosto - Julho)',
		'barArea_x_label':'Ano (Janeiro - Dezembro)',
		'tools': 'Ferramentas',
		'help' : 'Ajuda',
		'video': 'Video Introdutório',
		'about': 'Sobre',
		'contactus': 'Contato',
		'nv-chart-day':'Gráficos - Avisos Diários',
		'nv-daily-amz':'Amazônia Legal',
		'nv-aggreg-amz':'Amazônia Legal',
		'nv-chart-agg':'Gráficos - Agregado Mensal',
		'nv-daily-cer-nb':'Bioma Cerrado',
		'nv-aggreg-cer-nb':'Bioma Cerrado',
		'nv-home':'Home TerraBrasilis',
		'nv-sites':'Páginas relacionadas',
		'nv-map':'Mapa de Avisos',
		'toMap': 'Abrir o mapa interativo de avisos',
		'toHome': 'Abrir a página inicial com informações sobre o projeto de detecção de desmatamento - DETER.',
		'tt-contactus': 'Envie sugestões ou perguntas para:',
		'tt-contactus-menu': 'Envie-nos um e-mail com sugestões ou dúvidas sobre o projeto (terrabrasilis@inpe.br)',
		'about-menu':'Sobre',
		'contactus-menu':'Contato',
		'toDailyChart-amz':'Abrir o painel avisos diários para a Amazônia Legal.',
		'toAggregatedChart-amz':'Abrir o painel agregado mensal de avisos para a Amazônia Legal.',
		'toDailyChart-cer-nb':'Abrir o painel avisos diários para o Bioma Cerrado.',
		'toAggregatedChart-cer-nb':'Abrir o painel agregado mensal de avisos para o Bioma Cerrado.',
		'tituloprint-amz': ' | Variação mensal de área do projeto DETER - ano referência (Agosto a Julho)',
		'about-modal':'Sobre ',
		'description-modal':'O TerraBrasilis é uma plataforma desenvolvida pelo INPE para organização, acesso e uso através de um portal web dos dados geográficos produzidos pelos seus programas de monitoramento ambiental.',
		'option-modal':'Não mostrar novamente.',
		'option-modal-cloud':'Não mostrar novamente.'
	},
	'en':{
		/* texts into HTML entities */
		'old-biome-info':'Information about data in the old biome boundary.',
		'old-biome-btn':'Frozen data',
		'cloud-info':'Information about cloud coverage data.',
		'cloud-btn':'Cloud cover',
		'cloud-header':'About cloud coverage data.',
		'cloud-main-info':'The CBERS 4/4A image processing station generates, '+
		'automatically/systematically, as one of the products, an image of cloud '+
		'cover and its shadows for each scene of the WFI sensor (cloud mask).'+
		'<br/><br/>'+
		'A routine selects all the WFI/CBERS 4 scenes used in the DETER interpretation '+
		'process for a month and generates a cloud cover mosaic.'+
		'<br/><br/>'+
		'Then, another routine calculates the percentage of cloud from each state of the '+
		'Legal Amazon and Cerrado to feed the TerraBrasilis panels.',
		'cloud-close':'Close',
		'page-title-amz': 'Legal Amazon - Deforestation Notices',
		'txt-civil':'Civil Year',
		'txt-prodes':'Reference Year',
		'allTime':'Displaying data for entire chart range:',
		'someMonths':'Displaying data for chart\'s filter:',
		'goto_about':'See informations about the project and team.',
		'goto_video':'Watch the introductory video to see how an user interact with dashboard tools.',
		'txt1c':'Helpful informations about how to use the panel.',
		'txt1d':'Watch the introductory video to see how an user interact with dashboard tools.',
		'txt1e':'Close',
		'txt1':'DETER panel - monthly',
		'txt2':'Open the Daily Panel',
		'txt2a':'Data change information',
		'txt2b':'The Brazilian biome borders have been changed <a href="https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/25798-ibge-lanca-mapa-inedito-de-biomas-e-sistema-costeiro-marinho" target="_blank">according to IBGE publication</a> at 10/30/2019. The vegetation suppression and/or degradation data published on the TerraBrasilis platform were adjusted for the new clipping in February 2022. Access <a href="/app/dashboard/alerts/biomes/cerrado/aggregated/">here</a> the results frozen until December 31, 2021, related to the old limit.',
		'txt2c':'Close',
		'downloadBtn':'Download data in CSV format.',
		'txt3':'Download Data',
		'txt4':'Print Graphs',
		'txt4p':'Print Graphs',
		'txt5':'Darken/Enlighten',
		'txt6':'Login',
		'txt7':'Filter',
		'txt8':'Failure on loading data from server.<br>Try reload after some minutes.',
		'txt9':'Filter:',
		'txt10':'Filter:',
		'txt11':'Filter:',
		'txt30':'The print this document use the browser resources and may have differences among themselves.<br />'+
		'The charts stay well arranged over the print document when the following configurations is defined:<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper orientation is landscape;<br />'+
		'&nbsp;&nbsp;&nbsp;- The paper size is A4;<br />'+
		'&nbsp;&nbsp;&nbsp;- And the margins is the default of the browser.<br />',
		'txt31':'The percentage of cloud coverage for the month of April 2022 was calculated with data referring only to the second half of the month due to problems in generating the cloud mask.',
		'txt13':'Warning',
		'txt14':'The map filters isn\'t applied in this panel.',
		'title-chart-amz':'Analyses - Legal Amazon',
		'title-chart-agreg-amz':'Monthly variation of DETER project area',
		'title-chart-by-state':'Areas by States',
		'title-chart-by-class':'Areas by Classes',
		'title-chart-by-year':'Areas by Years',
		'txt16':'Filters by States, Classes and Years.',
		'txt18':'Clean this filter.',
		'txt19':'Clean this filter.',
		'txt20':'Clean this filter.',
		'txt21':'Clean this filter.',
		'txt22a':'Complementar informations',
		'txt22b':'The <strong>Selective cut</strong> class refers to the sum of the classes Geometric Selective cut and Disordered Selective cut for the reference year 2015/2016, when these classes were not yet discretized.',
		'txt22c':'Complete informations about the DETER project.',
		'txt22d':'Close',
		'header-panel-amz':'| DETER (Notice)',
		'header-menu-amz':'DETER (Notice)',
		'maps-sup':'Maps',
		'analysis-sup':'Graphs',
		'analysis-des':'Deforestation',
		'analysis-war':'DETER (Notices)',
		'map-des':'Deforestation',
		'map-war':'DETER (Notices)',
		'map-veg':'Vegetation',
		'analysis-fire':'Active fires',
		'goto_video_sup':'Watch the introductory video to see how an user interact with dashboard tools.',
		'help-sup':'Help',

		'deforestation': 'Deforestation notices',
		'degradation': 'Degradation notices',
		'degrad_defor': 'Deforestation and degradation notices',
		'num_alerts': 'Number of Notices',
		'txt23':'Notices of deforestation',
		'txt24':'Notices of degradation',
		'txt25':'All notice classes',
		'updated':'Updated until:',

		'txt26':'Download data.',
		'txt26a':'Download data table with deforestation notices in CSV format.',
		'txt26b':'Download the complete file with deforestation notices in Shapefile format.',
		'txt27':'With filters.',
		'txt28':'Without filters.',
		'txt29':'Close',

		/* titles for HTML entities */
		'aggregate_daily':'Exchange by the analysis panel to daily data.',
		'prepare_print':'Print this page using the browser resources.',
		'change_style':'Exchange the presentation style dark/clear.',
		'print_page':'Print this page using the browser resources.',
		'display_warning':'More informations about the classes.',
		
		'deforestation-bt-title':'See the data of notices for deforestation.',
		'deforestation-classes':'Total areas of notices for deforestation.',
		'degradation-bt-title':'See the data of notices for degradation.',
		'degradation-classes':'Total areas of notices for degradation.',
		'custom-bt-title':'See all data of notices for deforestation and degradation.',
		'custom-classes':'Total areas of notices for deforestation and degradation.',
		'numpolygons':'Number of notices.',

		/* Texts inside javascript. */
		'months_of_prodes_year':['Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'],
		'months_of_civil_year':['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
		'footer1':'Generated by the INPE/OBT/DPI/TerraBrasilis in',
		'footer2':'under license <a target="blank_" href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>',
		'failure_load_data':'Failure in data loading.',
		'alerts_y_label':'Notices area (km²)',
		'clouds_y_label':'Cloud coverage (%)',
		'txt-cloud':'Show/hide cloud',
		'txt-defor':'Show/hide deforestation',
		'overview_x_label':'Temporal selection',
		'area': 'Aggregated Area',
		'percentage': 'Cloud coverage percent',
		'unit': 'km²',
		'warning_class_prodes':'Class valid only for reference year 2015/2016',
		'warning_class':'Class valid only for year 2015',
		'barArea_x_label_prodes':'Reference year (August - July)',
		'barArea_x_label':'Year (January - December)',
		'tools': 'Tools',
		'help' : 'Help',
		'video': 'Introductory Video',
		'about': 'About',
		'contactus': 'Contact us',
		'nv-chart-day':'Graphs - Daily Notices',
		'nv-daily-amz':'Legal Amazon',
		'nv-aggreg-amz':'Legal Amazon',
		'nv-chart-agg':'Graphs - Monthly Aggregate',
		'nv-daily-cer-nb':'Cerrado Biome',
		'nv-aggreg-cer-nb':'Cerrado Biome',
		'nv-home':'Home TerraBrasilis',
		'nv-sites':'Related pages',
		'nv-map':'Notices Map',
		'toMap': 'Open the notices map.',
		'toHome': 'Open the start page with informations about the detection deforestation project - DETER.',
		'tt-contactus': 'Send suggestions or questions to:',
		'tt-contactus-menu': 'Send us an e-mail with suggestions or questions about the project (terrabrasilis@inpe.br)',
		'about-menu':'About',
		'contactus-menu':'Contact',
		'toDailyChart-amz':'Open the panel daily notices for Legal Amazon.',
		'toAggregatedChart-amz':'Open the panel aggregate monthly notices for Legal Amazon.',
		'toDailyChart-cer-nb':'Open the panel daily notices for Cerrado Biome.',
		'toAggregatedChart-cer-nb':'Open the panel aggregate monthly notice for Cerrado Biome.',
		'tituloprint-amz': ' | Monthly variation of DETER project area - reference year (August to July)',
		'about-modal':'About ',
		'description-modal':'TerraBrasilis is a platform developed by INPE for the organization, access and use through a web portal of the geographic data produced by its environmental monitoring programs.',
		'option-modal':'Do not show again.',
		'option-modal-cloud':'Do not show again.'
	}
};