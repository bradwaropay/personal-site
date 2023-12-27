<template>
  <Section id="about" :class="$style.section">
    <AboutIntro :class="$style.intro" />
    <ClientList :class="$style.clients" />
    <ContactCard :class="$style.contact" />
  </Section>
</template>

<style lang="scss" module>
.clients {
  margin-top: useSpacing(lg);


  @media screen and (min-width: useBreakpoint(lg)) {
    margin-top: useSpacing(xl);
  }
}

.contact {
  margin-top: useSpacing(xl);

  @media screen and (min-width: useBreakpoint(lg)) {
    margin-top: useSpacing(xxl);
  }
}
</style>