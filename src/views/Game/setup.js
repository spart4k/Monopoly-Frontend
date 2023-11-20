import {} from 'vue';
//import { useStore } from '@/store';

import Todo from '@/components/@logic/todo/default'
import Map from '@/components/@logic/Map/Default'
import BarLeft from '@/components/@logic/Bar/Left/Default'
import BarRight from '@/components/@logic/Bar/Right/Default'
import Own from '@/components/@logic/Own/Default'
import PlayerInfo from '@/components/@logic/PlayerInfo/Default'

export default {
  name: 'Game-View',
  components: {
    Todo,
    Map,
    BarLeft,
    BarRight,
    Own,
    PlayerInfo
  },
  props: {
  },
  setup() {
    let wsConnection = null
    wsConnection = new WebSocket("ws://192.168.0.102:3000");
    wsConnection.onopen = () => {
        //alert("Соединение установлено.");
    };
    wsConnection.onmessage = (event) => {
      const data = JSON.parse(event.data)
      console.log(data)
      if (data.event === 'add-user') {
        //messages.value.push(data.payload.result)
      }
      if (data.event === 'start') {
        //messages.value = data.payload.message
      }
      if (data.event === 'remove-user') {
        console.log(data.payload)
        if (data.payload.result === 200) {
          //const el = messages.value.find(el => el._id === data.payload._id)
          //console.log(el)
          //const index = messages.value.indexOf(el)
          //messages.value.splice(index, 1)
        }
      }
      if (data.event === 'update-user') {
        console.log(data.payload)
        if (data.payload.result === 200) {
          //const el = messages.value.find(el => el._id === data.payload._id)
          //const index = messages.value.indexOf(el)
          //console.log(index)
          //messages.value[index].name = data.payload.user.name
          //messages.value[index].surname = data.payload.user.surname
        }
      }
    }
    //const store = useStore();
    console.log()
    console.log('init')
    return {
    };
  },
};
