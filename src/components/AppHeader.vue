<template>
  <div class="header">
    <h1
      id="main_title"
      class="title"
    >
      Account users
    </h1>
    <BaseInput
      v-model="searchQuery"
      type="search"
      placeholder="Search"
      class="search-input"
    >
      <template #prepend>
        <img
          width="16"
          height="16"
          alt=""
          :src="require('@/assets/images/search.svg')"
        >
      </template>
    </BaseInput>
    <BaseButton>Connect users</BaseButton>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import { mapMutations, mapState } from 'vuex'

export default {
  components: {
    BaseInput,
    BaseButton
  },
  computed: {
    ...mapState({ searchQueryFromStore: 'searchQuery' }),
    searchQuery: {
      get () {
        return this.searchQueryFromStore
      },
      set (value) {
        this.setSearchQuery(value)
      }
    }
  },
  methods: mapMutations(['setSearchQuery'])
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
