<template>
    <div class="p-2">
        <div class="row m-0 p-0 ">
            <div class="d-flex justify-content-between">
                <div class="d-flex gap-3 m-1">
                    <i v-on:click="$router.go(-1)" class="fa fa-chevron-left m-0 pt-1"></i>
                    <span class="fw-bold m-0 p-0">Add member</span>
                </div>
                <button class="btn btn-sm btn-primary"><i class="fa fa-add" role="button"></i> Add Member</button>
            </div>
        </div>
        <div v-if="store.state.filter.view_member_id.id" class="row m-1">
            <div class="card p-2 fw-bold">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item active" aria-current="page">
                            {{ store.state.filter.view_member_id.municipality }}</li>
                        <li class="breadcrumb-item active" aria-current="page">
                            {{ store.state.filter.view_member_id.barangay }}</li>
                        <li class="breadcrumb-item active" aria-current="page">
                            Purok {{ store.state.filter.view_member_id.purok }}</li>
                        <li class="breadcrumb-item active" aria-current="page">House No. {{
                            store.state.filter.view_member_id.house_number }}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div v-else class="row text-center mt-5 text-muted">
            <span class="" style="font-size:xx-large;">No Record</span>
        </div>
        <div v-if="store.state.filter.view_member_id.id" class="row m-1">
            <div class="card p-3">
                <div class="row mb-5">
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label class="form-label">First Name</label>
                        <input v-model="store.state.forms.voters.fname" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label class="form-label">Middle Name</label>
                        <input v-model="store.state.forms.voters.mname" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label class="form-label">Last Name</label>
                        <input v-model="store.state.forms.voters.lname" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label class="form-label">Suffix</label>
                        <input v-model="store.state.forms.voters.suffix" type="text" class="form-control">
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label class="form-label">Birth Date</label>
                        <input v-model="store.state.forms.voters.birthdate" type="date" class="form-control">
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label class="form-label">Gender</label>
                        <select v-model="store.state.forms.voters.gender" class="form-control">
                            <option value="male" selected>Male</option>
                            <option value="female" >Female</option>
                        </select>
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label>Mark As</label>
                        <select v-model="store.state.forms.voters.mark" class="form-control">
                            <option value="undecided" selected>Undecided</option>
                            <option value="leader" >Leader</option>
                            <option value="right" >Right</option>
                            <option value="left" >Left</option>
                        </select>
                    </div>
                    <div class="form-group mb-2 col-sm-12 col-md-6 col-lg-4">
                        <label>&nbsp;</label>
                        <button class="btn btn-primary form-control">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()
</script>

<style scoped></style>