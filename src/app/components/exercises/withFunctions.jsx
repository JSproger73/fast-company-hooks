import React, { useState } from "react";
import CardWrapper from "../common/Card";
const withFunctions = (Component) => (props) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("user"));

    const handleIsLogin = () => {
        localStorage.setItem("user", "auth");
        setIsAuth((prevState) => !prevState);
    };
    const handleOnLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth((prevState) => !prevState);
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogin={handleIsLogin}
                onLogOut={handleOnLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
