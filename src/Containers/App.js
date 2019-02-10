import React, {Component} from 'react';
import CardList from '../Components/CardList';
import SearchHolder from '../Components/SearchHolder';
import './App.css';
import Scroll from '../Components/Scroll';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(usersDB => {this.setState({robots:usersDB})})
  }

  onSearchChange = (event) => {
    this.setState({searchField: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return (robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
    })
    return(
    <div>
      <div className='tc'>
        <h2>Robots Friends</h2>
        <SearchHolder searchInput={this.onSearchChange}/>
      </div>
      <div className='tc' id='robocards'>
        <Scroll>
          <CardList robos={filteredRobots}/>
        </Scroll>
      </div>
    </div>
  );
}
}
export default App;
