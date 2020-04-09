<template>
  <div id="projects" class="mx-4 my-5">
    <h1 class="subheading primary--text">Projects</h1>
    <v-container class="my-5">
      <v-card flat class="px-10 py-5 my-3">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <div class="subheading primary--text">Project title</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="subheading primary--text">Person</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="subheading primary--text">Due By</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="subheading primary--text">Status</div>
          </v-flex>
        </v-layout>
      </v-card>
      <v-card flat class="px-10 py-1">
        <v-layout
          row
          wrap
          v-for="(project,index) in projects"
          :key="index"
          item="project"
          class="my-5"
          
        >
          <v-flex xs12 md6>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2 right>
            <v-chip small :color="chip(project.status)">{{project.status}}</v-chip>
          </v-flex>
          <v-divider />
        </v-layout>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "projects",
  data() {
    return {
      chips: [
        {
          status: "ongoing",
          color: "primary darken-5"
        },
        {
          status: "complete",
          color: "success"
        },
        {
          status: "pending",
          color: "secondary"
        }
      ],
      projects: [
        {
          title: "Create a new website",
          person: "MG Li",
          due: "6 Apr 2020",
          status: "ongoing",
          link: ""
        },
        {
          title: "Deployment project",
          person: "MG Li",
          due: "1 Jan 2020",
          status: "complete",
          link: ""
        },
        {
          title: "Develop the forum project",
          person: "Nick",
          due: "15 Aug 2019",
          status: "ongoing",
          link: ""
        },
        {
          title: "Create a vue project",
          person: "Spring Zhang",
          due: "3 Apr 2018",
          status: "complete",
          link: ""
        },
        {
          title: "Create a springcloud project",
          person: "MG Li",
          due: "16 Apr 2020",
          status: "pending",
          link: ""
        }
      ]
    };
  },
  methods: {
    chip(status) {
      let _color = "primary"
      this.chips.forEach((c) => {
        if (c.status === status){
          _color = c.color;
        }
      })
      return _color;
  }
  }
};
</script>

<style>
</style>
