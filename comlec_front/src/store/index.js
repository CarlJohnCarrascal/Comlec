import { createStore } from 'vuex'
const store = createStore({
    state: {
        filter: {
            city: "Sorsogon",
            municipality: {
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
            barangay: "",
            purok: "all",
            house_number: "",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            show: {
                all: true,
                leader: true,
                right: true,
                left: true,
                undecided: true,
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
            show: {
                all: true,
                leader: true,
                right: true,
                left: true,
                undecided: true,
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
            { "check": false, "id": 1,"house_number": 1, "fname": "John", "lname": "Doe", "mname": "Otto","city":"Sorsogon", "municipality": "Irosin", "barangay": "Brgy 1", "purok": "1", "mark": "Leader", "isHead": true },
            { "check": false, "id": 2,"house_number": 1, "fname": "Mark", "lname": "Doe", "mname": "Parry","city":"Sorsogon", "municipality": "Irosin", "barangay": "Brgy 1", "purok": "1", "mark": "Right", "isHead": false },
            { "check": false, "id": 3,"house_number": 1, "fname": "Larry", "lname": "Thurn", "mname": "Bartse","city":"Sorsogon", "municipality": "Irosin", "barangay": "Brgy 2", "purok": "1", "mark": "Left", "isHead": true }
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
                if(v.city == state.filter.city && v.municipality == state.filter.municipality.name)
                {
                    if(state.filter.barangay == "") return false
                    else if (v.barangay == state.filter.barangay.name && state.filter.purok == "all") return true
                    else if (v.barangay == state.filter.barangay.name && v.purok == state.filter.purok) return true
                    else return false
                }
                else return false
            })

            if(!state.filter.show.all){
                list = list.filter(v => {
                    if(!state.filter.show.leader){
                        if(v.mark == "Leader") return false
                    }
                    if(!state.filter.show.right){
                        if(v.mark == "Right") return false
                    }
                    if(!state.filter.show.left){
                        if(v.mark == "Left") return false
                    }
                    if(!state.filter.show.undecided){
                        if(v.mark == "Undecided") return false
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

            return list
        },
        get_selected_voters (state){
            return []
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
                        if(v.mark == "Leader") return false
                    }
                    if(!state.filter2.show.right){
                        if(v.mark == "Right") return false
                    }
                    if(!state.filter2.show.left){
                        if(v.mark == "Left") return false
                    }
                    if(!state.filter2.show.undecided){
                        if(v.mark == "Undecided") return false
                    }
                    return true
                })
            }
            if(state.filter2.show.house_head){
                list = list.filter(v=> v.isHead)
            }

            list = list.filter(v => {
                if(
                    v.fname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.mname.toLowerCase().includes(state.filter2.search.toLowerCase()) ||
                    v.lname.toLowerCase().includes(state.filter2.search.toLowerCase())
                ) return true
                else return false
            })

            return list
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
        }
    },
    mutations: {},
    actions: {
        // #region voters
        clearBrgySelected ({state}){
            state.filter.barangay = ""
        },
        clearPurokSelected ({state}){
            state.filter.purok = "all"
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
        // #endregion
        // #region import data
        setImportedVoters ({state}, data) {
            data.forEach(d => {
                d.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
                d.check = false
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
        // #endregion
    }
})

export default store