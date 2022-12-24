import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import styled, { createGlobalStyle } from 'styled-components';


function App() {

  const GlobalStyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    html, body, #root {
      height:100%;
    }

    body {
      margin:0;
      padding:0;
      background:#F0F0F0;
      color:#333;
    }

    ul,
    ol, li {
      margin:0;
      padding:0;
      list-style: none;
    }

    h1, h2, h3, h4, h5, h6 { 
      margin:0;
      padding:0;
    }

    p {
      margin:0;
    }

    button {

    }
  `;



  return (
    <>
      {/* 전역 속성 */}
      <GlobalStyle />

      <DivBlock>
        <Todos />
      </DivBlock>
    </>
  );
}

const DivBlock = styled.div`
  height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default App;
