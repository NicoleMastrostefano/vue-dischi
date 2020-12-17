var app = new Vue (
  {
    el:"#root",
    data: {
      albums:[]

    },

    // methods: {
    //   sortedArray(){
    //   return this.albums.sort((a, b) => a.year - b.year );
    //   }
    // },

    mounted:function(){
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((result)=>{
          this.albums = result.data.response;
          this.albums.sort((a, b) =>
          a.year - b.year )
        })
    },

})
    // "poster": "https://",
    // "title": "Steve Gadd Band",
    // "author": "Steve Gadd Band",
    // "genre": "Jazz",
    // "year": "2018"
