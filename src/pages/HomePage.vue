<template lang="">
    
        <h1>
            Home page
        </h1>
        <carousel 
            v-bind="settings" 
            :breakpoints="breakpoints"
        >
            <slide class="card_wrapper" v-for="item in items" :key="item.id">
                <CardItem
                    :name="`${item.lvl} lvl`"
                    :title="item.title"
                    :imgUrl="item.img"
                    :link="`/card/${item.alias}`"
                >
                    <template v-slot:body>
                        {{ item.descr}}
                    </template>
                    <template v-slot:footer>
                        <CardStats
                            :info="item.info"
                        />
                    </template>
                </CardItem>
            </slide>
            <template #addons>
                <navigation />
                <pagination />
            </template>
        </carousel>
    
</template>
<script>

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import CardItem from "@/components/UI/CardItem";
import CardStats from "@/components/CardStats";
import items from "@/seeders/items"
export default {
    components: {
        CardItem,
        CardStats,
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    data() {
        return {
           items: items,
            settings: {
                itemsToShow: 3,
                wrapAround: true,
                snapAlign: 'center'
            },
            breakpoints: {
                300: {
                    itemsToShow: 1
                },
                700: {
                    itemsToShow: 3,
                    wrapAround: false,
                }
            }
        }
    }
}
</script>
<style lang="">
    
</style>