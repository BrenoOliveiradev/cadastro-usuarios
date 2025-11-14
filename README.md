# Cadastro de Usuários

Projeto desenvolvido para praticar meus primeiros conceitos com **React**, incluindo componentes, hooks, navegação e integração completa com o backend feito em Node.js.

---

## 🎯 Objetivo do Projeto

Criar uma interface funcional para cadastrar e listar usuários, conectando o frontend feito em React com o backend Node.js que realiza o CRUD.

---

## 🧠 Tecnologias e Conceitos Aprendidos

### **React**

* Primeiro contato com a biblioteca.
* Componentização e reutilização de elementos.
* Hooks fundamentais:

  * **useState** para estados internos.
  * **useEffect** para executar ações automáticas.
  * **useRef** para manipular valores sem renderização.

### **Styled-components**

* Estilização de componentes com CSS-in-JS.
* Criação de componentes visuais reutilizáveis.

### **React Router DOM**

* Criar navegação entre páginas.
* Uso do componente **Routes** e **Route**.
* Hook **useNavigate** para navegação por funções.

### **Axios**

* Comunicação com o backend.
* Métodos GET, POST e DELETE.

### **Integração com Backend**

* Comunicação com API Node.js.
* Criação, listagem e remoção de usuários.

---

## 🖥️ Funcionalidades

### **Página de Cadastro**

* Campo para **nome**.
* Campo para **idade**.
* Campo para **email**.
* Botão **Cadastrar** → envia os dados para o servidor.
* Botão **Listar Usuários** → navega para a tela de lista.

### **Página de Lista de Usuários**

* Lista todos os usuários cadastrados.
* Ícone de lixeira em cada usuário.
* Ao clicar no ícone, o usuário é excluído.

---

## 📚 Aprendizado

Foi meu primeiro projeto com React. Aprendi:

* Como dividir a aplicação em componentes reutilizáveis.
* Como conectar React com backend usando Axios.
* Como usar hooks para controlar dados e ciclos de vida.
* Como navegar entre páginas usando React Router DOM.
* Como organizar arquivos e estruturar um projeto React.

---

## 📂 Estrutura do Projeto (Exemplo Simplificado)

* **src/**

  * **components/**

    * Button/
    * Input/
    * Title/
  * **pages/**

    * Home/
    * ListUsers/
  * api.js
  * routes.jsx
  * App.jsx

---

## ▶️ Como Rodar o Projeto

### 🔽 Clonar o repositório

```bash
git clone https://github.com/SEU-USUARIO/cadastro-de-usuarios.git
```

### 📂 Entrar na pasta

```bash
cd cadastro-de-usuarios
```

### 📦 Instalar dependências

```bash
npm install
```

### ▶️ Rodar o projeto

```bash
npm run dev
```

Ou:

```bash
npm start
```

---

## 🔄 Comunicação com o Backend

Configure o arquivo **api.js** apontando para a URL do seu backend:

```js
import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:3000'
});
```

---

## 🖼️ Prints do Projeto

### 📌 Tela de Cadastro (Desktop)

<img src="https://github.com/BrenoOliveiradev/cadastro-usuarios/blob/master/src/assets/Captura%20de%20tela%202025-11-13%20221000.png?raw=true"/>

### 📌 Tela de Lista de Usuários (Desktop)

<img src="https://github.com/BrenoOliveiradev/cadastro-usuarios/blob/master/src/assets/Captura%20de%20tela%202025-11-13%20221017.png?raw=true"/>

### 📌 Tela de Cadastro (Mobile)

<img src="https://github.com/BrenoOliveiradev/cadastro-usuarios/blob/master/src/assets/Captura%20de%20tela%202025-11-13%20221035.png?raw=true"/>

### 📌 Tela de Lista (Mobile)

<img src="https://github.com/BrenoOliveiradev/cadastro-usuarios/blob/master/src/assets/Captura%20de%20tela%202025-11-13%20221050.png?raw=true"/>

---

## 🎯 Resultado Final

Com esse projeto consegui entender na prática como frontend e backend conversam entre si, além de aprender a estrutura real de um projeto React moderno, desde componentes até integração com APIs e navegação entre telas.

