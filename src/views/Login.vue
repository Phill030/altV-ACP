<template>
  <div class="loginframe">
    <p class="tlt-txt">alt:Admin</p>
    <p class="err-txt">{{ errMsg }}</p>
    <p class="lgn-txt">Login</p>
    <form @submit.prevent="sendLogin">
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
      <CButton color="494C53" hover="586070" class="bttn-sbmt">
        <img
          src="../../public/assets/arrow_right.svg"
          draggable="false"
          class="arr-rght"
        />
      </CButton>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CInput from "../components/CInput.vue";
import CButton from "../components/CButton.vue";
import { login } from "../services/auth";
export default defineComponent({
  data() {
    return {
      username: "",
      password: "",
      errMsg: "",
    };
  },
  methods: {
    async sendLogin() {
      const msg = await login(this.username, this.password);
      if (msg) this.errMsg = msg;
      else this.$router.push("/panel");
    },
    mounted() {
      localStorage.clear();
    },
  },
  components: { CInput, CButton },
  beforeCreate: function () {
    document.body.className = `${this.$route.name?.toString().toLowerCase()}`;
  },
});
</script>

<style scoped>
@import "../css/login.css";
</style>
