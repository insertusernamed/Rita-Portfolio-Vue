<template>
    <h1>Hello World</h1>
    <ProjectList />
    <CertList />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useProjectStore } from './stores/projectStore';
import { useCertStore } from './stores/certificationStore';
import ProjectList from './components/ProjectList.vue';
import CertList from './components/CertList.vue';

const projectStore = useProjectStore();
const certStore = useCertStore();

onMounted(() => {
    projectStore.fetchProjects();
    certStore.fetchCerts();
});
</script>
