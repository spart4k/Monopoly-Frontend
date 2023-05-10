const cards = {
  namespaced: true,
  state: {
    cards: [
      {
        street: 'orange',
        type: 'street',
        pos: 0,
        title: {
          text: 'Рублёвское шоссе',
          color: '#000',
          background: '#F7941D'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'orange',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Вавилова',
          color: '#000',
          background: '#F7941D'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'orange',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Вавилова',
          color: '#000',
          background: '#F7941D'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'station',
        pos: 0,
        title: {
          text: 'Курская Железная дорога',
          color: '#000',
          background: '#F7941D'
        },
        image: 'train',
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'purple',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ростовская наб.',
          color: '#fff',
          background: '#D93A96'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'purple',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Сретенка',
          color: '#fff',
          background: '#D93A96'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'service',
        name: 'lighting',
        pos: 0,
        title: {
          text: 'Электростанция',
        },
        image: 'lighting',
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          }
        ],
        price: 200,
        pledge: 50
      },
      {
        street: 'purple',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Полевая',
          color: '#fff',
          background: '#D93A96'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'green',
        type: 'street',
        pos: 0,
        title: {
          text: 'ул. Щусева',
          color: '#fff',
          background: '#1FB25A'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'green',
        type: 'street',
        pos: 0,
        title: {
          text: 'Гоголевский бульвар',
          color: '#fff',
          background: '#1FB25A'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'chest',
        pos: 0,
        text: 'У вас есть права выйти из тюрьмы',
        price: 200
      },
      {
        street: 'green',
        type: 'street',
        pos: 0,
        title: {
          text: 'Кутузовский проспект',
          color: '#fff',
          background: '#1FB25A'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'station',
        pos: 0,
        title: {
          text: 'Ленинградская железная дорога',
          color: '#000',
        },
        image: 'train',
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'chance',
        pos: 0,
        text: 'У вас есть права выйти из тюрьмы',
        price: 200
      },
      {
        street: 'blue',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Малая бронная',
          color: '#fff',
          background: '#225AE9'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'blue',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Арбат',
          color: '#fff',
          background: '#225AE9'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'red',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Тверская',
          color: '#fff',
          background: '#ED1B24'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'red',
        type: 'street',
        pos: 0,
        title: {
          text: 'Пушкинская ул.',
          color: '#fff',
          background: '#ED1B24'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'red',
        type: 'street',
        pos: 0,
        title: {
          text: 'Проспект Маяковского',
          color: '#fff',
          background: '#ED1B24'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'station',
        pos: 0,
        title: {
          text: 'Калужская железная дорога',
          color: '#000',
          background: '#F7941D'
        },
        image: 'train',
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'yellow',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Грузинский Вал',
          color: '#fff',
          background: '#FFF101'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'yellow',
        type: 'street',
        pos: 0,
        title: {
          text: 'Ул. Чайковского',
          color: '#fff',
          background: '#FFF101'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'yellow',
        type: 'street',
        pos: 0,
        title: {
          text: 'Смоленская площадь',
          color: '#fff',
          background: '#FFF101'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'service',
        name: 'water',
        pos: 0,
        title: {
          text: 'Водопровод',
        },
        image: 'water',
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          }
        ],
        price: 200,
        pledge: 50
      },
      {
        street: 'lightBlue',
        type: 'street',
        pos: 0,
        title: {
          text: 'Смоленская площадь',
          color: '#fff',
          background: '#AAE0FA'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'lightBlue',
        type: 'street',
        pos: 0,
        title: {
          text: 'ул. Огарева',
          color: '#fff',
          background: '#AAE0FA'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'lightBlue',
        type: 'street',
        pos: 0,
        title: {
          text: 'Варшавское шоссе',
          color: '#fff',
          background: '#AAE0FA'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        type: 'station',
        pos: 0,
        title: {
          text: 'Рижская железная дорога',
          color: '#000'
        },
        image: 'train',
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'brown',
        type: 'street',
        pos: 0,
        title: {
          text: 'Нагатинская',
          color: '#fff',
          background: '#965336'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
      {
        street: 'brown',
        type: 'street',
        pos: 0,
        title: {
          text: 'Житная ул.',
          color: '#fff',
          background: '#965336'
        },
        renta: 4,
        costs: [
          {
            count: 1,
            value: 20
          },
          {
            count: 2,
            value: 40
          },
          {
            count: 3,
            value: 120
          },
          {
            count: 4,
            value: 400
          }
        ],
        price: 200,
        hotelRentCost: 450,
        houseCost: 50,
        hotelCost: 200,
        pledge: 50
      },
    ],
    isShow: true
  },
  getters: {
    streets(state) {
      return state
    }
  },
  actions: {},
  mutations: {
    showMap(state, value) {
      state.isShow = value
    }
  },
}
export default cards
