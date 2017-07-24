import Ember from 'ember';

export default Ember.Route.extend({

  userFromParams: null,

  model(params) {
    Ember.Logger.log(params.convID);
    //this.set('userFromParams', params.username);
    //console.log(params.user_name);
    //return this.store.findAll('post');
    /*
     this.set('userFromParams', params.user_name);
     //console.log(params.user_name);

     var message = this.store.find('person', { name: "Peter" });


     return this.store.findAll('post');
     */
    return this.store.findAll('user');
  }

});
