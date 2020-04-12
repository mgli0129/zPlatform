<template>
  <div id="navbar">
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list>
        <v-list-item-group v-for="(link, i) in links" :key="i" color="secondary">
          <v-list-group v-if="link.subItems" :prepend-icon="link.icon" no-action color="secondary">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              v-for="subItem in link.subItems"
              :key="subItem.text"
              router
              :to="subItem.route"
            >
              <v-list-item-content>
                <v-list-item-title v-text="subItem.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item v-else router :to="link.route">
            <v-list-item-icon>
              <v-icon v-text="link.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="link.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app flat clipped-left dark class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>z-Platform</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed dark class="primary">
        <span>Sign Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Dashboard", route: "/" },
        { icon: "folder", text: "My Project", route: "/projects" },
        { icon: "person", text: "Team", route: "/team" },
        { icon: "color_lens", text: "Color", route: "/color" },
        {
          icon: "border_inner",
          text: "Layout",
          subItems: [
            {
              text: "Positioning",
              route: "/positioning"
            },
            {
              text: "FloatButton",
              route: "/floatbutton"
            },
            {
              text: "FloatButton1",
              route: "/floatbutton1"
            }
          ]
        }
      ]
    };
  }
};
</script>
