import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});


const baseURL = 'http://localhost:3000/tasks';



export const api = {
  gettask: (async _id => {
    const res = await axios.get(baseURL + _id);
    return res.data;
  }),
  gettasks: (async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deletetask: (async _id => {
    const res = await axios.delete(baseURL + _id);
    return res.data;
  }),
  createtask: (async payload => {
    const res = await axios.post(baseURL, payload);
    return res.data;
  }),
  updatetask: (async payload => {
    const res = await axios.put(baseURL + payload._id, payload);
    return res.data;
  })
};