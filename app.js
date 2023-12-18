const app = Vue.createApp({
    data() {
        return {
            seatState:{
                sold:{
                    text:"Sold",
                    color:"#ff0000"
                },
                available:{
                    text:"Available",
                    color:"#fff"

                },
                selected:{
                    text:"Selected",
                    color:"#00ff00"
                },
                booked:{
                    text:"Bocked",
                    color:'gray'
                }
            }
            
        }
    },

    methods: {
        
    },
})

app.mount("#app")