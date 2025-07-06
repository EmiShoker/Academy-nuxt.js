const isProd = process.env.NODE_ENV === "production";

export const API = {
    back: {
        host: "",
        path: "",
    },
    local: {
        host: isProd ? "https://lenni.ru" : "http://localhost:3000",
        path: "/json"
    }
}
