<template>
  <div class="project-card">
    <img class="project-image" :src="display" :alt="`${name} Image`" />
    <div class="project-description">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
    <div class="project-tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from "vue";
interface ProjectCardProps {
  name: string;
  description: string;
  display: string;
  tags: string[];
  media: string;
}

defineProps<ProjectCardProps>();
</script>

<style scoped>
.project-card {
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

.project-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 12px;
}

.project-description {
  text-align: center;
}

.project-description h3 {
  font-size: 1.5rem;
  margin: 8px 0;
  color: #333;
}

.project-description p {
  font-size: 1rem;
  color: #666;
}

.project-tags {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.tag {
  background-color: #007bff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.875rem;
}
</style>
