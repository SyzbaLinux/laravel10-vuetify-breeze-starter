<template>
     <v-app >
         <v-app-bar color="transparent" flat/>
        <v-main>
            <v-container>
               <v-row>
                   <v-col cols="12" sm="5">
                       <v-card class="glass">
                           <v-card-title>
                               <h1 class="mt-5">
                                   Welcome
                               </h1>
                               <p class="my-3">
                                   Housing & Building Project
                               </p>
                           </v-card-title>

                           <v-card-actions>
                              <NavLink class="nav-link" :href="route('login')">
                                  <v-btn size="x-large" class="no-uppercase" block color="primary" variant="flat">
                                      Get Started
                                  </v-btn>
                              </NavLink>
                           </v-card-actions>
                       </v-card>
                   </v-col>
                   <v-col cols="12" sm="7">
                       Image
                   </v-col>
               </v-row>
            </v-container>
        </v-main>
     </v-app>
</template>

