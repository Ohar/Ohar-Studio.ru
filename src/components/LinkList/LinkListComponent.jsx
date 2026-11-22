import { Link } from "@/components/NextLink"
import React from "react"
import PropTypes from "prop-types"

const LinkListComponent = ({list}) => (
  list && list.length
    ? <ul>
      {
        list.map(
          ({ url, text, subList }) => (
            <li key={url}>
              <Link to={url}>
                {text}
              </Link>
              {
                subList && subList.length
                  ? <LinkListComponent list={subList}/>
                  : null
              }
            </li>
          ),
        )
      }
    </ul>
    : null
)

LinkListComponent.defaultProps = {
  list: [],
}

LinkListComponent.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    text: PropTypes.string,
    subList: PropTypes.array,
  })),
}

export default LinkListComponent
