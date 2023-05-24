import React from 'react'

const contact1 = () => {
  return (
    <div>
      <section className="contact_wrapper">
        <div className="contact_info">
          <h3 className="title">Contact Info</h3>
          <ul className="icons_wrapp">
            <li>
              <div className="icon">
                <span className="material-icons-outlined"> place </span>
              </div>
              <div className="text">
                123 ABCDedf Road, 123 ABC, ABCD - 123456123 ABCDedf Road, 123 ABC,
                ABCD - 123456
              </div>
            </li>
            <li>
              <div className="icon">
                <span className="material-icons-outlined"> mail_outline </span>
              </div>
              <div className="text">ABCDedfRoad@ABCD.com</div>
            </li>
            <li>
              <div className="icon">
                <span className="material-icons-outlined"> phone_in_talk </span>
              </div>
              <div className="text">123-456-789</div>
            </li>
          </ul>
          <ul className="soci_wrap">
            <li>
              <a href="#">
                <span className="material-icons-outlined"> facebook </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-outlined"> face </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-outlined"> facebook </span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-icons-outlined"> face </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="contact_msg">
          <h3 className="title">Send a Message</h3>
          <div className="form_fild">
            <div className="input_group w_50">
              <input type="text" className="input" required="" />
              <label className="placeholder">First Name</label>
            </div>
            <div className="input_group w_50">
              <input type="text" className="input" required="" />
              <label className="placeholder">Last Name</label>
            </div>
            <div className="input_group w_50">
              <input type="text" className="input" required="" />
              <label className="placeholder">Emal Address</label>
            </div>
            <div className="input_group w_50">
              <input type="tel" className="input" required="" />
              <label className="placeholder">Mobile Number</label>
            </div>
            <div className="input_group w_100">
              <textarea
                className="input input_textarea "
                rows={6}
                required=""
                defaultValue={""}
              />
              <label className="placeholder textarea">
                Write your message here...
              </label>
            </div>
            <div className="input_group">
              <input type="submit" className="btn" defaultValue="Send" />
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default contact1
