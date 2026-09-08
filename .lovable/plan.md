# Ajustes proporcionais e páginas internas de projetos

## Escopo
Alterar somente a página geral de Projetos, Galeria, listagem de Notícias, Contato, notícia interna e as três páginas internas de projetos. Rotas, cabeçalho, rodapé e controles globais permanecem intactos.

## Implementação

1. **Projetos — página geral**
   - Reequilibrar cada bloco para 1120–1160 px, 300–330 px de altura mínima e divisão aproximada 40/60 entre imagem e conteúdo.
   - Redimensionar proporcionalmente imagem, tipografia, tags, botão e espaçamentos internos.
   - Preservar a direção visual e garantir uma composição própria de formas sutis nos três projetos.

2. **Controles de Galeria e Notícias**
   - Fixar o mesmo modelo de caixa em todos os estados dos anos e filtros, sem escala, variação de peso, borda ou dimensões.
   - Manter apenas mudanças de cor e fundo no estado ativo.

3. **Contato e notícia interna**
   - Centralizar o conjunto de contato em uma grade desktop de 360 px + 520 px, com respiro lateral e quebra responsiva para uma coluna.
   - Reduzir a hierarquia dos textos dos três canais.
   - Transformar categoria e data da notícia em metadados compactos, translúcidos e não interativos, incluindo ícone de calendário.

4. **Três páginas internas de projetos**
   - Manter o hero e reorganizar o conteúdo na sequência: introdução, Público, Atividades, conteúdos úteis existentes, Galeria e CTA.
   - Criar conteúdo específico por projeto para introdução, público, atividades e CTA.
   - Reutilizar a galeria/lightbox existente e manter objetivos, etapas e resultados como conteúdo útil, com acabamento visual consistente.
   - Diferenciar sutilmente cada projeto por ícones e formas: trama/corda, percurso/natureza e conexões/comunidade.

## Validação
- Verificar as sete áreas em desktop e mobile.
- Confirmar ausência de overflow horizontal, estabilidade visual dos estados ativo/inativo, funcionamento dos filtros e anos, abertura/fechamento do lightbox e navegação das três páginas de projeto.
- Confirmar ausência de erros no console e preservar as demais páginas sem alterações.
