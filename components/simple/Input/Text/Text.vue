<script lang="ts" setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

interface Props {
  label: string,
  name: string,
  placeholder: string,
  successMessage: string,
  type: 'email' | 'tel' | 'text' | 'url',
  value: string,
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text'
});

const name = toRef(props, 'name');

const {
  value: inputValue,
  errorMessage,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: props.value,
});

const $style = useCssModule();

const inputClasses = computed(() => {
  const classes = [$style.input]

  if (errorMessage) classes.push($style['input--has-error'])
  if (meta.valid) classes.push($style['input--is-valid'])

  return classes
});

</script>

<template>
  <div :class="inputClasses">
    <label :class="$style.label" :for="name">{{ label }}</label>
    <input :class="$style.field" :name="name" :id="name" :type="type" :value="inputValue" :placeholder="placeholder"
      @input="handleChange" @blur="handleBlur" />
    <span :class="$style.message" v-show="!!errorMessage || meta.valid">{{ errorMessage || successMessage }}</span>
  </div>
</template>

<style lang="scss" module>
@import '../Input';
</style>