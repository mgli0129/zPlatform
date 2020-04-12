<template>
  <div id="floatbutton" class="mx-4 my-5">
    <h1 class="subheading primary--text">FloatButton</h1>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="12" md="6">
          <v-card>
            <v-toolbar dense>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </v-toolbar>
            <v-card-text style="height: 300px;" class="grey lighten-5"></v-card-text>
            <v-card-text style="height: 100px;position: relative ">
              <v-btn absolute dark fab top right small color="pink">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="6">
          <v-card>
            <v-toolbar extended>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
              <template v-slot:extension>
                <v-btn color="pink" dark small absolute bottom left fab>
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
            </v-toolbar>
            <v-card-text style="height: 236px;" class="grey lighten-5"></v-card-text>
            <v-card-text style="height: 100px; position: relative"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "floatbutton",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
