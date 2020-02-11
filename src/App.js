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
          <div className= 'PeopleLvl1'>
            <p>{data[i].lastname} {data[i].firstname}</p>
            <p>{data[i].location}</p>
          </div>
        )
      }
    }
    return (tabLvl1)
  }

  peopleLvl2(data) {
    let tabLvl2 = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].level === 2) {
        tabLvl2.push (
          <div className= 'PeopleLvl2'>
            <p>{data[i].lastname} {data[i].firstname}</p>
            <p>{data[i].location}</p>
          </div>   
        )
      }
    }
    return (tabLvl2)
  }

  peopleLvl3(data) {
    let tabLvl3 = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].level === 3) {
        tabLvl3.push (
          <div className= 'PeopleLvl3'>
            <p>{data[i].lastname} {data[i].firstname}</p>
            <p>{data[i].location}</p>
          </div>   
        )
      }
    }
    return (tabLvl3)
  }

  render() {
    return (
      <div className='Main'>
        <div className='Level1'>
          {this.peopleLvl1(this.state.allData)}
        </div>
        <p><font size="10">&darr;</font></p>
        <div className='Level2'>
          {this.peopleLvl2(this.state.allData)}
        </div>
        <p><font size="10">&darr;</font></p>
        <div className='Level3'>
          {this.peopleLvl3(this.state.allData)}
        </div>
      </div>
      )
  }

}

export default Main;
