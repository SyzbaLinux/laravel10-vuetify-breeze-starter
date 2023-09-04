<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import { Head, useForm } from '@inertiajs/vue3';

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Log in" />


      <v-container>
          <v-row>
              <v-col cols="12" sm="5">
                  <v-form @submit.prevent="submit">
                     <v-card class="glass">
                      <v-card-title class="my-5">
                          <h2> Login Page </h2>
                      </v-card-title>

                      <v-card-text>
                          <v-text-field
                              variant="outlined"
                              density="comfortable"
                              v-model="form.email"
                              required
                              autofocus
                              label="Email"
                              autocomplete="username"
                              :error-messages="form.errors.email"
                          />

                          <v-text-field
                              variant="outlined"
                              density="comfortable"
                              label="Password"
                              type="password"
                              v-model="form.password"
                              required
                              autocomplete="current-password"
                              :error-messages="form.errors.password"
                          />

                          <div class="d-flex  align-center">
                              <v-checkbox
                                  v-model:checked="form.remember"
                                  label="Remember me"
                              />

                              <NavLink
                                  class="mb-5"
                                  :href="route('password.request')"
                              >
                                  Forgot your password?
                              </NavLink>
                          </div>



                      </v-card-text>

                      <v-card-actions>
                            <v-btn
                                variant="flat"
                                color="primary"
                                block
                                size="x-large"
                                type="submit"
                            >
                                Submit
                            </v-btn>
                      </v-card-actions>
                  </v-card>
                  </v-form>
              </v-col>
              <v-col cols="12" sm="7"></v-col>
          </v-row>
      </v-container>
    </GuestLayout>
</template>
