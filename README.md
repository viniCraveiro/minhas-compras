# Minhas Compras - Monorepo

Este é um monorepo profissional gerenciado com **Turborepo** para o aplicativo **Minhas Compras**, projetado para gerenciar preços e produtos com suporte offline e sincronização em nuvem.

## 🚀 Estrutura do Projeto

O monorepo está organizado da seguinte forma:

| Diretório | Descrição | Tecnologias Principais |
| :--- | :--- | :--- |
| `apps/mobile` | Aplicativo móvel nativo | Expo, React Native, SQLite, Drizzle |
| `apps/web` | Frontend Web e API de Sincronização | Next.js, Tailwind CSS, PostgreSQL |
| `packages/db` | Pacote de banco de dados compartilhado | Drizzle ORM, Schemas Multi-Dialect |
| `packages/ui` | Biblioteca de componentes (opcional) | React, Tailwind |

## 🛠 Arquitetura de Dados

O projeto utiliza uma estratégia de banco de dados híbrida:
- **Mobile**: Utiliza **SQLite** (via `expo-sqlite`) para persistência local rápida e funcionamento 100% offline.
- **Web/Backend**: Utiliza **PostgreSQL** para armazenamento centralizado e persistência de longo prazo.
- **ORM**: O **Drizzle ORM** é usado em ambos, garantindo tipagem estrita em todo o monorepo.

## 📱 Funcionalidades Implementadas

- [x] **Navegação em Stack**: Estrutura de rotas configurada no mobile.
- [x] **Cadastro de Produtos**: Nome, preço e código de barras.
- [x] **Listagem Offline**: Visualização de produtos salvos localmente.
- [x] **API de Sincronização**: Endpoint pronto no Next.js para futuras integrações.

## 💡 Ideias de Evolução

Para levar o **Minhas Compras** ao próximo nível, considere:

> 1. **Comparativo entre Mercados**: Histórico de onde cada produto foi comprado mais barato.
> 2. **Leitura de Código de Barras**: Integração total com a câmera para busca instantânea.
> 3. **Gráficos de Tendência**: Visualização da inflação pessoal de itens específicos.
> 4. **Lista Compartilhada**: Sincronização em tempo real entre dispositivos da mesma conta.

## 🏃 Como Iniciar

1. Instale as dependências na raiz:
   ```bash
   pnpm install
   ```

2. Para rodar o mobile:
   ```bash
   cd apps/mobile
   npx expo start
   ```

3. Para rodar o web:
   ```bash
   cd apps/web
   pnpm dev
   ```
