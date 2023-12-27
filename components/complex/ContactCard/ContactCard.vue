<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as Yup from 'yup';

const $mail = useMail()

const onSubmit = (values: any) => {
  alert(values);
  // $mail.send(values)
}

const validateEmail = (value: any) => {
  // if the field is empty
  if (!value) {
    return 'This field is required';
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'This field must be a valid email';
  }
  // All is good
  return true;
}
</script>

<template>
  <Card id="contact" :class="$style.card">
    <header :class="$style.header">
      <h3 :class="$style.heading">Let's build something!</h3>
      <p :class="$style.description">Need help with a project or maybe your team just wants some guidance?</p>
    </header>
    <Form :class="$style.form" @submit="onSubmit">
      <InputText :class="[$style.field, $style['field--is-name']]" label="Name" name="name" type="text" />
      <InputText :class="[$style.field, $style['field--is-email']]" label="Email" name="email" type="email" />
      <InputTextArea :class="[$style.field, $style['field--is-message']]" :value="message" label="Message" />
    </Form>
    <footer :class="$style.footer">
      <ButtonAction :class="$style.button" label="Say Hello" :action="onSubmit" />
    </footer>
  </Card>
</template>

<style lang="scss" module>
.card {
  padding: useSpacing(lg) useSpacing(md);

  @media screen and (min-width: useBreakpoint(sm)) {
    padding: useSpacing(lg) useSpacing(lg);
  }

  @media screen and (min-width: useBreakpoint(md)) {
    padding: useSpacing(lg) useSpacing(xl);
  }

  @media screen and (min-width: useBreakpoint(lg)) {
    padding: useSpacing(lg) useSpacing(xxl);
  }
}

.header,
.footer {
  text-align: center;
}

.heading {
  @include heading(md);
}

.description {
  @include text(md);

  &+* {
    margin-top: useSpacing(md);
  }
}

.form {
  @include grid(md, lg);

  grid-auto-rows: auto;
  margin-top: useSpacing(md);
}

.field {
  grid-column: 1 / -1;
}

.footer {
  margin-top: useSpacing(lg);
}
</style>