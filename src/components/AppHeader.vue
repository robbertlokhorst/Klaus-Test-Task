<template>
  <div class="header">
    <h1 class="title">
      Account users
    </h1>
    <BaseInput
      type="search"
      placeholder="Search"
      class="search-input"
    >
      <template #prepend>
        <img :src="require('@/assets/images/search.svg')">
      </template>
    </BaseInput>
    <BaseButton>Connect users</BaseButton>
  </div>
</template>

<script>
import BaseInput from './BaseInput.vue'
import BaseButton from './BaseButton.vue'

export default {
  components: {
    BaseInput,
    BaseButton
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.title {
  flex-grow: 1;
  font-weight: 500;
  font-size: 18px;
}

.search-input {
  width: 204px;
}
</style>
