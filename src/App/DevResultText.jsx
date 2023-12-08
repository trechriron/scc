const devTextStyles = {
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        fontSize: "2rem",
    },
    body: {
        width: "100%",
        margin: "10px",
        padding: "10px",
    },
};

const basicText = (<p style={devTextStyles.body}>Please enter the following information to estimate the cost of your project...</p>);

return (
    <div>
        <div style={devTextStyles.body}>
            {basicText}  
        </div> 
    </div>
);