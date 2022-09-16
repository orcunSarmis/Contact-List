import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useParams } from 'react-router-dom';
import { GET_CONTACT } from "../../../queries/contactQueries";
// import { GET_CONTACTS } from '../../../queries/contactQueries';

function ViewContact ()  {

    const { contactId } = useParams();

    // const {loading, error, data } = useQuery(GET_CONTACTS, {
    //     variable: {}
    // });

    const {loading, error, data } = useQuery(GET_CONTACT, {
    variables: { contactId: contactId }, 
    
    });

    const contact = data?.contact || {};
    console.log(contactId);
    // console.log(contactData);

    return (
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Contact Details</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMLsn5xs11l_ijJwV8CiP9Dt4yaXatrWcgw&usqp=CAU" className="img-fluid contact-img"/>
                        </div>
                        <div className="col-md-8">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-action">
                                Name: <span className="fw-bold">{contact.name}</span>
                            </li>
                            <li className="list-group-item list-group-item-action">
                                Mobile: <span className="fw-bold">{contact.mobile}</span>
                            </li>
                        </ul>                        
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    )
};

export default ViewContact;