

var groceryList=[
  {
    name: "cheerios",
    price: 3.00
  },
  {
    name: "bread",
    price: 2.00
  },
  {
    name: "milk",
    price: 2.50
  },
  {
    name: "eggs",
    price: 1.50
  }
];

function addOne(){
  var newItemName = document.getElementbyId('itemName').value;
  var newItemPrice = document.getElementbyId('itemPrice').value;

  var obj ={
    name: newItemName,
    price: newItemPrice,
  };
  
groceryList.push(obj);
}

for ( var i =0; i < groceryList.length; i++ ){
  console.log(groceryList[i].name +  " $"  +  groceryList[i].price.toFixed(2));

var printedList = document.createElement('div');

printedList.innerHTML = groceryList[i].name + " $"  +  groceryList[i].price.toFixed(2);

document.body.appendChild(printedList);



}

groceryList.totalAmount = function(){

  var total = 0;
  for(var i =0; i < groceryList.length; i++){
    total = total + groceryList[i].price;
  }

return total.toFixed(2);
};

/*var total= 0;
groceryList.forEach(function(item){
  total += item.price;
})*/

var printedTotal = document.createElement('div');

printedTotal.innerHTML = "Total $" + groceryList.totalAmount();

document.body.appendChild(printedTotal);








/*console.log("Total: $" + total.toFixed(2));*/





