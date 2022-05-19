import React from "react";

const simpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {!isAuth ? (
                <button>Войти</button>
            ) : (
                <button>Выйти из системы</button>
            )}
        </>
    );
};

export default simpleComponent;
