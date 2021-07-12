<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  beforeMount() {
    // Automatically redirect to the login page
    this.$router.push('/login');
  },
});
</script>
