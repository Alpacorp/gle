/* eslint-disable @next/next/no-img-element */
import { FC } from 'react';

interface ContactEmailProps {
  city?: string;
  phone?: string;
  department?: string;
  cv?: string;
  position?: string;
  lang?: string;
  name?: string;
  email?: string;
}

import './styles.css';

export const OursEmail: FC<ContactEmailProps> = ({
  position,
  city,
  phone,
  department,
  cv,
  lang,
  name,
  email,
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
          {lang === 'es' ? 'Correo de notificación' : 'Notification email'}
        </h1>
        <div>
          <p>
            {lang === 'es'
              ? 'A continuación se relacionan los datos ingresados por un usuario a través del formulario de registro en la página de Nosotros, sección Formulario de Vacantes:'
              : 'Below are the data entered by a user through the registration form on the About Us page, Vacancies Form section'}
          </p>
          <ul className="list">
            <li>
              {lang === 'es' ? 'Nombre completo' : 'Full name'}: {name}
            </li>
            <li>
              {lang === 'es' ? 'Correo electrónico' : 'Email address'}: {email}
            </li>
            <li>
              {lang === 'es' ? 'Departamento' : 'Department'}: {department}
            </li>
            <li>
              {lang === 'es' ? 'Ciudad' : 'City'}: {city}
            </li>
            <li>
              {lang === 'es' ? 'Cargo al que aplica' : 'Position applied for'}:{' '}
              {position}
            </li>
            <li>
              {lang === 'es' ? 'Teléfono' : 'Phone'}: {phone}
            </li>
            <li>
              {lang === 'es' ? 'Hoja de vida' : 'CV'}: {cv}
            </li>
          </ul>
        </div>
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
