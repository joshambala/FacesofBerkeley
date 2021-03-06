import React, { Component } from "react";
import LogOut from "../../components/LogOut";
import SearchBar from "../../components/SearchBar";
// import Container from "../components/Grid/Container";
// import UserBar from "../components/Nav/NavComponents/UserBar";
import Col from "../../components/Grid/Col";
import Row from "../../components/Grid/Row";
// import Jumbotron from "../components/Jumbotron";
import NavLinks from '../../components/NavLinks';
import Post from '../../components/Post';
import ListOfPosts from '../../components/ListOfPosts';
import Weather from '../../components/Weather';
import Calendar from '../../components/Calendar';
import ToDo from '../../components/ToDo';
import "./User.css";



class User extends Component {

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {

  };

  render() {
    return (
      <div>

        <div className="nav">
          <SearchBar />
          <NavLinks className="friends" text="Friends" />
          <NavLinks text="Followers" />
          <NavLinks text="Profile" />
          <LogOut />
        </div>
        <div>
        <Row>
        <Col xs={6} size='md-4' md={4}>
         <Weather />
         <Calendar />
         <ToDo />
        </Col>
        <Col xs={12} size="md-8" md={8}>

          <Post />

          <ListOfPosts />

        </Col>
        </Row>
        </div>

    </div>



    );
  }
}

export default User;