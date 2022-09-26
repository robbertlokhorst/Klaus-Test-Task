<template>
  <div
    class="list-row"
    role="row"
  >
    <div
      :aria-label="cellRole"
      class="list-row__col list-row__col--checkbox"
    >
      <slot name="checkbox" />
    </div>
    <div
      :aria-label="cellRole"
      class="list-row__col list-row__col--user"
    >
      <slot name="user" />
    </div>
    <div
      :aria-label="cellRole"
      class="list-row__col list-row__col--permission"
    >
      <slot name="permission" />
    </div>
    <div
      :aria-label="cellRole"
      class="list-row__col list-row__col--actions"
    >
      <slot name="actions" />
    </div>
  </div>
</template>

<script>
const availableRoles = ['cell', 'columnheader']

export default {
  props: {
    cellRole: {
      type: String,
      default: 'cell',
      validator: value => availableRoles.includes(value)
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
