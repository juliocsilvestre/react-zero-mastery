import React from "react";

const TemplateExpressions = () => {
const name = "Julio"
const data = {
    age: 29,
    job: "Developer",

}

return (
    <div>
        <h1> Olá {name}, tudo bem? </h1>
        <p> Você atua como: {data.job}</p>
        <p> {4+4}</p>
    </div>
)

};

export default TemplateExpressions;