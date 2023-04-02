<script setup lang="ts">
import { Link as HeroLink } from "~/components/Hero.vue";
import data from "~/assets/data/data.json";

const { hero, featured, about } = data;
const heroLinks = hero.links as HeroLink[];
</script>

<template>
  <SiteContainer>
    <Section id="hero">
      <Hero :heading="hero.heading" :description="hero.description" :links="heroLinks" />
    </Section>
    <Section id="featured" :heading="featured.heading">
      <FeaturedCardList :cards="featured.features" />
      <ClientList :clients="featured.clients" />
    </Section>
    <Section id="about">
      <About :heading="about.heading" :description="about.description" />
    </Section>
    <Footer />
  </SiteContainer>
</template>
