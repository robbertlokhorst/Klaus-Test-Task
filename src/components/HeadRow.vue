<template>
  <ListRow class="user-list__head-row">
    <template #checkbox>
      <CheckboxInput
        :is-checked="currentUsersSelected"
        @change="toggleCurrentUsers"
      />
    </template>
    <template #user>
      <ListLabel>User</ListLabel>
    </template>
    <template #permission>
      <ListLabel>Permission</ListLabel>
    </template>
  </ListRow>
</template>

<script>
import ListRow from '@/components/ListRow.vue'
import { mapGetters, mapActions } from 'vuex'
import CheckboxInput from '@/components/CheckboxInput.vue'
import ListLabel from './ListLabel.vue'

export default {
  components: {
    ListRow,
    CheckboxInput,
    ListLabel
  },
  computed: mapGetters(['currentUsersSelected']),
  methods: mapActions(['toggleCurrentUsers'])
}
</script>
