<template>
  <button
    class="base-button"
    :class="buttonClasses"
  >
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
        [`button--theme-${this.theme}`]: this.theme,
        [`button--size-${this.size}`]: this.size
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.base-button {
  background: #475DE5;
  border-radius: 4px;
  color: white;
  font-weight: 500;
  font-size: 14px;
  padding: 8.5px 12px;
  border: 1px solid #475DE5;

  &__span {
    //
  }
}
</style>
