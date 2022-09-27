<template>
  <div class="user-row">
    <ListRow
      class="user-row__list-row"
      :class="listRowClasses"
      cell-role="cell"
    >
      <template #checkbox>
        <CheckboxInput
          :is-checked="isSelected"
          :aria-label="`${isSelected ? 'Deselect' : 'Select'} user`"
          @change="userSelectedUpdate"
        />
      </template>
      <template #user>
        <UserInfo
          :id="item.id"
          :avatar="item.avatar"
          :name="item.name"
          :email="item.email"
        />
      </template>
      <template #permission>
        <RoleBadge :role="item.role" />
      </template>
      <template #actions>
        <div class="user-row__actions">
          <BaseButton
            size="sm"
            theme="gray"
            icon-align="left"
            aria-label="Edit user"
          >
            <img
              width="16"
              height="16"
              alt=""
              :src="require('@/assets/images/edit.svg')"
            >
            Edit
          </BaseButton>
          <BaseButton
            size="sm"
            theme="gray"
            icon
            aria-label="Delete user"
            @click="deleteUser(item.id)"
          >
            <img
              width="16"
              height="16"
              alt=""
              :src="require('@/assets/images/trash.svg')"
            >
          </BaseButton>
        </div>
      </template>
    </ListRow>
  </div>
</template>

<script>
import ListRow from '@/components/ListRow.vue'
import CheckboxInput from '@/components/CheckboxInput.vue'
import BaseButton from '@/components/BaseButton.vue'
import RoleBadge from '@/components/RoleBadge.vue'
import UserInfo from '@/components/UserInfo.vue'
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
    },
    listRowClasses () {
      return {
        'user-row__list-row--selected': this.isSelected
      }
    }
  },
  methods: {
    ...mapMutations(['toggleUser', 'deleteUser']),
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
  padding: 0 1px 4px 16px;

  &__list-row {
    border-radius: 4px;
    padding: 11px 16px;
    position: relative;
    overflow: hidden;

    &:hover,
    &--selected {
      background: $c-gray-10;
    }

    &--selected {
      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: $c-brand-50;
      }
    }

    &:hover {
      .user-row__actions {
        display: flex;
      }
    }
  }

  &__actions {
    gap: 4px;
    display: none;
  }
}
</style>
