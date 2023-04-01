import React, { Component } from 'react'
import axios from 'axios';

export default class List extends Component {
  constructor() {
    super()
      this.state = {
        data: []
      };
      this.getData = this.getData.bind(this);
      this.sendWeight = this.sendWeight.bind(this);
  }

    getData(){
        return new Promise((resolve) => {
            fetch('http://localhost:9000/exercises')
                .then(res => res.json())
                .then((res) => {
                    this.setState({data: [...res]});
                    console.log(this.state.data);
                    localStorage.setItem('dataBackend', JSON.stringify(res));
                    resolve(res);
                })
        });

    };

  async sendWeight(item) {
    item.body.weight = 200;
    try {
      await axios.put(`http://localhost:9000/exercises`, item);
    } 
    catch (err) {
      console.log(err);
    }
  }


    render() {
    return (
      <div>
        <div onClick={this.getData}>
            List
        </div>
          {this.state.data && this.state.data.map((item , index) => (
              <div key={index}>
                  <div onClick={() => {
                      this.sendWeight(item);
                  } }>
                      {item._id}
                  </div>
              </div>
          ))}
      </div>
    )
  }
}
