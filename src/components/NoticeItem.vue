<template>
  <tr>
    <td><v-btn>View</v-btn></td>
    <td>{{ notice["subject"] }}</td>
    <td>{{ notice["contents"] }}</td>
    <td>{{ notice["username"] }}</td>
  </tr>
</template>
<script>
import { mapActions} from "vuex";
export default {
  name: "NoticeItem",
  props: ["notice"],
  methods: {
    ...mapActions(["updateNotice", "deleteNotice"]),
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
    // handleUser(notice) {
    //   // const matchList = notice["$permissions"]["write"].match('w*')
    //   // this.getUser(matchList[1]);
    //   let text = notice["$permissions"]["write"]
    //   text = text.toString().replace('user','');
    //   console.log(text);
    //   let regex = /\w+/g;
    //   let match = regex.exec(text);
    //   this.getUser(match[0]);
    // }
  },
  // created() {
  //   this.handleUser(this.notice);

  // },
};
</script>
