const devResultStyles = {
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
    svgWrapper: {
        display: "flex",
        justifyContent: "center",
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
    textStyle: {
        fontSize: "12px",
    },
    textStyle1: {
        fontSize: "12px",
    },
    textStyle2: {
        fontSize: "12px",
    },
    textStyle3: {
        fontSize: "12px",
    },
    textStyle4: {
        fontSize: "12px",
    },
    textStyle5: {
        fontSize: "12px",
    },
    circleStyle: {
        fill: "black",
    },
  };

return (
    <div style={devResultStyles.body}>
        <div style={devResultStyles.svgWrapper}>
            <svg style={devResultStyles.svgStyle}>
            {/* Y-axis */}
            <g>
                <line x1="50" y1="5" x2="50" y2="290" style={devResultStyles.axisStyleMain}></line>
                {/* Add labels */}
                <text x="15" y="10" style={devResultStyles.textStyle}>1000</text>
                    <line x1="50" y1="5" x2="750" y2="5" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="30" style={devResultStyles.textStyle}>900</text>
                    <line x1="50" y1="25" x2="750" y2="25" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="50" style={devResultStyles.textStyle}>800</text>
                    <line x1="50" y1="45" x2="750" y2="45" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="70" style={devResultStyles.textStyle}>700</text>
                    <line x1="50" y1="65" x2="750" y2="65" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="90" style={devResultStyles.textStyle}>600</text>
                    <line x1="50" y1="85" x2="750" y2="85" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="110" style={devResultStyles.textStyle}>500</text>
                    <line x1="50" y1="105" x2="750" y2="105" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="130" style={devResultStyles.textStyle}>400</text>
                    <line x1="50" y1="125" x2="750" y2="125" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="150" style={devResultStyles.textStyle}>300</text>
                    <line x1="50" y1="145" x2="750" y2="145" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="170" style={devResultStyles.textStyle}>150</text>
                    <line x1="50" y1="165" x2="750" y2="165" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="190" style={devResultStyles.textStyle}>100</text>
                    <line x1="50" y1="185" x2="750" y2="185" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="210" style={devResultStyles.textStyle}>50</text>
                    <line x1="50" y1="205" x2="750" y2="205" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="230" style={devResultStyles.textStyle}>25</text>
                    <line x1="50" y1="225" x2="750" y2="225" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="250" style={devResultStyles.textStyle}>10</text>
                    <line x1="50" y1="245" x2="750" y2="245" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="270" style={devResultStyles.textStyle}>5</text>
                    <line x1="50" y1="265" x2="750" y2="265" style={devResultStyles.axisStyleCross}></line>
                <text x="15" y="290" style={devResultStyles.textStyle}>0</text>
            </g>

            {/* X-axis */}
            <g>
                <line x1="50" y1="290" x2="750" y2="290" style={devResultStyles.axisStyleMain}></line>
                {/* Add labels */}
                <text x="100" y="305" style={devResultStyles.textStyle1}>Phase1</text>
                <text x="250" y="305" style={devResultStyles.textStyle2}>Phase2</text>
                <text x="400" y="305" style={devResultStyles.textStyle3}>Phase3</text>
                <text x="550" y="305" style={devResultStyles.textStyle4}>Phase4</text>
                <text x="700" y="305" style={devResultStyles.textStyle5}>Phase5</text>
            </g>

            {/* Line Graph */}
            <polyline points="50,290 115,230" style={devResultStyles.lineStyle1}></polyline>
            <polyline points="115,230 265,170" style={devResultStyles.lineStyle2}></polyline>
            <polyline points="265,170 415,110" style={devResultStyles.lineStyle3}></polyline>
            <polyline points="415,110 565,70" style={devResultStyles.lineStyle4}></polyline>
            <polyline points="565,70 715,30" style={devResultStyles.lineStyle5}></polyline>

            {/* Data Points */}
            <circle cx="50" cy="290" r="4" style={devResultStyles.circleStyle}></circle>
            <circle cx="115" cy="230" r="4" style={devResultStyles.circleStyle}></circle>
            <circle cx="265" cy="170" r="4" style={devResultStyles.circleStyle}></circle>
            <circle cx="415" cy="110" r="4" style={devResultStyles.circleStyle}></circle>
            <circle cx="565" cy="70" r="4" style={devResultStyles.circleStyle}></circle>
            <circle cx="715" cy="30" r="4" style={devResultStyles.circleStyle}></circle>
            </svg>
        </div>
    </div>
)
