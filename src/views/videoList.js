  var VideoListView = Backbone.View.extend({


  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //loop through every element in data
    //render one entry view
    //pass the data to entry View

    console.log('this.collection',this.collection);

    this.$el.children().append(
      this.collection.map(function(video) {
        return new VideoListEntryView( {model: video} ).render().el;
      })
    );
    return this;
    // return this.$el.html([
    //     this.videoListEntryView.$el;
    //   ]);
  },

  template: templateURL('src/templates/videoList.html')

});
