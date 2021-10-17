import React, {useState} from "react";

const InputField = (props) => {
    const [location, setLocation] = useState('');
    const handleChange = (e) => {
        setLocation(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(`Hey there, ${location}`);
        props.handleCityChange(location);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Location:
                <input name="location" type="text" value={location} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default InputField;