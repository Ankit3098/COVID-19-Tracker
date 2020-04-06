import React, { Component } from "react";
import { CountryPicker, Chart, Cards } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./Api";
import corona from "./images/image.png";
import Typography from "@material-ui/core/Typography";
class App extends Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data: fetchedData,
    });
  }
  handleChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country: country,
    });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img src={corona} alt="COVID-19" className={styles.image} />
        <CountryPicker handleChange={this.handleChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <Typography variant="body1" color="textPrimary">
          Api Use 'https://covid19.mathdro.id/api'
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Created By Ankit, Inspired From Javascript Mastery
        </Typography>
      </div>
    );
  }
}

export default App;
