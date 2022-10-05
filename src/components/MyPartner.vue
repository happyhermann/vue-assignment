 <!-- eslint-disable -->

<template>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
        </v-col>
        <v-col
          class="mb-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-5">
            Important Links
          </h2>
          <v-row justify="center">
            <a
              v-for="(link, i) in importantLinks"
              :key="i"
              :href="link.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ link.text }}
            </a>
          </v-row>
        </v-col>
        <v-col
          class="mb-5"
          cols="12"
        >
          <h2 class="headline font-weight-bold mb-5">
            MyPartner
          </h2>
  
          <v-row justify="center">
            <a
              v-for="(eco, i) in ecosystem"
              :key="i"
              :href="eco.href"
              class="subheading mx-3"
              target="_blank"
            >
              {{ eco.text }}
            </a>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  
  export default {
    name: 'MyPartner',
  
    data: () => ({
     
    }),
  }
  </script>
  