<script>
import Elemento from "./Elemento";
export default {
  name: "FwLista",
  components: {
    "fw-elemento": Elemento
  },
  data() {
    return {
      elements: this.$parent.elements
    };
  }
};
</script>
