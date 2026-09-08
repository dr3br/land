# Euville Residencial - Widgets para Elementor

Este pacote contém 4 widgets JSON prontos para importar no Elementor, separados do arquivo original `elementor-euville-completo-standalone.json`.

## 📦 Arquivos Incluídos

### 1. **widget-andamento-obra.json** (718 KB)
Contém a seção "Andamento da Obra" com:
- Imagem de fundo com progresso
- Barra de progresso
- Informações sobre as fases da construção

### 2. **widget-diferenciais.json** (7.7 KB)
Contém a seção "Diferenciais" com:
- SVG interativo em formato circular
- Diferenciais do empreendimento
- Efeitos de hover/toque

### 3. **widget-galeria-espacos.json** (361 KB)
Contém a seção "Galeria de Espaços" com:
- Grid de imagens dos espaços
- Layout responsivo
- Legendas das imagens

### 4. **widget-css-javascript.json** (107 KB) ⚠️ **IMPORTANTE**
Contém todos os estilos CSS e scripts JavaScript necessários para o funcionamento dos outros widgets.

---

## 🚀 Como Instalar no Elementor

### Passo 1: Importar o CSS e JavaScript primeiro
1. No WordPress, vá para **Elementor → Templates**
2. Clique em **Adicionar Novo**
3. Escolha o tipo **Widget**
4. Dê o nome "CSS e JavaScript Base"
5. Após criar, clique com botão direito no widget e escolha **Importar Template**
6. Selecione o arquivo `widget-css-javascript.json`
7. **Importante:** Copie o conteúdo HTML deste widget

### Passo 2: Adicionar CSS Global (Recomendado)
Para garantir que todos os estilos funcionem corretamente:

1. Vá para **Elementor → Configurações → Custom CSS**
2. OU adicione em **Aparência → Personalizar → CSS Adicional**
3. Cole o código CSS do widget `widget-css-javascript.json`

### Passo 3: Importar os Widgets de Conteúdo

Repita o processo para cada um dos 3 widgets:

#### Widget 1: Andamento da Obra
1. **Elementor → Templates → Adicionar Novo → Widget**
2. Nome: "Andamento da Obra"
3. Importe o arquivo `widget-andamento-obra.json`
4. Arraste para sua página

#### Widget 2: Diferenciais
1. **Elementor → Templates → Adicionar Novo → Widget**
2. Nome: "Diferenciais"
3. Importe o arquivo `widget-diferenciais.json`
4. Arraste para sua página

#### Widget 3: Galeria de Espaços
1. **Elementor → Templates → Adicionar Novo → Widget**
2. Nome: "Galeria de Espaços"
3. Importe o arquivo `widget-galeria-espacos.json`
4. Arraste para sua página

---

## 📋 Ordem Recomendada na Página

Para reconstruir a landing page completa, organize os widgets nesta ordem:

1. **CSS e JavaScript** (para carregar estilos primeiro)
2. Hero (seção principal - está no arquivo original completo)
3. **Andamento da Obra**
4. Plantas (se houver)
5. **Diferenciais**
6. **Galeria de Espaços**
7. Localização (se houver)
8. Footer (se houver)

---

## ⚠️ Notas Importantes

### 1. CSS e JavaScript são essenciais
Os widgets de conteúdo (`andamento`, `diferenciais`, `galeria`) dependem dos estilos e scripts contidos no arquivo `widget-css-javascript.json`. Sem eles, as seções aparecerão sem formatação.

### 2. Duas opções para aplicar o CSS/JS:

**Opção A - Widget HTML (Mais fácil):**
- Importe o widget `widget-css-javascript.json`
- Coloque-o como primeiro elemento na página
- O Elementor executará o CSS e JS automaticamente

**Opção B - CSS Global (Mais limpo):**
- Extraia apenas o conteúdo entre `<style>` e `</style>`
- Adicione em **Personalizar → CSS Adicional**
- Extraia o conteúdo entre `<script>` e `</script>`
- Adicione em um widget HTML no rodapé da página

### 3. Imagens em Base64
As imagens estão codificadas em Base64 dentro do HTML. Isso aumenta o tamanho dos arquivos mas garante que não há dependências externas.

### 4. Responsividade
Os widgets são totalmente responsivos. Teste em diferentes dispositivos após a importação.

---

## 🔧 Solução de Problemas

### Widgets aparecem sem formatação?
- Verifique se o CSS foi carregado (widget `css-javascript` ou CSS global)
- Limpe o cache do navegador e do WordPress

### JavaScript não funciona?
- Verifique se há conflitos com outros plugins
- Certifique-se de que o script foi carregado após o DOM

### Erro na importação?
- Verifique se o arquivo JSON não foi corrompido
- Tente importar novamente
- Verifique a versão do Elementor (recomendado 3.0+)

---

## 📞 Suporte

Se encontrar problemas na instalação:
1. Verifique se todos os 4 arquivos foram importados
2. Confirme que o CSS/JS está carregando
3. Teste em uma página em branco primeiro

---

**Criado a partir de:** `elementor-euville-completo-standalone.json`  
**Data da divisão:** $(date +%d/%m/%Y)  
**Total de widgets:** 4 (3 de conteúdo + 1 de estilos/scripts)
