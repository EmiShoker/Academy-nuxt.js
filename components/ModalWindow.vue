<template>
    <teleport to="body">
        <transition name="modal-window">
            <div v-if="isActive" class="modal-window" :class="{'modal-window--active': isActive, customClass}">
                <div class="modal-window_wrapper" :style="{ maxWidth: width }">
                    <div class="modal-window_sticky-close">
                        <button type="button" class="modal-window_close" @click="close">
                            <SvgIcon class="modal-window_close-icon modal-window_x-btn x-btn js-ppCloseBtn" name="x" width="24" height="24"/>
                        </button>
                    </div>
                    <div class="modal-window_container"  :style="{ maxWidth: widthContainer }">
                        <slot name="content"></slot>    
                    </div>

                   
                    <!-- <button class="pp_x-btn x-btn js-ppCloseBtn">
                        <svg class="x-btn_icon" width="24" height="24">
                            <use class="js-ppCloseBtn" xlink:href="assets/icons/symbols.svg#x"></use>
                        </svg>
                    </button> -->
                </div>
            </div>
        </transition>
    </teleport>
</template>

<script setup>
import { useStore } from '@/stores';
const store = useStore();

const props= defineProps({
    customClass: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        default: '',
        required: true
    },
    width: {
        type: String,
        default: ''
    },
    widthContainer: {
        type: String,
        default: ''
    }
});

const isActive = computed(() => store.modals[props.name]?.show);

const close = () => {
    store.setModal(props.name, {
        show: false,
    });
};
</script>

<style lang="less" >
.modal-window { 
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 90px 95px 50px;
    background-color: rgba(28, 27, 27, 0.4);
    backdrop-filter: blur(50px);
    overflow-y: auto;
    z-index: 110;
    display: flex;

    @supports (backdrop-filter: blur(20px)) {
        background-color: rgba(28, 27, 27, 0.4);
        backdrop-filter: blur(50px);
    }

    label.error,
    span.error {
        display: block;
        margin: 5px 0 0;
        color: @red;
    }

    &_x-btn {
        position: absolute;
        top: -25px;
        right: -25px;
        &:hover {
            transform: rotate(90deg);
        }

        &_icon {
            pointer-events: none;
        }
    }
    &_wrapper {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 1210px;
        margin: auto;
        background-color: @grey;
        // background-image: url(~assets/images/noise.png);
        background-position: 0 0;
        background-size: auto;
        background-repeat: repeat;
    }
    &_container {
        box-sizing: border-box;
        width: 100%;
        max-width: 950px;
        margin: 0 auto;
        padding: 0 40px 40px;
    }
    &_sticky-close{
        position: sticky;
        top: 0;
        align-self: flex-end;
        width: 0;
        height: 0;
    }
    
}
</style>
 