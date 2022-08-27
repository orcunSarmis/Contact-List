import React from "react";

let AddContact = () => {
    return (
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Your Contact</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name"/>
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Mobile"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default AddContact;