import React, { useState } from "react";
import { contactStyles } from "../assets/dummyStyles";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Mailbox, User } from "lucide-react";

const ContactPage = () => {

    const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState(""); 

  const handlechange = (e) => {
    const {name, value} = e.target;
    if(name === 'phone') setPhoneError("");
    setFormData({
        ...formData,
        [name]: value,
    });
  }

  const validatePhone = (phone) => /^\d{10}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
        setPhoneError('Please enter a valid 10-digits mobile number');
        return;
    }

    setIsSubmitting(true);
    const whatsappMessage =
      `Name: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Phone: ${formData.phone}%0A` +
      `Subject: ${formData.subject}%0A` +
      `Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/9779818062229?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
        });
        setIsSubmitting(false);
        setPhoneError("");
        }, 2000);
    };

    const isFormValid =
        formData.name &&
        formData.email &&
        validatePhone(formData.phone) &&
        formData.subject &&
        formData.message;

  return (
    <div className={contactStyles.container}>
      <div className={contactStyles.mainContainer}>
        <div className={contactStyles.header}>
          <h1 className={contactStyles.title}>Contact Us</h1>
        </div>

        <div className={contactStyles.mainContainer}>
          <div className={contactStyles.formContainer}>
            <div className={contactStyles.formGlow1}></div>
            <div className={contactStyles.formGlow2}></div>
            <div className={contactStyles.formGlow3}></div>

            <div className={contactStyles.form}>
                <form className={contactStyles.formElements}
                onSubmit={handleSubmit}
                >
                    {/* name + email */}
                    <div className={contactStyles.formGrid}>
                    <div className={contactStyles.formGroup}>
                        <label className={contactStyles.label}>
                        <User
                            className={`${contactStyles.labelIcon} ${contactStyles.colors.purple.icon}`}
                        />
                        Full Name *
                        </label>
                        <input type="text" name="name" value={formData.name}
                        onChange={handlechange} required className={`${contactStyles.input} ${
                            contactStyles.colors.purple.focus
                        } ${contactStyles.colors.purple.hover}`} placeholder="Enter your full name"
                        />
                    </div>

                         <div className={contactStyles.formGroup}>
                        <label className={contactStyles.label}>
                        <Mailbox
                            className={`${contactStyles.labelIcon} ${contactStyles.colors.blue.icon}`}
                        />
                        Email Address *
                        </label>
                        <input type="email" name="email" value={formData.email}
                        onChange={handlechange} required className={`${contactStyles.input} ${
                            contactStyles.colors.blue.focus
                        } ${contactStyles.colors.blue.hover}`} placeholder="Enter your email"
                        />
                    </div>

                    </div>
                </form>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;