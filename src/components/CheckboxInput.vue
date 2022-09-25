<template>
  <input
    class="checkbox"
    type="checkbox"
  >
</template>

<style lang="scss" scoped>
.checkbox {
  appearance: none;
  margin: 0;
  width: 16px;
  height: 16px;
  border: 1px solid $c-gray-40;
  border-radius: 3px;
  background: white;
  position: relative;

  &:checked {
    background: $c-brand-50;
    border-color: $c-brand-50;

    &::after {
      content: '';
      background-image: url(@/assets/images/check.svg);
      width: 10px;
      height: 8px;
      background-size: 10px 8px;
      background-repeat: no-repeat;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
