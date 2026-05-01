# TanStack Query Study ⚡

Este módulo representa meus estudos sobre gerenciamento de estado assíncrono e comunicação com APIs externas utilizando a biblioteca **TanStack Query** (anteriormente React Query).

## 🎯 Objetivos de Estudo

O foco aqui é sair do gerenciamento manual de estados de "loading", "error" e "data" (com `useEffect` e `useState`) para uma abordagem declarativa e performática.

### Conceitos Abordados:

- **Queries (`useQuery`)**: Busca de dados de APIs externas (Rick and Morty API e JSONPlaceholder).
- **Query Invalidation**: Como forçar a atualização de dados específicos através de chaves de query.
- **Separation of Concerns**: Organização de chamadas de API, definições de tipos (models) e custom hooks de query em pastas separadas.
- **Global QueryClient**: Configuração e uso do `QueryClientProvider`.
- **Conditional Fetching**: Execução de queries baseadas em interações do usuário (ex: buscar personagem apenas ao clicar no botão).

## 🛠️ Estrutura

- `api/`: Funções puras de fetch e definições de queries/mutations.
- `components/`: Componentes que consomem os dados das queries.
- `models/`: Interfaces e tipos TypeScript que representam os dados da API.
- `utils/`: Configurações globais como o `SuperProvider`.
