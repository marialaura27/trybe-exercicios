const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
      const deliveryPerson = order.order.delivery.deliveryPerson;
      const name = order.name;
      const phone = order.phoneNumber;
      const street = order.address.street;
      const num = order.address.number;
      const ap = order.address.apartment;
      return console.log(`Olá, ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, R. ${street}, N: ${num}, AP: ${ap},`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
      const newName = order.name;
      const pizzas = Object.keys(order.order.pizza);
      const drink = order.order.drinks.coke.type;
      const total = order.payment.total = 50;


      return console.log(`Olá, ${newName}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drink} é R$${total},00.`);
  }
  
orderModifier(order);
 