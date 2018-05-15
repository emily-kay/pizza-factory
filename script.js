class Order {
    constructor (order){
        this.order = order;
    }
    getTotal(){
        let total = 0;
        for (let pizza of this.order){
            total += pizza.pizzaCost();
        }
        return total;
    }
    getPizzas(){
        for(let pizza of this.order){
            console.log(pizza);
        }
    }
};

class Pizza{
    constructor (ingredients = []){
        this.ingredients = ingredients;
        this.ingredients.push('cheese');
    }
    pizzaCost (){
        return (this.ingredients.length - 1) * 0.99 + 10;
    }
};



const cheesePizza = new Pizza();
const pepsausPizza = new Pizza(['pepperoni','sausage']);

console.log(cheesePizza);
console.log(pepsausPizza);
console.log(cheesePizza.pizzaCost());
console.log(pepsausPizza.pizzaCost());

const firstOrder = new Order ([cheesePizza, pepsausPizza])

console.log(firstOrder);
console.log(firstOrder.getTotal());
firstOrder.getPizzas();
