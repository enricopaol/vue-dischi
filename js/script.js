var app = new Vue(
    {
        el: '#root',
        data: {
            albums: [],
            genres: [],
            selectedGenre: 'Seleziona',
            filteredAlbums: []
        },
        methods: {
            filterByGenre() {                                
                let thisGenre = this.selectedGenre;
                const filteredAlbums = this.albums.filter((element) => {
                    return element.genre == thisGenre;
                });
                this.filteredAlbums = filteredAlbums;                
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
                })
        }
    }
);