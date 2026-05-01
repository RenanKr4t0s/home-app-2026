# Dark-Light Mode Study 🌓

Este módulo foca no estudo de gerenciamento de tema (claro/escuro) dentro de uma aplicação React, utilizando as ferramentas nativas da biblioteca para controle de estado global.

## 🎯 Objetivos de Estudo

O principal objetivo aqui foi entender como propagar alterações de estilo por toda a árvore de componentes sem recorrer ao *prop drilling*.

### Conceitos Abordados:

- **Context API (`useContext`)**: Utilizado para criar um contexto de tema que pode ser acessado por qualquer componente na hierarquia.
- **`useReducer`**: Aplicado para gerenciar a lógica de transição entre os estados `dark` e `light`, centralizando a lógica de mudança em um único lugar.
- **Provider Pattern**: Implementação de um `DarkLightProvider` que encapsula a lógica e fornece o estado para a aplicação.

## 🛠️ Estrutura

- `context/`: Contém a definição do contexto e o componente Provider.
- `reducer/`: Contém a lógica de transição de estado e as definições de ações.
- `dl-header.tsx` e `dl-body.tsx`: Componentes que consomem o contexto para alterar sua aparência visual dinamicamente.
