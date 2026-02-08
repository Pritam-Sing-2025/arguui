function reject() {
    return (
        <div style={{
            border: "2px solid red",
            padding: "20px",
            color: "#000",
            backgroundColor: "#ffe8e8"
        }}>
            <h2>I'm rejecting this bro.</h2>
            <p>
                This action is not valid.
                I'm denying this.
            </p>
        </div>
    );
}

export default reject;