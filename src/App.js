import React from 'react';
import people from './assets/datas/people.json';
import './App.css';

class Main extends React.Component {

  constructor() {
    super()

    this.state = {

      allData: people,
    }
  }

  peopleLvl1(data) {
    let tabLvl1 = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].level === 1) {
        tabLvl1.push (
          <div className='level1'>
            <p>{data[i].lastname} {data[i].firstname}</p>
            <p>{data[i].location}</p>
          </div>
        )
      }
    }
    return (tabLvl1)
  }

  render() {
    return (
      <div className='Main'>
        {this.peopleLvl1(this.state.allData)}
      </div>
      )
  }

}

export default Main;
