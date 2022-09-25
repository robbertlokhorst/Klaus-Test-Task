<template>
  <div class="action-bar">
    <h2 class="action-bar__title">
      2 users selected
    </h2>
    <div class="action-bar__buttons">
      <BaseButton
        size="sm"
        theme="gray"
      >
        <template #prepend>
          <img :src="require('@/assets/images/edit.svg')">
        </template>
        Edit
      </BaseButton>
      <BaseButton
        size="sm"
        theme="gray"
        class="shadow-xs"
      >
        <template #prepend>
          <img :src="require('@/assets/images/trash.svg')">
        </template>
        Delete
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.action-bar {
  display: flex;
  align-items: center;
  gap: 25px;
  padding: 24px 32px;

  &__title {
    font-size: 16px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 12px;
  }
}
</style>
