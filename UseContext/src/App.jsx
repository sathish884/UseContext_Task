import React from 'react';
import { Layout } from 'antd';
import Header_Component from './Header_Component';
import Card_Component from './Card_Component';
const { Header, Content, Footer } = Layout;

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
          <Card_Component />
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
