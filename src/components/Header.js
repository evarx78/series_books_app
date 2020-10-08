import React from 'react'
class Header extends React.Component {

    render() {
        console.log("hello")
        return (
            <header>
                <h4>SERIES AND BOOKS</h4>
                <p>Welcome {localStorage.getItem('pseudo')} </p>
            </header>)
    }
}
export default Header