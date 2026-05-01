import { Home } from "./components/home"
import { HelloArcticle } from "./pages/arcticle"
import { DarkLightPage } from "./pages/dark-light"
import { usePageCtx } from "./contexts/pagesCtx"
import { ChatPage } from "./pages/chat-exercise"
import { ChatCtxProvider } from "./pages/chat-exercise/chat-context"
import { ToDoPage } from "./pages/todo"
import { TanstackPage } from "./pages/tanstack"

function App() {
  const { presentPage} = usePageCtx()

  return (
    <Home>
      { presentPage == "helloArcticle" &&
        < HelloArcticle /> 
      }
      { presentPage == "darkLight" &&
        <DarkLightPage />
      }
      { presentPage == "chatExercise" &&
        <ChatCtxProvider>
          <ChatPage />
        </ChatCtxProvider>
      }
      { presentPage == "todo" &&
        <ToDoPage />
      }
      { presentPage == "tanstack" &&
        <TanstackPage />
      }
    </Home>
  )
}

export default App
