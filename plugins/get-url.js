import qs from "qs";

export default defineNuxtPlugin(() => {
    return {
        provide: {
            getUrl: (path = "", params = {}, api = useStoreApi().api) => {
                return (
                    api +
                    path +
                    (params?.constructor === Object &&
                    Object.keys(params).length ? "?" + qs.stringify(params) : "")
                )
            }
        }
    }
});
