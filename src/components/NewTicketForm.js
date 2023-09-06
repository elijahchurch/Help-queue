import React from "react";

function NewTicketForm() {

    function handleNewTicketFormSubmission(event) {
        event.preventDefault();
        console.log(event.target.names.value);
        console.log(event.target.location.value);
        console.log(event.target.issue.value);
    }
    return (
        <React.Fragment>
            <form onSubmit={handleNewTicketFormSubmission}>
                <input
                    type="text"
                    name="names"
                    placeholder="pair Names" />
                <input
                    type="text"
                    name="location"
                    placeholder="location"/>
                <textarea
                    name="issue"
                    placeholder="Describe your issue."/>
                <button type="submit">Help!</button>
            </form>
        </React.Fragment>
    );
}

export default NewTicketForm;