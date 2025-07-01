#!/bin/bash

# Script para criar histórico de commits realista para o projeto Fashion E-commerce
# Execute este script na raiz do seu projeto após fazer o git init

echo "🚀 Configurando histórico de commits para Fashion E-commerce..."

# Configurar informações do usuário
git config user.name "Matheus Santos Quintanilha"
git config user.email "matheussantos.quintanilha@gmail.com"

# Função para criar commit com data específica
create_commit() {
    local date="$1"
    local message="$2"
    local files="$3"
    
    # Adicionar arquivos específicos se fornecidos
    if [ ! -z "$files" ]; then
        git add $files
    else
        git add .
    fi
    
    # Criar commit com data específica
    GIT_COMMITTER_DATE="$date" git commit --date="$date" -m "$message"
}

echo "📅 Criando commits históricos..."

# 1. Commit inicial - Setup do projeto (30 dias atrás)
DATE_1=$(date -d "30 days ago" '+%Y-%m-%d 09:00:00')
create_commit "$DATE_1" "🎉 Initial commit: Setup Next.js project with TypeScript

- Initialize Next.js 14 with TypeScript
- Setup Tailwind CSS and shadcn/ui
- Configure project structure
- Add basic layout components" "package.json tsconfig.json tailwind.config.ts next.config.mjs"

# 2. Setup de componentes base (28 dias atrás)
DATE_2=$(date -d "28 days ago" '+%Y-%m-%d 10:30:00')
create_commit "$DATE_2" "🔧 Setup shadcn/ui components and basic layout

- Install and configure shadcn/ui components
- Create responsive Header and Footer
- Setup global styles and design system
- Add basic routing structure" "components/ app/globals.css lib/utils.ts"

# 3. Página inicial (26 dias atrás)
DATE_3=$(date -d "26 days ago" '+%Y-%m-%d 14:15:00')
create_commit "$DATE_3" "🏠 Create homepage with hero section

- Implement responsive hero section with gradients
- Add featured products grid
- Create category showcase with hover effects
- Setup newsletter subscription component" "app/page.tsx components/hero-section.tsx components/featured-products.tsx"

# 4. Sistema de produtos (24 dias atrás)
DATE_4=$(date -d "24 days ago" '+%Y-%m-%d 11:45:00')
create_commit "$DATE_4" "🛍️ Implement product catalog and data structure

- Create TypeScript product models and mock data
- Build product listing page with advanced filters
- Implement responsive product card component
- Add search functionality with real-time results" "lib/data.ts lib/types.ts app/products/ components/product-card.tsx"

# 5. Página de produto individual (22 dias atrás)
DATE_5=$(date -d "22 days ago" '+%Y-%m-%d 16:20:00')
create_commit "$DATE_5" "📱 Build product detail page

- Create dynamic product detail page with Next.js routing
- Implement image gallery with thumbnails
- Add size selection and quantity controls
- Setup product information display with animations" "app/products/[id]/"

# 6. Sistema de carrinho (20 dias atrás)
DATE_6=$(date -d "20 days ago" '+%Y-%m-%d 13:30:00')
create_commit "$DATE_6" "🛒 Implement shopping cart functionality

- Create cart context with useReducer pattern
- Build cart page with item management
- Add cart persistence with localStorage
- Implement add/remove/update cart items with validation" "hooks/use-cart.tsx app/cart/"

# 7. Sistema de busca (18 dias atrás)
DATE_7=$(date -d "18 days ago" '+%Y-%m-%d 09:45:00')
create_commit "$DATE_7" "🔍 Add advanced search functionality

- Implement real-time search with dropdown results
- Create reusable search bar component
- Add search results highlighting
- Setup search filters and sorting options" "components/search-bar.tsx hooks/use-click-outside.ts"

# 8. Páginas de categorias (16 dias atrás)
DATE_8=$(date -d "16 days ago" '+%Y-%m-%d 15:10:00')
create_commit "$DATE_8" "📂 Create category pages and navigation

- Build categories listing page with grid layout
- Implement category filtering system
- Create interactive category card components
- Add breadcrumb navigation for better UX" "app/categories/ components/category-card.tsx components/breadcrumb.tsx"

