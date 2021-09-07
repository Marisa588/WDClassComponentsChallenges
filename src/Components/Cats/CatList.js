import React, { Component } from 'react';
 
class CatList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.cats.map(cats => <ul>{cats}</ul>)}
      </div>
    )
  }
}
 
export default CatList;
