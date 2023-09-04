<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

const form = useForm({
    name: '',
    email: '',
    role: 'user',
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />
        <v-container>
            <v-row>
                <v-col cols="12" sm="5">
                    <form @submit.prevent="submit">
                     <v-card class="glass">
                         <v-card-title class="my-5">
                             <h2>Create an Account</h2>
                         </v-card-title>

                         <v-card-text>
                             <v-text-field
                                 density="comfortable"
                                 label="Name"
                                 v-model="form.name"
                                 required
                                 autofocus
                                 autocomplete="name"
                                 :error-messages="form.errors.name"
                             />

                             <v-text-field
                                 density="comfortable"
                                 label="Email"
                                 type="email"
                                 v-model="form.email"
                                 required
                                 autocomplete="username"
                                 :error-messages="form.errors.email"
                             />

                             <v-text-field
                                 density="comfortable"
                                 label="Password"
                                 type="password"
                                 v-model="form.password"
                                 required
                                 autocomplete="new-password"
                                 :error-messages="form.errors.password"
                             />

                             <v-text-field
                                 density="comfortable"
                                 label="Confirm Password"
                                 type="password"
                                 class="mt-1 block w-full"
                                 v-model="form.password_confirmation"
                                 required
                                 autocomplete="new-password"
                                 :error-messages="form.errors.password_confirmation"
                             />
                         </v-card-text>

                         <v-card-actions>
                             <v-btn
                                 variant="flat"
                                 color="primary"
                                 type="submit"
                                 block
                                 size="x-large"
                                 :loading="form.processing">
                                 Register
                             </v-btn>
                         </v-card-actions>

                         <v-card-text>
                             <Link :href="route('login')" >
                                 Already registered? Login Now
                             </Link>
                         </v-card-text>
                     </v-card>
                    </form>
                </v-col>
            </v-row>
        </v-container>
    </GuestLayout>
</template>
