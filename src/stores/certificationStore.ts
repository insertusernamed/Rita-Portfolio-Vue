import { defineStore } from 'pinia'
import axios from 'axios'

export const useCertStore = defineStore('certification', {
    state: () => ({ certifications: [] }),
    actions: {
        fetchCerts() {
            axios.get(import.meta.env.VITE_FETCH_CERTS)
                .then(response => {
                    this.certifications = response.data;
                    console.log('Certifications fetched successfully:', this.certifications);
                })
                .catch(error => {
                    console.error('Error fetching certifications:', error);
                });
        }
    }
})