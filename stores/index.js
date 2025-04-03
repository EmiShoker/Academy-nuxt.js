import { defineStore } from "pinia";
export const useStore = defineStore("index", {
    state: () => ({  
        modals: {
            events: { show: false }
        }
    }),
    getters: {
        hasActiveModals(state) {
            return Object.keys(state.modals).find((key) => state.modals[key].show);
        }
    },
    actions: {
        setModal(name, config = {show: false, options: {}}) {
            if(!this.modals[name]) return;

            this.modals[name] = {
                show: config.show,
                options: config.options,
            }
        }
    }
})