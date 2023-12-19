<template>
    <div class="m-2">
        <div class="row m-0 mb-3">
            <div class="card p-3 overflow-auto">
                <div class="d-flex justify-content-between flex-wrap">
                    <div class="d-flex gap-1 mb-1">
                        <button class="btn btn-primary">
                            <i class="fa fa-add"></i>
                            Add Voter
                        </button>
                        <button class="btn btn-success">
                            <i class="fa fa-download"></i>
                            Import Data
                        </button>
                        <button class="btn btn-secondary">
                            <i class="fa fa-upload"></i>
                            Export Data
                        </button>
                    </div>
                    <div class="d-flex gap-1">
                        <button class="btn btn-danger">
                            <i class="fa fa-times"></i>
                            Reset Filter
                        </button>
                        <button v-on:click="onFilterCollapse" id="btn-filter-collapse" class="btn btn-danger"
                            data-bs-toggle="collapse" data-bs-target="#collapse-filter" aria-expanded="false"
                            aria-controls="collapseExample" style="max-width: 50px;min-width: 50px;">
                            <i class="fa fa-chevron-down"></i>
                        </button>
                    </div>
                </div>
                <div class="row collapse" id="collapse-filter">
                    <span class="p-3">Filter :</span>
                    <div class="w-100 d-flex justify-content-between">
                        <div class="d-flex gap-3 flex-wrap">
                            <div class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">Municipality</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Sorosgon City</option>
                                    <option>Irosin</option>
                                    <option>Magallanes</option>
                                    <option>Gubat</option>
                                    <option>Bulan</option>
                                </select>
                            </div>
                            <div class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">Barangay</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Brgy 1</option>
                                    <option>Brgy 2</option>
                                    <option>Brgy 3</option>
                                    <option>Brgy 4</option>
                                    <option>Brgy 5</option>
                                </select>
                            </div>
                            <div class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">Purok</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Purok 1</option>
                                    <option>Purok 2</option>
                                    <option>Purok 3</option>
                                    <option>Purok 4</option>
                                    <option>Purok 5</option>
                                </select>
                            </div>

                        </div>
                        <!-- <div class="d-flex gap-1">
                                    <input type="text" class="form-control" placeholder="Search first, last and middle name" style="height: 31px; min-width: 400px;">
                                    <a class="btn btn-sm btn-secondary">Search</a>
                                </div>d -->
                    </div> 

                    <div class="w-100 d-flex justify-content-between mt-4">
                        <div class="d-flex gap-3 flex-wrap">
                            <div class="form-group" style="min-width: 200px;">
                                <label class="mb-2">Show</label> <br>
                                <input checked type="checkbox" id="purok-leader" class="me-2">
                                <label for="purok-leader">All</label> <br>
                                <input checked type="checkbox" id="purok-leader" class="me-2">
                                <label for="purok-leader">Purok Leader</label> <br>
                                <input checked type="checkbox" id="voter-right" class="me-2">
                                <label for="voter-right">Right</label> <br>
                                <input checked type="checkbox" id="voter-left" class="me-2">
                                <label for="voter-left">Left</label> <br>
                                <input checked type="checkbox" id="voter-5050" class="me-2">
                                <label for="voter-5050">50 / 50</label>
                            </div>
                            <!-- <div class="form-group" style="min-width: 200px;">
                                        <label for="exampleFormControlSelect1">Barangay</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Brgy 1</option>
                                        <option>Brgy 2</option>
                                        <option>Brgy 3</option>
                                        <option>Brgy 4</option>
                                        <option>Brgy 5</option>
                                        </select>
                                    </div>
                                    <div class="form-group" style="min-width: 200px;">
                                        <label for="exampleFormControlSelect1">Purok</label>
                                        <select class="form-control" id="exampleFormControlSelect1">
                                            <option>Purok 1</option>
                                            <option>Purok 2</option>
                                            <option>Purok 3</option>
                                            <option>Purok 4</option>
                                            <option>Purok 5</option>
                                        </select>
                                    </div> -->

                        </div>
                        <!-- <div class="d-flex gap-1">
                                    <input type="text" class="form-control" placeholder="Search first, last and middle name" style="height: 31px; min-width: 400px;">
                                    <a class="btn btn-sm btn-secondary">Search</a>
                                </div> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-0">
            <div class="card p-3">
                <div class="table-responsive">
                    <table class="table caption-top px-2">
                        <caption>List of voters</caption>
                        <thead>
                            <tr class="" style="font-size: small;">
                                <th colspan="10">

                                    <div class="d-flex justify-content-between gap-1 form-group mb-1">
                                       
                                        <input type="text" class="form-control"
                                            placeholder="Search first, last and middle name"
                                            style="height: 31px; min-width: 100px; max-width: 500px;">
                                        <!-- <a class="btn btn-sm btn-secondary"  style="height: 32px;">Search</a> -->
                                    </div>
                                    <div class="d-flex justify-content-start gap-1 form-group ">
                                        <button class="btn btn-sm btn-primary">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Leader
                                        </button>
                                        <button class="btn btn-sm btn-success">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Right
                                        </button>
                                        <button class="btn btn-sm btn-danger">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark Left
                                        </button>
                                        
                                        <button class="btn btn-sm btn-info">
                                            <i class="fa fa-marker me-2"></i>
                                            Mark 50/50
                                        </button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <thead>
                            <tr class="" style="font-size: small;">
                                <th scope="col"></th>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Middle Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Municipality</th>
                                <th scope="col">Barangay</th>
                                <th scope="col">Purok</th>
                                <th scope="col">Mark</th>
                                <th scope="col" class="text-end">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(record, i = 1) in records">
                                <td>
                                    <input type="checkbox">
                                </td>
                                <th scope="row">{{ i + 1 }}</th>
                                <td>{{ record.fname }}</td>
                                <td>{{ record.mname }}</td>
                                <td>{{ record.lname }}</td>
                                <td>{{ record.municipality }}</td>
                                <td>{{ record.barangay }}</td>
                                <td>{{ record.purok }}</td>
                                <td>{{ record.mark}}</td>
                                <td class="text-end">
                                    <a class="btn btn-sm btn-info ms-1">Mark</a>
                                </td>
                            </tr>
                            <tr class="d-none">
                                <td colspan="10" class="text-center fw-bold" style="font-size: xx-small;">No Record</td>
                            </tr>
                            <tr class="border-none">
                                <td></td>
                                <th colspan="1">{{ records.length }}</th>
                                <td colspan="9" class="text-end">
                                    <nav aria-label="Page navigation example" class="text-end mt-2">
                                        <ul class="pagination pagination-sm float-end">
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                    <!-- <span class="sr-only">Previous</span> -->
                                                </a>
                                            </li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item">
                                                <a class="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                    <!-- <span class="sr-only">Next</span> -->
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import $ from 'jquery'
import { onMounted, ref } from 'vue';

