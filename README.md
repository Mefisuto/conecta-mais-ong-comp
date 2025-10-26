
# Conecta+ ONG – Plataforma (Entregas II, III e IV)

Este repositório contém o projeto base da Atividade 1 **atualizado** para contemplar os requisitos das Entregas **II (Estilização e Leiautes)** e **IV (Versionamento, Acessibilidade e Deploy)**.

> Atualizado em 2025-10-26. Alterações mínimas e _aditivas_ sobre o código original.

## Como executar
Abra o arquivo `index.html` no navegador. Não há backend – os formulários simulam envio com validação e feedback por *toast*.

## O que foi adicionado

### Design System (CSS3)
- Variáveis CSS para **8+ cores**, tipografia (5+ tamanhos) e **espaçamento modular (8px,16,24,32,48,64)**.
- **Grid 12 colunas** + **5 breakpoints**: 1280, 1024, 768, 480 e 360px.
- Componentes: **cards**, **botões** (hover/focus/active/disabled), **badges**, **alerts**, **toasts**, **modal**, **forms** estilizados.
- Arquivos: `css/design-system.css` e minificado `css/design-system.min.css`.

### Navegação e Interação
- **Menu responsivo** com **hambúrguer** e **submenu (dropdown)** com suporte a teclado.
- **Tema claro/escuro** e **Alto Contraste (shield)** — conformidade com contraste WCAG 2.1 AA.
- **Região aria-live** para feedback e **skip link** para navegação por teclado.

### Acessibilidade (WCAG 2.1 AA)
- Estrutura semântica preservada, inclusão de *landmarks* e `aria-`atributos.
- Navegação por teclado (foco visível em links e controles).
- Contraste ≥ 4.5:1 no modo **shield**.
- Texto de links e botões claros; labels e ajuda de formulário.

### Otimização para Produção
- **Minificação** de CSS/JS (`design-system.min.css`, `app.min.js`).
- **Lazy loading** para imagens com `data-src`.
- Metatags de SEO e **JSON-LD** de organização.

### JavaScript
- Arquivos: `js/app.js` e minificado `js/app.min.js`.
- Simulação de envio de formulários (sem backend) com mensagens de sucesso/erro.

## Como cumprir a Entrega IV (Git/GitHub)

### Fluxo GitFlow resumido
```bash
git init
git add .
git commit -m "chore: inicia repositório com base da Atividade 1"

git switch -c develop
git switch -c feature/design-system
# edita css/design-system.css ...
git add css/ js/
git commit -m "feat(ui): adiciona design system com grid 12 e componentes base"
git switch develop
git merge feature/design-system --no-ff -m "merge: DS na develop"

git switch -c feature/a11y-navigation
# edita HTML para skip link, aria-live, toolbar de tema
git commit -m "feat(a11y): navegação por teclado, skip link e toolbar de tema"
git switch develop && git merge feature/a11y-navigation --no-ff

git switch -c release/1.0.0
git commit -m "docs: prepara README e notas de versão 1.0.0"
git tag v1.0.0
git switch main
git merge release/1.0.0 --no-ff -m "release: v1.0.0"
git push -u origin main --tags
```

### Padrão de mensagens de commit (semântico)
- `feat:` nova funcionalidade
- `fix:` correção
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `perf:` performance
- `chore:` tarefas diversas

Exemplos reais incluídos em `docs/COMMIT_GUIDE.md`.

### Pull Requests, Issues e Milestones
- Crie **Issues** por requisito (ex.: “Responsividade das páginas de Projetos”).
- Use **Milestones** para cada Entrega (II e IV).
- Abra **PRs** dos *features* para a *develop* com descrição do que muda e como testar.

## Deploy (GitHub Pages)
1. Suba o repositório para o GitHub.
2. Em **Settings > Pages**, selecione a branch `main` e a pasta `/root`.
3. A URL pública será gerada pelo GitHub Pages.

Passo a passo detalhado em `docs/DEPLOY.md`.

## Como testar os requisitos

- **Menu responsivo**: reduza a tela para <768px e clique no botão hambúrguer.
- **Submenu**: passe o mouse (ou pressione Enter no item) para abrir.
- **Tema**: clique em “Claro”, “Escuro” e marque “Alto contraste”.
- **Formulários**: tente submeter com campos vazios (validação) e depois corretos (toast de sucesso).
- **Modal**: se houver o botão “Abrir modal”, o componente será exibido (exemplo incluído no HTML).

## Notas
- Alterações **mínimas** foram feitas no HTML original – os novos recursos são **aditivos**.
- Se desejar remover os consoles e comentários, utilize as versões minificadas.

## Teste rápido de acessibilidade

- Use a tecla **Tab** para navegar entre links e botões  
- Pressione **Enter** para abrir o menu hambúrguer  
- Verifique o foco visível e o contraste no modo alto contraste  

## Teste adicional de acessibilidade
- Verificar navegação por Tab
- Conferir contraste no modo alto contraste
