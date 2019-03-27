<template>
  <div class="preview">
    <h2>{{ title }}</h2>
    <img v-show="image" :src="image" :alt="title">
    <a :href="url">{{url}}</a>
  </div>
</template>
<script>
export default {
  name: "FwPreview",
  data() {
    return {
      title: "",
      image: "",
      url: ""
    };
  }
};
</script>