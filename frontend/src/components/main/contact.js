<>
  <title>Contact Us Page</title>
  <link rel="stylesheet" href="style2.css" />
  <nav>
    <a className="link" href="/index.html">
      Home
    </a>{" "}
    |
    <a className="link" href="/about-us.html">
      About Us
    </a>{" "}
    |
    <a className="link" href="/menu.html">
      Menu
    </a>{" "}
    |
    <a className="link" href="/locations.html/">
      Locations
    </a>{" "}
    |
    <a className="link" href="/gallery.html">
      Gallery
    </a>{" "}
    |
    <a className="link" href="/contact-us.html">
      Contact Us
    </a>{" "}
    |
    <a className="link" href="/reviews.html">
      Reviews
    </a>{" "}
    |
    <a className="link" href="/book-now.html">
      Book Now
    </a>
  </nav>
  <div className="contact-form">
    <h1>Contact Us</h1>
    <div className="txtb">
      <label>Full Name:</label>
      <input
        type="text"
        name=""
        defaultValue=""
        required=""
        placeholder="Enter Your Name"
      />
    </div>
    <br />
    <div className="txtb">
      <label>Email:</label>
      <input
        type="email"
        name=""
        defaultValue=""
        required=""
        placeholder="Enter Your Email"
      />
    </div>
    <br />
    <div className="txtb">
      <label>Phone Number:</label>
      <input
        type="number"
        name=""
        defaultValue=""
        required=""
        placeholder="+90 XXX XXX XXXX"
      />
    </div>
    <br />
    <div className="txtb">
      <label>Message :</label>
      <textarea
        rowSpan={2}
        name=""
        id=""
        cols={30}
        rows={10}
        defaultValue={""}
      />
    </div>
    <button name="submit" type="submit" value="submit" className="btn">
      Submit
    </button>
  </div>
</>
