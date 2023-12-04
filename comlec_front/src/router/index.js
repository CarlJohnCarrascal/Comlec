import { createRouter, createWebHistory } from 'vue-router'

import List from '../views/List.vue'
import Home from '../views/Home.vue'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
            path: '/',
            alias: '/home' ,
            component: List,
            meta: {
                title: "Home",
                button: "btn-home",
            }
        },
        { 
            path: '/voters', 
            component: List,
            meta: {
                title: 'List',
                button: "btn-dashboard",
            }
        }
      ]
  })

  export default router