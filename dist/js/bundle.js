(()=>{"use strict";const e=new class{constructor(e,o){this.logo=e,this.title=o}}("images/logo1.png","KRUSTY KRAB LUNCH GENERATOR"),o=new class{constructor(e,o){this.footerContent=e,this.logo2=o}}("CLICK TO GENERATE A NEW MEAL","images/logo2.png"),t=[["images/krabbypatty.png","Krabby Patty"],["images/kelpshake.png","Kelp Shake"],["images/prettypatty.png","Pretty Patty"],["images/pizza.png","Krusty Krab Pizza"],["images/kiddie.png","Kiddie Meal"],["images/chum.png","Chum Stick"],["images/sundae.png","Goofy Goober Sundae"],["images/kelp.png","Kelp Flakes"],["images/kelpjerky.png","Kelp Jerky"],["images/fishfood.png","Fish Food"]],n=new class{constructor(e,o){this.foods=e,this.foodImage=o}changeFoods(){document.getElementById("foodButton").addEventListener("click",(()=>{const e=t[Math.floor(Math.random()*t.length)];document.getElementById("foodname").innerHTML=e[1],document.getElementById("foodimg").src=e[0]}))}}(t[0][1],t[0][0]);new class{constructor(){this.renderTemplate(),n.changeFoods()}renderTemplate(){const t=`\n          <img src=${e.logo}></img>\n          <h1>${e.title}</h1>\n          <img id="foodimg" src=${n.foodImage}></img>\n          <p id="foodname">${n.foods}</p>\n          <button id='foodButton'>GENERATE MEAL</button>\n          <h2>${o.footerContent}</h2>\n          <img src=${o.logo2}></img>\n      `;document.body.innerHTML=t}}})();