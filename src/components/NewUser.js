import { Component } from "react";

class NewUser extends Component {
    constructor() {
        super();
        console.log("New User Constructor called")
    }

    componentDidMount() {
        console.log("New User is mounted");
    }

    render() {
        console.log("New User is rendered");
        return (<div>New User Component</div>);
    }
}

export default NewUser;