import {defineStore} from "pinia";
export const useStore = defineStore("index", {
    state: () => {
        return {
            modals: {
                events: { show: false },
            }
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
});