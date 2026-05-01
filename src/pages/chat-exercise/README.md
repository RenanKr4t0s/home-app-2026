# Chat Exercise 💬

Uma aplicação prática para exercitar o fluxo de dados unidirecional e o gerenciamento de estados complexos através de Reducers.

## 🎯 Objetivos de Estudo

Neste exercício, o foco foi a construção de uma lógica de interface que depende fortemente do estado atual do usuário (logado/deslogado) e do histórico de mensagens.

### Conceitos Abordados:

- **State Reducers**: Implementação de uma máquina de estados simples para gerenciar ações como enviar mensagens, trocar de usuário e limpar o chat.
- **Complex Context**: Uso do Context API para disponibilizar não apenas o estado, mas também as funções de `dispatch`, permitindo que componentes profundos disparem ações de forma limpa.
- **Tipagem de Actions**: Uso rigoroso de TypeScript para definir os tipos de ações e garantir que o Reducer seja à prova de erros.

## 🛠️ Estrutura

- `chat-context.tsx`: Centraliza o estado do chat e do usuário.
- `chat-reducer.ts`: Define como o estado evolui a cada ação disparada.
- `components/`: Componentes modulares que reagem às mudanças de estado e permitem a interação do usuário.
