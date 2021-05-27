import Vue from "vue";
import RepositoryImage from "@/components/RepositoryImage";

function install(Vue, options = {}) {
    Vue.component(options.RepositoryImageName || "RepositoryImage", RepositoryImage);
}

export default install;

if (typeof window !== undefined && window.Vue && window.Vue === Vue)
    install(window.Vue);

export { RepositoryImage };
