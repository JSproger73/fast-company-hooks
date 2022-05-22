import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <>
            {isAuth ? (
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onLogOut}
                >
                    Выйти из системы
                </button>
            ) : (
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={onLogin}
                >
                    Войти
                </button>
            )}
        </>
        // <button
        //     type="button"
        //     className="btn btn-primary mx-auto m-2"
        //     onClick={isAuth ? onLogOut : onLogin}
        // >
        //     {isAuth ? "Выйти из системы" : "Войти"}
        // </button>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.object
};

export default SimpleComponent;
