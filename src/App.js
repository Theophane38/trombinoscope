import React from 'react';
import people from './assets/datas/people.json';
import './App.css';

class Main extends React.Component {

  constructor() {
    super()

    this.state = {

      allData: people,
      allServices: this.getServices(people)
    }
  }

  getServices(data) {
    let service = {}
    for (let i = 0; i < data.length; i++) {
      if (typeof service[data[i].service] === 'undefined') {
        service[data[i].service] = []
      }
      service[data[i].service].push({
        firstname: data[i].firstname,
        lastname: data[i].lastname,
        level: data[i].level,
        location: data[i].location,
      })
    }
    console.log(service)
    return (service)
  }

  peopleLvl1(data) {
    let tabLvl1 = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].level === 1) {
        tabLvl1.push (
          <div className= 'manger'>
            <p>{data[i].lastname} {data[i].firstname}</p>
            <p>{data[i].location}</p>
          </div>
        )
      }
    }
    return (tabLvl1)
  }

  trombinoscope() {
    let services = this.state.allServices
    let tabTrombino = []
    for (let i in services){
      console.log(i)
      let peopleLevel2 = []
      let peopleLevel3 = []
      for (let j = 0; j < services[i].length; j++){
        console.log(services[i][j].level)
        if (services[i][j].level === 2){
          peopleLevel2.push(
            <div className= 'people'>
              <p>{services[i][j].lastname} {services[i][j].firstname}</p>
              <p>{services[i][j].location}</p>
            </div>
          )
        } else if (services[i][j].level === 3){
          console.log('test')
          peopleLevel3.push(
            <div className= 'people'>
              <p>{services[i][j].lastname} {services[i][j].firstname}</p>
              <p>{services[i][j].location}</p>
            </div>
          )
        }
      }
      console.log(peopleLevel3)
      tabTrombino.push(
        <div className={i + ' serviceContainer'}>
          <div className='level2'>
            {peopleLevel2}
          </div>
          <div className='level3'>
            {peopleLevel3}
          </div>
        </div>
      )
    }
    return tabTrombino
  }


  render() {
    return (
      <div className='Main'>
        <div className='Level1'>
          {this.peopleLvl1(this.state.allData)}
        </div> 
        {this.trombinoscope()}
      </div>
      )
  }

}

export default Main;
