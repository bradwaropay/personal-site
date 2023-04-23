export const Open = ref(false);

export const toggleModal = () => {
  Open.value = !Open.value;
  document.body.classList.toggle('has-modal');
}

export const openModal = () => {
  Open.value = true;
  document.body.classList.add('has-modal');
}

export const closeModal = () => {
  Open.value = false;
  document.body.classList.remove('has-modal');
}

export default Open