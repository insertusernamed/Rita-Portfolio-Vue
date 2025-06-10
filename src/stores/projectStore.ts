import { defineStore } from 'pinia'
import axios from 'axios'
import type { Project } from '../models/Project'

export const useProjectStore = defineStore('project', {
    state: () => ({ projects: [] as Project[] }),
    actions: {
        fetchProjects() {
            axios.get(import.meta.env.VITE_FETCH_PROJECTS)
                .then(response => {
                    this.projects = response.data;
                    console.log('Projects fetched successfully:', this.projects);
                })
                .catch(error => {
                    console.error('Error fetching projects:', error);
                });
        }
    }
})