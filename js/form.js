class Form{
    constructor(){
       this.input = createInput("Name:");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

    }
    display() {
        
        this.title.html("FRUIT CATCHER");
        this.title.position(width/2 - 100, - 10);
        this.title.style('font-size', '30px');
        this.title.style('color', 'orangered');
        this.input.position(width/2 - 100,height/2);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(width/2 - 40, height/2 + 100);
        this.button.style('width', '80px');
        this.button.style('height', '30px');
        this.button.style('background', 'lightpink');
        this.reset.position(width - 90, height - 20);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width/2 - 100,height/2);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');

        });

        this.reset.mousePressed(() => {
            
            player.updateCount(0);
            game.update(0);
            
        });

    }
}