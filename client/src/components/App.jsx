import React from 'react';
import axios from 'axios';
import Amenity from './Amenity';
import Description from './Description';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const listing = window.location.pathname.slice(1, window.location.pathname.length - 1);

    axios.get(`/listing/${listing}`)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((err) => {
        throw err;
      });
  }

  render() {
    const { data } = this.state;
    const { amenity, description } = data;
    return (
      <div>
        <Description description={description} />
        <Amenity amenity={amenity} />
      </div>
    );
  }
}


export default App;
