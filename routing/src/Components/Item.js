import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Item extends React.Component {
  constructor({match}){
    super()
    this.state = {
      item : [],
      id : match.params.id
    }
    console.log(this.state.id)
 }

  componentDidMount(){
    axios
      .get(`https://fortnite-api.theapinetwork.com/item/get`,{params:{'id':`${this.state.id}`}}/{headers : {'Authorization':'7299d8feb2f5eadccc6c8b0efadeddd9'}})
      .then(response =>{
          this.setState({
            item : response.data.data
          })
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