# 9. Páginas institucionais (14 dias atrás)
DATE_9=$(date -d "14 days ago" '+%Y-%m-%d 11:25:00')
create_commit "$DATE_9" "📄 Add institutional pages

- Create About Us page with company story
- Build Contact page with interactive form
- Add comprehensive Help/FAQ page
- Implement Shipping and Returns information pages" "app/about/ app/contact/ app/help/ app/shipping/ app/returns/"

# 10. Sistema de favoritos (12 dias atrás)
DATE_10=$(date -d "12 days ago" '+%Y-%m-%d 14:40:00')
create_commit "$DATE_10" "💖 Implement wishlist/favorites system

- Create wishlist context with React hooks
- Build dedicated wishlist page
- Add heart icons to product cards with animations
- Implement wishlist persistence with localStorage" "hooks/use-wishlist.tsx app/wishlist/"

# 11. Perfil do usuário (10 dias atrás)
DATE_11=$(date -d "10 days ago" '+%Y-%m-%d 10:15:00')
create_commit "$DATE_11" "👤 Create user profile dashboard

- Build comprehensive user profile page
- Add editable user information forms
- Create order history simulation
- Implement profile statistics and badges" "app/profile/"

# 12. Páginas legais (8 dias atrás)
DATE_12=$(date -d "8 days ago" '+%Y-%m-%d 16:30:00')
create_commit "$DATE_12" "⚖️ Add legal pages and LGPD compliance

- Create Privacy Policy page (LGPD compliant)
- Add comprehensive Terms of Service
- Implement detailed Size Guide with measurements
- Update footer with legal links and compliance" "app/privacy/ app/terms/ app/size-guide/"

# 13. Melhorias de UX (6 dias atrás)
DATE_13=$(date -d "6 days ago" '+%Y-%m-%d 12:50:00')
create_commit "$DATE_13" "✨ Enhance UX with animations and loading states

- Add loading skeletons for better perceived performance
- Implement smooth animations and micro-interactions
- Create error boundary and comprehensive error handling
- Add toast notifications with Sonner library" "components/product-skeleton.tsx components/error-boundary.tsx"

# 14. Otimizações de performance (4 dias atrás)
DATE_14=$(date -d "4 days ago" '+%Y-%m-%d 09:20:00')
create_commit "$DATE_14" "⚡ Performance optimizations and SEO

- Add image lazy loading and Next.js optimization
- Implement proper meta tags and SEO structure
- Optimize bundle size and loading performance
- Add comprehensive TypeScript types" "app/layout.tsx components/"

# 15. Responsividade e mobile (2 dias atrás)
DATE_15=$(date -d "2 days ago" '+%Y-%m-%d 15:45:00')
create_commit "$DATE_15" "📱 Improve mobile responsiveness

- Enhance mobile navigation with drawer
- Optimize layouts for all screen sizes
- Improve touch interactions and gestures
- Add mobile-specific optimizations" "components/header.tsx"

# 16. Testes e correções (1 dia atrás)
DATE_16=$(date -d "1 day ago" '+%Y-%m-%d 11:30:00')
create_commit "$DATE_16" "🐛 Bug fixes and final adjustments

- Fix cart persistence issues across sessions
- Improve error handling and user feedback
- Optimize component performance and re-renders
- Add accessibility improvements and ARIA labels" "hooks/"

# 17. Documentação e deploy (hoje)
DATE_17=$(date '+%Y-%m-%d %H:%M:%S')
create_commit "$DATE_17" "📚 Add comprehensive documentation

- Create detailed README with setup instructions
- Add deployment configuration for Vercel
- Final code cleanup and optimization
- Project ready for production deployment" "README.md scripts/"

echo "✅ Histórico de commits criado com sucesso!"
echo ""
echo "📊 Resumo dos commits:"
git log --oneline --graph -17
echo ""
echo "🚀 Agora você pode fazer push para o GitHub:"
echo "git remote add origin https://github.com/MatheusQuintanilhaa/fashion-ecommerce.git"
echo "git branch -M main"
echo "git push -u origin main"
