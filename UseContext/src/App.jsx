import React, { createContext } from 'react';
import { Layout } from 'antd';
import Header_Component from './Components/Header_Component';
import Card_Component from './Components/Card_Component';
const { Header, Content, Footer } = Layout;
import ProductData from './data.json';

export const ProductContext = createContext(null)

function App() {

  return (
    <>

      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            marginBottom: "20px"
          }}
        >
          <Header_Component />
        </Header>
        <Content
          style={{
            padding: '0 48px'
          }}
        >
          <ProductContext.Provider value={ProductData}>
            <Card_Component />
          </ProductContext.Provider>

        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>

    </>
  )
}

export default App
