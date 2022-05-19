import React, { useEffect, useState } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import coronaImage from "./assets/logo.png";

export class App extends React.Component {
  // function App() {
  // const [data, setData] = useState({});
  // const [country, setCountry] = useState("");

  // useEffect(() => {
  //   const fetchAPI = async () => {
  //     setData(await fetchData());
  //   };
  //   fetchAPI();
  // });

  // const handleCountryChange = async (country) => {
  //   const fetchedData = await fetchDataCountry(country);

  //   setData(fetchedData);
  //   setCountry(country);

  //   // this.setState({data: fetchedData, country: country})

  //   console.log(country);
  //   console.log(fetchedData);
  // };

  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    // console.log(country);
    // console.log(fetchedData);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
