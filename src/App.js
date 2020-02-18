import React from 'react';
import people from './assets/datas/people.json';
import maxime from './assets/images/maxime.jpg'
import './App.css';
import { MapInteractionCSS } from 'react-map-interaction';
import People from './components/People.js'
import Popup from "reactjs-popup";
import DetailsPeople from './components/DetailsPeople.js';



class Main extends React.Component {

  constructor() {
    super()

    this.state = {
      scale: 0.2,
      translation: {x: -680, y:20},
      allData: people,
      allServices: this.getServices(people)
    }
    this.onClickPeople = this.onClickPeople.bind(this)
  }

  getServices(data) {
    let service = {}
    for (let i = 0; i < data.length; i++) {
      if (data[i].service !== 'Manager'){
        if (typeof service[data[i].service] === 'undefined') {
          service[data[i].service] = []
        }
        service[data[i].service].push({
          firstname: data[i].firstname,
          lastname: data[i].lastname,
          level: data[i].level,
          location: data[i].location,
          service: data[i].service
        })
      }
    }
    return (service)
  }

  peopleLvl1(data) {
    let tabLvl1 = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].level === 1) {
        tabLvl1.push (
          <People onClickPeople={this.onClickPeople} services={data[i]} />
        )
      }
    }
    return (tabLvl1)
  }

  trombinoscope() {
    let services = this.state.allServices
    let tabTrombino = []
    for (let i in services){
      tabTrombino.push(
        <div className={i + ' serviceContainer'} onClick={() => this.onClickService(services[i], i)}>
          <h2>{i}</h2>
        </div>
      )
    }
    return tabTrombino
  }

  getNbServices(){
    let size = 0
    for (let key in this.state.allServices) {
      size++;
    }
    return size;
  }

  onClickPeople(value) {
   this.setState({
     isDetailPeopleExists: true,
     detailsCurrentPeople: value
   })
  }

  onClickService(service, name) {
    let tabPeople = []
    let peopleLevel2 = []
    let peopleLevel3 = []
    for (let j = 0; j < service.length; j++){
      if (service[j].level === 2){
        peopleLevel2.push(
          <People onClickPeople={this.onClickPeople} services={service[j]} />
        )
      } else if (service[j].level === 3){
        peopleLevel3.push(
          <People onClickPeople={this.onClickPeople} services={service[j]} />
        )
      }
    }
    tabPeople.push(
      <div className={name + 'people'}>
        <div className='level2'>
          {peopleLevel2}
        </div>
        <div className='level3'>
          {peopleLevel3}
        </div>
      </div>
    )
    this.setState({
      peopleInService : tabPeople,
    }) 
  } 


  render() {
    const { scale, translation } = this.state;
    console.log(scale)
    let nbServices = this.getNbServices()
    let width = nbServices * (1840 + 150)
    console.log(scale)
    console.log(translation)
    console.log('yMax:' + 100*scale, 'xMax:' + 100*scale, 'yMin:' + 100*scale, 'xMin:' + -6000*scale)
    let detailPeople = []
    if (this.state.isDetailPeopleExists){
      detailPeople =  <DetailsPeople value={this.state.detailsCurrentPeople} />
    } else {
      
    }
    return (
      <div>
        <MapInteractionCSS
          scale={scale}
          translation={translation}
          minScale={0.2}
          maxScale={1.2}
          onChange={({ scale, translation }) => this.setState({ scale, translation })}
        >
          <div className='Main' style={{width: width}}>
            <div className='Level1'>
              {this.peopleLvl1(this.state.allData)}
            </div> 
            {this.trombinoscope()}
            {detailPeople}
            {this.state.peopleInService}
          </div>
        </MapInteractionCSS>
      </div>
    )
  }

}

export default Main;
