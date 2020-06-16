import React from "react";

class Albumlist extends React.Component {
  state = {
    albumlist: null,
  };

  async componentDidMount() {
    const response = await fetch("http://jsonplaceholder.typicode.com/albums");
    const data = await response.json();

    console.log(data);
    data.map((data) => console.log(data.userId))
    console.log(data);
    // const responseUser = await fetch("http://jsonplaceholder.typicode.com/users");
    // const dataUser = await response.json();

    const responses = await Promise.all(
      data.map((form) => console.log(form))
    );

    console.log(responses);

    // const forms = await Promise.all(responses.map((response) => response));

    const albumlist = data;
 
    // console.log(forms);
    this.setState({ albumlist });
  }

  render() {
    if (this.state.albumlist === null) {
      return "...load...";
    }
    return (
      <ul>
        {this.state.albumlist.map((form) => (
          <li key={form.id}>{form.title}</li>
        ))}
      </ul>
    );
  }
}

export default Albumlist;
