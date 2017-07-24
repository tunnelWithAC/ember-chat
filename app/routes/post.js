import Ember from 'ember';
const { Route, set } = Ember;

export default Route.extend({

  userFromParams: null,
  upvoted: false,
  downvoted: false,

  setupController(controller, model){
    set(controller, 'posts', model)
  },

  model(params) {
    this.set('userFromParams', params.user_name);
    //console.log(params.user_name);

    //var message = this.store.find('person', { name: "Peter" });

    return this.store.findAll('post');

  },

  actions: {

    createMessage(message) {
      let newRecord = this.store.createRecord('post', {
        text: message,
        from: 'test',
        votes: 0
      });

      newRecord.save();

      this.controller.set('textMessageFromInput', '');
    }
  }

});
