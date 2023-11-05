/* eslint-disable @next/next/no-img-element */
import { FC } from "react";

interface ContactEmailProps {
  lang: string;
  destination: string;
  fullname?: string;
  email?: string;
  subject?: string;
  message?: string;
}

import "./styles.css";

export const ContactEmail: FC<ContactEmailProps> = ({
  lang,
  destination,
  fullname,
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
        <h1>
          {lang === "es" ? "Correo de notificación" : "Notification email"}
        </h1>
        {destination === "admin" && (
          <div>
            <p>
              {lang === "es"
                ? "A continuación se relacionan los datos ingresados por un usuario a través del formulario de registro en la página de Contáctanos:"
                : "Below are the data entered by a user through the registration form on the Contact Us page:"}
            </p>
            <ul className="list">
              <li>
                {lang === "es" ? "Nombre completo" : "Full name"}: {fullname}
              </li>
              <li>
                {lang === "es" ? "Correo electrónico" : "Email address"}:{" "}
                {email}
              </li>
              <li>
                {lang === "es" ? "Asunto" : "Subject"}: {subject}
              </li>
              <li>
                {lang === "es" ? "Mensaje" : "Message"}: {message}
              </li>
            </ul>
          </div>
        )}
        {destination === "user" && (
          <div>
            <p>
              {lang === "es"
                ? `Sr.(a) ${fullname}, hemos recibido su requerimiento de '${subject}' por intermedio formulario web que se dispone en la página web de G.L.E, ésta será gestionada por Grupo Logístico Especializado dentro de los tiempos establecidos por los entes regulatorios. Cualquier inquietud comunicarse al número 3102695133.`
                : `Dear user ${fullname}, we have received your requeriment '${subject}' through the web form available on the G.L.E website, this will be managed by Grupo Logístico Especializado within the times established by the regulatory entities. Any questions, please call 3102695133.`}
            </p>
            <p>
              {lang === "es"
                ? "Los datos registrados en su registro fueron:"
                : "The data registered in your registration were:"}
            </p>
            <ul className="list">
              <li>
                {lang === "es" ? "Nombre completo" : "Full name"}: {fullname}
              </li>
              <li>
                {lang === "es" ? "Correo electrónico" : "Email address"}:{" "}
                {email}
              </li>
              <li>
                {lang === "es" ? "Asunto" : "Subject"}: {subject}
              </li>
              <li>
                {lang === "es" ? "Mensaje" : "Message"}: {message}
              </li>
            </ul>
          </div>
        )}
      </div>
      <br />
      <div className="footer">
        © {new Date().getFullYear()}. G.L.E. Grupo Logístico Especializado,
        Bogotá, Colombia.
      </div>
      <br />
      <br />
    </section>
  );
};
