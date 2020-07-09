import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "hero-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center ">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h2>Hey, I'm Verina</h2>
            <h4> Software Developer, Aspiring Entrepreneur, AI Ethusiast</h4>
            {/* <p>
              My goal is to use technology to create social impact and make
              people's lives better
            </p> */}
            <Link to="/contact" className="btn">
              Contact me!
            </Link>
            <SocialLinks />
          </div>
        </article>
        {/* <Image
          fluid={fluid}
          className="hero-img"
          style={{ maxWidth: "400px", maxHeight: "350px", borderRadius: "80%" }}
        ></Image> */}
      </div>
    </header>
  )
}

export default Hero
