class Character  {
    #life
    constructor(name){
        this.name = name
        this.#life = 1
        this.maxLife = 1 
        this.attack = 0
        this.defense = 0
    }

    get life() {
        return this.#life
    }

    //enviar a nova vida do char
    //verificado para que a vida não fique inferior a 0
    set life(newLife){
        this.#life = newLife < 0 ? 0 : newLife
        // ? - if
        // : - else
    }
}

module.exports = Character