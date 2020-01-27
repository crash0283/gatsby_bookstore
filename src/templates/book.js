import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import bookStyles from "../styles/book.module.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBook(slug: { eq: $slug }) {
      title
      yearPublished(formatString: "YYYY")
      slug
      author
      overview {
        overview
      }
      coverImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const Book = props => {
  return (
    <div className={bookStyles.container}>
      <div style={{width: "30%", margin: "0 auto"}}>
        <Img fluid={props.data.contentfulBook.coverImage.fluid} alt="book" />
      </div>
      <h3>{props.data.contentfulBook.title}</h3>
      <h5>({props.data.contentfulBook.yearPublished})</h5>
      <h5>by {props.data.contentfulBook.author}</h5>
      <hr className={bookStyles.hr} />
      <p>Overview:</p>
      <p>{props.data.contentfulBook.overview.overview}</p>
      <Link to="/" className={bookStyles.link}>
        &larr; Back to Home
      </Link>
    </div>
  )
}

export default Book
