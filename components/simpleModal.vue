<template>
  <v-dialog v-model="modal" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">User Profile</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="newUser.name" label="Name*" required></v-text-field>
              <v-text-field v-model="newUser.email" label="Email*" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        <v-btn color="green" text @click="addUser">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    modal: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      newUser: {
        name: '',
        email: ''
      }
    }
  },

  methods: {
    ...mapMutations('main', ['ADD_USER']),
    cleanModal () {
      this.newUser.name = ''
      this.newUser.email = ''
    },

    addUser () {
      if (this.newUser.name && this.newUser.email) {
        this.ADD_USER(this.newUser)
        this.close()
      } else {
        window.alert('Please fill all fields')
      }
    },

    close () {
      this.$emit('close')
      this.cleanModal()
    }
  }
}
</script>