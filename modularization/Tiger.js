class Tiger {
    constructor(){
        this.strenght = Math.floor(Math.random() * 100);
    }

    growl(){
        console.log('grrrr');
    }
}

module.export = Tiger;