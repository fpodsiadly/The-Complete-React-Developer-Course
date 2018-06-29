import React from "react";
import { Link } from 'react-router-dom';

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <p>This is my work:</p>
        <Link to="/portfolio/1">Item_One</Link>
        <Link to="/portfolio/2">Item_Two</Link>
    </div>
);


export default PortfolioPage;