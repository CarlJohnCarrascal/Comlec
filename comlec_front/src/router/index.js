import { createRouter, createWebHistory } from 'vue-router'

import List from '../views/List.vue'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'
import Map from '../views/Map.vue'
import ImportVoter from '../views/ImportVoter.vue'

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { 
            path: '/',
            alias: '/home' ,
            component: Home,
            meta: {
                title: "Home",
            }
        },
        { 
            path: '/voters', 
            component: List,
            meta: {
                title: 'List',
            }
        },
        { 
            path: '/report', 
            component: Report,
            meta: {
                title: 'Report',
            }
        },
        { 
            path: '/map', 
            component: Map,
            meta: {
                title: 'Map',
            }
        },
        { 
            path: '/import-data', 
            component: ImportVoter,
            meta: {
                title: 'Import Data',
            }
        }
      ]
  })

  export default router