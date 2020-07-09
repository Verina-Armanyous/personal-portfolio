import React from "react"
import { FaLinkedin, FaGithub, FaEnvelopeSquare } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/Verina-Armanyous",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/verina-armanyous/",
  },
  {
    id: 3,
    icon: (
      <a
        href="mailto:verina.armanyous@minerva.kgi.edu"
        style={{ textDecoration: "none" }}
      >
        <FaEnvelopeSquare
          className="social-icon"
          style={{ textDecoration: "none" }}
        />
      </a>
    ),
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
