<template>
  <div class="hello">
    <h3>{{ secondaryMsg }}</h3>
    <h4>Students ({{ studentsCount }}): </h4>
    <ol>
      <li :key="index" v-for="(student, index) in students">
        {{ student.name }} {{ student.surname }}
      </li>
    </ol>
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
    }
  },
  computed: {
    studentsCount() {
      return this.students.length
    },
    ...mapGetters(["students"])
  },
  methods: {
    ...mapActions({loadStudents: "loadStudents"})
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
