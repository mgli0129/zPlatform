<template>
  <div id="team" class="mx-4 my-5">
    <h1 class="subheading primary--text">焦虑事件</h1>
    <v-card flat>
      <v-card-title>
        <!-- Anxiety -->
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
        sort-by="date"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title>我的事件</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="800px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">新事件</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <!-- <v-text-field v-model="editedItem.date" label="事件日期"></v-text-field> -->
                        <v-menu
                          v-model="datePicker"
                          :close-on-content-click="false"
                          :nudge-right="40"
                          transition="scale-transition"
                          offset-y
                          min-width="290px"
                        >
                          <template v-slot:activator="{ on }">
                            <v-text-field
                              v-model="editedItem.date"
                              label="事件日期"
                              prepend-icon="event"
                              readonly
                              v-on="on"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="editedItem.date"
                            no-title
                            scrollable
                            @input="datePicker = false"
                          ></v-date-picker>
                        </v-menu>
                      </v-col>
                      <v-col cols="12" sm="12" md="8">
                        <v-text-field v-model="editedItem.title" label="事件标题"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          autocomplete="事件描述"
                          v-model="editedItem.content"
                          label="请描述事件的经过"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.progress" label="事件进度"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-select
                          :items="badStatusList"
                          label="严重程度"
                          v-model="editedItem.badStatus"
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-switch v-model="switchHelp" :label="switchHelp ? '申请帮助':'不申请帮助'"></v-switch>
                        <!-- <v-text-field v-model="editedItem.reqHelp" label="已申请帮助"></v-text-field> -->
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">删除</v-btn>
                  <v-btn color="blue darken-1" text @click="save">修改</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">重置</v-btn>
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
      dialog: false,
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
        { text: "", value: "actions", sortable: false }
      ],
      events: [],
      editedIndex: -1,
      editedItem: {
        id: 0,
        date: "2020-01-01",
        title: "地铁场景1",
        progress: "录入",
        badStatus: "严重",
        reqHelp: "未申请"
      },
      defaultItem: {
        id: 0,
        date: "2020-01-01",
        title: "地铁场景1",
        progress: "录入",
        badStatus: "严重",
        reqHelp: "未申请"
      },
      badStatusList: ["正常", "轻微", "中等", "严重", "极度"],
      datePicker: false,
      modal: false,
      switchHelp: false,
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "新事件" : "修改事件";
    }
  },

  watch: {
    dialog(val) {
      val || this.close();
    }
  },

  created() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.events = [
        {
          id: 1001,
          date: "2020-01-01",
          title: "地铁场景1",
          progress: "录入",
          badStatus: "严重",
          reqHelp: "未申请"
        },
        {
          id: 1002,
          date: "2020-01-02",
          title: "商场场景1",
          progress: "录入",
          badStatus: "中等",
          reqHelp: "未申请"
        },
        {
          id: 1003,
          date: "2020-02-11",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请"
        },
        {
          id: 1004,
          date: "2020-02-12",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请"
        },
        {
          id: 1005,
          date: "2020-02-13",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请"
        },
        {
          id: 1006,
          date: "2020-02-14",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请"
        },
        {
          id: 1007,
          date: "2020-02-15",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请"
        },
        {
          id: 1008,
          date: "2020-02-16",
          title: "地铁场景2",
          progress: "鼓励",
          badStatus: "严重",
          reqHelp: "已申请"
        }
      ];
    },

    editItem(item) {
      this.editedIndex = this.events.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.events.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.events.splice(index, 1);
    },

    close() {
      this.dialog = false;
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      }, 300);
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.events[this.editedIndex], this.editedItem);
      } else {
        this.desserts.push(this.editedItem);
      }
      this.close();
    }
  }
};
</script>

<style>
</style>
