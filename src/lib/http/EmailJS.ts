import emailjs from "@emailjs/browser";

export const sendEmail = (data: string) => {
  emailjs
    .sendForm("service_jsq2qan", "template_vgbeey9", data, "9gBzGQX7FH7943vtA")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
};
