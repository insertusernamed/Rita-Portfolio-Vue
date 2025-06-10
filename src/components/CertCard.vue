<template>
  <div class="cert-card">
    <iframe
      class="cert-pdf"
      :src="media[0].url"
      type="application/pdf"
      title="Certificate PDF"
    ></iframe>
    <div class="cert-description">
      <h3>{{ name }}</h3>
      <p>{{ media[0].caption }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";

interface MediaItem {
  type: string;
  url: string;
  caption: string;
}

interface CertCardProps {
  name: string;
  media: MediaItem[];
}

defineProps<CertCardProps>();
</script>

<style scoped>
.cert-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 16px;
  max-width: 300px;
  margin: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cert-pdf {
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  margin-bottom: 12px;
}

.cert-description {
  text-align: center;
}

.cert-description h3 {
  font-size: 1.2rem;
  margin: 0 0 8px 0;
  color: #333;
}

.cert-description p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}
</style>
