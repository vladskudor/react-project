import React, { Component } from 'react'

export default class Fcomponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentWillMount() {
    fetch('https://api.auto.ria.com/categories/1/marks')
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result
        })
      },
      (error) =>{
        this.setState({
          isLoaded: true,
          error: error
        });
        console.error(error)
      }
      
      )
  }

  render() {
    const  {items} = this.state;
    return (
      <div>
        <h1 className='block-title'>
            Value {this.props.value}
        </h1>
        <div>
          <ul>
            {items.map((item , index) => (
              <li style={{color: 'red'}} key={index}>
                  {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
