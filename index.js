var orders = [{
  price : 35,
  ordination : "birra,patate",
  status : "new",
  token : "pippo"
  id : 1
},
{
  price : 45,
  ordination : "cocacola,patate",
  status :"closed",
  token : "caio",
  id : 2
},
  {
    price :80,
    ordination : "aranciata, mele",
    status :"ready",
    token : "pippo",
    id : 3
},
{
    price : 98,
    ordination : "carne,polpette",
    status : "new",
    token : "sempronio",
    id : 4

}]
var closed = [];
var ready = [];
var news = [];
var backup = JSON.parse(JSON.stringify(orders));
exports.allorders = function(){
  return orders;
}
exports.addorders = function(newOrder) {
    var lastorderId = orders[orders.length - 1].id;
    orders.push({
      ordination: newOrder.ordination,
      id: ordersCounter++,
      token: newOrder.token,
      price: newOrder.price,
      status: "new"
    })
  }
  exports.delete = function(id){
  for (var index in orders) {
    var order = orders[index];
    if (order.id == id) {
      return orders.splice(index, 1);
    }
  }
  return null;
}
exports.setOrderReady = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "ready";
      ready.push(orders[index])
      news.splice(orders[index])
    }
  }
}

exports.setOrderClosed = function (id) {
  for (var index in orders) {
    if (orders[index].id == id) {
      orders[index].status = "closed";
      closed.push(orders[index])
      ready.splice(orders[index])
    }
  }
}
var showOrdersAs = function (status) {
    if (status == "new") {
        return news;
    } else if (status == "ready") {
        return ready;
    } else if (status == "closed") {
      return closed;
    }
  }
console.log(exports.setOrderClosed(1));
console.log(exports.allorders());
