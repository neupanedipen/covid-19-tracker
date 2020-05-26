import React from 'react';
import SearchCountry from './components/SearchCountry'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className='title'>Covid 19 Tracker App</h1>
        <SearchCountry />
        <strong><a href="https://neupanedipendra.com.np/simple-covid-19-tracker-app-with-react-js/" >See Full Documentation at my blog</a></strong>
      </div>
    );
  }
}

export default App;