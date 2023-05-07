import { computed, ref } from 'vue'
import { useStore } from '@/store';
//import Street from '../components/Street/Default'
import mapComponents from '../components/roadComponents'
// import router from '@/router'

export default {
  name: 'Map',
  components: {
    ...mapComponents
  },
  props: {
  },
  setup () {
    const store = useStore()
    const loading = ref(false)
    const task = ref({})
    const list = computed(() => {
      return store.state.list
    })
    const pageName = computed(() => {
      return store.state.pageName
    })
    const cellsLeft = ref([
      {
        title: 'Бесплатная парковка',
        type: 'Parking'
      },
      {
        title: 'Рублёвское шоссе',
        type: 'street',
        color: '#F7941D',
        price: 200
      },
      {
        title: 'Ул. Вавилова',
        type: 'street',
        color: '#F7941D',
        price: 200
      },
      {
        title: 'Общественная казна',
        type: 'chest'
      },
      {
        title: 'Рязанский проспект',
        type: 'street',
        color: '#F7941D',
        price: 200
      },
      {
        title: 'Курская Железная дорога',
        type: 'station',
        price: 200
      },
      {
        title: 'Ростовская наб.',
        type: 'street',
        color: '#D93A96',
        price: 200
      },
      {
        title: 'Ул. Сретенка',
        type: 'street',
        color: '#D93A96',
        price: 200
      },
      {
        title: 'Электричество',
        type: 'service',
        price: 200
      },
      {
        title: 'Ул. Полевая',
        type: 'street',
        color: '#D93A96',
        price: 200
      },
      {
        title: 'Посетители',
        type: 'Visit'
      },
    ])
    const cellsRight = ref([
      {
        title: 'В тюрьму',
        type: 'Jail'
      },
      {
        title: 'ул. щусева',
        type: 'street',
        color: '#1FB25A',
        price: 200
      },
      {
        title: 'Гоголевский бульвар',
        type: 'street',
        color: '#1FB25A',
        price: 200
      },
      {
        title: 'Общественная казна',
        type: 'chest'
      },
      {
        title: 'Кутузовский проспект',
        type: 'street',
        color: '#1FB25A',
        price: 200
      },
      {
        title: 'Ленинградская железная дорога',
        type: 'station',
        price: 200
      },
      {
        title: 'Шанс',
        type: 'chance',
      },
      {
        title: 'Ул. Малая бронная',
        type: 'street',
        color: '#225AE9',
        price: 200
      },
      {
        title: 'Сверх налог',
        type: 'service',
        price: 200
      },
      {
        title: 'Ул. Арбат',
        type: 'street',
        color: '#225AE9',
        price: 200
      },
      {
        title: 'Вперед',
        type: 'Start'
      },
    ])
    const cellsTop = ref([
      {
        title: 'Ул. Тверская',
        type: 'street',
        color: '#ED1B24',
        price: 200
      },
      {
        title: 'Шанс',
        type: 'chance'
      },
      {
        title: 'Пушкинская ул.',
        type: 'street',
        color: '#ED1B24',
        price: 200
      },
      {
        title: 'Проспект Маяковского',
        type: 'street',
        color: '#ED1B24',
        price: 200
      },
      {
        title: 'Калужская железная дорога',
        type: 'station',
        price: 200
      },
      {
        title: 'Ул. Грузинский Вал',
        type: 'street',
        color: '#FFF101',
        price: 200
      },
      {
        title: 'Ул. Чайковского',
        type: 'street',
        color: '#FFF101',
        price: 200
      },
      {
        title: 'card',
        type: 'service',
        price: 200
      },
      {
        title: 'Смоленская площадь',
        type: 'street',
        color: '#FFF101',
        price: 200
      },
    ])
    const cellsBottom = ref([
      {
        title: 'Первая парковая ул.',
        type: 'street',
        color: '#AAE0FA',
        price: 200
      },
      {
        title: 'ул. Огарева',
        type: 'street',
        color: '#AAE0FA',
        price: 200
      },
      {
        title: 'Шанс',
        type: 'chance'
      },
      {
        title: 'Варшавское шоссе',
        type: 'street',
        color: '#AAE0FA',
        price: 200
      },
      {
        title: 'Рижская железная дорога',
        type: 'station',
        price: 200
      },
      {
        title: 'Подоходный налог',
        type: 'taxi'
      },
      {
        title: 'Нагатинская',
        type: 'street',
        color: '#965336',
        price: 200
      },
      {
        title: 'card',
        type: 'service',
        price: 200
      },
      {
        title: 'Житная ул.',
        type: 'street',
        color: '#965336',
        price: 200
      },
    ])
    return {
      loading,
      list,
      task,
      pageName,
      cellsLeft,
      cellsRight,
      cellsTop,
      cellsBottom
    }
  }
};
