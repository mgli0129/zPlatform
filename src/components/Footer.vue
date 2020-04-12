<template>
  <v-footer padless class="grey lighten-1">
    <v-row>
      <v-col cols="12" sm="12">
        <v-card flat tile class="grey lighten-1">
          <v-row>
            <v-col cols="12" md="1">
              <v-card flat tile class="ma-3 grey lighten-1 primary--text" max-width="160">
                <v-img src="@/assets/logo_zhifouxi.svg"></v-img>
              </v-card>
            </v-col>
            <v-col cols="12" md="11">
              <v-card flat tile class="ma-3 grey lighten-1 desc" v-text="siteDesc"></v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="1"></v-col>
            <v-col cols="12" md="11">
              <v-card flat tile class="ma-3 grey lighten-1 logoFont">
                <v-btn v-for="icon in icons" :key="icon" icon>
                  <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <v-col cols="12" md="1">
              <v-card flat tile class="ma-3 grey lighten-1 fontLogo text-center" max-width="160">
                <span class="font-weight-bold" v-text="fontLogo"></span>
              </v-card>
            </v-col>
            <v-col cols="12" md="11">
              <v-card flat tile class="ma-3 grey lighten-1 desc" v-text="copyRight"></v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    siteDesc: "知否知否，自身修养是否知否...",
    fontLogo: "ZhiFouXi",
    copyRight: "Copyright © " + new Date().getFullYear() + " 粤ICP备20016438号",
    icons: ["dashboard", "folder", "person", "color_lens"]
  })
};
</script>

<style scoped>
.desc {
  color: #616161;
  font-weight: 500;
}
.fontLogo {
  color: #616161;
  font-weight: 900;
}
</style>