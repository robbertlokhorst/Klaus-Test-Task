<template>
  <div class="action-bar">
    <h2
      class="action-bar__title"
    >
      {{ title }}
    </h2>
    <div class="action-bar__buttons">
      <BaseButton
        size="sm"
        theme="gray"
        icon-align="left"
        :disabled="!selectedUsersLength"
      >
        <img :src="require('@/assets/images/edit.svg')">
        Edit
      </BaseButton>
      <BaseButton
        size="sm"
        theme="gray"
        icon-align="left"
        :disabled="!selectedUsersLength"
        @click="deleteSelectedUsers"
      >
        <img :src="require('@/assets/images/trash.svg')">
        Delete
      </BaseButton>
    </div>
  </div>
</template>

<script>
import BaseButton from './BaseButton.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    BaseButton
  },
  computed: {
    ...mapGetters(['selectedUsersLength']),
    title () {
      return `${this.selectedUsersLength} user${this.selectedUsersLength === 1 ? '' : 's'} selected`
    }
  },
  methods: mapMutations(['deleteSelectedUsers'])
}
</script>

<style lang="scss" scoped>
.action-bar {
  display: flex;
  align-items: center;
  padding: 24px 32px;
  gap: 12px;

  &__title {
    font-size: 16px;
    min-width: 138px;
  }

  &__buttons {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}
</style>
