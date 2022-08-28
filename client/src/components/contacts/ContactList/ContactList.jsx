import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import Spinner from '../../Spinner/Spinner'; 
import { GET_CONTACTS } from '../../../queries/contactQueries';
import { GET_CONTACT } from '../../../queries/contactQueries';
import { useMutation } from '@apollo/client';
import { DELETE_CONTACT } from '../../../mutations/contactsMutations';
import { QueryDocumentKeys } from "graphql/language/visitor";


function ContacList ({contact}) {

    const { loading, error, data } = useQuery(GET_CONTACTS, {
        variables: {}
    });
    // const [deleteContact] = useMutation(DELETE_CONTACT, {
    //     variables: { id: contact.id },
    //     refetchQueries: [{ query: GET_CONTACTS }],
    // });
    
    // const [query, setQuery] = useState

    // const searchContacs = (event) => {
    //     setQuery(...QueryDocumentKeys, text event.target.value)
    // }

    const contactData = data?.contacts || [];

    if (loading) return <Spinner />

   

    console.log(contactData.id);
    console.log(contactData.name);
    console.log(contactData.mobile);

    return (
        <React.Fragment>          
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold">Contact Manger
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"/>
                                        New</Link>
                                </p>
                                <p className="fst-italic">Acces to the contacts</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                    <div className="mb-2">
                                         <input type="text" className="form-control" placeholder="Search Contact"/>   
                                        

                                    </div>
                                    </div>
                                    <div className="col">
                                    <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                    </div>
                                    </div>
                                </form>    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {!loading && !error && (
             <React.Fragment>         
            <section className="contact-list">
                <div className="container">
                    <div className="row">
                        {
                            contactData.length > 0 && 
                            contactData.map(contact => {
                                return (
                                    <div className="col-md-6" key={contact.id}>
                                    <div className="card my-2">
                                        <div className="card-body">
                                             <div className="row align-items-center d-flex justify-content-around">
                                             <div className="col-md-4">
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMLsn5xs11l_ijJwV8CiP9Dt4yaXatrWcgw&usqp=CAU" className="img-fluid contact-img"/>
                                            </div>
                                            <div className="col-md-7">
                                                <ul className="list-group">
                                                    <li className="list-group-item list-group-item-action">
                                                        Name: <span className="fw-bold">{contact.name}</span>
                                                    </li>
                                                    <li className="list-group-item list-group-item-action">
                                                        Mobile: <span className="fw-bold">{contact.mobile}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={`/contacts/view/${contact.id}`} className="btn btn-warning my-1">
                                                    <i className="fa fa-eye"/>
                                                </Link>
                                                <Link to={'/contacts/edit/:contactId'} className="btn btn-primary my-1" >
                                                    <i className="fa fa-pen"/>
                                                </Link>
                                                <button className="btn btn-danger my-1" >
                                                    <i className="fa fa-trash"/>
                                                </button>
                                            </div>
                                             </div>
                                        </div>
                                    </div>                       
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            </React.Fragment>  
            )}
        </React.Fragment>
    )
};
// onClick={deleteContact}
export default ContacList;

