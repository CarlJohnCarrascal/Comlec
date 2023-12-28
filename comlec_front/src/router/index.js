import { createRouter, createWebHistory } from 'vue-router'

import List from '../views/List.vue'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'
import Map from '../views/Map.vue'
import ImportVoter from '../views/ImportVoter.vue'
import MemberView from '../views/Member.vue'
import AddMemberView from '../views/AddMember.vue'

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
                btn: 'home'
            }
        },
        { 
            path: '/voters', 
            component: List,
            meta: {
                title: 'List',
                btn: 'voters'
            }
        },
        { 
            path: '/voters/members', 
            component: MemberView,
            meta: {
                title: 'Member',
                btn: 'voters'
            }
        },
        { 
            path: '/voters/members/add', 
            component: AddMemberView,
            meta: {
                title: 'Add Member',
                btn: 'voters'
            }
        },
        { 
            path: '/report', 
            component: Report,
            meta: {
                title: 'Report',
                btn: 'report'
            }
        },
        { 
            path: '/map', 
            component: Map,
            meta: {
                title: 'Map',
                btn: 'map'
            }
        },
        { 
            path: '/import-data', 
            component: ImportVoter,
            meta: {
                title: 'Import Data',
                btn: 'import'
            }
        }
      ]
  })

  export default router