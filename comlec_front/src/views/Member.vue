<template>
    <div class="p-2">
        <div class="row m-0 p-0 ">
            <div class="d-flex justify-content-between">
                <div class="d-flex gap-3 m-1">
                <i v-on:click="$router.go(-1)" class="fa fa-chevron-left m-0 pt-1"></i>
                <span class="fw-bold m-0 p-0">House member</span>
            </div>
            <button v-on:click="$router.push('/voters/members/add')" class="btn btn-sm btn-primary"><i class="fa fa-add" role="button"></i> Add Member</button>
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
                        <li class="breadcrumb-item active"
                            aria-current="page">House No. {{ store.state.filter.view_member_id.house_number }}</li>
                    </ol>
                </nav>
            </div>
        </div>
        <div v-else class="row text-center mt-5 text-muted">
            <span class="" style="font-size:xx-large;">No Record</span>
        </div>
        <div v-if="store.state.filter.view_member_id.id" class="row m-1">
            <div class="card p-2">
                <table>
                    <thead>
                        <tr>
                            <td>First Name</td>
                            <td>Middle Name</td>
                            <td>Last Name</td>
                            <td></td>
                            <td class="text-end"></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="m in store.getters.get_members">
                            <td>{{ m.fname }}</td>
                            <td>{{ m.mname }}</td>
                            <td>{{ m.lname }}</td>
                            <td class="text-center"><span class="fs-9" v-if="m.isHead">HOUSE HEAD</span></td>
                            <td class="text-end">
                                <a v-if="!m.isHead" class="btn btn-md btn-primary fs-10 m-1"><span><i class="fa fa-marker text-info"></i> Mark as Head</span></a>
                                <a class="btn btn-md"><i class="fa fa-pen-to-square text-primary"></i></a>
                                <a class="btn btn-sm"><i class="fa fa-trash text-danger"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
const store = useStore()
</script>

<style scoped></style>