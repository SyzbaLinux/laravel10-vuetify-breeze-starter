<template>
    <v-app >
        <v-app-bar  flat>
           <NavLink class="nav-link mx-3" :href="route('welcome')">
               <v-toolbar-title>
                   Building Project
               </v-toolbar-title>
           </NavLink>
        </v-app-bar>
        <v-main>
            <v-container>
                <slot></slot>
            </v-container>
        </v-main>
    </v-app>
</template>
