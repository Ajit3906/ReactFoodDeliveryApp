import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("Child constructor is called");
    this.state = {
      name: "",
      bio: "",
      avatar_url: "",
      count: 0,
    };
  }

  async componentDidMount() {
    console.log("Child component is mounted");
    const data = await fetch("https://api.github.com/users/Ajit3906");
    const json = await data.json();
    this.setState({
      name: json.name,
      bio: json.bio,
      avatar_url: json.avatar_url,
    });
  }

  componentDidUpdate() {
    console.log("Child component is updated");
  }

  render() {
    console.log("Child render is called");
    const { name, avatar_url, bio, count } = this.state;

    return (
      <div>
        <h2>Developed By</h2>
        <h3>Name: {name}</h3>
        <img src={avatar_url}></img>
        <h3>Info: {bio}</h3>
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
