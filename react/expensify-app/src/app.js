import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from 'react-router-dom';
import 'normalize.css/normalize.css';
import "./styles/style.scss";

const ExpenseDashoardPage = () => (
    <div>
        This is from my darhboard component
    </div>
);

const AddExpensePage = () => (
    <div>
        This is from my Add Expense component
    </div>
);

const EditExpensePage = () => (
    <div>
        This is from my Edit Expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is from my HelpPage component
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashoardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />


        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
