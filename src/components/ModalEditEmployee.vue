<template>
  <div>
    <transition name="modal">
      <div v-if="isOpen">
        <div class="overlay" @click.self="$emit('closeModalEdit')">
          <div class="modal">
            <table>
              <thead>
                <tr>
                  <th v-for="(header, index) in headers" :key="index">
                    <template v-if="header !='Action'">{{header}}</template>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" placeholder="Enter Fullname" v-model="employee.fullName" />
                  </td>
                  <td>
                    <input type="number" placeholder="Enter Age" v-model="employee.age" />
                  </td>
                  <td>
                    <input type="text" placeholder="Enter Address" v-model="employee.address" />
                  </td>
                  <td>
                    <input
                      type="date"
                      placeholder="Enter Date of birth"
                      v-model="employee.dateBirth"
                    />
                  </td>
                  <td>
                    <input type="text" placeholder="Enter Company" v-model="employee.company" />
                  </td>
                  <td>
                    <input type="url" placeholder="Enter link avatar" v-model="employee.avatar" />
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <button @click="cancelEditEmployees">CANCEL</button>
            <button @click="editEmployees">OK</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
    editEmployee: Object,
    headers: Array
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
  methods: {
    cancelEditEmployees() {
      this.employee = {
        fullName: this.editEmployee.fullName,
        address: this.editEmployee.address,
        age: this.editEmployee.age,
        dateBirth: this.editEmployee.dateBirth,
        company: this.editEmployee.company,
        avatar: this.editEmployee.avatar
      };
      this.$emit("cancelEditEmployees");
    },
    editEmployees() {
      const newDataEdit = {
        fullName: this.employee.fullName,
        address: this.employee.address,
        age: this.employee.age,
        dateBirth: this.employee.dateBirth,
        company: this.employee.company,
        avatar: this.employee.avatar,
        action: this.employee.action
      };
      this.$emit("editEmployees", newDataEdit);
    }
  },
  watch: {
    editEmployee(newData, oldData) {
      this.employee = {
        fullName: this.editEmployee.fullName,
        address: this.editEmployee.address,
        age: this.editEmployee.age,
        dateBirth: this.editEmployee.dateBirth,
        company: this.editEmployee.company,
        avatar: this.editEmployee.avatar
      };
    }
  }
};
</script>

<style scoped>
.modal {
  margin: 0px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px 3px;
  transition: all 0.2s ease-in;
  font-family: Helvetica, Arial, sans-serif;
}
.fadeIn-enter {
  opacity: 0;
}

.fadeIn-leave-active {
  opacity: 0;
  transition: all 0.2s step-end;
}

.fadeIn-enter .modal,
.fadeIn-leave-active.modal {
  transform: scale(1.1);
}
button {
  padding: 7px;
  margin-top: 10px;
  background-color: green;
  color: white;
  font-size: 1.1rem;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #00000094;
  z-index: 999;
  transition: opacity 0.2s ease;
}
</style>