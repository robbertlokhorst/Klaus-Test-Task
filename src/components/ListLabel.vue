<template>
  <button
    class="list-label"
    aria-label="Sort column"
    @click="sortUsersList(sortKey)"
  >
    <slot />
    <img
      v-if="isActive"
      class="list-label__arrow"
      :class="arrowClasses"
      :src="require('@/assets/images/arrow-down.svg')"
      alt=""
      width="12"
      height="12"
    >
  </button>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: {
    sortKey: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      sortKeyFromStore: state => state.sortKey,
      isDescSorting: state => state.isDescSorting
    }),
    isActive () {
      return this.sortKeyFromStore === this.sortKey
    },
    arrowClasses () {
      return {
        'list-label__arrow--asc': !this.isDescSorting,
        'list-label__arrow--desc': this.isDescSorting
      }
    }
  },
  methods: mapActions(['sortUsersList'])
}
</script>

<style lang="scss" scoped>
.list-label {
  appearance: none;
  font-weight: 500;
  font-size: 12px;
  color: $c-gray-60;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  display: flex;
  gap: 4px;
  align-items: center;

  &__arrow {
    &--asc {
      transform: rotate(180deg);
    }
  }
}
</style>
