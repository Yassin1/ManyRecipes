import logo from './logo.svg';
import './App.css';
import { Button, Layout } from "antd";
import 'antd/dist/antd.css';
const { Header, Footer, Content } = Layout;

function App() {
  return (

    <Layout>
      <Header>Header</Header>
      <Content>
      <div style={{minHeight: "100vh"}}>Content...</div>

      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}


export default App;
