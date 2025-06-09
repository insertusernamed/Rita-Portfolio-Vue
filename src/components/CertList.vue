<template>
    <div>
        <h2>Certifications List</h2>
        <ul>
            <li v-for="certification in certifications" :key="certification.id">
                {{ certification.name }}
                {{ certification.media }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCertStore } from '../stores/certificationStore';

const certStore = useCertStore();
const certifications = computed(() => certStore.certifications);
</script>