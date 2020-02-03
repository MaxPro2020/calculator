import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Container } from 'react-bootstrap';
import AddRow from './containers/AddRow';
import RowsList from './containers/RowsList';
import Results from './containers/Results';

function App() {
  return (
    <Jumbotron fluid>
      <Container>
        <h1>Welcome to the React Challenge</h1>
        <p className="small">
          Taken the html structure in the example below (index.html),
          <br />
          write a simple React calculator (adder)
          su that has the following mandatory functionalities:
        </p>
        <ul className="small">
          <li>rows can be added and removed</li>
          <li>each row have a sign (minus or plus)</li>
          <li>
            each row can be enabled or disabled by a dedicatedcontrol button.
            Disabled rows must be excluded from the addition.
          </li>
          <li>The result must be updated live while the user is writing</li>
        </ul>
        <p className="small">
          Feel free to add libraries if needed.
          <br />
          Structure and quality of the code, are matter of evaluation.
          <br />
          ES6+ Javascript knowledge is matter of evaluation.
          <br />
          Look and feel of the solution is a plus.
        </p>
        <AddRow />
        <RowsList />
        <Results />
      </Container>
    </Jumbotron>
  );
}

export default App;
