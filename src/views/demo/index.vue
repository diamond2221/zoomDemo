<template>
    <div class="scroll-wrap">
        <div
            class="scrollt-content"
            :style="wrapStyle"
            @mouseenter="mouseenter"
            @mouseleave="mouseleave"
            ref="scrollEl"
            :draggable="false"
        >
            <div class="btn-wrap">
                <div class="btn">
                    <span class="add " @click="scale = toBig()"> + </span>
                </div>
                <div class="btn">
                    <span class="inc" @click="scale = toSmall()"> - </span>
                </div>
            </div>
            <div
                :style="{ ...contentStyle, ...imgStyle }"
                class="wrap"
                ref="contentEl"
                @mousedown="mousedown"
                :draggable="false"
            >
                <img src="../../assets/images/demo.png" :draggable="false" />
                <div
                    class="item"
                    :key="index"
                    v-for="(item, index) in itemsData"
                    :style="{
                        left: getNum(item[2][0], scale) + 'px',
                        top: getNum(item[3][0], scale) + 'px',
                        fontSize: getNum(item[6], scale) + 'px',
                    }"
                >
                    {{ item[1][0] }}
                    <!-- <span
                        class="text"
                        :style="{
                            ,
                        }"
                        >{{ item[1][0] }}</span
                    > -->
                </div>
            </div>
        </div>
    </div>
</template>

<script src="./index.js"></script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
