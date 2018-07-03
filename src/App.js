import * as React from 'react';
import Header from './components/Header';
import Comments from './components/Comments';

import users from './fixtures/users.json';
import comments from './fixtures/comments.json';

import './styles/components/App.scss';

class App extends React.Component {

  state = {
    userId: 1,
    userName: null,
    profileImageURL: null,
    userLocation: {
      city: null,
      country: null
    },
    likes: 0,
    following: 0,
    followers: 0,
    profileURL: window.location.href
  }

  componentDidMount = () => {
    try {
      const currentUser = users
      .filter(user => user.id === this.state.userId);
      this.setState(() => ({
        userName: currentUser[0].name,
        profileImageURL: currentUser[0].profileImageURL,
        userLocation: {
          city: currentUser[0].location.city,
          country: currentUser[0].location.country
        },
        likes: currentUser[0].engagement.likes,
        following: currentUser[0].engagement.following,
        followers: currentUser[0].engagement.followers,
        comments: comments.length
      }));
    } catch(e) {
      // Do nothing at all ;)
    }
  }

  addLikes = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1
    }));
  };

  addFollowers = () => {
    this.setState(prevState => ({
      followers: prevState.followers + 1
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="topBackground" />
        <Header 
          userName={ this.state.userName }
          profileImageURL={ this.state.profileImageURL }
          profileURL={ this.state.profileURL }
          userLocation={ this.state.userLocation }
          likes={ this.state.likes } 
          following={ this.state.following }
          followers={ this.state.followers }
          handleAddLikes={ this.addLikes }
          handleAddFollowers={ this.addFollowers }
        />
        <Comments />
      </div>
    );
  }
}

export default App;
