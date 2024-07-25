import './src/styles/global.css';

export const onClientEntry = () => {
  const link = document.createElement("link")
  link.href ="https://fonts.googleapis.com/css2?family=Aldrich&display=swap"
  link.rel = "stylesheet"
  document.head.appendChild(link)
}

export const onClientEntryOne = () => {
  const link = document.createElement("link")
  link.href ="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
  link.rel = "stylesheet"
  document.head.appendChild(link)
}