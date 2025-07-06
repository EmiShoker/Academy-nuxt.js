import {defineStore} from "pinia";
import {API} from "@/api.js";

export const useStoreApi = defineStore("api", {
    state: () => ({
        api_local: API.local.host + API.local.path
    }),
    getters: {},
    actions: {}
});