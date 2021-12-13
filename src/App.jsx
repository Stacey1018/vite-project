import './App.css'
import Pages from './pages/Pages'
import {Link,BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import About from '@/pages/About'
import {Layout} from 'antd'
import 'antd/dist/antd.css'; 
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout style={{height: '100%'}}>
        <Sider>
          <Link to="/">pages</Link>
          <Link to="/about">about</Link>
        </Sider>
        <Layout>
          <Header>Header</Header>
          <Content>
            <Routes>
              <Route path='/'  element={<Pages></Pages>} />
              <Route path='/about' element={<About></About>} />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </Router>
  )
}

export default App
