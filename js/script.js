var app = new Vue(
    {
        el: '#root',
        data: {
            albums: [],
            genres: [],
            selectedGenre: 'all',
            filteredAlbums: []
        },
        methods: {
            filterByGenre() {     
                console.log('filtrati')                           ;
                let thisGenre = this.selectedGenre;
                this.filteredAlbums = this.albums.filter((element) => {
                    return thisGenre == 'all' || element.genre == thisGenre                    
                });            
            }
        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    let result = response.data;
                    this.albums = result.response;
                    
                    // To get an array with the genres of albums
                    const arrayGenres= [];
                    result.response.forEach((element) => {
                        if(!arrayGenres.includes(element.genre)) {
                            arrayGenres.push(element.genre)
                        }
                    })
                    this.genres = arrayGenres;

                    this.filterByGenre();
                })
        }
    }
);