let records = [
    { "check": false, "personalid": 1, "fname": "John", "lname": "Doe", "mname": "Otto", "municipality": "Irosin", "barangay": "Brgy 1", "purok": "Purok 1", "mark": "Leader" },
    { "check": false, "personalid": 1, "fname": "Mark", "lname": "Doe", "mname": "Parry", "municipality": "Irosin", "barangay": "Brgy 2", "purok": "Purok 1", "mark": "Right" },
    { "check": false, "personalid": 1, "fname": "Larry", "lname": "Thurn", "mname": "Bartse", "municipality": "Irosin", "barangay": "Brgy 3", "purok": "Purok 1", "mark": "Left" }
]
const isFilterShown = ref(false)

onMounted(()=>{
    $(document).on("change", "input[type='checkbox']", function() {
        if(this.checked) $(this).parent().parent().children().addClass("selected")
        else $(this).parent().parent().children().removeClass("selected")
    });
})

function onFilterCollapse() {
    var b = $('#btn-filter-collapse')
    if (isFilterShown.value) {
        isFilterShown.value = false
        $('#btn-filter-collapse i').addClass('fa-chevron-down')
        $('#btn-filter-collapse i').removeClass('fa-chevron-up')
    } else {
        isFilterShown.value = true
        $('#btn-filter-collapse i').removeClass('fa-chevron-down')
        $('#btn-filter-collapse i').addClass('fa-chevron-up')
    }
}

</script>

<style scoped>
tbody tr td {
    padding: .1rem .5rem;
    vertical-align: middle;
    font-size: small;
}

button {
    min-width: 150px;
}

.selected {
    background-color: rgb(218, 218, 218);
}
.selected td {
    border: none;
}

</style>