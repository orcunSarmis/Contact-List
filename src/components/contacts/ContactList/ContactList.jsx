import React from "react";
import { Link } from "react-router-dom";

let ContacList = () => {
    return (
        <React.Fragment>
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3">Contact Manger
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

            <section className="contact-list">
                <div className="container">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                 <div className="row">
                                 <div className="col-md-4">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaMLsn5xs11l_ijJwV8CiP9Dt4yaXatrWcgw&usqp=CAU" className="img-fluid contact-img"/>
                                </div>
                                <div className="col-md-7">
                                    <ul className="list-group">
                                        <li className="list-group-item list-group-item-action">
                                            Name: <span className="fw-bold">Claude</span>
                                        </li>
                                        <li className="list-group-item list-group-item-action">
                                            Mobile: <span className="fw-bold">0499258461</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-1">

                                </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ContacList;