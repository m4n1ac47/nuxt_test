<template>
  <v-layout
    column
    justify-center
    align-center
  >
  <v-container>
    <v-btn color="green" @click="toggleModal">Add user</v-btn>
    <transition-group name="list" tag="div" class="row">
      <v-col v-for="item in users" :key="item.id" cols="12" xs="12" sm="6" md="4" lg="3">
        <v-card class="list-item">
          <v-card-title class="headline">{{item.name}}</v-card-title>
          <v-card-subtitle>{{item.email}}</v-card-subtitle>
          <v-card-actions>
            <v-btn color="red" text @click="REMOVE_USER(item.id)">Remove user</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </transition-group>
  </v-container>
  <simpleModal :modal="modal" @close="toggleModal"></simpleModal>
  </v-layout>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import simpleModal from '~/components/simpleModal'

export default {
  async asyncData({ store }) {
    const fetchUsers = await store.dispatch('main/FETCH_USERS')
    return {
      fetchUsers
    }
  },
  data () {
    return {
      modal: false,
    }
  },
  components: {
    simpleModal
  },
  computed: {
    ...mapState('main', {
      users: state => state.users
    })
  },
  methods: {
    ...mapMutations('main', ['REMOVE_USER']),

    toggleModal () {
      this.modal = !this.modal
    }
  }
}
</script>

<style scoped>
.list-enter-active, .list-leave-active {
  transition: all 0.5s ease;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>