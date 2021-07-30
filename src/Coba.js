import React, { Fragment, useReducer, useState } from "react";

const nameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return {
            value: action.val,
        };
    }
    if (action.type === "SHOW_NAME") {
        return {
            value: state.value,
        };
    }

    return {
        value: "",
    };
};

const Coba = () => {
    const [name, dispatchName] = useReducer(nameReducer, {
        value: "",
    });
    const [displayName, setDisplayName] = useState("");

    const nameChangeHandler = (event) => {
        dispatchName({
            type: "USER_INPUT",
            val: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisplayName(name.value);
        dispatchName({
            val: "",
        });
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <h1>{displayName}</h1>
                <input value={name.value} onChange={nameChangeHandler} />
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
};

export default Coba;
