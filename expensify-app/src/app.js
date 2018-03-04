import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
      This is from my dashboard comp.
  </div>
);

const AddExpensePage = () => (
    <div>
        This is AddExpensePage
    </div>
);

const EditExpensePage = () => (
    <div>
        This is EditExpensePage
    </div>
);

const HelpPage = () => (
    <div>
        This is HelpPage
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route exact={true} path="/" component={ExpenseDashboardPage} />
            <Route exact={true} path="/create" component={AddExpensePage}/>
            <Route exact={true} path="/edit" component={EditExpensePage}/>
            <Route exact={true} path="/help" component={HelpPage}/>
        </div>
    </BrowserRouter>

);

ReactDOM.render(routes, document.getElementById('app'));
