<template>
  <main id="content-wrapper" class="contact container">
    <div class="form-wrapper">
      <div class="msg-alert success" v-if="msgSent">
        <strong>Thank you</strong> <br />
        We will get back with you shortly.
      </div>
      <div class="msg-alert error" v-if="msgFailed">
        <strong>Ops! Something went wrong.</strong> <br />
      </div>
      <form @submit.prevent="contactMe">
        <div>
          <label>
            <input
              type="text"
              name="fullName"
              v-model="form.fullName"
              required
              placeholder="Full Name*"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="email"
              name="email"
              v-model="form.email"
              required
              placeholder="Email Address*"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              name="subject"
              v-model="form.subject"
              required
              placeholder="Subject*"
            />
          </label>
        </div>
        <div>
          <label>
            <textarea
              name="message"
              rows="4"
              required
              v-model="form.message"
              placeholder="Message*"
            ></textarea>
          </label>
        </div>
        <div>
          <button type="submit" class="button">Send Message</button>
        </div>
      </form>
    </div>
    <div>
      <h3>Get In Touch</h3>
      <p>
        If you would like to contact me, please drop me an email at
        <a href="mailto:rrafia@bu.edu" target="_blank">rrafia@bu.edu</a>
        or fill in the contact form. I will respond within 24 to 48 hours.
      </p>
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import EventService from "@/services/EventService";

export default {
  name: "mainContent",
  setup() {
    const form = ref({
      fullName: null,
      email: null,
      subject: null,
      message: null
    });
    let msgSent = ref(false);
    let msgFailed = ref(false);

    function contactMe() {
      EventService.contactMe(form.value)
        .then(response => {
          if (response.data.email === "sent") {
            msgSent.value = true;
          } else {
            msgFailed.value = true;
          }
        })
        .catch(error => {
          console.log(`There was an error: ${error.response}`);
        });
    }

    return {
      form,
      contactMe,
      msgSent,
      msgFailed
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contact div {
  max-width: 70%;
}

.contact h3 {
  font-size: 30px;
}

.contact .form-wrapper {
  padding: 20px;
  margin-right: 10px;
}

.contact .form-wrapper div {
  margin: 10px;
}

.contact .form-wrapper input,
.contact .form-wrapper textarea {
  width: 100%;
  display: block;
  padding: 10px 16px;
  color: #555;
  border: 2px solid #ddd;
  height: auto;
}

button[type="submit"] {
  cursor: pointer;
}

.msg-alert {
  padding: 10px;
  color: white;
  text-align: center;
  border-radius: 10px;
  width: 100%;
}

.success {
  background: #42b983;
}

.error {
  background: #de5151;
}

@media (max-width: 576px) {
  .contact .form-wrapper {
    padding: 0;
  }
}
</style>
