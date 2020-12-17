var app = new Vue (
  {
    el:"#root",
    data: {
      albums:[],
      genres:[],
      selectedGenre:''
    },

    mounted:function(){
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((result)=>{
          this.albums = result.data.response;
          // Bonus 1
          this.albums.sort((a, b) => a.year - b.year )
          // Bonus 2
          this.albums.forEach(
          (album) => {
            if(!this.genres.includes(album.genre)) {
              this.genres.push(album.genre);
            }
          });
        }
      )
    },

    // methods: {
    //   filterGenres: function() {
    //     this.albums.forEach(
    //     (element) => {
    //       if(!this.genres.includes(element.genre)) {
    //         this.genres.push(element.genre);
    //       }
    //     });
    //   },
    // }
    //   sortedArray(){
    //   return this.albums.sort((a, b) => a.year - b.year );
    //   }
    // },
  }
)
