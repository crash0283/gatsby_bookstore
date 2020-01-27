import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import icons from "glyphicons"

import indexStyles from "../styles/index.module.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulBook(sort: { fields: title }) {
        edges {
          node {
            price
            slug
            author
            overview {
              overview
            }
            title
            yearPublished(formatString: "YYYY")
            coverImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
      file(relativePath: { eq: "stars.jpeg" }) {
        childImageSharp {
          fluid(duotone: { highlight: "#BAF1EB", shadow: "#28464B" }) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <div
        style={{
          position: "relative",
          height: "100px",
          width: "100%",
          marginBottom: "1rem",
        }}
      >
        <h3
          style={{
            position: "absolute",
            zIndex: "10",
            color: "white",
            letterSpacing: "5px",
            borderBottom: "1px solid white",
            width: "50%",
            padding: "0 1rem",
          }}
        >
          Best Sellers
        </h3>
        <Img
          fluid={data.file.childImageSharp.fluid}
          alt="bk"
          style={{ maxHeight: "100%" }}
        />
      </div>
      <div className={indexStyles.grid}>
        {data.allContentfulBook.edges.map(({ node }, i) => {
          return (
            <div key={i} className={indexStyles.container}>
              <Link to={`/${node.slug}`}>
                <Img fluid={node.coverImage.fluid} alt="book" />
              </Link>
              <h6 style={{ margin: "1rem 0 0 0" }}>
                <Link
                  to={`/${node.slug}`}
                  style={{
                    backgroundImage: "none",
                    textShadow: "none",
                    margin: 0,
                  }}
                >
                  {node.title}
                </Link>
              </h6>
              <p style={{ marginBottom: "1rem", fontSize: "0.8rem" }}>
                ({node.yearPublished})
              </p>
              <h5 style={{ fontStyle: "italic", color: "grey", margin: 0 }}>
                by <br /> {node.author}
              </h5>
              <p style={{marginTop: "1rem", color: "grey", fontStyle: "italic"}}>Our Low Price: ${node.price}</p>
              <h4>
                <Link to="/">
                  Add to Cart <span>{icons.shoppingTrolley}</span>
                </Link>
              </h4>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}

export default IndexPage
