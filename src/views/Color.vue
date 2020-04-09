<template>
  <div id="color" class="mx-4 my-5">
    <h1 class="subheading primary--text">Color</h1>
    <v-container fruid class="my-5">
      <v-row dark>
        <v-col cols="12" md="4">
          <v-card outlined tile>
            <v-subheader>primary</v-subheader>
            <v-card class="pa-2 primary" outlined tile>|</v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined tile>
            <v-subheader>secondary</v-subheader>
            <v-card class="pa-2 secondary" outlined tile>|</v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined tile>
            <v-subheader >accent</v-subheader>
            <v-card class="pa-2 accent" outlined tile>|</v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined tile>
            <v-subheader>error</v-subheader>
            <v-card class="pa-2 error" outlined tile>|</v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined tile>
            <v-subheader>info</v-subheader>
            <v-card class="pa-2 info" outlined tile>|</v-card>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card outlined tile>
            <v-subheader>success</v-subheader>
            <v-card class="pa-2 success" outlined tile>|</v-card>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "color"
};
</script>

<style>
</style>
