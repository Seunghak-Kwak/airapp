<template>
  <v-app>
  <Header />
  <v-main class="mt-4 mx-15">
    <v-container
    class="d-flex justify-space-between">
      <h1>📃게시판</h1>
      <v-btn @click="handleAddNotice" color="indigo lighten-4" class="ma-3">등록</v-btn> 
    </v-container>
    <!-- <v-container id="v-model-basic" class="demo"> 
      <div class="subject1" style=float:left;>
        <span>제목:  </span>
      </div>
      <div class="subject2" style=float:left;>
        <input v-model="subject" placeholder="제목을 입력해주세요." /> 
      </div>
    </v-container> -->

    <v-container> 
      <div class="Subject d-flex pa-2" >
        <span>Subject</span>
      </div>
      <!-- <form @submit="handleAddTodo"> -->
        <v-textarea
          v-model="subject"
          label=""
          auto-grow
          outlined
          rows="1"
          row-height="15"
          :placeholder="value1"></v-textarea>
      <!-- </form> {{ content }} 값 저장 -->
    <!-- </v-container> -->

    <!-- <v-container>  -->
      <div class="Content d-flex pa-2">
        <span>Contents</span>
      </div>
      <!-- <form @submit="handleAddTodo"> -->
        <v-textarea 
        v-model="contents"
        name="imput-7-1"
        filled
        label=""
        counter="200"
        :rules="rules"
        :placeholder="value2"></v-textarea>
      <!-- </form> {{ content }} 값 저장 -->
    <!-- </v-container>

    <v-container> -->
                            <!-- <div class="FileAttach d-flex pa-2">
                              <span>Attach</span>
                            </div>
                              <v-file-input
                              v-model="files"
                              color="deep-purple accent-4"
                              counter
                              label="File input"
                              multiple
                              placeholder="Select your files"
                              prepend-icon="mdi-paperclip"
                              outlined
                              :show-size="1000"
                              >
                                <template v-slot:selection="{ index, text }">
                                  <v-chip
                                    v-if="index < 2"
                                    color="deep-purple accent-4"
                                    dark
                                    label
                                    small
                                  >
                                    {{ text }}
                                  </v-chip>

                                  <span
                                    v-else-if="index === 2"
                                    class="text-overline grey--text text--darken-3 mx-2"
                                  >
                                    +{{ files.length - 2 }} File(s)
                                  </span>
                              </template>
                              </v-file-input> -->
    </v-container>

    <p>제목 테스트: {{ subject }}</p>
    <p>본문 테스트: {{ contents }}</p>
  </v-main>
  <Footer />
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Header from './Header.vue'
import Footer from './Footer.vue'

export default {
  data: () => ({
    subject: '',
    contents: '',
    rules: [v => v.length <= 200 || 'Max 200 characters'],
    value1: 'Please enter the subject.',
    value2: 'Please enter the text.'
  }),
  components: {
    Header,
    Footer,
  },
  name: "Notice",
  computed: mapGetters(["notices", "getAccount", "users"]),
  methods: {
    ...mapActions(["logout","fetchNotices","addNotice","fetchAccount"]),
    handleLogout() {
      this.logout();
    },
    handleAddNotice(e) {
      e.preventDefault();
      const userId = this.getAccount["$id"];
      if (!userId || !this.contents) {
        console.log("contents is null/empty");
      } else {
        const data = {
          subject: this.subject,
          contents: this.contents,
          username: this.getAccount.name,
        };
        const read = ['role:member'];
        const write = [`user:${userId}`];
        this.addNotice({
          data,
          read,
          write,
        });
        this.subject = ""
        this.contents = ""
        this.$router.push('./noticelist');
      }
    },
  },
  created() {
    if (!this.getAccount) this.fetchAccount();
    this.fetchNotices();
  },
};
</script>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>