var app = new Vue(
    {
        el: '#root',
        data: {
            albums: []
        },
        methods: {

        },
        mounted() {
            axios
                .get('https://flynn.boolean.careers/exercises/api/array/music')
                .then((response) => {
                    let result = response.data;
                    this.albums = result.response;
                    console.log(this.albums)
                })
        }
    }
);