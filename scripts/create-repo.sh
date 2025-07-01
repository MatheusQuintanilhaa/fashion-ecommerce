#!/bin/bash

# Script para criar repositório no GitHub e fazer push com histórico

echo "🚀 Configurando repositório GitHub para Matheus Santos Quintanilha..."

# Definir variáveis
GITHUB_USER="MatheusQuintanilhaa"
REPO_NAME="fashion-ecommerce"

# Verificar se está em um repositório git
if [ ! -d ".git" ]; then
    echo "❌ Erro: Este não é um repositório Git. Execute 'git init' primeiro."
    exit 1
fi

echo "📋 Configurações:"
echo "   👤 Usuário: $GITHUB_USER"
echo "   📦 Repositório: $REPO_NAME"
echo "   🌐 URL: https://github.com/$GITHUB_USER/$REPO_NAME"
echo ""

# Criar repositório no GitHub (requer GitHub CLI)
if command -v gh &> /dev/null; then
    echo "🔧 Criando repositório no GitHub..."
    gh repo create $REPO_NAME --public --description "🛍️ E-commerce moderno e responsivo desenvolvido com Next.js 14, TypeScript e Tailwind CSS. Projeto para demonstrar habilidades em desenvolvimento front-end."
    
    # Adicionar remote
    git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git
    echo "✅ Repositório criado e remote configurado!"
else
    echo "⚠️  GitHub CLI não encontrado. Você pode:"
    echo "   1. Instalar: https://cli.github.com/"
    echo "   2. Ou criar manualmente em: https://github.com/new"
    echo ""
    echo "📋 Configurações para criação manual:"
    echo "   📦 Nome: $REPO_NAME"
    echo "   📝 Descrição: E-commerce moderno desenvolvido com Next.js 14, TypeScript e Tailwind CSS"
    echo "   🌐 Público: Sim"
    echo ""
    echo "📋 Depois execute:"
    echo "   git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git"
    read -p "Pressione Enter quando o repositório estiver criado..."
    
    # Adicionar remote manualmente
    git remote add origin https://github.com/$GITHUB_USER/$REPO_NAME.git
fi

# Verificar se remote foi adicionado
if git remote get-url origin &> /dev/null; then
    echo "📤 Fazendo push do histórico de commits..."
    git branch -M main
    git push -u origin main
    
    echo ""
    echo "✅ Repositório criado e histórico enviado com sucesso!"
    echo "🌐 Acesse: https://github.com/$GITHUB_USER/$REPO_NAME"
    echo "🚀 Deploy automático no Vercel: https://vercel.com/new/git/external?repository-url=https://github.com/$GITHUB_USER/$REPO_NAME"
else
    echo "❌ Erro: Remote não configurado. Verifique se o repositório foi criado corretamente."
fi
