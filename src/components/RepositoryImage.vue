<template>
    <img :src="imagePath" :height="getHeight" :width="getWidth" :title="title" :alt="alt" @click="$emit('click')" :class="{ roundedcorners: rounded }" />
</template>

<script>
require("dotenv").config();

export default {
    props: {
        src: {
            type: String,
            required: true
        },
        height: {
            type: [Number, String],
            default: null
        },
        width: {
            type: [Number, String],
            default: null
        },
        title: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        fluid: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        imagePath() {
            return process.env.VUE_APP_IMAGEREPOSITORY + "/" + this.src;
        },
        getWidth() {
            return this.fluid ? "100%" : this.width;
        },
        getHeight() {
            return this.fluid ? "auto" : this.height;
        }
    }
}
</script>

<style scoped>
.roundedcorners {
    border-radius: 8px;
}
</style>
