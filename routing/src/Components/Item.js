import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Item extends React.Component {
  constructor({match}){
    super()
    this.state = {
      item : {data : {item: {images : {},ratings:{}}}},
      id : match.params.id
    }
 }

  componentDidMount(){
    axios
      .get(`https://fortnite-api.theapinetwork.com/item/get?id=${this.state.id}`,{headers : {'Authorization':'7299d8feb2f5eadccc6c8b0efadeddd9'}})
      .then(response =>{
          this.setState({
            item : response.data,
          })
      })
      .catch(error => {
          alert(error)
        })

    }

  render () {
    const {item} = this.state

    console.log()
    console.log(item)
     return(
       <div class='container'>
        <div class='row'><br/><br/>
           <img src={item.data.item.images.icon} class='res' />
           <h3>{item.data.item.name}</h3>
        </div>
       </div>
     )
  }
}

export default Item;
