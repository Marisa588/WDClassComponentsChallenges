import React from 'react';
import {Input, Button} from 'reactstrap';
 

class SearchIndex extends React.Component {
  constructor(props) {
    super(props)
  
   this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
    //  filtered: []
    serchTerm: '',
   };
  //  this.handleChange = this.handleChange.bind(this);
  }
 
searchFunction(e) {
  this.setState({ searchTerm: e.target.value });
}
//  handleChange(e) {
//    let currentThings = [];
//    let newThings = [];

//    if (e.target.value !== "") {
//      currentThings = this.props.item;
//      newThings = currentThings.filter(item => {
//        const lc = item.toLowerCase();
//        const filter = e.target.value.toLowerCase();
//        return lc.includes(filter);
//      });
//    } else {
//      newThings = this.props.item;
//    }
//    this.setState({
//      filtered: newThings
//    });
//  }

//  componentDidMount() {
//    this.setState({
//      filtered: this.props.items
//    });
//  }

//  componentDidUpdate(nextProps) {
//    this.setState({
//      filtered: nextProps.items
//    });
//  }

 render() {
   return (
     <div>
       <Input 
       placeholder='Search' 
       id='searchTerm'
       type='search'
       onChange={(e) => this.searchFunction(e)}
       />
       <Button type ='submit' onClick={() => this.handleChange()}>Submit</Button>
       <h3>
         Results:
         {this.state.things
          .filter((item) => item.includes(this.state.searchTerm))
          .map((product) => (
            <li>{product}</li>
          ))}
       </h3>
     </div>
   )
 }
}
 
export default SearchIndex;
