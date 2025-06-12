import React from "react";
import "./contact.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { Animate } from "react-simple-animate";

function Contact() {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<HiOutlineMailOpen size={40} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content-header">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
             action="/thank-you"
          >
            {/* Honeypot for spam protection */}
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            
<div className="form">
              <div className="form-controlswrapper">
                <div className="wrapper">
                  <input
                    required
                    type="text"
                    name="name"
                    className="inputName"
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>

                <div className="wrapper">
                  <input
                    required
                    type="e-mail"
                    name="email"
                    className="inputEmail"
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>

                <div className="wrapper">
                  <textarea
                    required
                    type="text"
                    name="description"
                    className="inputdescription"
                    rows={5}
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Message
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </div>
            
          </form>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
