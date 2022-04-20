const app = new Vue({
    el: '#root',
    data: {
      messaggio: "Hello World Vue!",
      immagine: "https://picsum.photos/id/",
      imgID: "1",
      imgSize: "/900/800",
      effect: " "
    },
    methods: {
       nextImmagine(){
            if(this.imgID<20){
                this.imgID++;
                
            }else{
                this.imgID = 1;
            }
       },
       prevImmagine(){
        if(this.imgID<2){
            this.imgID = 20;
        }else{
            this.imgID--;
        };
    }
    }
  })