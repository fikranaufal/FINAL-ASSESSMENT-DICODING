// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [ ];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    totalPrice = totalPrice + items[i].price;
  };

  orders.push({
    id : generateUniqueId(),
    customerName,
    items,
    totalPrice,
    status : "Menunggu"
  });
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === orderId) {
      return orders[i].status = status;
    };
  };
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const indexOrderisDone = [];
  let totalRevenue = 0;

  for (let i = 0; i < orders.length; i++) {
    if (orders[i].status == 'Selesai')
      indexOrderisDone.push(i);
  };

  for (const j of indexOrderisDone) {
    totalRevenue = totalRevenue + orders[j].totalPrice;
  };

  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  for (let i = 0; i < orders.length; i++) {
    if (orders[i].id === id) {
      return orders.splice(i,1);
    };
  };
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
