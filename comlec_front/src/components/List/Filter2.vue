<template>
    <div class="card p-2">
        <div class="d-flex justify-content-between flex-wrap">
            <div class="d-flex gap-1 mb-1">
                <div class="d-none d-md-block">
                    <div class="w-100 d-flex justify-content-between">
                        <div class="d-flex gap-3 flex-wrap">
                            <div class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">Municipality</label>
                                <select v-on:change="onSelectMinucipality" v-model="store.state.filter2.municipality"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="" disabled selected>Choose municipality</option>
                                    <template v-for="(municipality, i) in store.getters.get_imported_municipality">
                                        <option v-if="i == 0" :key="i++" :value="municipality" selected>{{ municipality }}
                                        </option>
                                        <option v-else :value="municipality">{{ municipality }}</option>
                                    </template>
                                </select>
                            </div>
                            <div v-if="store.state.filter2.municipality != ''" class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">Barangay</label>
                                <select v-on:change="onSelectBrgy" v-model="store.state.filter2.barangay"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="" disabled>Choose barangay</option>
                                    <option value="all" selected>All</option>
                                    <template v-for="(brgy, i) in store.getters.get_imported_brgy">
                                        <option :value="brgy"> {{ brgy }}</option>
                                    </template>
                                </select>
                            </div>
                            <div v-if="store.state.filter2.barangay != 'all'" class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">Purok</label>
                                <select v-on:change="onSelectPurok" v-model="store.state.filter2.purok" class="form-control"
                                    id="exampleFormControlSelect1">
                                    <option value="all" selected>All</option>
                                    <template v-for="i in store.getters.get_imported_purok">
                                        <option :value="i">Purok {{ i }}</option>
                                    </template>
                                </select>
                            </div>
                            <div v-if="store.state.filter2.purok != 'all'" class="form-group" style="min-width: 200px;">
                                <label for="exampleFormControlSelect1">House No.</label>
                                <select v-on:change="onSelectHouseNo" v-model="store.state.filter2.house_number"
                                    class="form-control" id="exampleFormControlSelect1">
                                    <option value="all" selected>All</option>
                                    <template v-for="i in store.getters.get_imported_house_number">
                                        <option :value="i">{{ i }}</option>
                                    </template>
                                </select>
                            </div>

                        </div>
                        <!-- <div class="d-flex gap-1">
                                        <input type="text" class="form-control" placeholder="Search first, last and middle name" style="height: 31px; min-width: 400px;">
                                        <a class="btn btn-sm btn-secondary">Search</a>
                                    </div>d -->
                    </div>
                </div>
            </div>
            <div class="d-flex gap-1 mb-1">
                <!-- <button class="btn btn-sm btn-danger" style="max-height: 32px;">
                    <i class="fa fa-times"></i>
                    Reset Filter
                </button> -->
                <button v-on:click="onFilterCollapse" id="btn-filter-collapse" class="btn btn-sm btn-danger"
                    data-bs-toggle="collapse" data-bs-target="#collapse-filter" aria-expanded="false"
                    aria-controls="collapseExample" style="max-width: 50px;min-width: 50px;max-height: 32px;">
                    <i class="fa fa-chevron-down"></i>
                </button>
            </div>
        </div>
        <div class="row collapse ms-1" id="collapse-filter">
            <div class="d-md-none">
                <!-- <span class="p-3">Filter :</span> -->
                <div class="w-100 d-flex justify-content-between">
                    <div class="d-flex gap-3 flex-wrap">
                        <div class="form-group" style="min-width: 200px;">
                            <label for="exampleFormControlSelect1">Municipality</label>
                            <select v-on:change="onSelectMinucipality" v-model="store.state.filter2.municipality"
                                class="form-control" id="exampleFormControlSelect1">
                                <template v-for="(municipality, i) in store.getters.get_imported_municipality">
                                    <option v-if="i == 0" :key="i++" :value="municipality" selected>{{ municipality }}
                                    </option>
                                    <option v-else :value="municipality">{{ municipality }}</option>
                                </template>
                            </select>
                        </div>
                        <div class="form-group" style="min-width: 200px;">
                            <label for="exampleFormControlSelect1">Barangay</label>
                            <select v-on:change="onSelectBrgy" v-model="store.state.filter2.barangay" class="form-control"
                                id="exampleFormControlSelect1">
                                <option value="" selected disabled>Choose barangay</option>
                                <template v-for="(brgy, i) in store.state.filter2.municipality.brgy">
                                    <option :value="brgy"> {{ brgy }}</option>
                                </template>
                            </select>
                        </div>
                        <div v-if="store.state.filter2.barangay" class="form-group" style="min-width: 200px;">
                            <label for="exampleFormControlSelect1">Purok</label>
                            <select v-model="store.state.filter2.purok" class="form-control" id="exampleFormControlSelect1">
                                <option value="all" selected>All</option>
                                <template v-for="i in store.state.filter2.barangay.purok">
                                    <option :value="i">Purok {{ i }}</option>
                                </template>
                            </select>
                        </div>
                        <div v-if="store.state.filter2.purok" class="form-group" style="min-width: 200px;">
                            <label for="exampleFormControlSelect1">House No.</label>
                            <select v-model="store.state.filter2.purok" class="form-control" id="exampleFormControlSelect1">
                                <option value="all" selected>All</option>
                                <template v-for="i in store.state.filter2.barangay.purok">
                                    <option :value="i">Purok {{ i }}</option>
                                </template>
                            </select>
                        </div>
                    </div>
                    <!-- <div class="d-flex gap-1">
                                        <input type="text" class="form-control" placeholder="Search first, last and middle name" style="height: 31px; min-width: 400px;">
                                        <a class="btn btn-sm btn-secondary">Search</a>
                                    </div>d -->
                </div>
            </div>
            <div class="w-100 d-flex justify-content-start mt-4">
                <div class="d-flex gap-3 flex-wrap">
                    <div class="form-group" style="min-width: 200px;">
                        <label class="mb-1">Filter</label> <br>
                        <input v-on:change="onSelectAll" v-model="store.state.filter2.show.all" checked type="checkbox"
                            id="purok-leader" class="me-2">
                        <label for="purok-leader">All</label> <br>
                        <input v-model="store.state.filter2.show.leader" checked type="checkbox" id="purok-leader"
                            class="me-2">
                        <label for="purok-leader">Purok Leader</label> <br>
                        <input v-model="store.state.filter2.show.right" checked type="checkbox" id="voter-right"
                            class="me-2">
                        <label for="voter-right">Right</label> <br>
                        <input v-model="store.state.filter2.show.left" checked type="checkbox" id="voter-left" class="me-2">
                        <label for="voter-left">Left</label> <br>
                        <input v-model="store.state.filter2.show.undecided" checked type="checkbox" id="voter-5050"
                            class="me-2">
                        <label for="voter-5050">50 / 50</label> <br>
                        <input v-model="store.state.filter2.show.unmark" checked type="checkbox" id="voter-5050"
                            class="me-2">
                        <label for="voter-5050">Not Mark</label> <br>
                        <input v-model="store.state.filter2.show.house_head" type="checkbox" id="voter--family-head"
                            class="me-2">
                        <label for="voter-family-head">House Head Only</label>
                    </div>
                </div>
                <div class="form-group" style="min-width: 60px;">
                    <label for="exampleFormControlSelect1">Show</label>
                    <select v-model="store.state.filter2.item_per_page" class="form-control" id="exampleFormControlSelect1">
                        <option value="10" selected>10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import $ from 'jquery'
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore()
const isFilterShown = ref(false)

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

function onSelectMinucipality() {
    store.dispatch("clearBrgySelected2")
}
function onSelectBrgy() {
    store.dispatch("clearPurokSelected2")
}
function onSelectPurok() {
    store.dispatch("clearHouseNoSelected2")
}

function onSelectAll() {
    store.dispatch("onSelectAllFilter")
}

</script>

<style scoped></style>