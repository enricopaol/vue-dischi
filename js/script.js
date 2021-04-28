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
                    
                    // I order the array of objects by year
                    const arrayAlbumsOrdered = result.response.sort((a, b) => {
                        return parseInt(a.year) - parseInt(b.year)
                    })     
                    
                    // I set the albums array = arrayAlbumsOrdered
                    this.albums = arrayAlbumsOrdered;

                    
                    // To get an array with the genres of albums
                    const arrayGenres= [];
                    arrayAlbumsOrdered.forEach((element) => {
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