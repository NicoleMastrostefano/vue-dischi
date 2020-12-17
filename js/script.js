var app = new Vue (
  {
    el:"#root",
    data: {
      albums:[]

    },

    mounted:function(){

      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((result)=>this.albums = result.data.response);
    }

  }
)

    // "poster": "https://",
    // "title": "Steve Gadd Band",
    // "author": "Steve Gadd Band",
    // "genre": "Jazz",
    // "year": "2018"
