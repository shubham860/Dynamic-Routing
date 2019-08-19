import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Item extends React.Component {

  constructor({match}){
    super({match})
    this.state = {
      item : {match}
    }
  }

  componentDidMount(){
    axios
      .get(`https://fortnite-api.theapinetwork.com/item/get?id=${this.state.item.params.id}`)
      .then(response =>{

          // console.log(item.data[0].item.name)
      })
      .catch(error => {
          alert(error)
        })
      }
  render () {
    const {item} = this.state
     return(
       <div class='container'>
        <div class='row'>

        </div>
       </div>
     )
  }
}

export default Item;
