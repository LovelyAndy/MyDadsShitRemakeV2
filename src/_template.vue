<template>
<div>Something</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: '',
  setup() {
    const store =useStore()
    return { };
  },
});
</script>