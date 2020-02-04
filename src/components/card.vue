<template>
    <div>
        <div class="card">
            <div class="card-image">
                    <a v-bind:href="url" ><img class="thumbnail"
                    v-bind:src="imgsrc" alt="Placeholder image"></a>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="card-title is-4">{{ title }}</p>
                        <p class="subtitle is-6">{{ author }}</p>
                    </div>
                </div>
                <div class="content">
                    {{ description }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['imgsrc', 'title', 'author', 'description', 'url'],
    data() {
        return {
            showNav: false,
        }
    },
}
</script>

<style scoped>
.subtitle {
    margin-left: 10px;
}
.thumbnail {
    padding: 30px;
    height: 10rem;
    width: auto;
}
.card-content {
    padding: 0rem 1.5rem 1.5rem 1.5rem;
    margin: 0px;
}
.card-title {
    margin-left: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.125;
}
</style>
