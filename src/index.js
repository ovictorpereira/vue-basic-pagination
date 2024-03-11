import VueBasicPagination from "./components/VueBasicPagination.vue";

export default {
    install: (app, options) => {
        app.component("VueBasicPagination", VueBasicPagination);
    },
};