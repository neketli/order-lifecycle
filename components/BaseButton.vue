<template>
  <component
    :is="tag"
    :disabled="disableButton"
    :class="[btnClass, colorVariants]"
    :variant="variant"
    :href="to"
  >
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    to: {
      type: String,
    },
  },
  data() {
    return {
      disableButton: this.disabled,
    };
  },

  computed: {
    btnClass() {
      return {
        'base-spinner': this.loading == true,
        'cursor-not-allowed': this.disableButton == true,
        'button base-button rounded-lg px-6 py-3 inline-flex align-middle align-items-center justify-center font-medium focus:outline-none border-2': true,
      };
    },

    colorVariants() {
      switch (this.variant) {
        case 'primary':
          return 'border-transparent bg-rtk-orange hover:shadow-md text-white';
        case 'danger':
          return 'border-red-600 bg-red-600 hover:bg-red-700 hover:border-red-700 text-white';
        default:
          break;
      }
    },
  },
};
</script>
