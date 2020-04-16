<template>
  <div>
    <div class="snimka"></div>

    <component :is="getLayout" :allitems="allCategories"></component>
  </div>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
export default {
  watchQuery: ["page"],

  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Index",
  components: { BaelGrid, FullGrid },
  data() {
    return {};
  },
  methods: {},

  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    },
    allCategories() {
      return this.$store.state.allCats;
    },
    getLayout() {
      if (this.$store.state.siteInfo.altlayout == false) {
        return "BaelGrid";
      } else if (this.$store.state.siteInfo.altlayout == true) {
        return "FullGrid";
      }
    }
  }
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
.snimka {
  width: 100%;
  height: 80vh;
  background: url("../assets/doves.jpg") no-repeat center center;
  background-color: black;
  background-size: contain;
}
</style>
