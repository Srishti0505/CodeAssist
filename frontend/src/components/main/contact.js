import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="vh-100 full-page" style = {{backgroundImage: `url('/contact.jpg')`,minHeight:  '100vh'}}>
                <section className="vh-100">
            <div className="container h-100">
                <div className="card">
                    <div className="card-body p-md-5">
                        <h5 className="card-title display-4 text-center">Contact Info</h5>

                        <hr />


                        <div className="row">
                            <div className="col-md-6">
                                <p>
                                    <span> <i class="fas fa-home "></i> </span>
                                    <span className="ml-3">  https://www.linkedin.com/in/srishti-srivastava-1673031b8</span>
                                </p>
                                <p>
                                    <span> <i class="fas fa-home "></i> </span>
                                    <span className="ml-3"> https://www.linkedin.com/in/ranu-singh-656360208</span>
                                </p>
                            </div>
                            <div className="col-md-6">
                                
                            </div>
                        </div>


                        <form>
                            <label>Name</label>
                            <input type="text" className="form-control" />
                            <label>email</label>
                            <input type="text" className="form-control" />
                            <label>phone number</label>
                            <input type="text" className="form-control" />
                            <label>Message</label>
                            <textarea rows={5} className="form-control" ></textarea>


                            <button className='btn btn-primary mt-5'>Submit</button>
                        </form>

                    </div>
                </div>
            </div>
            </section>
            </section>
        </div>
    )
}

export default Contact