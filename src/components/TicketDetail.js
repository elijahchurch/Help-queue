import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props){
    const { ticket } = props;
    return (
        <React.Fragment>
            <h1>Ticket Detail</h1>
            <hr/>
            <h3>{ticket.location} - {ticket.names}</h3>
            <p><em>{ticket.issue}</em></p>
            <hr/>
            <button onClick={ props.onClickingEdit }>Update Ticket</button>
            <button onClick={() => props.onClickingDelete(ticket.id)}>Close Ticket</button>
            <hr/>
        </React.Fragment>
    );
}

TicketDetail.propTypes = {
    ticket: PropTypes.object,
    onClickingDelete: PropTypes.func,
    onClickingEdit: PropTypes.func
};

export default TicketDetail;