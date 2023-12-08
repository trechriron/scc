const devGraphStyles = {
    row: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "5px",
        margin: "-15px",
    },
    column: {
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        margin: "0px",
    },
    column2: {
        display: "flex",
        flexDirection: "column",
        padding: "5px",
        margin: "0px",
        width: "15%",
    },
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
    textLayout: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5px",
        margin: "0px",
    },
    svgWrapper: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    svgStyle: {
        width: "800",
        height: "340",
        border: "1px solid #ccc",
        padding: "10px",
        margin: "10px",
    },
    lineStyle1: {
        fill: "none",
        stroke: "blue",
        strokeWidth: "3",
    },
    lineStyle2: {
        fill: "none",
        stroke: "red",
        strokeWidth: "3",
    },
    lineStyle3: {
        fill: "none",
        stroke: "green",
        strokeWidth: "3",
    },
    lineStyle4: {
        fill: "none",
        stroke: "orange",
        strokeWidth: "3",
    },
    lineStyle5: {
        fill: "none",
        stroke: "purple",
        strokeWidth: "3",
    },
    axisStyleMain: {
        fill: "none",
        stroke: "black",
        shapeRendering: "crispEdges",
        strokeWidth: "2",
    },
    axisStyleCross: {
        fill: "none",
        stroke: "black",
        shapeRendering: "crispEdges",
        strokeWidth: ".5",
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
        fill: "purple",
        stroke: "none",
        opacity: ".25",
        width: "700px",
        height: "60px",
    },
    freeTierSquare: {
        fill: "lightgreen",
        stroke: "none",
        opacity: ".5",
        width: "30px",
        height: "30px",
    },
    tierOneSquare: {
        fill: "lightblue",
        stroke: "none",
        opacity: ".5",
        width: "30px",
        height: "30px",
    },
    tiertwoSquare: {
        fill: "purple",
        stroke: "none",
        opacity: ".25",
        width: "30px",
        height: "30px",
    },
    textStyle: {
        fontSize: "12px",
    },
    textStyle1: {
        fontSize: "14px",
        stroke: "blue",
    },
    textStyle2: {
        fontSize: "14px",
        stroke: "red",
    },
    textStyle3: {
        fontSize: "14px",
        stroke: "green",
    },
    textStyle4: {
        fontSize: "14px",
        stroke: "orange",
    },
    textStyle5: {
        fontSize: "14px",
        stroke: "purple",
    },
    textStyle6: {
        fontSize: "12px",
        fontWeight: "bold",
    },
    textStyleUnderGraph: {
        fontSize: "12px",
        fontStyle: "italic",
        fontWeight: "bold",
    },
    circleStyle: {
        fill: "black",
    },
  };

