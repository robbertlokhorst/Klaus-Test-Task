<template>
  <div class="user-info">
    <figure
      v-if="avatar"
      class="user-info__media"
    >
      <img
        v-if="idState.canLoadImage"
        :key="`${avatar}_image`"
        :src="avatar"
        class="user-info__image"
        alt=""
        @error="idState.canLoadImage = false"
      >
      <img
        v-if="!idState.canLoadImage"
        :key="`${avatar}_fallback`"
        src="@/assets/images/klaus.jpg"
        class="user-info__image"
        alt=""
      >
    </figure>
    <div class="user-info__entry">
      <div class="user-info__name">
        {{ name }}
      </div>
      <div class="user-info__email">
        {{ email }}
      </div>
    </div>
  </div>
</template>

<script>
import { IdState } from 'vue-virtual-scroller'

export default {
  mixins: [
    IdState({
      idProp: vm => vm.id
    })
  ],
  props: {
    id: {
      type: Number,
      default: 0,
      required: true
    },
    avatar: {
      type: String,
      default: '',
      required: false
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    email: {
      type: String,
      default: '',
      required: true
    }
  },
  idState () {
    return {
      canLoadImage: true
    }
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;

  &__media {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__name {
    font-weight: 500;
  }

  &__email {
    font-weight: 400;
    color: $c-gray-60;
  }
}
</style>
