import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#931621`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h3 style={{ margin: 0}}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              textShadow: "none",
              backgroundImage: "none",
            }}
          >
            {siteTitle}
          </Link>
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
