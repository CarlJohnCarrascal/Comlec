import { createStore } from 'vuex'
const store = createStore({
    state: {
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
            {
                "check": false,
                "id": "lqjc63q3n2jc94z5qf9",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q3ekon2i6umsa",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q3u7m17kevd4p",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q4rdvzsigbhk",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q4m8z1wwofmm",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q48gymui2emk",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4u1d65my5tg8",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q49ian9y7a1lc",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4s0kj4anf3im",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4pj10t3lgfxg",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q4loa2c6pqkhs",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4dj2q18po90b",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4g1h7f75jp1s",
                "house_number": "6",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4110wqjznv5p",
                "house_number": "6",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4l2660kn5nmq",
                "house_number": "7",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q4bv0xy9b08ci",
                "house_number": "7",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4mvy1nul2ydj",
                "house_number": "7",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4z9qofcbiixn",
                "house_number": "8",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q4danlo3vukwc",
                "house_number": "8",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4kthnl7ktao",
                "house_number": "8",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4ib1kll4gquo",
                "house_number": "9",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q4d8yvgdpu5lc",
                "house_number": "10",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q437dbsqp1nms",
                "house_number": "11",
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
                "status": "",
                "isHead": true
            },
            {
                "check": false,
                "id": "lqjc63q46s2s2hdkeql",
                "house_number": "11",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4e237thlr6c",
                "house_number": "11",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4ekz5eweaxjg",
                "house_number": "11",
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
                "status": "",
                "isHead": false
            },
            {
                "check": false,
                "id": "lqjc63q4njhepuv5i4",
                "house_number": "11",
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
                "status": "",
                "isHead": false
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
        ],
        houses: [],
        house_filter: {
            city: "",
            municipality: "",
            barangay: "",
            purok: "",
            house_number: "",
            total_page: 1,
            current_page: 1,
            total_item: 1,
            search: "",
            view_member_id: "",
        },
        new_house: {
            city: "",
            municipality: "",
            barangay: "",
            purok: "",
            house_number: ""
        },
        report_filter: {
            city: "",
            municipality: "",
            barangay: "",
            chart: {
                bar: {
                    data: {
                        labels: ["Barangay 1", "Barangay 1", "Barangay 1", "Barangay 1"],
                        datasets: [
                            { data: [40, 20, 10, 40], backgroundColor: 'lime', label: 'Right'},
                            { data: [10, 30, 60, 40], backgroundColor: 'red', label: 'Left'},
                            { data: [20, 20, 0, 5], backgroundColor: 'gray', label: 'Undicided'}
                        ]
                    },
                    options: {
                        responsive: true
                    }
                }
            }
        },
    },
    getters: {
        // #region voters
        get_voters (state){
            let list = state.voters.filter(v => {
                if(v.city.toLowerCase() == state.filter.city.toLowerCase() && 
                    v.municipality.toLowerCase() == state.filter.municipality.toLowerCase())
                {
                    // if(state.filter.barangay == "") return false
                    // else if (v.barangay.toLowerCase() == state.filter.barangay.name.toLowerCase() 
                    //          && state.filter.purok == "all") return true
                    // else if (v.barangay.toLowerCase() == state.filter.barangay.name.toLowerCase() 
                    //          && v.purok == state.filter.purok) return true
                    // else return false

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
            return [...new Set( state.voters.map(obj => {
                if(obj.municipality.toLowerCase() == state.filter.municipality.toLowerCase()){
                    if(obj.barangay.toLowerCase() == state.filter.barangay.toLowerCase()){
                        if(obj.purok.toLowerCase() == state.filter.purok.toLowerCase()){
                            return obj.house_number
                        }
                    }
                }
            }))];
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
        },
        // #endregion
        // #region Houses
        get_houses (state) {

        },
        get_municipality_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase()){
                    return obj.municipality
                }
            }))];
        },
        get_brgy_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase()){
                    return obj.barangay
                }
            }))];
        },
        get_purok_houses (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase()){
                    return obj.purok
                }
            }))];
        },
        get_house_houses (state) {
            let list = [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase() &&
                obj.purok.toLowerCase() == state.house_filter.purok.toLowerCase()){
                    return obj
                }
            }))];
            list = list.filter(v => v != undefined)
            if (list[0] == undefined) return []
            let list3 = [...new Set(list.map(v => { return v.house_number }))]
            let list2 = list.filter(v => v.isHead )
            return [...new Set(list2.map(o => {
                return {
                    check: false,
                    hn: o.house_number,
                    hh: o.fname + ' ' + o.mname + ' ' + o.lname,
                    hm: list.filter(v => v.house_number ==  o.house_number).length
                }
            }))]
        },
        check_house_add_member(state){
            if(state.house_filter.city != "" &&
                state.house_filter.municipality != "" &&
                state.house_filter.barangay != "" &&
                state.house_filter.purok != "") return true
            else return false
        },
        check_house_add_house(state){
            if(state.house_filter.city != "" &&
                state.house_filter.municipality != "" &&
                state.house_filter.barangay != "" &&
                state.house_filter.purok != "") return true
            else return false
        },
        get_municipality_2(state){
            return (city) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase()){
                        return obj.municipality
                    }
                }))];
            }
        },
        get_barangay_2 (state) {
            return (city, municipality) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase() &&
                    obj.municipality.toLowerCase() == municipality.toLowerCase()){
                        return obj.barangay
                    }
                }))];
            }
        },
        get_purok_2 (state) {
            return (city, municipality, barangay) => {
                return [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == city.toLowerCase() &&
                    obj.municipality.toLowerCase() == municipality.toLowerCase() &&
                    obj.barangay.toLowerCase() == barangay.toLowerCase()){
                        return obj.purok
                    }
                }))];
            }
        },
        get_house_member (state) {
            return [...new Set( state.voters.map(obj => {
                if(obj.city.toLowerCase() == state.house_filter.city.toLowerCase() &&
                obj.municipality.toLowerCase() == state.house_filter.municipality.toLowerCase() &&
                obj.barangay.toLowerCase() == state.house_filter.barangay.toLowerCase() &&
                obj.purok.toLowerCase() == state.house_filter.purok.toLowerCase() &&
                obj.house_number.toLowerCase() == state.house_filter.house_number.toLowerCase()){
                    return obj
                }
            }))].filter(v => v !== undefined);
        },
        // #endregion
        // #region reports
        get_bar_chart_report_data (state) {
            let labels = []
            let datasets = [
                { data: [], backgroundColor: 'lime', label: 'Right'},
                { data: [], backgroundColor: 'red', label: 'Left'},
                { data: [], backgroundColor: 'gray', label: 'Undecided'}
            ]

            if(state.report_filter.city !== "" && state.report_filter.municipality == ""){
                
                labels = [...new Set( state.voters.map(obj => {
                    if(obj.city.toLowerCase() == state.report_filter.city.toLowerCase()){
                        return obj.city
                    }
                }))];
                
                labels.forEach(l => {
                    var right = state.voters.filter(v => v.mark.toLowerCase() == 'right' || v.mark.toLowerCase() == 'leader').length
                    var left = state.voters.filter(v => v.mark.toLowerCase() == 'left').length                   
                    var undecided = state.voters.filter(v => v.mark.toLowerCase() == 'undecided').length
                    datasets[0].data.push(right)
                    datasets[1].data.push(left)
                    datasets[2].data.push(undecided)
                })
                console.log(labels, datasets)
            }
            
            return {
                labels: labels,
                datasets: datasets
            }
        }
        // #endregion


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

        // #region Houses
        setSelectedHouse ({state}, hn) {
            state.house_filter.house_number = hn
        }
        // #endregion
    }
})

export default store