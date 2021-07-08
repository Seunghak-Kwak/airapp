<template>
  <li class="flex justify-between items-center mt-4 px-4">
    <div class="flex">
      <input
        type="checkbox"
        @click="handleCheck(notice)"
        v-model="notice['subject']"
        class="h-6 w-6 text-green-500 rounded-md border-4 border-green-200 focus:ring-0 transition duration-75 ease-in-out transform hover:scale-125"
      />
      
      <div
        class="capitalize ml-3 text-md font-medium"
        :class="notice['subject'] ? 'line-through' : ''"
      >
        <!-- {{ notice["subject"] }} -->
        {{ notice["subject"] }}
        {{ notice["username"] }}
      </div>
    </div>
        <button
      @click="handleUser(notice)"
    >
    getUser
    </button>
    <button
      @click="handleDelete(notice)"
    >
    delete
    </button>
  </li>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "NoticeItem",
  props: ["notice"],
  // data: () => ({
  //   user:'123'
  // }),
  computed: mapGetters(["user","users"]),
  methods: {
    ...mapActions(["updateNotice", "deleteNotice", "getUser"]),
    handleCheck(notice) {
      let data = {
        // isComplete: !todo["isComplete"],
      };
      const payload = {
        data: data,
        documentId: notice["$id"],
        read: notice["$permissions"]["read"],
        write: notice["$permissions"]["write"],
      };
      this.updateNotice(payload);
    },
    handleDelete(notice) {
      this.deleteNotice(notice["$id"]);
    },
    handleUser(notice) {
      // const matchList = notice["$permissions"]["write"].match('w*')
      // this.getUser(matchList[1]);
      let text = notice["$permissions"]["write"]
      text = text.toString().replace('user','');
      console.log(text);
      let regex = /\w+/g;
      let match = regex.exec(text);
      this.getUser(match[0]);
    }
  },
  created() {
    this.handleUser(this.notice);

  },
};
</script>
