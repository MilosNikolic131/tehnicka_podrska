const poslednjeZalbe = (props) => {

    const zalbe = props.zalbe;
    const last = zalbe.slice(-1);
    console.log(last);

    return (
        <div className="poslednjeZalbe">
            <div className="zalbe-list">
                <div className="zalbe-preview" key={last[0].id}>
                    <h4>Poslednja dodata zalba je {last[0].tipProblema}</h4>
                    <p>sa statusom {last[0].status}</p>
                </div>
            </div>
        </div>
    );
}

export default poslednjeZalbe;