return (
    <div style={devGraphStyles.body}>
        <div style={devGraphStyles.row}>
            <div style={devGraphStyles.column}>
                <div style={devGraphStyles.svgWrapper}>
                    <svg style={devGraphStyles.svgStyle}>
                    {/* Y-axis */}
                    <g>
                        <line x1="50" y1="5" x2="50" y2="290" style={devGraphStyles.axisStyleMain}></line>
                        {/* Background boxes by tier */}
                        <rect x="50" y="145" style={devGraphStyles.freeTierBack}></rect>
                        <rect x="50" y="65" style={devGraphStyles.tierOneBack}></rect>
                        <rect x="50" y="5" style={devGraphStyles.tiertwoBack}></rect>
                        {/* Veritical Labels & Lines */}
                        <text x="15" y="10" style={devGraphStyles.textStyle}>250k</text>
                            <line x1="50" y1="5" x2="750" y2="5" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="30" style={devGraphStyles.textStyle}>200k</text>
                            <line x1="50" y1="25" x2="750" y2="25" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="50" style={devGraphStyles.textStyle}>150k</text>
                            <line x1="50" y1="45" x2="750" y2="45" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="70" style={devGraphStyles.textStyle}>100k</text>
                            <line x1="50" y1="65" x2="750" y2="65" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="90" style={devGraphStyles.textStyle}>80k</text>
                            <line x1="50" y1="85" x2="750" y2="85" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="110" style={devGraphStyles.textStyle}>60k</text>
                            <line x1="50" y1="105" x2="750" y2="105" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="130" style={devGraphStyles.textStyle}>40k</text>
                            <line x1="50" y1="125" x2="750" y2="125" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="150" style={devGraphStyles.textStyle}>20k</text>
                            <line x1="50" y1="145" x2="750" y2="145" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="170" style={devGraphStyles.textStyle}>10k</text>
                            <line x1="50" y1="165" x2="750" y2="165" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="190" style={devGraphStyles.textStyle}>5k</text>
                            <line x1="50" y1="185" x2="750" y2="185" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="210" style={devGraphStyles.textStyle}>1k</text>
                            <line x1="50" y1="205" x2="750" y2="205" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="230" style={devGraphStyles.textStyle}>500</text>
                            <line x1="50" y1="225" x2="750" y2="225" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="250" style={devGraphStyles.textStyle}>250</text>
                            <line x1="50" y1="245" x2="750" y2="245" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="270" style={devGraphStyles.textStyle}>100</text>
                            <line x1="50" y1="265" x2="750" y2="265" style={devGraphStyles.axisStyleCross}></line>
                        <text x="15" y="290" style={devGraphStyles.textStyle}>0</text>
                    </g>

                    {/* X-axis */}
                    <g>
                        <line x1="50" y1="290" x2="750" y2="290" style={devGraphStyles.axisStyleMain}></line>
                        {/* Horizontal Labels */}
                        <text x="100" y="305" style={devGraphStyles.textStyle1}>Phase1</text>
                        <text x="250" y="305" style={devGraphStyles.textStyle2}>Phase2</text>
                        <text x="400" y="305" style={devGraphStyles.textStyle3}>Phase3</text>
                        <text x="550" y="305" style={devGraphStyles.textStyle4}>Phase4</text>
                        <text x="700" y="305" style={devGraphStyles.textStyle5}>Phase5</text>
                    </g>

                    {/* Line Graph */}
                    <polyline points="50,290 115,230" style={devGraphStyles.lineStyle1}></polyline>
                    <polyline points="115,230 265,170" style={devGraphStyles.lineStyle2}></polyline>
                    <polyline points="265,170 415,110" style={devGraphStyles.lineStyle3}></polyline>
                    <polyline points="415,110 565,70" style={devGraphStyles.lineStyle4}></polyline>
                    <polyline points="565,70 715,30" style={devGraphStyles.lineStyle5}></polyline>

                    {/* Data Points */}
                    <circle cx="50" cy="290" r="4" style={devGraphStyles.circleStyle}></circle>
                    <circle cx="115" cy="230" r="4" style={devGraphStyles.circleStyle}></circle>
                    <circle cx="265" cy="170" r="4" style={devGraphStyles.circleStyle}></circle>
                    <circle cx="415" cy="110" r="4" style={devGraphStyles.circleStyle}></circle>
                    <circle cx="565" cy="70" r="4" style={devGraphStyles.circleStyle}></circle>
                    <circle cx="715" cy="30" r="4" style={devGraphStyles.circleStyle}></circle>
                    </svg>
                </div>
            </div>
        </div>
        <div style={devGraphStyles.row}>
            <div style={devGraphStyles.column}></div>
            <div style={devGraphStyles.column}>
                <div style={devGraphStyles.center}>
                    <div style={devGraphStyles.textStyleUnderGraph}>Vertical = requests per month. Horizontal = phases of project.</div>
                </div>
            </div>
            <div style={devGraphStyles.column}></div>
        </div>
        <div style={devGraphStyles.row}>
            <div style={devGraphStyles.column2}>
                <svg>
                    <g>
                        <rect x="0" y="0" style={devGraphStyles.freeTierSquare}></rect>
                        <text x="35" y="20" style={devGraphStyles.textStyle6}>Free Tier</text>
                    </g>
                </svg>
            </div>
            <div style={devGraphStyles.column2}>
            <svg>
                <g>
                    <rect x="0" y="0" style={devGraphStyles.tierOneSquare}></rect>
                    <text x="35" y="20" style={devGraphStyles.textStyle6}>Tier 1</text>
                </g>
            </svg>
            </div>
            <div style={devGraphStyles.column2}>
            <svg>
                <g>
                    <rect x="0" y="0" style={devGraphStyles.tiertwoSquare}></rect>
                    <text x="35" y="20" style={devGraphStyles.textStyle6}>Tier 2</text>
                </g>
            </svg>
            </div>
        </div>
    </div>
);
