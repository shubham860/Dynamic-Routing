import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Shop extends React.Component {

  componentDidMount(){
    axios
      .get(`https://fortnite-api.theapinetwork.com/upcoming/get`,{headers : {'Authorization':'7299d8feb2f5eadccc6c8b0efadeddd9'}})
      .then(response =>{
          console.log(response.data)
          var item = response.data
          console.log(item.data[0].item.name)
      })
      .catch(error => {
          alert(error)
        })
      }
  render () {
     return(
       <div class='container'>
        <div class='row'>
            <table class="centered highlight">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Item Name</th>
                          <th>Item Price</th>
                      </tr>
            </thead>

            <tbody>
              
            </tbody>
            </table>
        </div>
       </div>
     )
  }
}

export default Shop;
