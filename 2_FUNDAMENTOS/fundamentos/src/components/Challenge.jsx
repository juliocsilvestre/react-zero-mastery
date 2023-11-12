const Challenge = () => {

const a = 1;
const b = 2;

const sum = () => {
    console.log("A soma de A + B é :" + (a + b));
}
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {console.log(a)}
                    {console.log(b)}	
                </div>
            </div>
            <button onClick={sum}>Clique para ver o resultado aqui</button>
        </div>
    )
}

export default Challenge;