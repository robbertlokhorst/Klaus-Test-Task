<template>
  <div class="list-row">
    <div class="list-row__col list-row__col--checkbox">
      <slot name="checkbox" />
    </div>
    <div class="list-row__col list-row__col--user">
      <slot name="user" />
    </div>
    <div class="list-row__col list-row__col--permission">
      <slot name="permission" />
    </div>
    <div class="list-row__col list-row__col--actions">
      <slot name="actions" />
    </div>
  </div>
</template>

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
      width: 106px;
    }
  }
}
</style>
