import React from "react";

const PortfolioItemPage = (props) => (
    <div>
        <h1>My Work</h1>
        <p>This page is for item with the id of {props.match.params.id}
        </p>

    </div>
);

export default PortfolioItemPage;