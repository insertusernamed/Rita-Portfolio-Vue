<template>
  <CircuitBackground />
  <div class="app-content">
    <ProjectList />
    <CertList />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useProjectStore } from "./stores/projectStore";
import { useCertStore } from "./stores/certificationStore";
import ProjectList from "./components/ProjectList.vue";
import CertList from "./components/CertList.vue";
import CircuitBackground from "./components/CircuitBackground.vue";

const projectStore = useProjectStore();
const certStore = useCertStore();

onMounted(() => {
  projectStore.fetchProjects();
  certStore.fetchCerts();
});
</script>
