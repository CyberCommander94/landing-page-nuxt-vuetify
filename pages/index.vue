<template>
  <div class="home-page">
    <v-main>
      <v-row>
        <v-col>
          <v-row>
            <v-col><p class="main-text">Welcome to</p></v-col>
          </v-row>
          <v-row>
            <v-col
              ><img
                src="~assets/img/logo.png"
                class="landify-logo"
                alt="Landify logo"
            /></v-col>
          </v-row>
          <v-row>
            <v-col><p class="main-text right">setup wizard!</p></v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn nuxt large color="purple900">Start setup now</v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col></v-col>
      </v-row>
    </v-main>
  </div>
</template>

<script>
export default {}
</script>
