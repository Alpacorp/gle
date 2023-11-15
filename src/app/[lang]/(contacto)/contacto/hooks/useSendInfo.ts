export const useSendInfo = ({
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
      sendEmail("admin", "contact");
      setTimeout(() => {
        sendEmail("user", "contact");
      }, 5000);
      reset();
    } else {
      alert(`Por favor verifica ✅ el código captcha para continuar.`);
    }
  };

  const sendEmail = async (destination: string, origin: string) => {
    const send = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify({ ...formValues, lang, destination, origin }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const response = await send.json();

    if (destination === "admin" && response.error === null) {
      alert(
        lang === "es"
          ? "Registro enviado con éxito, recibirá un correo de confirmación"
          : "Registration sent successfully, you will receive a confirmation email"
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
