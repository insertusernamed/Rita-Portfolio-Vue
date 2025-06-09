<template>
    <div>
        <h2>Project List</h2>
        <ul>
            <li v-for="project in projects" :key="project.id">
                {{ project.name }}
                {{ project.description }}
                {{ project.tags }}
                {{ project.media }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProjectStore } from '../stores/projectStore';

const projectStore = useProjectStore();
const projects = computed(() => projectStore.projects);
</script>