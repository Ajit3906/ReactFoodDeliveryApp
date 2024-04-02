import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Child constructor is called");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.name + " Child component is mounted");
  }

  render() {
    console.log(this.props.name + " Child render is called");
    const { name, location } = this.props;
    const { count } = this.state;

    return (
      <div>
        <h2>Developed By</h2>
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: ajitpatare1@gmail.com</h3>
        <h3>Total Users: {count}</h3>
        <button onClick={() => {
          this.setState({
            count: this.state.count + 1,
          });
        }}>Add user</button>
      </div>
    );
  }
}

export default UserClass;
