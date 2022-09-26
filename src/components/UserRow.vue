<template>
  <div class="user-row">
    <ListRow class="user-row__list-row">
      <template #checkbox>
        <CheckboxInput
          :is-checked="isSelected"
          @change="userSelectedUpdate"
        />
      </template>
      <template #user>
        <UserInfo
          :avatar="item.avatar"
          :name="item.name"
          :email="item.email"
        />
      </template>
      <template #permission>
        <RoleBadge :role="item.role" />
      </template>
      <template #actions>
        <BaseButton
          size="sm"
          theme="gray"
          icon-align="left"
        >
          <img :src="require('@/assets/images/edit.svg')">
          Edit
        </BaseButton>
        <BaseButton
          size="sm"
          theme="gray"
          icon
        >
          <img :src="require('@/assets/images/trash.svg')">
        </BaseButton>
      </template>
    </ListRow>
  </div>
</template>

<script>
import ListRow from './ListRow.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import RoleBadge from './RoleBadge.vue'
import UserInfo from './UserInfo.vue'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    ListRow,
    BaseButton,
    RoleBadge,
    UserInfo,
    CheckboxInput
  },
  props: {
    item: {
      type: Object,
      required: true,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    ...mapGetters(['isUserSelected']),
    isSelected () {
      return this.isUserSelected(this.item.id)
    }
  },
  methods: {
    ...mapMutations(['toggleUser']),
    userSelectedUpdate (isChecked) {
      this.toggleUser({
        id: this.item.id,
        checked: isChecked
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.user-row {
  padding: 0 16px 4px 16px;

  &__list-row {
    background: #F7FAFC;
    border-radius: 4px;
    padding: 11px 16px;
  }
}
</style>
