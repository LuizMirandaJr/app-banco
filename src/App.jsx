import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Financiamento from './pages/Financiamento'
import Investimentos from './pages/Investimentos'

import PixPage from './pages/PixPage'
import PrivateRoute from './routes/PrivateRoute'

function App() {
  /**
   * Para construir fluxo de rotas privadas:
   * 
   * 1 - Variavel de controle para identificar se o usuario está autenticado ou nao (AuthContext - Context API)
   * 2 - Conjunto de rotas privadas OK
   * 3 - Componente para fazer a gestão desse processo -> PrivateRoute OK
   * 4 - Redirecionamento para login caso ele não esteja logado OK
   * 5 - Layout "pre definindo" para as rotas privadas -> AppLayout (template de tela com sidebar + header)
   */

  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas Públicas: onde o usuario NÃO LOGADO pode acessar */}
        <Route path="/login" element={<Login />} />
        <Route path="/investimentos" element={<Investimentos />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}

        {/* Rota privada */}
        <Route element={<PrivateRoute />} >

          <Route path="/" element={<Home />} />
          <Route path="/financiamento" element={<Financiamento />} />
          <Route path="/area-pix" element={<PixPage />} />

        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
