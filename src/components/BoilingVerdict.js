import React from "react";

export default function BoilingVerdict({ celsius }) {
    return celsius >= 100 ? (
        <p>The water would boil</p>
    ) : (
        <p>The water would not boil</p>
    );
}
