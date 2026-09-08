# Reestruturação da Home e das páginas internas de projetos

## Objetivo
Atualizar exclusivamente a página inicial e o modelo compartilhado pelas três páginas internas de projetos, preservando rotas, navegação global e todas as demais páginas.

## Páginas internas dos projetos
- Remover por completo os indicadores numéricos e o espaço associado.
- Manter o hero e a introdução, reduzindo a fotografia interna para uma proporção mais equilibrada com o texto.
- Preservar a escala dos três blocos de público, substituindo os adornos atuais por referências discretas a distintivo, rota e orientação.
- Transformar “Aprender fazendo...” em um percurso escoteiro: linha sinuosa e quatro paradas no desktop; linha vertical com conteúdo lateral no mobile.
- Refazer Objetivos como blocos compactos sem faixa lateral, com ícone e pequeno detalhe de cor.
- Refazer Saberes em cartões editoriais compactos de três, duas e uma coluna, com ícones pequenos e uma única forma discreta por item.
- Reconstruir Etapas com duas grades perfeitamente alinhadas no desktop — círculos/conectores e textos — e timeline vertical no mobile.
- Manter conteúdo específico, galeria e CTA existentes, com alternância de fundos claros e sem áreas dominadas por bege.

## Página inicial
- Criar um hero em carrossel com três slides, textos e destinos informados, controles pequenos, pausa por interação/hover/aba inativa e respeito a movimento reduzido.
- Aplicar ao carrossel o padrão visual dos heróis internos: imagem ampla, overlay, conteúdo à esquerda, formas discretas e curva inferior.
- Reduzir a imagem da apresentação e adicionar dois detalhes gráficos suaves.
- Refazer as seis frentes como uma rede visual de seis blocos leves, conectados por linhas discretas.
- Refazer os três projetos em cartões compactos próprios para a Home, com imagens 16:10 e detalhes gráficos específicos.
- Inserir o bloco compacto de Transparência entre Projetos e Notícias.
- Refazer Notícias com cabeçalho centralizado, três cartões compactos e botão único abaixo.
- Substituir o CTA final por um bloco compacto sem imagem no padrão institucional aprovado.
- Remover integralmente as seções de artesanato, indicadores e galeria/memórias da Home.

## Detalhes técnicos
- Concentrar a lógica do carrossel na rota da Home, com estado React, temporizador de 8 segundos, eventos de foco/visibilidade e `matchMedia` para movimento reduzido.
- Usar apenas tokens e classes semânticas já disponíveis; novos detalhes visuais serão compostos com esses tokens.
- Preservar semântica de títulos, textos alternativos, foco visível, controles com rótulos acessíveis e navegação por teclado.
- Validar as quatro URLs em desktop e mobile, incluindo overflow, troca/pausa do carrossel e ausência dos blocos removidos.
