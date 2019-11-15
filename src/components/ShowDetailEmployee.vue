<template>
  <div>
    <h1>Show Detail Employee</h1>
    <table id="employees">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Date of birth</th>
          <th>Company</th>
          <th>Avatar</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{dataEmployee.fullName}}</td>
          <td>{{dataEmployee.age}}</td>
          <td>{{dataEmployee.address}}</td>
          <td>{{dataEmployee.dateBirth}}</td>
          <td>{{dataEmployee.company}}</td>
          <td>
            <img :src="dataEmployee.avatar" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    index: Number,
    dataEmployee: Object
  },
  data() {
    return {
      employee: {
        fullName: "",
        address: "",
        age: "",
        dateBirth: "",
        company: "",
        avatar: "",
        action: ""
      }
    };
  },
  // watch: {
  //   dataEmployee(newData, oldData) {
  //     this.employee = {
  //       fullName: this.dataEmployee.fullName,
  //       address: this.dataEmployee.address,
  //       age: this.dataEmployee.age,
  //       dateBirth: this.dataEmployee.dateBirth,
  //       company: this.dataEmployee.company,
  //       avatar: this.dataEmployee.avatar
  //     };
  //   }
  // }
};
</script>


<style scoped >
#employees {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#employees td,
#employees th {
  border: 1px solid #ddd;
  padding: 8px;
}

#employees tr:nth-child(even) {
  background-color: #f2f2f2;
}

#employees tr:hover {
  background-color: #ddd;
}

#employees th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4caf50;
  color: white;
}
td > img {
  width: 200px;
}
.icon {
  margin: 10px;
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}
</style>