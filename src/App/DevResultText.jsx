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
    freeTierBack: {
        fill: "lightgreen",
        stroke: "none",
        opacity: ".5",
        width: "700px",
        height: "145px",
    },
    tierOneBack: {
        fill: "lightblue",
        stroke: "none",
        opacity: ".5",
        width: "700px",
        height: "80px",
    },
    tiertwoBack: {
        fill: "red",
        stroke: "none",
        opacity: ".3",
        width: "700px",
        height: "60px",
    },
};

<p style={devTextStyles.body}>Here are the results of your cost estimate...</p>