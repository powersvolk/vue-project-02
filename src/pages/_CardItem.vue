<template>
    <div class="wrapper-person">
        <div v-if="item">
            <img 
                :src="item.img" 
                :alt="item.title" 
            />
            <h1 style="color:#fff" class="title">
                {{ item.title }}
            </h1>
            <p>
                {{ item.descr }}
            </p>
            <div class="card-stats">
                <div v-for="(stat, index) in item.info" :key="index" class="one-third">
                    <div class="stat-value">
                        {{ stat.value }}
                    </div>
                    <div class="stat">
                        {{ stat.title }}
                    </div>
                </div>
            </div>
            <div>
                <router-link 
                    to="/" 
                    class="btn btnWhite"
                >
                    Back to home
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import items from "@/seeders/items"
export default {
    data(){
        return{
            item:null,
        }
    },
    created(){
        const alias = this.$route.params.itemAlias;
        const item = items.find(el => el.alias == alias)
        this.item = item
    }
}
</script>
<style>
    .wrapper-person {
        text-align: center;

        .card-stats {
            margin: 30px 0;
            border-radius: 14px;
        }
    }
</style>