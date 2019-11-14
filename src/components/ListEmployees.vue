<template>
  <div>
    <h1>List Employees</h1>

    <ModalAddEmployee
      @closeModal="isOpenAdd = false"
      :isOpen="isOpenAdd"
      @addNewEmployees="addNewEmployees"
      @cancelAddNewEmployees="cancelAddNewEmployees"
    />

    <button @click="showModal">{{ isOpenAdd ? "Close" : "Add new" }} employees</button>
    
    <br>
    <br>

    <table id="employees">
      <thead>
        <tr>
          <th>Full Name</th>
          <th>Age</th>
          <th>Address</th>
          <th>Date of birth</th>
          <th>Company</th>
          <th>Avatar</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody v-for="employee in employees" :key="employee.id">
        <tr>
          <td>{{employee.fullName}}</td>
          <td>{{employee.age}}</td>
          <td>{{employee.address}}</td>
          <td>{{employee.dateBirth}}</td>
          <td>{{employee.company}}</td>
          <td>
            <img :src="employee.avatar" />
          </td>
          <td>
            <font-awesome-icon class="icon" icon="edit" size="4x" />
            <font-awesome-icon class="icon" icon="trash" size="4x" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ModalAddEmployee from "./ModalAddEmployee.vue";
// import ModalC from './ModalComponent'
export default {
  components: {
    ModalAddEmployee
  },
  data() {
    return {
      isOpenAdd: false,
      employees: [
        {
          fullName: "Trần Đức Huy",
          address: "130 Duy Tân, Hòa Thuận Nam, Hải Châu, Đà Nẵng 550000",
          age: 20,
          dateBirth: "18/09/1994",
          company: "HTactive",
          avatar:
            "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png",
          action: ""
        },
        {
          fullName: "Chu Cuong Cuong",
          address:
            "Tòa nhà Thành Lợi 2, số 01 Lê Đình Lý, phường Vĩnh Trung, 550000",
          age: 21,
          dateBirth: "18/09/1995",
          company: "HTactive",
          avatar:
            "https://taoanhonline.com/wp-content/uploads/2019/08/hinh-anh-avatar-0.jpg",
          action: ""
        }
      ]
    };
  },
  methods: {
    showModal() {
      this.isOpenAdd = !this.isOpenAdd;
    },
    addNewEmployees(newEmployee) {
      this.employees.unshift(newEmployee);
      this.isOpenAdd = !this.isOpenAdd;
    },
    cancelAddNewEmployees() {
      this.isOpenAdd = !this.isOpenAdd;
    }
  }
};
</script>

<style >
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