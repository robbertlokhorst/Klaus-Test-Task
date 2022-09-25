<template>
  <button
    class="base-button"
    :class="buttonClasses"
  >
    <div
      v-if="hasPrepend"
      class="base-button__prepend"
    >
      <slot name="prepend" />
    </div>
    <span class="base-button__span">
      <slot />
    </span>
  </button>
</template>

<script>
const availableThemes = ['brand', 'gray']
const availableSizes = ['sm', 'lg']

export default {
  props: {
    theme: {
      type: String,
      default: 'brand',
      validator: value => availableThemes.includes(value)
    },
    size: {
      type: String,
      default: 'lg',
      validator: value => availableSizes.includes(value)
    }
  },
  computed: {
    buttonClasses () {
      return {
        [`base-button--theme-${this.theme}`]: this.theme,
        [`base-button--size-${this.size}`]: this.size,
        'base-button--has-prepend': this.hasPrepend
      }
    },
    hasPrepend () {
      return !!this.$slots.prepend
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  padding: 8.5px 12px;
  background: $c-brand-50;
  border: 1px solid $c-brand-50;

  &__span {
    //
  }

  &--theme-gray {
    background: white;
    border: 1px solid $c-gray-30;
    color: $c-gray-70;
  }

  &--size-sm {
    padding: 4.5px 11.5px;
  }

  &--has-prepend {
    display: flex;
    gap: 8px;
    align-items: center;

    &.base-button--size-sm {
      padding-left: 8px;
    }
  }
}
</style>
