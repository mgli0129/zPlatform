<template>
  <div id="team" class="mx-4 my-5">
    <h1 class="subheading primary--text">焦虑事件</h1>
    <v-card flat>
      <v-card-title>
        Anxiety
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="events"
        :search="search"
        v-model="selected"
        :single-select="singleSelect"
        item-key="id"
        show-select
        class="elevation-1"
      >
        <template v-slot:top>
          <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "team",
  data() {
    return {
      search: "",
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "事件日期",
          align: "start",
          sortable: true,
          value: "date"
        },
        { text: "事件标题", sortable: false, value: "title" },
        { text: "事件进度", value: "progress" },
        { text: "严重程度", value: "badStatus" },
        { text: "已申请帮助", value: "reqHelp" },
        { text: "", value: "button" }
      ],
      events: [
        {
          id: 1001,
          date: "2020/01/01",
          title: "地铁场景1",
          progress: "录入",
          badStatus: "严重",
          reqHelp: "未申请",
          iron: ""
        },
        {
          id: 1002,
          date: "2020/01/02",
          title: "商场场景1",
          progress: "录入",
          badStatus: "中等",
          reqHelp: "未申请",
          iron: ""
        },
        {
          id: 1003,
          date: "2020/02/11",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请",
          iron: ""
        },
        {
          id: 1004,
          date: "2020/02/12",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请",
          iron: ""
        },
        {
          id: 1005,
          date: "2020/02/13",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请",
          iron: ""
        },
        {
          id: 1006,
          date: "2020/02/14",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请",
          iron: ""
        },
        {
          id: 1007,
          date: "2020/02/15",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请",
          iron: ""
        },
        {
          id: 1008,
          date: "2020/02/16",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请",
          iron: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>
