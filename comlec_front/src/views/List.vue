<template>
    <div>
        <div class="table-responsive mt-3">
            <table class="table caption-top">
                <caption>List of voters</caption>
                <thead>
                    <tr class="" style="font-size: small;">
                        <th colspan="8">
                            <div class="btn-group">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Irosin
                                </button>
                                <div class="dropdown-menu">
                                    <h6 class="dropdown-header">Municipality</h6>
                                    <a class="dropdown-item">Irosin</a>
                                    <a class="dropdown-item">Magallanes</a>
                                </div>
                            </div>
                            <div class="btn-group ms-1">
                                <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Barangay 1
                                </button>
                                <div class="dropdown-menu">
                                    <h6 class="dropdown-header">Brangay</h6>
                                    <a class="dropdown-item">Barangay 1</a>
                                    <a class="dropdown-item">Barangay 2</a>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr class="" style="font-size: small;">
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Niddle Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Municipal</th>
                        <th scope="col">Barangay</th>
                        <th scope="col">Purok</th>
                        <th scope="col" class="text-end">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>Parry</td>
                        <td>Magallanes</td>
                        <td>Siuton</td>
                        <td>Purok 5</td>
                        <td class="text-end">
                            <a class="btn btn-sm btn-info ms-1">Mark</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>Norta</td>
                        <td>Magallanes</td>
                        <td>Siuton</td>
                        <td>Purok 3</td>
                        <td class="text-end">
                            <a class="btn btn-sm btn-info ms-1">Mark</a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>Bartsae</td>
                        <td>Magallanes</td>
                        <td>Siuton</td>
                        <td>Purok 5</td>
                        <td class="text-end">
                            <a class="btn btn-sm btn-info ms-1">Mark</a>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8" class="text-center fw-bold" style="font-size: xx-small;">No Record</td>
                    </tr>
                    <tr class="border-none">
                        <th colspan="1" scope="row">3</th>
                        <th colspan="7" class="text-end" >
                            <nav aria-label="Page navigation example" class="text-end">
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
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

let records = [
    { "check": false, "personalid": 1, "fname": "Jonh", "lname": "DOe", "email": "johndoe@gmail.com" },
    { "check": false, "personalid": 2, "fname": "WERTW", "lname": "Vetss", "email": "cdsa@gmail.com" },
    { "check": false, "personalid": 3, "fname": "TERyuu", "lname": "Yuree", "email": "dasdad@gmail.com" }
]

</script>

<style lang="scss" scoped></style>