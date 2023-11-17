export const useSendInfoOurs = ({
  formValues,
  lang,
  reCaptchaToken,
  reset,
  setStatusLoading,
}: {
  formValues: any;
  lang: string;
  reCaptchaToken: string;
  reset: any;
  setStatusLoading: any;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (reCaptchaToken) {
      setStatusLoading(true);
      sendEmail("admin", "ours");
      reset();
    } else {
      alert(`Por favor verifica ✅ el código captcha para continuar.`);
    }
  };

  const sendEmail = async (destination: string, origin?: string) => {
    const send = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({
        ...formValues,
        lang,
        destination,
        origin,
        subject: lang === "es" ? "Formulario Vacantes" : "Vacancies Form",
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await send.json();

    if (destination === "admin" && response.error === null) {
      alert(
        lang === "es"
          ? "Registro enviado con éxito, en caso de ser seleccionado(a) nos comunicaremos contigo. Gracias."
          : "Registration sent successfully, in case of being selected we will contact you. Thank you."
      );

      setStatusLoading(false);
    } else if (destination === "admin" && response.error !== null) {
      alert(
        lang === "es"
          ? "Error al enviar el registro, por favor intente nuevamente"
          : "Error sending the registration, please try again"
      );
      setStatusLoading(false);
    }
  };
  return { handleSubmit };
};
