<template>
    <b-img :src="imagePath" :height="height" :width="width" :title="title" :alt="alt" @click="$emit('click')" :fluid="fluid" :rounded="rounded" />
</template>

<script>
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
        }
    }
}
</script>
