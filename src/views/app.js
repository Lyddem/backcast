  var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);

    this.listenTo(this.videos, 'sync', this.selectFirst);
    // this.videos.search('surfboards');

    this.render();

  },

  selectFirst: function() {
    if (this.videos.length > 0) {
      this.videos.at(0).select();
    }
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({collection: this.videos, el: this.$('.list')}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
