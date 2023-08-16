import React, { useState, useEffect } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import PrimaryCTAButton from "../component/primaryCtaButton";
import { useGHStContext } from '../component/contextProvider';
import InputField from "../component/inputField";

function CustomForm({ status, message, onValidated }) {
    const { modalOpen, setModalOpen } = useGHStContext();
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && email.indexOf("@") > -1) {
            onValidated({ EMAIL: email });
        }
    };

    useEffect(() => {
        if (status === "success") {
            setEmail('');
        }
        if (modalOpen && status === "success") {
            setEmail('');
        }
    }, [status, modalOpen]);

    return (
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
            <h3 className="mc__title">
                {status === "success" ? "Success!" : "Go Ahead"}
            </h3>
            
            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">sending...</div>
            )}
            {status === "error" && (
                <div className="mc__alert mc__alert--error" dangerouslySetInnerHTML={{ __html: message }} />
            )}
            {status === "success" && (
                <div className="mc__alert mc__alert--success" dangerouslySetInnerHTML={{ __html: message }} />
            )}
            
            <div className="mc__field-container">
                <InputField
                    label="Email"
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    isRequired />
            </div>
            
            {/* Close button appears if form was successfully sent */}
            {status === 'success' && (
                <PrimaryCTAButton
                className="justify-self-center bg-blue-500 text-white"
                    handleClick={() => setModalOpen(false)}
                    label="close"
                    size="big"
                    customClass="justify-self-center bg-blue-500 text-white" />
            )}
            
            {status !== 'success' && (
                <InputField
                    label="subscribe"
                    type="submit"
                    formValues={[email]} />
            )}
        </form>
    );
}

const MailchimpForm = props => {
    const url = `https://godigitalhub.us21.list-manage.com/subscribe/post?u=a516c196d6cd0beafb051e92c&id=d820ad2f09`;

    return (
        <div className="mc__form-container">
            <section className="content-inner-3 bg-primary" style={{
                "backgroundImage": "url(images/background/bg13.png)",
                "backgroundRepeat": "no-repeat",
                "backgroundSize": "cover"
            }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-5 wow fadeInLeft" data-wow-duration="2s" data-wow-delay="0.2s">
                            <div className="dlab-media m-b30">
                                <img src="images/about/img9.png" className="move-2" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-7 wow fadeInRight" data-wow-duration="2s" data-wow-delay="0.4s">
                            <div className="section-head style-1 text-white">
                                <h6 className="sub-title bgl-light m-b20">Newsletter</h6>
                                <h2 className="title m-b15">Subscribe To Our Newsletter For Latest Update Of Finanical Services </h2>
                                <p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.</p>
                            </div>
                            <div className="dlab-subscribe style-2 max-w500">
                                <MailchimpSubscribe
                                    url={url}
                                    render={({ subscribe, status, message }) => (
                                        <CustomForm
                                            status={status}
                                            message={message}
                                            onValidated={formData => subscribe(formData)}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MailchimpForm;
