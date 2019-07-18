<template>
  <section class="section">
    <div class="container">
      <h1 class="title">{{title}}</h1>
      <!-- Assumes f is an array of the form
        [KEY, DESCRIPTION, TYPE]
       -->
      <div
        v-for="(f, index) in fields"
        :key="index">
          <label class="label">{{f[1]}}</label>
          <!-- String Handling -->
          <div v-if="f[2]==='string'" class="control">
              <input class="input" type="text" placeholder="Text input">
          </div>
          <!-- Password Handling -->
          <div v-if="f[2]==='password'" class="control">
              <input class="input" type="password" placeholder="B@dP@ssw0rd">
          </div>
          <!-- Email Handling -->
          <div v-if="f[2]==='email'" class="control">
              <input class="input" type="email" placeholder="nouser@nodomain.com">
          </div>
          <!-- Phone Number Handling -->
          <div v-if="f[2]==='tel'" class="control">
              <input class="input" type="tel" placeholder="123-456-7890">
          </div>
          <!-- Date Handling -->
          <b-field v-if="f[2]==='date'">
              <b-datepicker
                  placeholder="Click to select..."
                  icon="calendar-today">
              </b-datepicker>
          </b-field>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'patient',
  props: ['fields', 'title']
}
</script>
