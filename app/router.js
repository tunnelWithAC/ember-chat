import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('chat', { path: '/chat/:user_name' } );
  this.route('login');
  this.route('signup');
  this.route('post');
  this.route('protected');
  this.route('profile');
  this.route('conversation', { path: '/conversation/:convID' });
  //this.resource('profile', { path: '/profile/:username' });
});

export default Router;
