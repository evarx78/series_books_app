import React from 'react'
class Contact extends React.Component {
    render() {

        return (
            <div>
                <h1>Contact</h1>
                <p>I am currently seeking for my first job as Front End Dev</p>
                <form onSubmit>
                    <div>
                        <label>Your firstname</label>
                        <input />
                    </div>
                    <div>
                        <label>Your lastname</label>
                        <input />
                    </div>
                    <div>
                        <label>Your message</label>
                        <input />
                    </div>
                    <button type='submit'>Send </button>
                </form>
            </div>
        )
    }
}
export default Contact