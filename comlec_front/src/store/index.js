import { createStore } from 'vuex'
const store = createStore({
    state: {
        forms: {
            voters: {
                city: "", municipality: "", barangay: "", purok: "",
                house_number: "", fname: "", mname: "", lname: "", suffix: "",
                birthdate: null, gender: "", status: "", mark: "undecided",
                isHead: false
            }
        },
        filter: {
            city: "Sorsogon",
            municipality: "",
            barangay: "all",
            purok: "all",
            house_number: "all",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            view_member_id: "",
            item_per_page: 10,
            showing: "1 - 10",
            show: {
                all: true,
                leader: true,
                right: true,
                left: true,
                undecided: true,
                unmark: true,
                house_head: false
            },
        },
        filter2: {
            city: "Sorsogon",
            municipality: "",
            barangay: "all",
            purok: "all",
            house_number: "all",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            item_per_page: 10,
            showing: "1 - 10",
            show: {
                all: true,
                leader: true,
                right: true,
                left: true,
                undecided: true,
                unmark: true,
                house_head: false
            },
            page: {
                prev: false,
                current: true, 
                next: false,
                total_item: 0,
                current_page_number: 1,
                max_page_number: 1,
                item_per_page: 20
            }
        },
        voters: [
            {
                "check": false,
                "id": "lqn5qvzrw1t0y1kiuno",
                "house_number": "1",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "CHARLENE",
                "mname": "",
                "lname": "MERCULIO",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzsty8rp421i3g",
                "house_number": "1",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "CHERIE ROSE",
                "mname": "",
                "lname": "LOPEZ",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzswm22x0b2oo",
                "house_number": "2",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "RACHEL",
                "mname": "",
                "lname": "HIBON",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzssib0diljda",
                "house_number": "3",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DANILO",
                "mname": "",
                "lname": "LLUNAR",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzseuipz605zgt",
                "house_number": "3",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MELONIE",
                "mname": "",
                "lname": "LLUNAR",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzsybdl1ybdzng",
                "house_number": "3",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DAN MARK",
                "mname": "",
                "lname": "LLUNAR",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzsklqk13xsde",
                "house_number": "4",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "EDWIN",
                "mname": "",
                "lname": "LOVERIA",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzslnf23i9dtbs",
                "house_number": "5",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "ALLAN",
                "mname": "",
                "lname": "BALLESTEROS",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzs7ll65qpxrfw",
                "house_number": "5",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MARY ANN",
                "mname": "",
                "lname": "LOVERIA",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzs5dr8q6lw6n",
                "house_number": "6",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "LYDIA",
                "mname": "",
                "lname": "HABIL",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzt05lrelvfh9cw",
                "house_number": "6",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MICHAEL",
                "mname": "",
                "lname": "APOLINAR",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzt76aw6mofb03",
                "house_number": "6",
                "purok": "1",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "VERNA",
                "mname": "",
                "lname": "HABEL",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvztapks3vq3cxh",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "EVELYN",
                "mname": "",
                "lname": "QUAREN",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzt00ie8v83oo4q7",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "CHRISTINE",
                "mname": "",
                "lname": "HABIL",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzt99a8s5xhs0v",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DOMINADOR",
                "mname": "",
                "lname": "HAGOS",
                "suffix": "JR",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvztvz8mxdlfjmd",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "MARIA LORENA",
                "mname": "",
                "lname": "HAGOS",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvztf5nzrulobf",
                "house_number": "1",
                "purok": "2",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "DESIREE NICOLE",
                "mname": "",
                "lname": "HAGOS",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvztmmgtymkcqfh",
                "house_number": "1",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "ROLANDO",
                "mname": "",
                "lname": "GONZALES",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzt4xcdlyg4lv",
                "house_number": "1",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JANET",
                "mname": "",
                "lname": "GONZALES",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzt32y3w4d9427",
                "house_number": "1",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JOSEPH",
                "mname": "",
                "lname": "GONZALES",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvztdo3t6z350qk",
                "house_number": "2",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "EDEN",
                "mname": "",
                "lname": "GUARDACASA",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzt1hzkex95qg7",
                "house_number": "3",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "ELIJA",
                "mname": "",
                "lname": "GRINO",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvztk2a0jxhu1l",
                "house_number": "3",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "NILO",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": "1"
            },
            {
                "check": false,
                "id": "lqn5qvzu41jfnq5aost",
                "house_number": "3",
                "purok": "3",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JOVELYN",
                "mname": "",
                "lname": "COSINO",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzuq8ydhyxgtz",
                "house_number": "1",
                "purok": "4",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "NEIL MARK",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzussqei7zlf1",
                "house_number": "1",
                "purok": "4",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JOHN PUAL",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            },
            {
                "check": false,
                "id": "lqn5qvzu6l3k8ro6rwa",
                "house_number": "1",
                "purok": "4",
                "barangay": "Brgy 1",
                "municipality": "Irosin",
                "city": "SORSOGON",
                "fname": "JUDIT",
                "mname": "",
                "lname": "GURAN",
                "suffix": "",
                "gender": "",
                "mark": "",
                "status": "Duplicate",
                "isHead": ""
            }
        ],
        imported_voters: [],
        city: ["Sorsogon"],
        municipalities: [
            {
                name:"Bacon",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Barcelona",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Bulan",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Bulusan",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
            {
                name:"Irosin",
                brgy:[
                    {name: "Brgy 1", purok: 10},
                    {name: "Brgy 2", purok: 5},
                    {name: "Brgy 3", purok: 7},
                    {name: "Brgy 4", purok: 10},
                    {name: "Brgy 5", purok: 14},
                    {name: "Brgy 6", purok: 9},
                ]
            },
        ]
    },
    getters: {
        get_voters (state){
            let list = state.voters.filter(v => {
                if(v.city.toLowerCase() == state.filter.city.toLowerCase() && 
                    v.municipality.toLowerCase() == state.filter.municipality.toLowerCase())
                {
                    if(state.filter.city == "") return false
                    if(state.filter.barangay == "all") return true
                    else if (v.barangay == state.filter.barangay && state.filter.purok == "all") return true
                    else if (v.barangay == state.filter.barangay && v.purok == state.filter.purok && state.filter.house_number == "all") return true
                    else if (v.barangay == state.filter.barangay && v.purok == state.filter.purok && v.house_number == state.filter.house_number) return true
                    else return false
                }
                else return false
            })

            if(!state.filter.show.all){
                list = list.filter(v => {
                    if(!state.filter.show.leader){
                        if(v.mark.toLowerCase() == "leader") return false
                    }
                    if(!state.filter.show.right){
                        if(v.mark.toLowerCase() == "right") return false
                    }
                    if(!state.filter.show.left){
                        if(v.mark.toLowerCase() == "left") return false
                    }
                    if(!state.filter.show.undecided){
                        if(v.mark.toLowerCase() == "undecided") return false
                    }
                    if(!state.filter.show.unmark){
                        if(v.mark == "") return false
                    }
                    return true
                })
            }

            if(state.filter.show.house_head){
                list = list.filter(v=> v.isHead)
            }
            
            list = list.filter(v => {
                if(
                    v.fname.toLowerCase().includes(state.filter.search.toLowerCase()) ||
                    v.mname.toLowerCase().includes(state.filter.search.toLowerCase()) ||
                    v.lname.toLowerCase().includes(state.filter.search.toLowerCase())
                ) return true
                else return false
            })

            state.filter.total_item = list.length
            state.filter.total_page = Math.floor(list.length / state.filter.item_per_page) + 1

            let start = state.filter.item_per_page * (state.filter.current_page - 1)
            let end = Number(state.filter.item_per_page * (state.filter.current_page - 1)) + Number(state.filter.item_per_page)
            let e2 = end
            if(end > state.filter.total_item) e2 = state.filter.total_item
            if(state.filter.total_item == 0){
                start = -1
                end = 0
                e2 = 0
            }
            state.filter.showing = (start + 1) + " - " + e2
            return list.slice(start, end)
        },
        get_selected_voters (state){
            return []
        },
        get_members (state) {
            console.log(state.filter.view_member_id.house_number)
            return state.voters.filter(v=> {
                if(v.house_number == state.filter.view_member_id.house_number 
                    && v.city.toLowerCase() == state.filter.view_member_id.city.toLowerCase()
                    && v.municipality.toLowerCase() == state.filter.view_member_id.municipality.toLowerCase()
                    && v.barangay.toLowerCase() == state.filter.view_member_id.barangay.toLowerCase()
                    && v.purok == state.filter.view_member_id.purok) return true
            })

        },
        get_city (state){
            return [...new Set( state.voters.map(obj => obj.city)) ];
        },
        get_municipality (state){
            return [...new Set( state.voters.map(obj => obj.municipality)) ];
        },
        get_brgy (state){
            return [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    return obj.barangay
                }
            })) ];
        },
        get_purok (state){
            return [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter.barangay.toLowerCase()){
                        return obj.purok
                    }
                }
            })) ];
        },
        get_house_number (state) {
            let list = []
            list = [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter.barangay.toLowerCase()){
                        if(obj.purok.toLowerCase() == state.filter.purok.toLowerCase()){
                            return obj.house_number
                        }
                    }
                }
            }))]
            return list.filter(v => v != null)
        },
        get_imported_voters (state){
            if(!state.filter2.municipality) return []
            let list = state.imported_voters.filter(v => {
                if(v.city.toLowerCase() == state.filter2.city.toLowerCase() && 
                v.municipality.toLowerCase() == state.filter2.municipality.toLowerCase())
                {
                    if(state.filter2.barangay == "all") return true
                    else if (v.barangay == state.filter2.barangay && state.filter2.purok == "all") return true
                    else if (v.barangay == state.filter2.barangay && v.purok == state.filter2.purok && state.filter2.house_number == "all") return true
                    else if (v.barangay == state.filter2.barangay && v.purok == state.filter2.purok && v.house_number == state.filter2.house_number) return true
                    else return false
                }
                else return false
            })

            if(!state.filter2.show.all){
                list = list.filter(v => {
                    if(!state.filter2.show.leader){
                        if(v.mark.toLowerCase() == "leader") return false
                    }
                    if(!state.filter2.show.right){
                        if(v.mark.toLowerCase() == "right") return false
                    }
                    if(!state.filter2.show.left){
                        if(v.mark.toLowerCase() == "left") return false
                    }
                    if(!state.filter2.show.undecided){
                        if(v.mark.toLowerCase() == "undecided") return false
                    }
                    if(!state.filter2.show.unmark){
                        if(v.mark == "") return false
                    }
                    return true
                })

                if(state.filter2.show.house_head){
                    list = list.filter(v=> v.isHead)
                }
            }
            
            list = list.filter(v => {
                if(
                    v.fname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.mname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.lname.toLowerCase().includes(state.filter2.search.toLowerCase())
                ) return true
                else return false
            })

            state.filter2.total_item = list.length
            state.filter2.total_page = Math.floor(list.length / state.filter2.item_per_page) + 1

            let start = state.filter2.item_per_page * (state.filter2.current_page - 1)
            let end = (state.filter2.item_per_page * (state.filter2.current_page - 1)) + state.filter2.item_per_page

            state.filter2.showing = (start + 1) + " - " + end

            return list.slice(start, end)
        },
        get_imported_city (state){
            return [...new Set( state.imported_voters.map(obj => obj.city)) ];
        },
        get_imported_municipality (state){
            return [...new Set( state.imported_voters.map(obj => obj.municipality)) ];
        },
        get_imported_brgy (state){
            return [...new Set( state.imported_voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter2.municipality.toLowerCase()){
                    return obj.barangay
                }
            })) ];
        },
        get_imported_purok (state){
            return [...new Set( state.imported_voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter2.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter2.barangay.toLowerCase()){
                        return obj.purok
                    }
                }
            })) ];
        },
        get_imported_house_number (state){
            return [...new Set( state.imported_voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter2.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter2.barangay.toLowerCase()){
                        if(obj.purok.toLowerCase() == state.filter2.purok.toLowerCase()){
                            return obj.house_number
                        }
                    }
                }
            }))];
        },
    },
    mutations: {},
    actions: {
        // #region voters
        clearBrgySelected ({state}){
            state.filter.barangay = "all"
            state.filter.purok = "all"
            state.filter.house_number = "all"
        },
        clearPurokSelected ({state}){
            state.filter.purok = "all"
            state.filter.house_number = "all"
        },
        clearHouseNoSelected2 ({state}){
            state.filter.house_number = "all"
        },
        onSelectAllFilter ({state}){
            if(state.filter.show.all){
                state.filter.show.leader = true
                state.filter.show.right = true
                state.filter.show.left = true
                state.filter.show.undecided = true
            }
        },
        selectAllVoters ({state}, data) {
            data.voters.forEach(v => {
                let find = state.voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    if(data.check) state.voters[find].check = true
                    else state.voters[find].check = false
                }
            });
        },
        markVoters ({state, getters}, data) {
            data.voters.forEach(v => {
                let find = state.voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    state.voters[find].mark = data.type.toUpperCase()
                }
            });
        },
        setSelectedHouseNumber ({state}, hn){
            state.filter.view_member_id = hn
        },
        delVoters ({state}, voters) {
            console.log(voters, state.voters)
            voters.forEach(v => {
                state.voters = state.voters.filter(vv => vv.id != v.id)
            })
        },
        nextPage({state}, i) {
            state.filter.current_page += i
        },
        // #endregion
        // #region import data
        setImportedVoters ({state}, data) {
            data.forEach(d => {
                d.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
                d.check = false
                let check_dup = state.voters.find(v => {
                    if(v.fname.toLowerCase() == d.fname.toLowerCase() 
                    && v.mname.toLowerCase() == d.mname.toLowerCase()
                    && v.lname.toLowerCase() == d.lname.toLowerCase()) return true
                    else return false
                })
                if(check_dup) {
                    d.status = "Duplicate"
                }
                state.imported_voters.push(d)
            })
        },
        clearBrgySelected2 ({state}){
            state.filter2.barangay = "all"
            state.filter2.purok = "all"
            state.filter2.house_number = "all"
        },
        clearPurokSelected2 ({state}){
            state.filter2.purok = "all"
            state.filter2.house_number = "all"
        },
        clearHouseNoSelected2 ({state}){
            state.filter2.house_number = "all"
        },
        selectAllVoters2 ({state}, data) {
            data.voters.forEach(v => {
                let find = state.imported_voters.findIndex(v1 => v1.id == v.id)
               
                if(find != -1) {
                    if(data.check) state.imported_voters[find].check = true
                    else state.imported_voters[find].check = false
                }
            });
        },
        markVoters2 ({state}, data) {
            data.voters.forEach(v => {
                let find = state.imported_voters.findIndex(v1 => v1.id == v.id)
                if(find != -1) {
                    state.imported_voters[find].mark = data.type.toUpperCase()
                }
            });
        },
        markVoters22 ({state}, data) {
            let find = state.imported_voters.findIndex(v1 => v1.id == data.id)
            if(find != -1) {
                state.imported_voters[find].mark = data.type.toUpperCase()
            }
        },
        delImportedVoters ({state}, voters) {
            voters.forEach(v => {
                state.imported_voters = state.imported_voters.filter(vv => vv.id != v.id)
            })
        },
        nextPage2({state}, i) {
            state.filter2.current_page += i
        },
        // #endregion
    }
})

export default store