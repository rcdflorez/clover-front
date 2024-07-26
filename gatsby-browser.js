import "./src/styles/global.css";

export const onClientEntry = () => {
  const Aldrich = document.createElement("link");
  Aldrich.href =
    "https://fonts.googleapis.com/css2?family=Aldrich&display=swap";
  Aldrich.rel = "stylesheet";
  document.head.appendChild(Aldrich);

  const Varela = document.createElement("link");
  Varela.href =
    "https://fonts.googleapis.com/css2?family=Varela+Round&display=swap";
  Varela.rel = "stylesheet";
  document.head.appendChild(Varela);
};
