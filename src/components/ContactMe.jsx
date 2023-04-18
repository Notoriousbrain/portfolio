import React, { useEffect, useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import images from '../assets';

const ContactMe = () => {
   const form = useRef();
   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const [email, setEmail] = useState("");
   const [phoneNo, setPhoneNo] = useState("");
   const [message, setMessage] = useState("");
   const [disabled, setDisabled] = useState(true);
   const [bgColor, setBgColor] = useState("#24252D");

   useEffect(() => {
     if(firstName.length > 2 && email.includes('@') && phoneNo.length === 10 && message.length > 2 ){
       setDisabled(false);
       setBgColor("#00CCBB");
     }
         setPhoneNo(phoneNo.replace(/[^0-9]/g, ""));
   }, [firstName, email, phoneNo, message]);

   const sendEmail = (e) => {
     e.preventDefault();
     setFirstName("")
     setLastName("")
     setEmail("")
     setPhoneNo("")
     setMessage("")

     emailjs
       .sendForm(
         "service_6dcftcl",
         "template_tn47t7h",
         form.current,
         "xXXDVK6yF08pFp4cR"
       )
       .then(
         (result) => {
          alert("Email Sent Successfully")
         },
         (error) => {
           console.log(error.text);
         }
       );
   };
  return (
    <>
      <h1 id="message" className="text-[30px] mdl:text-[25px] sm:text-[20px] xs:text-[15px] dark:text-my-light text-my-dark text-center dark:bg-my-dark bg-my-light ">
        Write me a Message!
      </h1>
      <div className="flex dark:bg-my-dark bg-my-light pt-10 sm:block pb-16">
        <div className="w-1/2 sm:w-full">
          <img src={images.contact} alt="footer" />
        </div>
        <div className="w-1/2 mr-3 sm:w-full">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex justify-between sm:flex-col sm:items-center">
              <input
                className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3 w-[49%] sm:w-11/12"
                placeholder="Your First Name"
                name="user_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoComplete="off"
              />
              <input
                className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3 w-[49%] sm:w-11/12 "
                placeholder="Your Last Name"
                name="user_lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="flex justify-between sm:flex-col sm:items-center">
              <input
                className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3 w-[49%] sm:w-11/12"
                placeholder="Your Email"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
              <input
                className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3 w-[49%] sm:w-11/12"
                placeholder="Your Phone Number"
                type="tel"
                maxLength={10}
                name="phone_no"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col sm:items-center">
              <textarea
                rows={10}
                className="dark:bg-my-black-1 bg-my-light border dark:border-my-black-1 border-my-gray-2 rounded-lg w-full outline-none font-poppins dark:text-my-light text-my-gray-2 text-base mt-4 px-4 py-3 sm:w-11/12"
                placeholder="Your Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                autoComplete="off"
              />
              <input
                className={`border dark:border-my-black-1 border-my-gray-2 rounded-lg outline-none font-poppins text-my-light text-base mt-4 px-4 py-3 w-full sm:w-11/12 cursor-pointer `}
                style={{ backgroundColor: bgColor }}
                type="submit"
                maxLength={10}
                name="Send"
                disabled={disabled}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactMe;