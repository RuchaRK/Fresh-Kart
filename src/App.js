import styled from '@emotion/styled';
import './App.css';

import logo from './logo.png';

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  font-family: cursive;
  border-radius: 12px;
  color: #333333;
  background-color: inherit;
  margin-block-start: 2rem;
  margin-block-end: 2rem;

  &:hover {
    color: #e2e2e2;
    background-color: #333333;
  }
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="">
          Welcome to <span>mockBee!</span>
        </h1>
        <Button>Hello</Button>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a href="https://mockbee.netlify.app/" target="_blank" rel="noreferrer">
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a href="https://github.com/neogcamp/mockBee" target="_blank" rel="noreferrer">
            Contribute
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
