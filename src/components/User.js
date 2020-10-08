import React from 'react'
import { withRouter } from 'react-router';

class User extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    handleInput = (event) => this.setState({ value: event.target.value });

    handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("pseudo", this.state.value);
        this.props.history.push("/home");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Create a new user: </label>
                        <input type="text" value={this.state.value} required onChange={this.handleInput} placeholder="Type here" />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

// export default User
export default withRouter(User);
