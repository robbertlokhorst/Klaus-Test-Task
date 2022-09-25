<template>
  <button
    class="base-button"
    :class="buttonClasses"
  >
    <slot />
  </button>
</template>

<script>
const availableThemes = ['brand', 'gray']
const availableSizes = ['sm', 'lg']
const iconAlignOptions = ['left', 'right']

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
    },
    iconAlign: {
      type: String,
      validator: value => iconAlignOptions.includes(value)
    },
    icon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses () {
      return {
        [`base-button--theme-${this.theme}`]: this.theme,
        [`base-button--size-${this.size}`]: this.size,
        [`base-button--icon-align-${this.iconAlign}`]: this.iconAlign,
        'base-button--icon': this.icon
      }
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
  display: flex;
  gap: 8px;
  align-items: center;

  &--theme-gray {
    background: white;
    border: 1px solid $c-gray-30;
    color: $c-gray-70;
    box-shadow: 0px 1px 2px rgba(45, 55, 72, 0.08);
  }

  &--size-sm {
    padding: 4.5px 11.5px;
  }

  &--size-xs {
    padding: 4.5px 6px;
  }

  &--icon {
    padding: 7px;
  }

  &--icon-align-left {
    padding-left: 8px;
  }

  &--icon-align-right {
    padding-right: 8px;
  }
}
</style>
