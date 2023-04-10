<script setup lang="ts">
import { Link as HeroLink } from "~/components/Hero.vue";
import data from "~/assets/data/data.json";

const { hero, featured, about } = data;
const heroLinks = hero.links as HeroLink[];
</script>

<template>
  <SiteContainer>
    <template #header>
      <Hero :heading="hero.heading" :description="hero.description" :links="heroLinks" />
    </template>
    <Section id="featured">
      <FeaturedCardList v-if="featured.features.length" :heading="featured.heading" :description="featured.description"
        :cards="featured.features" />
      <ClientList v-if="featured.clients.length" :heading="featured.clientsHeading" :clients="featured.clients" />
    </Section>
    <Section id="about">
      <About :heading="about.heading" :description="about.description" />
    </Section>
    <template #footer>
      <Footer />
    </template>
  </SiteContainer>
</template>
