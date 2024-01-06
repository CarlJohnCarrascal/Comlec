<template>
    <div class="container-fluid d-nones">
        <div class="row m-2 d-none">
            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-start border-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">


                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Total Entries</div>


                                <div class="h5 mb-0 font-weight-bold text-gray-800">25</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-mobile fa-2x text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Total Active Timers
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">4</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-mobile fa-2x text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Earnings (Monthly) Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-warning shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Total Paused Timers
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">13</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-mobile fa-2x text-warning"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Pending Requests Card Example -->
            <div class="col-xl-3 col-md-6 mb-4">
                <div class="card border-left-secondary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">Total Idle Entries
                                </div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">8</div>
                            </div>
                            <div class="col-auto">
                                <i class="fas fa-mobile fa-2x text-secondary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row m-4">
            <div class="card p-0">
                <div class="card-header m-1 bg-white d-flex gap-2">
                    <select v-model="store.state.report_filter.city" class="border-01 bg-white1">
                        <option value="" selected disabled>Choose City</option>
                        <option v-for="c in store.getters.get_city" :value="c">{{ c }}</option>
                    </select>
                    <select v-model="store.state.report_filter.municipality" class="border-01 bg-white1">
                        <option value="" selected disabled>Choose Municipality</option>
                        <option v-for="c in store.getters.get_municipality_2(store.state.report_filter.city)" :value="c">{{ c }}</option>
                    </select>
                    <select v-model="store.state.report_filter.barangay" class="border-01 bg-white1">
                        <option value="" selected disabled>Choose Barangay</option>
                        <option v-for="c in store.getters.get_barangay_2(store.state.report_filter.city, store.state.report_filter.municipality)" :value="c">{{ c }}</option>
                    </select>
                </div>
                <div class="card-body">
                    <Bar />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Bar from '../components/Chart/Bar.vue';
import { useStore } from 'vuex';
const store = useStore()


</script>

<style lang="scss" scoped></style>