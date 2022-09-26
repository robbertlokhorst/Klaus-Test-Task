<template>
  <ListRow
    class="head-row"
    cell-role="columnheader"
  >
    <template #checkbox>
      <CheckboxInput
        :is-checked="currentUsersSelected"
        :disabled="!users.length"
        :aria-label="`${currentUsersSelected ? 'Deselect' : 'Select'} all users`"
        @change="toggleCurrentUsers"
      />
    </template>
    <template #user>
      <ListLabel sort-key="name">
        User
      </ListLabel>
    </template>
    <template #permission>
      <ListLabel sort-key="role">
        Permission
      </ListLabel>
    </template>
  </ListRow>
</template>

<script>
import ListRow from '@/components/ListRow.vue'
import { mapGetters, mapActions } from 'vuex'
import CheckboxInput from '@/components/CheckboxInput.vue'
import ListLabel from '@/components/ListLabel.vue'

export default {
  components: {
    ListRow,
    CheckboxInput,
    ListLabel
  },
  computed: mapGetters([
    'currentUsersSelected',
    'users'
  ]),
  methods: mapActions(['toggleCurrentUsers'])
}
</script>

<style scoped>
.head-row {
  padding: 0 32px 4px 32px;
}
</style>
