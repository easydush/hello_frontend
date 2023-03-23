<template>
  <div class="hello">
    <h4>{{ $t('students') }} ({{ studentsCount }}): </h4>
    <ol>
      <li :key="index" v-for="(student, index) in students">
        {{ student.name }} {{ student.surname }} <button @click="() => handleDeleteStudent(student.id)">Удалить</button>
      </li>
    </ol>
    <form @submit="handleCreateStudent">
      <input name="name" type="text" v-model="name"/>
      <input name="surname" type="text" v-model="surname"/>
      <input name="group" type="number" v-model="group"/>
      <button type="submit">{{ $t('create') }}</button>
    </form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'HelloWorld',
  props: {},
  data() {
    return {
      secondaryMsg: 'this is secondary',
      name: '',
      surname: '',
      group: 0,
    }
  },
  computed: {
    studentsCount() {
      return this.students.length
    },
    ...mapGetters(["students"])
  },
  methods: {
    handleCreateStudent(event) {
      event.preventDefault()
      console.log(event)
      this.createStudent({'name': this.$data.name, 'surname': this.$data.surname, 'group': this.$data.group})
    },
    handleDeleteStudent(student_id){
      this.deleteStudent(student_id)
    },
    ...mapActions(["loadStudents", "createStudent", "deleteStudent"])
  },
  mounted() {
    this.loadStudents()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
