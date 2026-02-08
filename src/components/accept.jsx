function accept() {
    return (
        <div style={{
            border: "2px solid green",
            padding: "20px",
            color: "#000",
            backgroundColor: "#e8ffe8"
        }}>
            <h2>Action accepted.</h2>
            <p>
                Everything's good, proceed now.
                <button>Submit</button>
            </p>
        </div>
    );
}

export default accept;