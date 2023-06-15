import React from 'react'

const Contact = () => {
    return (
        <div>
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title display-4 text-center">Contact Info</h5>

                        <hr />


                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    <span> <i class="fas fa-home "></i> </span>
                                    <span className="ml-3"> 123, Main Road, Your City, NY</span>
                                </p>
                                <p>
                                    <span> <i class="fas fa-home "></i> </span>
                                    <span className="ml-3"> 123, Main Road, Your City, NY</span>
                                </p>
                            </div>
                            <div className="col-md-6">
                                <p>
                                    <span> <i class="fas fa-home "></i> </span>

                                    <span className="ml-3"> 123, Main Road, Your City, NY</span>

                                </p>
                            </div>
                        </div>


                        <form>
                            <label>Name</label>
                            <input type="text" className="form-control" />
                            <label>Name</label>
                            <input type="text" className="form-control" />
                            <label>Name</label>
                            <input type="text" className="form-control" />
                            <label>Message</label>
                            <textarea rows={5} className="form-control" ></textarea>


                            <button className='btn btn-primary mt-5'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact