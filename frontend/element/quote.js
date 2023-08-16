import React, { useState } from 'react';

function Quote() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    projectTitle: '',
    dzOther: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.status === 200) {
        console.log('Form submitted successfully!');
        // You can handle success messages or redirect to a "thank you" page here.
      } else {
        console.error('Failed to submit the form.');
        // Handle the case when the form submission fails.
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <section className="content-inner" style={{ backgroundImage: "url(images/background/bg1.png)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 m-b30 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
              <div className="section-head style-1">
                <h6 className="sub-title bgl-primary m-b20 text-primary">Contact Us</h6>
                <h2 className="title">We Love To Help Great Companies To Enlarge Their Revenues.</h2>
              </div>
              <form className="dlab-form dzForm" onSubmit={handleSubmit}>
                <div className="dzFormMsg"></div>
                <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-user"></i></span>
                      </div>
                      <input name="name" type="text" required className="form-control" placeholder="First Name" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-user"></i></span>
                      </div>
                      <input name="dzOther[last_name]" type="text" className="form-control" required placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-envelope"></i></span>
                      </div>
                      <input name="email" type="text" required className="form-control" placeholder="Email Address" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-phone"></i></span>
                      </div>
                      <input name="phone" type="text" required className="form-control" placeholder="Phone No." onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-file-alt"></i></span>
                      </div>
                      <input name="projectTitle" type="text" className="form-control" required placeholder="Project Title" onChange={handleChange}/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-list"></i></span>
                      </div>
                      <select name="dzOther" className="form-control" required onChange={handleChange}>
                        <option selected>Choose Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Strategy & Research">Strategy & Research</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"><i className="la la-sms"></i></span>
                      </div>
                      <textarea name="message" required className="form-control" placeholder="Message" onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    {/* No need for the ReCAPTCHA component here */}
                  </div>
                  <div className="col-sm-12 mt-2">
                    <button name="submit" type="submit" value="Submit" className="btn btn-link d-inline-flex align-items-center">
                      <i className="fa fa-angle-right m-r10"></i>Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xl-6 col-lg-5 m-b30 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
              <div className="dlab-media cf-r-img">
                <img src="images/about/img2.png" className="move-1" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Quote;
