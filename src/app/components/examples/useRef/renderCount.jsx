import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const someRef = useRef(0);
    const [otherState, setOtherState] = useState(false);
    const togleOtherState = () => {
        setOtherState(!otherState);
    };
    useEffect(() => {
        someRef.current++;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider />
            <p>render count: {someRef.current}</p>
            <button className="btn btn-primary" onClick={togleOtherState}>
                Toggle other state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
