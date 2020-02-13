import React from 'react';
import people from './assets/datas/people.json';
import maxime from './assets/images/maxime.jpg'
import './App.css';
import { MapInteractionCSS } from 'react-map-interaction';
import People from './components/People.js'
import Popup from "reactjs-popup";


class Main extends React.Component {

  constructor() {
    super()

    this.state = {
      scale: 0.2,
      translation: {x: -680, y:20},
      allData: people,
      allServices: this.getServices(people)
    }
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
          <People services={data[i]} />
        )
      }
    }
    return (tabLvl1)
  }

  trombinoscope() {
    let services = this.state.allServices
    let tabTrombino = []
    for (let i in services){
      let peopleLevel2 = []
      let peopleLevel3 = []
      for (let j = 0; j < services[i].length; j++){
        if (services[i][j].level === 2){
          peopleLevel2.push(
            <People services={services[i][j]} />
          )
        } else if (services[i][j].level === 3){
          peopleLevel3.push(
            <People services={services[i][j]} />
          )
        }
      }
      peopleLevel3.push(
        <div className= 'addPeople'>
          +
        </div>
      )
      tabTrombino.push(
        <div className={i + ' serviceContainer'}>
          <h2>{i}</h2>
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

  getNbServices(){
    let size = 0
    for (let key in this.state.allServices) {
      size++;
    }
    return size;
  }


  render() {
    const { scale, translation } = this.state;
    console.log(scale)
    let nbServices = this.getNbServices()
    let width = nbServices * (1840 + 150)
    console.log(scale)
    console.log(translation)
    console.log('yMax:' + 100*scale, 'xMax:' + 100*scale, 'yMin:' + 100*scale, 'xMin:' + -6000*scale)
    return (
      <div>
        <Popup trigger={<button className="button"> Open Modal </button>} modal>
    {close => (
      <div className="modal">
        <a className="close" onClick={close}>
          &times;
        </a>
        <div className="header"> Modal Title </div>
        <div className="content">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
          Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
          delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
          <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur sit
          commodi beatae optio voluptatum sed eius cumque, delectus saepe repudiandae
          explicabo nemo nam libero ad, doloribus, voluptas rem alias. Vitae?
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> Trigger </button>}
            position="top center"
            closeOnDocumentClick
          >
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              magni omnis delectus nemo, maxime molestiae dolorem numquam
              mollitia, voluptate ea, accusamus excepturi deleniti ratione
              sapiente! Laudantium, aperiam doloribus. Odit, aut.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log("modal closed ");
              close();
            }}
          >
            close modal
          </button>
        </div>
      </div>
    )}
  </Popup>
      <MapInteractionCSS
        scale={scale}
        translation={translation}
        minScale={0.2}
        maxScale={1.2}
        translationBounds={({yMax: 100*scale, xMax: 100*scale, yMin:100*scale, xMin: -5800*scale})}
        onChange={({ scale, translation }) => this.setState({ scale, translation })}
      >
        <div className='Main' style={{width: width}}>
          <div className='Level1'>
            
            {this.peopleLvl1(this.state.allData)}
          </div> 
          {this.trombinoscope()}
        </div>
      </MapInteractionCSS>
      </div>
    )
  }

}

export default Main;
