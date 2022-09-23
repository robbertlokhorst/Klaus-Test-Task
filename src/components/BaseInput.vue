<template>
  <div
    class="base-input"
    :class="inputClasses"
  >
    <div
      v-if="hasIcon"
      class="base-input__icon-wrap"
    >
      <slot name="icon" />
    </div>
    <input
      class="base-input__input"
      v-bind="$attrs"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  computed: {
    inputClasses () {
      return {
        'base-input--has-icon': this.hasIcon,
        'base-input--no-icon': !this.hasIcon
      }
    },
    hasIcon () {
      return !!this.$slots.icon
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  position: relative;

  &__icon-wrap {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
  }

  &__input {
    background: white;
    border: 1px solid #E2E8F0;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.5;
    color: #1A202C;
    padding: 9px 12px 8px 12px;

    &::-webkit-input-placeholder {
      color: #A0AEC0;
    }

    &::-moz-placeholder {
      color: #A0AEC0;
    }

    &:-ms-input-placeholder {
      color: #A0AEC0;
    }

    &:-moz-placeholder {
      color: #A0AEC0;
    }
  }

  &--has-icon {
    .base-input__input {
      padding-left: 36px;
    }
  }
}
</style>
