<template>
  <div
    class="list-row"
    role="row"
  >
    <div
      :role="cellRole"
      class="list-row__col list-row__col--checkbox"
    >
      <slot name="checkbox" />
    </div>
    <div
      :role="cellRole"
      class="list-row__col list-row__col--user"
      :aria-sort="userSort"
    >
      <slot name="user" />
    </div>
    <div
      :role="cellRole"
      class="list-row__col list-row__col--permission"
      :aria-sort="roleSort"
    >
      <slot name="permission" />
    </div>
    <div
      :role="cellRole"
      class="list-row__col list-row__col--actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

const availableRoles = ['cell', 'columnheader']

export default {
  props: {
    cellRole: {
      type: String,
      default: 'cell',
      validator: value => availableRoles.includes(value)
    }
  },
  computed: {
    ...mapState(['sortKey', 'isDescSorting']),
    userSort () {
      if (this.cellRole === 'columnheader' && this.sortKey === 'name') {
        return this.isDescSorting ? 'descending' : 'ascending'
      }

      return false
    },
    roleSort () {
      if (this.cellRole === 'columnheader' && this.sortKey === 'role') {
        return this.isDescSorting ? 'descending' : 'ascending'
      }

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.list-row {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 16px;

  &__col {
    display: flex;

    &--checkbox {
      width: 28px;
    }

    &--user {
      width: 357px;
    }

    &--permission {
      width: 153px;
    }

    &--actions {
      width: 115px;
    }
  }
}
</style>
