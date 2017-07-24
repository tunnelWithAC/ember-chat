import Ember from 'ember';
const { Logger } = Ember;

export default Ember.Controller.extend({

  init: function(){
    this._super();

  },

  actions: {
    upvote(post, index){
      post.incrementProperty('votes', 1);
      post.set('upvoted',true);
      post.set('downvoted',false);
      post.set('uservote',{ Bob: "downvote"});
      Logger.log('Model:',post.get('uservote.Bob'));

      let usrv = post.get('uservote.Bob');
      post.save();

    },

    downvote(post){
      post.decrementProperty('votes', 1);
      post.set('downvoted',true);
      post.set('upvoted',false);
      post.save();

    }
  }

});
