<template>
  <div id="color" class="mx-4 my-5">
    <h1 class="subheading primary--text">Color</h1>
    <v-container fruid class="my-5">
      <v-row dark wrap>
        <v-col cols="12" md="4" wrap v-for="(color, index) in colors" :key="index">
          <v-card outlined tile>
            <v-subheader>{{color.base}}</v-subheader>
            <v-card :class="color.class" outlined tile>|</v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      colors: [
        { base: "primary", class: "pa-2 primary primary--text" },
        { base: "secondary", class: "pa-2 secondary secondary--text" },
        { base: "accent", class: "pa-2 accent accent--text" },
        { base: "error", class: "pa-2 error error--text" },
        { base: "info", class: "pa-2 info info--text" },
        { base: "success", class: "pa-2 success success--text" }
      ]
    };
  }
};
</script>

<style>
</style>
