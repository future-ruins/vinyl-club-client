import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './images/headset-24px.svg';
import LoginFormContainer from './components/LoginFormContainer';
import SignupFormContainer from './components/SignupFormContainer';
import RecordsBoardContainer from './components/RecordsBoardContainer';
import RecordPageContainer from './components/RecordPageContainer';
import UserCollectionContainer from './components/UserCollectionContainer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <header className='App-header'>
            <Link to='/records-board'>
              <img
                className='icon'
                height='30px'
                alt='app logo'
                src={logo}></img>
            </Link>
          </header>

          <Route
            path='/records-board'
            exact
            component={RecordsBoardContainer}
          />
          <Route path='/' exact component={LoginFormContainer} />
          <Route path='/login' exact component={LoginFormContainer} />
          <Route path='/signup' exact component={SignupFormContainer} />
          <Route path='/record/:id' component={RecordPageContainer} />
          <Route
            path='/user/:id/records'
            exact
            component={UserCollectionContainer}
          />

          <footer>
            <br />
            <Typography variant='body2' color='textSecondary' align='center'>
              {'Copyright © Vinyl Club '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </footer>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
