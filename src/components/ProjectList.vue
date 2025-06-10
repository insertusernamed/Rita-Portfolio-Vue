<template>
    <div>
        <h2>Project List</h2>
        <ul>
            <li v-for="project in projects" :key="project.id">
                <ProjectCard :name="project.name" :description="project.description" :display="project.display"
                    :tags="project.tags" :media="project.media" />
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useProjectStore } from '../stores/projectStore';
import ProjectCard from './ProjectCard.vue';

const projectStore = useProjectStore();
const projects = computed(() => projectStore.projects);
</script>