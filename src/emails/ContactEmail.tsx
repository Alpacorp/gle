/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface ContactEmailProps {
  lang: string;
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

import "./styles.css";

export const ContactEmail: FC<ContactEmailProps> = ({
  lang,
  fullName,
  email,
  subject,
  message,
}) => {
  return (
    <section className="container">
      <br />
      <br />
      <div className="containerBody">
        <img
          src="https://upaledigital.com/GLE/gle-logo.png"
          width={200}
          alt="G.L.E. Grupo Logístico Especializado"
        />
        <br />
        <h1>
          {lang === "es" ? "Correo de notificación" : "Notification email"}
        </h1>
        <p>
          {lang === "es"
            ? "A continuación se relacionan los datos ingresados por un usuario a través del formulario de registro en la página de Contáctanos:"
            : "Below are the data entered by a user through the registration form on the Contact Us page:"}
        </p>
        <ul className="list">
          <li>
            {lang === "es" ? "Nombre completo" : "Full name"}: {fullName}
          </li>
          <li>
            {lang === "es" ? "Correo electrónico" : "Email address"}: {email}
          </li>
          <li>
            {lang === "es" ? "Asunto" : "Subject"}: {subject}
          </li>
          <li>
            {lang === "es" ? "Mensaje" : "Message"}: {message}
          </li>
        </ul>
      </div>
      <div className="footer">
        © {new Date().getFullYear()}. G.L.E. Grupo Logístico Especializado,
        Bogotá, Colombia.
      </div>
    </section>
  );
};
