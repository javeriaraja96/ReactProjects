import React from 'react'

const headerStyle = {
    backgroundColor : 'mediumblue',
    color : '#fff',
}

const Header = ({title}) => {
  return (
    <header style={headerStyle}>
        <h1> {title}</h1>
    </header>
  )
}

Header.defaultProps = {
    title : 'Default title'
}

export default Header
 