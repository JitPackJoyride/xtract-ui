import React, { Component } from 'react';
import fillForm from "../../../assets/fillForm.svg";
import getAccount from "../../../assets/getAccount.svg";
import uploadDoc from "../../../assets/uploadDoc.svg";
export class TutorialComponent extends Component {
    render() {
        return (
            <div>
            <div className="Tutorial">
                <img className="Tutorial-Step Fill-Form" src={fillForm} />
                <i className="fas fa-plus-circle Tutorial-Flow"></i>
                <img className="Tutorial-Step Upload-Doc" src={uploadDoc} />
                <i className="fas fa-arrow-circle-right Tutorial-Flow"></i>
                <img className="Tutorial-Step Get-Account" src={getAccount} />
            </div>
            <div className="Tutorial-Description">
                <div className="Description Describe1">Fill in the Form</div>
                <div className="Description Describe2">Upload your Documentation</div>
                <div className="Description Describe3">Get an Account</div>
            </div>
            </div>
        );
    }
}

export default TutorialComponent;
