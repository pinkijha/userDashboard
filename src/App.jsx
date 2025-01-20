import { Provider } from "react-redux"
import { store } from "./utils/appStore"
import Dashboard from "./pages/Dashboard"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"


function App() {

  return (
    <>
      <div className="">
        <Provider store={store}>
          <DndProvider backend={HTML5Backend}>
          <Dashboard/>
          </DndProvider>
        </Provider>
      </div>
    </>
  )
}

export default App
