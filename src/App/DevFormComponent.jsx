    const formStyles = {
        row: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            padding: "10px",
            width: "100%",
        },
        rowFields: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            padding: "10px",
            width: "100%",
            alignItems: "center",
        },
        column: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "10px",
        },
        columnTextLeft: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            padding: "10px",
            width: "50%",
        },
        columnTextRight: {
            display: "flex",
            flexDirection: "column",
            padding: "10px",
            width: "50%",
        },
        textField: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
        },
        checkboxField: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "left",
            padding: "10px",
        },
        formLabel: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "10px",
        },
        button: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px",
        },
        listHeading: {
            fontWeight: "bold",
            fontSize: "1.2rem",
        },
        list: {

        },
        paragraph: {
            display: "flex",
            padding: "5px",
        }, 
    };
    
    const [formData, setFormData] = useState({
        textField1: '',
        textField2: '',
        textField3: '',
        textField4: '',
        textField5: '',
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
        checkbox5: false,
        label1: 'Requires Provider Data Lake',
        label2: 'Requires Sharded Database',
        label3: 'Requires Provider MPC Service',
        label4: 'Requires Provider Indexer',
        label5: 'Requires Provider RPC Service',
    });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    props.submitDeveloperProfile(formData);
    
    // Basic form validation - check if all text fields are filled
      /*const isFormValid = Object.values(formData).every((value) => value !== '');

      if (isFormValid) {
          props.setDeveloperProfile(formData);
      } else {
          console.warn('The form was not submitted. Please fill in all fields.');
      }*/
  }; 

    return (
    <div>
        <div style={formStyles.row}>
            <div style={formStyles.columnTextLeft}>
                <p style={formStyles.paragraph}>To better help you estimate the cost of your project, please fill out the form below. Each phase represents a milestone in the development process.
                </p>
                <span style={formStyles.listHeading}>Example Phases:</span>
                <div style={formStyles.list}>
                    <li>Phase 1: Prototype</li>
                    <li>Phase 2: Beta</li>
                    <li>Phase 3: Alpha Release</li>
                    <li>Phase 4: First 6 months</li>
                    <li>Phase 5: 12 months after Phase 4</li>
                </div>
            </div>
            <div style={formStyles.columnTextRight}>
                <p style={formStyles.paragraph}>The number provided = the number of active users per minute. For example, if you expect 100 users to be using your app per minute, enter 100. You can break down your estimate into 5 phases. Leave any unused fields blank.
                </p>
                <p style={formStyles.paragraph}>
                    Please check the boxes that apply to your project. If you are unsure, leave the box unchecked.
                </p>
            </div>
        </div>

        <form onSubmit={handleSubmit}>
        {/* Text Fields */}
        <div style={formStyles.rowFields}>
        {Array.from({ length: 5 }, (_, index) => (
            <div key={index} style={formStyles.column}>
            <label style={formStyles.formLabel} htmlFor={`textField${index + 1}`}>{`Phase ${index + 1}:`}</label>
            <input
                style={formStyles.textField}
                type="text"
                id={`textField${index + 1}`}
                name={`textField${index + 1}`}
                value={formData[`textField${index + 1}`]}
                onChange={handleChange}
                // required
            />
            </div>
        ))}
        </div>

        {/* Checkboxes */}
        <div style={formStyles.rowFields}>
        {Array.from({ length: 5 }, (_, index) => (
            <div key={index} style={formStyles.column}>
            <label style={formStyles.formLabel}>
                <input
                style={formStyles.checkboxField}
                type="checkbox"
                name={`checkbox${index + 1}`}
                checked={formData[`checkbox${index + 1}`]}
                onChange={handleChange}
                />
                {formData[`label${index + 1}`]}
            </label>
            </div>
        ))}
        </div>

        {/* Submit Button */}
        <div style={formStyles.rowFields}>
        <button type="submit" style={formStyles.button}>Submit</button>
        </div>
        </form>
    </div>
    );