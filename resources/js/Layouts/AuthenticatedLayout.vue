<template>
    <v-app id="inspire">
        <v-app-bar  flat>
            <v-app-bar-title>Building Project | Admin</v-app-bar-title>
            <v-spacer></v-spacer>

            <NavLink
                v-for="(menu, i) in menues"
                :key="i"
                :href="menu.to"
            >
                <v-btn class="no-uppercase text-black">
                    {{ menu.title }}
                </v-btn>
            </NavLink>

            <v-btn
                color="primary"
                variant="flat"
                class="rounded-pill"
            >
                Profile

                <v-menu activator="parent">
                    <v-list>
                        <v-list-item  >
                            <v-list-item-title>
                                Profile
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>

        </v-app-bar>
        <v-main>
            <v-container fluid>
                <slot/>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    export default {

        data(){
            return{

                menues:[
                    {
                        title:'Projects',
                        to:'projects'
                    },
                    {
                        title:'Clients',
                        to:'users'
                    },
                ]
            }
        }
    }
</script>
