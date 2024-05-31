import React from "react";

const PageLayout = ({ children }) => {
    return (
        <div className="animated fadeUp" style={{ overflow: "hidden" }}>
            {children}
        </div>
    );
};

export default PageLayout;
