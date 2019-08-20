import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Shop extends React.Component {

  constructor(){
    super()
    this.state = {
      items : []
    }
  }

  componentDidMount(){
    axios
      .get(`https://fortnite-api.theapinetwork.com/upcoming/get`,{headers : {'Authorization':'7299d8feb2f5eadccc6c8b0efadeddd9'}})
      .then(response =>{
          this.setState({
            items : response.data.data
          })
          // console.log(item.data[0].item.name)
      })
      .catch(error => {
          alert(error)
        })
      }
  render () {
    const {items} = this.state
     return(
       <div class='container'>
        <div class='row'>
            <table class="centered highlight">
                  <thead>
                      <tr>
                          <th>Items Name</th>
                          <th>Check Details</th>
                      </tr>
            </thead>
            <tbody>
              {
                items.map(name=>
                <tr key={name.itemId}>
                <td>{name.item.name}</td>
                <td><Link to={`/Shop/${name.itemId}`} class="waves-effect waves-light btn-small">Go</Link></td>
                </tr>
                 )
            }
            </tbody>
            </table>
        </div>
       </div>
     )
  }
}

export default Shop;
