import React from 'react'
import './Feedback.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {

  const navigate = useNavigate();

  const addFeedback = async (values) => {
    console.log(values);
    const response = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(response.status);
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Registered Successfully",
    });
    if (response.status === 200) navigate("/main/login");
  }

  return (
    <div>
      <div className="content">
        <div className="mycontainer">
          <div className="head">
            <div className="heading">
              <h1>Share your experience</h1>
            </div>
            <div className="close">
              <div className="s s1" />
              <div className="s s2" />
            </div>
          </div>
          <div className="mid">
            <div className="media">
              <img
                className='myimg'
                src="https://cdn-icons-png.flaticon.com/128/3260/3260838.png"
                alt="angry"
              />
            </div>
            <div className="media">
              <img
                className='myimg'
                src="https://cdn-icons-png.flaticon.com/128/42/42901.png"
                alt="moderate"
              />
            </div>
            <div className="media">
              <img
                className='myimg'
                src="https://cdn-icons-png.flaticon.com/128/3260/3260877.png"
                alt="neutral"
              />
            </div>
            <div className="media">
              <img
                className='myimg'
                src="https://cdn-icons-png.flaticon.com/128/569/569501.png"
                alt="smile"
              />
            </div>
            <div className="media">
              <img
                className='myimg'
                src="https://cdn-icons-png.flaticon.com/128/1356/1356639.png"
                alt="happy"
              />
            </div>
          </div>
          <div className="textarea">
            <p>Share your experience</p>
            <textarea
              name="exp"
              id="exp"
              placeholder="Let we know..."
              defaultValue={""}
            />
          </div>
          <div className="end">
            <div className="submission">
              <button className="sub btn" onClick={addFeedback}>Send</button>
            </div>
            <div className="skip">
              <button className="skp btn">Skip</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback