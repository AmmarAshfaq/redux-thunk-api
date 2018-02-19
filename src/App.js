import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getData } from './store/actions/action'
// import Hello from './store/hello'

class App extends Component {
  getInfo = () => {
    this.props.getDataVal();
  }
  render() {
    console.log("All Data: ", this.props.storeData)
    // const { title ,id} = this.props.storeData
    // let array = Object.keys(this.props.storeData)
    // console.log(array)
    let array = [];
    array.push(this.props.storeData)
    console.log(array)
    return (
      <div className="App">

        <button onClick={this.getInfo.bind(this)}>Information</button>
        <div>
        {
        
          array.map((data, ind) => {
            return (<div key={data.id}>
              <h1>{data.title}</h1>
              <h1>{ "Body :"+data.body}</h1>
              {/* {console.log(data.id)} */}
            </div>)
          })
        }
        </div>
      
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    storeData: state.reducerData.state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    getDataVal: () => {
      
      dispatch(getData())
    }
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);