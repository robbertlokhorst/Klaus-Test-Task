<template>
  <div
    class="base-input"
    :class="inputClasses"
  >
    <div
      v-if="hasPrepend"
      class="base-input__prepend"
    >
      <slot name="prepend" />
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
        'base-input--has-prepend': this.hasPrepend
      }
    },
    hasPrepend () {
      return !!this.$slots.prepend
    }
  }
}
</script>

<style lang="scss" scoped>
.base-input {
  position: relative;

  &__prepend {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
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

  &--has-prepend {
    .base-input__input {
      padding-left: 36px;
    }
  }
}
</style>
