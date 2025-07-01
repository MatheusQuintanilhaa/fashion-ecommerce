# 🛍️ Fashion E-commerce

Um e-commerce moderno e responsivo desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Projeto criado para demonstrar habilidades avançadas em desenvolvimento front-end e experiência do usuário.

![Fashion E-commerce](https://via.placeholder.com/1200x600/6366f1/ffffff?text=Fashion+E-commerce+by+Matheus)

## ✨ Funcionalidades

### 🛒 **Core E-commerce**
- ✅ Catálogo de produtos com filtros avançados
- ✅ Carrinho de compras com persistência
- ✅ Sistema de favoritos/wishlist
- ✅ Busca em tempo real com dropdown
- ✅ Páginas de produto detalhadas

### 🎨 **Design & UX**
- ✅ Design responsivo e moderno
- ✅ Animações suaves e micro-interações
- ✅ Loading skeletons e estados de carregamento
- ✅ Toast notifications elegantes
- ✅ Tema consistente com gradientes

### 👤 **Experiência do Usuário**
- ✅ Perfil do usuário com dashboard
- ✅ Histórico de pedidos simulado
- ✅ Sistema de navegação intuitivo
- ✅ Breadcrumbs para orientação
- ✅ Error boundaries para tratamento de erros

### 📱 **Responsividade**
- ✅ Mobile-first design
- ✅ Navegação mobile otimizada
- ✅ Layouts adaptativos
- ✅ Touch-friendly interactions

### 📄 **Páginas Institucionais**
- ✅ Sobre nós com história da empresa
- ✅ Contato com formulário
- ✅ Central de ajuda/FAQ
- ✅ Política de privacidade (LGPD)
- ✅ Termos de uso
- ✅ Guia de tamanhos
- ✅ Informações de entrega e trocas

## 🚀 Tecnologias Utilizadas

### **Frontend**
- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática para maior robustez
- **Tailwind CSS** - Estilização utilitária e responsiva
- **shadcn/ui** - Componentes UI modernos e acessíveis

### **Estado e Dados**
- **React Context API** - Gerenciamento de estado global
- **useReducer** - Estado complexo do carrinho
- **localStorage** - Persistência de dados no cliente

### **UX/UI**
- **Lucide React** - Ícones consistentes e modernos
- **Sonner** - Toast notifications elegantes
- **CSS Animations** - Transições suaves via Tailwind

### **Desenvolvimento**
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Git** - Controle de versão com commits semânticos

## 📦 Instalação e Execução

### **Pré-requisitos**
- Node.js 18+ 
- npm ou yarn
- Git

### **Passos**

1. **Clone o repositório**
\`\`\`bash
git clone https://github.com/MatheusQuintanilhaa/fashion-ecommerce.git
cd fashion-ecommerce
\`\`\`

2. **Instale as dependências**
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. **Execute o projeto**
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. **Acesse no navegador**
\`\`\`
http://localhost:3000
\`\`\`

## 🏗️ Estrutura do Projeto

\`\`\`
fashion-ecommerce/
├── app/                    # App Router (Next.js 14)
│   ├── (pages)/           # Páginas da aplicação
│   ├── globals.css        # Estilos globais
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── ui/               # Componentes shadcn/ui
│   └── ...               # Componentes customizados
├── hooks/                # Custom hooks React
├── lib/                  # Utilitários e dados
├── scripts/              # Scripts de automação
└── public/              # Arquivos estáticos
\`\`\`

## 🎯 Funcionalidades Detalhadas

### **🛒 Sistema de Carrinho**
- Adicionar/remover produtos com validação
- Atualizar quantidades dinamicamente
- Persistência no localStorage
- Cálculo automático de totais
- Validação de tamanhos obrigatória

### **💖 Sistema de Favoritos**
- Adicionar/remover favoritos com animações
- Página dedicada de wishlist
- Contador em tempo real no header
- Persistência de dados entre sessões
- Ação "adicionar tudo ao carrinho"

### **🔍 Busca Avançada**
- Busca em tempo real com debounce
- Dropdown com resultados visuais
- Filtros por categoria, tamanho e preço
- Ordenação por nome e preço
- URL persistente com parâmetros de busca

### **📱 Responsividade**
- Breakpoints: mobile (320px+), tablet (768px+), desktop (1024px+)
- Menu mobile com drawer animado
- Grids adaptativos com CSS Grid
- Imagens responsivas com Next.js Image
- Touch gestures otimizados

## 🎨 Design System

### **Cores Principais**
- **Primary**: Purple (#8B5CF6)
- **Secondary**: Pink (#EC4899)
- **Accent**: Gradientes purple-to-pink
- **Neutral**: Grays (#F9FAFB to #111827)
- **Success**: Green (#10B981)
- **Error**: Red (#EF4444)

### **Tipografia**
- **Font**: Inter (Google Fonts)
- **Sizes**: text-sm (14px) a text-5xl (48px)
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

### **Componentes**
- Cards com shadow e hover effects
- Botões com estados e loading spinners
- Inputs com validação visual
- Badges para status e contadores
- Modals e drawers para mobile

## 📊 Performance & SEO

### **Otimizações Implementadas**
- ✅ Lazy loading de imagens com Next.js Image
- ✅ Code splitting automático
- ✅ Componentes otimizados com React.memo
- ✅ Bundle size otimizado
- ✅ Meta tags completas para SEO
- ✅ Structured data para produtos
- ✅ Sitemap automático

### **Métricas Esperadas (Lighthouse)**
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

## 🚀 Deploy

### **Vercel (Recomendado)**
\`\`\`bash
# Deploy automático via GitHub
# Conecte seu repositório no Vercel Dashboard

# Ou via CLI
npm i -g vercel
vercel
\`\`\`

### **Netlify**
\`\`\`bash
# Build do projeto
npm run build

# Deploy da pasta out/
netlify deploy --prod --dir=out
\`\`\`

### **Variáveis de Ambiente**
\`\`\`env
# .env.local (se necessário)
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
\`\`\`

## 🧪 Testes

### **Executar Testes**
\`\`\`bash
# Testes unitários (quando implementados)
npm run test

# Testes E2E (quando implementados)
npm run test:e2e
\`\`\`

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (\`git checkout -b feature/nova-funcionalidade\`)
3. Commit suas mudanças (\`git commit -m 'feat: adiciona nova funcionalidade'\`)
4. Push para a branch (\`git push origin feature/nova-funcionalidade\`)
5. Abra um Pull Request

### **Padrões de Commit**
- \`feat:\` Nova funcionalidade
- \`fix:\` Correção de bug
- \`docs:\` Documentação
- \`style:\` Formatação
- \`refactor:\` Refatoração
- \`test:\` Testes

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Matheus Santos Quintanilha**
- 🌐 GitHub: [@MatheusQuintanilhaa](https://github.com/MatheusQuintanilhaa)
- 💼 LinkedIn: [Matheus Quintanilha](https://linkedin.com/in/matheus-quintanilha)
- 📧 Email: matheussantos.quintanilha@gmail.com
- 🎯 Desenvolvedor Front-End em busca de oportunidades

## 🎯 Sobre o Projeto

Este projeto foi desenvolvido como parte do meu portfólio para demonstrar habilidades em:

- ⚛️ **React/Next.js** - Desenvolvimento de SPAs modernas
- 🎨 **UI/UX Design** - Interfaces intuitivas e responsivas  
- 📱 **Mobile-First** - Experiência otimizada para todos os dispositivos
- 🔧 **TypeScript** - Código tipado e mais robusto
- 🚀 **Performance** - Otimizações avançadas de carregamento
- 🎯 **SEO** - Estrutura otimizada para mecanismos de busca

## 🙏 Agradecimentos

- [Next.js](https://nextjs.org/) - Framework React incrível
- [Tailwind CSS](https://tailwindcss.com/) - CSS utilitário poderoso
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI elegantes
- [Lucide](https://lucide.dev/) - Ícones consistentes
- [Vercel](https://vercel.com/) - Hospedagem e deploy

---

⭐ **Se este projeto te inspirou ou ajudou, deixe uma estrela!**

💼 **Interessado em me contratar? Entre em contato!**
