<template>
  <div class="loginframe">
    <p class="tlt-txt">alt:Admin</p>
    <p class="lgn-txt">Login</p>
    <form @submit.prevent="submitForm">
      <CInput
       placeholder="Username"
       autocompleted="username"
       bgColor="494C53"
       class="u-npt"
       max="24"
       v-model="username"
       />
      <CInput
        placeholder="Password"
        autocompleted="password"
        bgColor="494C53"
        iType="password"
        class="p-npt"
        max="24"
        v-model="password"
      />
      <CButton
        color="494C53"
        hover="586070"
        class="bttn-sbmt"
      >
        <img src="../../public/assets/arrow_right.svg" draggable="false" class="arr-rght">
      </CButton>
    </form>
    <!-- TODO: Put CInput in a div to set it more left -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CInput from "../components/CInput.vue";
import CButton from "../components/CButton.vue";
export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submitForm() {
      
    }
  },
  components: { CInput, CButton },
});
</script>

<style>
@import "../css/login.css";
</style>
