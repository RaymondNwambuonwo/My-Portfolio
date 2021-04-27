import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { SocialIcon } from "react-social-icons";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div>
      <h2 className="text-center text-5xl">Contact Me</h2>
      <div className="container rounded-lg mx-auto opacity-80 my-20 shadow-inner border-double border-2 border-silver-500 bg-white">
        <div className="p-5 space-y-5 shadow-xl">
          <h4 className="text-center text-3xl">
            Lets Chat, Send Me A Message!
          </h4>

          <form className="rounded-lg" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="email"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                cols="10"
                rows="5"
                className="border border-gray-500 px-4 py-2 focus:outline-none focus:border-blue-500 col-span-2"
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              className="focus:outline-none mt-5 bg-blue-500 px-4 py-2 text-white font-bold w-full"
              style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            />
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-evenly">
        <SocialIcon
          url="https://www.instagram.com/raythedev_/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/raymondnwambuonwo/"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="https://github.com/RaymondNwambuonwo"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 40, width: 40 }}
        />
        <SocialIcon
          url="mailto:raymondnwambuonwo@gmail.com"
          className="mr-4"
          target="_blank"
          fgColor="#fff"
          style={{ height: 40, width: 40 }}
        />
      </div>
    </div>
  );
}

export default Contact;
