export const Open = ref(false);

export const toggleOpen = () => {
  Open.value = !Open.value;
}

export default Open