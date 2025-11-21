# 🛒 Minhas Compras — App Mobile & Web

![Expo](https://img.shields.io/badge/Expo-54.0-blue?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.81-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Firebase](https://img.shields.io/badge/Firebase-Firestore-orange?logo=firebase)
![Platform](https://img.shields.io/badge/Platforms-Mobile%20%7C%20Web-success)
![License](https://img.shields.io/badge/License-MIT-green)

O **Minhas Compras** é um aplicativo multiplataforma (Mobile + Web) criado para gerenciar preços, produtos e acompanhar a variação de valores ao longo do tempo.  
Funciona **offline**, sincroniza automaticamente e pode ser usado no **Android, iOS e navegador Web** (via Expo Web).

---

## 🚀 Tecnologias Utilizadas

### Frontend

- **Expo SDK 54**
- **React Native 0.81**
- **React Navigation (Native Stack)**
- **React Native Web**
- **TypeScript**
- **Tailwind (twrnc)**
- **React Native Chart Kit**

### Backend / Armazenamento

- **Firebase Firestore**
- **Firestore Offline Cache**
- **SQLite (expo-sqlite)**

---

## 🧩 Recursos do App

- Cadastro de produtos, categorias e preços
- Registro automático de histórico de preços
- Listagem simples e rápida
- Dashboard com gráficos de evolução
- Funciona offline (SQLite + Firestore cache)
- Sincronização automática ao voltar a internet
- Disponível tanto no navegador quanto no celular

---

## 📊 Funcionalidades

### ✔ Cadastro de Produtos

- Nome
- Categoria
- Preço
- Imagem (opcional)

### ✔ Histórico de Preço

Armazena automaticamente toda mudança de preço.

### ✔ Dashboard

Comparações:

- Diário
- Semanal
- Mensal
- 3 meses
- 6 meses
- Anual

### ✔ Offline-first

- Acesso completo offline
- Dados sincronizados quando retorna a conexão

---

## ▶ Como Executar

### Instalar dependências

```bash
npm install
```

### Rodar Mobile

```bash
npx expo start --android
npx expo start --ios
```

### Rodar Web

```bash
npx expo start --web
```

https://developer.android.com/studio?hl=pt-br
