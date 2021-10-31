import React from 'react';
import "./index.css";
import content from "./content";
import emailjs from "emailjs-com";
import { resources } from "../../environment/resources";
import { InputField } from '../../common/InputField';
import { TextArea } from "../../common/TextArea";
import { Button } from '../../common/Button';

export const Contact = () => {
    const [formData, setFormData] = React.useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            first_name: "",
            last_name: "",
            email: "",
            inquiry_type: "Job Recruiting/Opportunity",
            inquiry: ""
        }
    );
    const [selectIsOpen, setSelectIsOpen] = React.useState(false);
    const [clickCount, setClickCount] = React.useState(0);

    const validateForm = ({
        first_name,
        last_name,
        email,
        inquiry
    }) => {
        let formErrors = [first_name, last_name, email, inquiry].filter(value => value.length === 0);
        return formErrors.length === 0 ? true : false;
    };

    const handleButtonClick = (e) => {
        e.preventDefault();
        setClickCount(clickCount + 1);
        if (validateForm(formData)) {
            console.log("here");
            emailjs.send(
                resources.emailjsServiceID,
                "template_aPyow3xB", 
                {
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    email: formData.email,
                    inquiry_type: formData.inquiry_type,
                    inquiry: formData.inquiry,
                },
                resources.emailjsUserID,
            ).then(() => {
                setClickCount(0);
                setFormData({
                    first_name: "",
                    last_name: "",
                    email: "",
                    inquiry_type: "Job Recruiting/Opportunity",
                    inquiry: ""
                });
                window.alert("Message sent successfully!");
            }, (error) => {
                emailjs.send(
                    resources.emailjsServiceID,
                    "template_aPyow3xB", 
                    { 
                        first_name: "Error",
                        last_name: "Messenger",
                        email: "none",
                        inquiry_type: "Message send error",
                        inquiry: error
                    },
                    resources.emailjsUserID,
                );
                window.alert("Sorry, message could not be sent due to some type of error.");
            });
        }

    };

    const handleInputChange = (e, type) => {
        setFormData(type ? { ...formData, inquiry_type: type } : { ...formData, [e.target.id]: e.target.value });
    };

    const {
        first_name,
        last_name,
        email,
        inquiry_type,
        inquiry
    } = formData;

    let formIsValid = first_name.length < 1 ? false : 
        last_name.length < 1 ? false : 
        email.length < 1 ? false : 
        inquiry.length < 1 ? false : true;
    
    console.log(formIsValid);

    return (
        <div onClick={selectIsOpen ? () => setSelectIsOpen(false) : ""} className="contactContainer">
            <h2 className="contactFormHeader">{content.HEADER}</h2>
            <form className="formContainer">
                <div className="headerInputRow">
                    <div className="inputContainer">
                        <InputField
                            id="first_name"
                            className="inputField"
                            onChange={handleInputChange}
                            value={first_name}
                            hasIcon
                            iconPosition="right"
                            iconName="username_main_4"
                            style={
                                ((clickCount > 0) && (first_name.length === 0)) ? { borderTop: "2px solid #ff0000", borderBottom: "2px solid #ff0000" } : 
                                ((clickCount > 0) && (first_name.length !== 0)) ? { borderTop: "2px solid #0080005b", borderBottom: "2px solid #0080005b" } : {}
                            }
                        />
                        <label 
                            htmlFor="first_name"
                            style={
                                ((clickCount > 0) && (first_name.length === 0)) ? { color: "#ff0000" } : 
                                ((clickCount > 0) && (first_name.length !== 0)) ? { color: "#0080005b" } : {}
                            }
                        >
                            {content.FIRST_NAME}
                        </label>
                    </div>
                    <div className="inputContainer">
                        <InputField 
                            id="last_name"
                            className="inputField"
                            onChange={handleInputChange}
                            value={last_name}
                            hasIcon
                            iconPosition="right"
                            iconName="username_main_4"
                            style={
                                ((clickCount > 0) && (last_name.length === 0)) ? { borderTop: "2px solid #ff0000", borderBottom: "2px solid #ff0000" } : 
                                ((clickCount > 0) && (last_name.length !== 0)) ? { borderTop: "2px solid #0080005b", borderBottom: "2px solid #0080005b" } : {}
                            }
                        />
                        <label 
                            htmlFor="last_name"
                            style={
                                ((clickCount > 0) && (last_name.length === 0)) ? { color: "#ff0000" } : 
                                ((clickCount > 0) && (last_name.length !== 0)) ? { color: "#0080005b" } : {}
                            }
                        >
                            {content.LAST_NAME}
                        </label>
                    </div>
                    <div className="inputContainer">
                        <InputField 
                            id="email"
                            className="inputField"
                            onChange={handleInputChange}
                            value={email}
                            hasIcon
                            iconPosition="right"
                            iconName="email_main_4"
                            style={
                                ((clickCount > 0) && (email.length === 0)) ? { borderTop: "2px solid #ff0000", borderBottom: "2px solid #ff0000" } : 
                                ((clickCount > 0) && (email.length !== 0)) ? { borderTop: "2px solid #0080005b", borderBottom: "2px solid #0080005b" } : {}
                            }
                        />
                        <label 
                            htmlFor="email"
                            style={
                                ((clickCount > 0) && (email.length === 0)) ? { color: "#ff0000" } : 
                                ((clickCount > 0) && (email.length !== 0)) ? { color: "#0080005b" } : {}
                            }
                        >
                            {content.EMAIL}
                        </label>
                    </div>
                    <div onClick={() => setSelectIsOpen(!selectIsOpen)} className="inputContainer">
                        {!selectIsOpen && (
                            <InputField 
                                id="inquiry_type"
                                className="inputField"
                                onChange={handleInputChange}
                                value={inquiry_type}
                                hasIcon
                                iconPosition="right"
                                iconName="add_circle_main_4"
                                disabled={true}
                                style={
                                    selectIsOpen ? { borderTop: "2px solid #c900178a", borderBottom: "2px solid #c900178a" } :
                                    clickCount > 0 ? { borderTop: "2px solid #0080005b", borderBottom: "2px solid #0080005b" } : {}
                                }
                            />
                        )}
                        {selectIsOpen && (
                            <React.Fragment>
                                <InputField 
                                    id="inquiry_type"
                                    className="inputField"
                                    onChange={handleInputChange}
                                    value={inquiry_type}
                                    placeholder={content.INQUIRY_TYPE}
                                    hasIcon
                                    iconPosition="right"
                                    iconName="add_circle_harvard_red"
                                    disabled={true}
                                    style={
                                        selectIsOpen ? { borderTop: "2px solid #68ace5", borderBottom: "2px solid #68ace5" } :
                                        clickCount > 0 ? { borderTop: "2px solid #0080005b", borderBottom: "2px solid #0080005b" } : {}
                                    }
                                />
                                <ul className="selectList">
                                    {content.INQUIRY_TYPES.map((type, i) => <li onClick={(e) => handleInputChange(e, type)} key={i} style={(inquiry_type === type) ? { color: '#68ace5' } : {}}>{type}</li>)}
                                </ul>
                            </React.Fragment>
                        )}
                        <label 
                            htmlFor="inquiry_type" 
                            style={
                                selectIsOpen ? { color: "#68ace5" } : 
                                clickCount > 0 ? { color: "#0080005b" } : {}
                            }
                        >
                            {content.INQUIRY_TYPE}
                        </label>
                    </div>
                </div>
                <div className="textAreaContainer">
                    <TextArea 
                        rows="8"
                        id="inquiry"
                        className="textArea"
                        onChange={handleInputChange}
                        value={inquiry}
                        style={
                            ((clickCount > 0) && (inquiry.length < 1)) ? { borderTop: "2px solid #ff0000", borderBottom: "2px solid #ff0000" } : 
                            ((clickCount > 0) && (inquiry.length > 0)) ? { borderTop: "2px solid #0080005b", borderBottom: "2px solid #0080005b" } : {}
                        }
                    />
                    <label 
                        htmlFor="inquiry"
                        style={
                            ((clickCount > 0) && (inquiry.length === 0)) ? { color: "#ff0000" } : 
                            ((clickCount > 0) && (inquiry.length !== 0)) ? { color: "#0080005b" } : {}
                        }
                    >
                        {content.TEXTAREA_LABEL}
                    </label>
                </div>
                <div className="buttonContainer">
                    <Button
                        onClick={(e) => handleButtonClick(e)}
                        className="submitButton"
                        buttonText={content.BUTTON_NAME_TYPES[1]}
                        disabled={((clickCount > 0) && !formIsValid) ? true : false}
                    />
                </div>
            </form>
        </div>
    )
}