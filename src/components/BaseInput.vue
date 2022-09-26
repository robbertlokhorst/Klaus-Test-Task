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
      :value="value"
      @input="handleInput"
    >
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: '',
      required: false
    }
  },
  computed: {
    inputClasses () {
      return {
        'base-input--has-prepend': this.hasPrepend
      }
    },
    hasPrepend () {
      return !!this.$slots.prepend
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
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
    left: 0;
    width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__input {
    background: white;
    border: 1px solid $c-gray-30;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.5;
    color: $c-gray-90;
    padding: 9px 12px 8px 12px;
    width: 100%;

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }

    &::-webkit-input-placeholder {
      color: $c-gray-50;
    }

    &::-moz-placeholder {
      color: $c-gray-50;
    }

    &:-ms-input-placeholder {
      color: $c-gray-50;
    }

    &:-moz-placeholder {
      color: $c-gray-50;
    }
  }

  &--has-prepend {
    .base-input__input {
      padding-left: 36px;
    }
  }
}
</style>
