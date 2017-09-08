var Videos = Backbone.Collection.extend({

  model: Video,

  url: 'https://www.googleapis.com/youtube/v3/search',


  search: function(data) {
    this.fetch({ //fetch
        data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: data,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      }
    });

  },

  parse: function(res) {
    return res.items;
  }

});
