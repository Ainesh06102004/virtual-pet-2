class Food{
    constructor(){
        this.foodStock;
        this.lastfed;
        this.image = loadImage("images/Milk.png");
    }
    display(){
       var x = 80;
       var y = 100;

       imageMode(CENTRE);
       image(this.image,720,220,70,70);

       if(this.foodStock != 0){
           for(var i = 0; i < this.foodStock; i++){
               if(i%10 === 0){
                   x = 80;
                   y = y + 50;
               }
               image(this.image,x,y,50,50);
               x = x +50;
           }
         
       }
    }

    getfoodstock(){
       var foodstockref = database.ref('Food');
       foodstockref.on("value", (data)=>{
           foodStock = data.val();
       }); 
    }

    updatefoodstock(count){
        database.ref('/').update({
            Food: count
        });
    }

    deductfoodstock(){
        var foodref = "dog" + this.foodStock;
        database.ref(foodref).set({
            foodStock: this.foodStock,
            lastfed: this.lastfed
        });
    }
    
}