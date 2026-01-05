<template>
<div class="font-extrabold mb-6 text-3xl">Home</div>
<p class="mb-6">Name in store is: {{name}}</p>
<input type="text" v-model="newName" class="p-2 mr-4 border-2 border-gray-500 rounded"/>
<button @click="saveName" class="p-2 text-white bg-indigo-600 rounded">Submit</button>
</template>

<script lang="ts">
import { defineComponent, computed, ref} from 'vue';
import { useStore } from 'vuex';
import {useRouter} from'vue-router'

export default defineComponent({
  name: '',
  setup() {
    const store = useStore()
    const name = computed(()=>{
      return store.state.user.name
    })
    const newName= ref('')
    function saveName(){
      store.dispatch('saveName', newName.value)
      newName.value = ''
      router.push('/about')
    }
    const router = useRouter()
    return { store, name, newName, saveName };
  },
});
</script>