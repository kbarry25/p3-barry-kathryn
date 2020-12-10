


const foods = [['images/krabbypatty.png', 'Krabby Patty'], ['images/kelpshake.png', 'Kelp Shake'], ['images/prettypatty.png', 'Pretty Patty'], ['images/pizza.png', 'Krusty Krab Pizza'], ['images/kiddie.png', 'Kiddie Meal'], ['images/chum.png', 'Chum Stick'], ['images/sundae.png', 'Goofy Goober Sundae'], ['images/kelp.png', 'Kelp Flakes'], ['images/kelpjerky.png', 'Kelp Jerky'], ['images/fishfood.png', 'Fish Food']];

function random_item()
  {
    return foods[Math.floor(Math.random()*foods.length)];
  }

class Lunch {

    constructor(foods, foodImage) {
      this.foods = foods;
      this.foodImage = foodImage;
    }

    changeFoods() {
      document.getElementById('foodButton').addEventListener('click', ()=>{
        const food = random_item();
      document.getElementById('foodname').innerHTML = food[1];
      document.getElementById('foodimg').src = food[0];
      });
    }



};

export const lunch = new Lunch(foods[0][1], foods[0][0]);
