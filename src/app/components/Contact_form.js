"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Fahne from "../../../public/images/Fahne.webp";
import Key from "../../../public/images/Key.webp";
import Tree from "../../../public/images/Tree.webp";
import airoplain from "../../../public/images/airoplain.svg";
import heart from "../../../public/images/heart.svg";
import home from "../../../public/images/home.svg";
import star from "../../../public/images/star.svg";
import tea from "../../../public/images/tea.svg";
import truck from "../../../public/images/truck.svg";

const iconData = [
  { value: "Herz", label: " den  Herz", image: heart },
  { value: "Tasse", label: " den  Tasse", image: tea },
  { value: "Stern", label: " den  Stern", image: star },
  { value: "LKW", label: " den  LKW", image: truck },
  { value: "Schlüssel", label: " den  Schlüssel", image: Key },
  { value: "Haus", label: " den  Haus", image: home },
  { value: "Flugzeug", label: " den  Flugzeug", image: airoplain },
  { value: "Baum", label: " den  Baum", image: Tree },
  { value: "Fahne", label: " den  Fahne", image: Fahne },
];
const getRandomItems = (array, count) => {
  let shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
const LoadingDots = () => {
  return (
    <section className="dots-container">
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </section>
  );
};

const Contact_form = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const [errorMessage, setErrorMessage] = useState(null);
  const [Success, setSuccess] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVerified, setIsVerified] = useState(false);
  const [errors, setErrors] = useState({});
  const [correctAnswer, setcorrectAnswer] = useState(null);
  const [randomIcons, setRandomIcons] = useState([]);
  const [randomLabel, setRandomLabel] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    Therapie: "",
    subject: "",
    message: "",
    email: "",
    selectedIcon:""
  });


  useEffect(() => {
    const selectedIcons = getRandomItems(iconData, 3);
    setRandomIcons(selectedIcons);

    // Pick the label from one of the selected icons as the correct answer
    const randomLabelItem =
      selectedIcons[Math.floor(Math.random() * selectedIcons.length)];
    setRandomLabel(randomLabelItem.label);
    setcorrectAnswer(randomLabelItem.label);
    setLoading(false); // Store the correct answer
  }, []);


  const validateForm = () => {
    let formErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) formErrors.name = "Füll bitte dieses Feld aus.";
    if (!formData.phone.trim())
      formErrors.phone = "Füll bitte dieses Feld aus.";
    if (!formData.Therapie.trim())
      formErrors.Therapie = "Füll bitte dieses Feld aus.";
    if (!formData.subject.trim())
      formErrors.subject = "Füll bitte dieses Feld aus.";
    if (!formData.message.trim())
      formErrors.message = "Füll bitte dieses Feld aus.";
    if (!formData.email.trim()) {
      formErrors.email = "Füll bitte dieses Feld aus.";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    }

    if (formData.selectedIcon !== correctAnswer) {
      formErrors.selectedIcon = `Bitte wählen Sie das ${randomLabel} Symbol aus.`;
    }


    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const endpoint =
    process.env.NEXT_PUBLIC_SENDER_MAIL || "https://formspree.io/f/mnnjpeda";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    } else {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSuccess("Nachricht erfolgreich gesendet");
        setFormData({
          name: "",
          phone: "",
          Therapie: "",
          subject: "",
          message: "",
          email: "",
          selectedIcon:""
        });
        setErrors({});
        setSelectedImage(null);
        setIsVerified(false); // Clear validation errors
      } else {
        setErrorMessage(`Nachricht konnte nicht gesendet werden: ${result.message}`);
      }
    }
  };

  return (
    <section className="pb-14 lg:pb-20 2xl:pb-100" id="contact-form">
      <div className="container">
        <div className="grid lg:grid-cols-2 bg-yellow text-white gap-8 sm:gap-16 p-4 sm:py-12 sm:px-9 rounded lg:rounded-2xl 3xl:rounded-3xl">
          <div>
            <h2 className="mb-4">
              Sie wollen einen Termin vereinbaren oder haben Fragen?
            </h2>
            <span className="w-28 h-1 bg-white block mb-6"></span>
            <p>
              Schreiben Sie uns und wir melden uns so schnell wie möglich bei
              Ihnen zurück.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="wpcf7-form">
            <div className="f-fild">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="text-red-500">{errors.name}</p>}
            </div>
            <div className="grid gap-x-5 sm:grid-cols-2">
              <div className="f-fild">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail*"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="f-fild">
                <input
                  type="number"
                  name="phone"
                  placeholder="Telefon"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}
              </div>
            </div>
            <div className="f-fild">
              <input
                type="text"
                name="Therapie"
                placeholder="Wann haben Sie am besten Zeit für Ihre Therapie?"
                value={formData.Therapie}
                onChange={handleInputChange}
              />
              {errors.Therapie && (
                <p className="text-red-500">{errors.Therapie}</p>
              )}
            </div>
            <div className="f-fild">
              <input
                type="text"
                name="subject"
                placeholder="Betreff"
                value={formData.subject}
                onChange={handleInputChange}
              />
              {errors.subject && (
                <p className="text-red-500">{errors.subject}</p>
              )}
            </div>
            <div className="f-fild">
              <textarea
                name="message"
                placeholder="Ihre Nachricht"
                rows="3"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
              {errors.message && (
                <p className="text-red-500">{errors.message}</p>
              )}
            </div>

            <p>
              Informationen zum Datenschutz bzgl. Ihrer Anfrage finden Sie hier:{" "}
              <Link href="/datenschutzerklarung">
                <span className="text-black">Datenschutzerklärung</span>
              </Link>
            </p>
            {/* 🔥 Custom reCAPTCHA Image Selection */}

            <div className="mt-4">
              <p>
                Sind Sie ein Mensch? Dann wählen Sie bitte{" "}
                <strong>{randomLabel}</strong>.
              </p>
              <div className="flex gap-2 mt-2 item-center">
                {loading ? ( // Check if loading
                  <LoadingDots /> // Show loading dots
                ) : (
                  randomIcons.map((icon, i) => (
                    <label key={i} className="cursor-pointer">
                      <input
                        type="radio"
                        name="selectedIcon"
                        value={icon.label}
                        checked={formData.selectedIcon === icon.label}
                        onChange={handleInputChange}
                        className="hidden peer"
                      />
                      <div className="p-1 peer-checked:border-2 peer-checked:border-orange-500">
                        <Image
                          src={icon.image}
                          alt={icon.label}
                          width={25}
                          height={25}
                        />
                      </div>
                    </label>
                  ))
                )}
              </div>
              {errors.selectedIcon && (
                <p className="text-red-500 text-sm mt-2 ">
                  {errors.selectedIcon}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="wpcf7-submit mt-4">
              Nachricht senden
            </button>
            {Success && (
              <div className="success-message border-green-500">
                <p className="text-green-700 py-4">
                  Ihre Nachricht wurde erfolgreich gesendet!
                </p>
              </div>
            )}

            {errorMessage && (
              <div className="border-red-500">
                <p className="text-red-700 py-4">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact_form;