<template>
<section id="aboutus" class="about">
    <h2 class="section-title">О нас</h2>
    <p class="about_title title-text">Проект «Millennials»</p>
    <p class="about_text text">
        Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями и<br />
        желанием сделать мир лучше, проявить себя. У них есть талант и стремление, у нас<br />
        возможность помочь им воплотить их мечту в реальность.
    </p>
    <div class="about_block1">
        <Image name="main1" class="about_block1-img1" />
        <Image name="main2" class="about_block1-img2" />
        <!-- <img class="about_block1-img1 img" src="../../assets/images/main1.svg" /> -->
        <!-- <img class="about_block1-img2 img" src="assets/images/main2.svg" /> -->
    </div>

    <p class="about_title title-text">Мы предоставляем площади для <br />вашего мероприятия</p>

    <p class="about_text text">
        И оказываем помощь с организацией, если вам это нужно.<br />
        Наша цель: вовлечь в культурную жизнь города как можно больше людей, помочь молодым<br />
        ребятам сделать первые шаги к своей мечте и рассказать всем о том, что их волнует.
    </p>
    <div class="about_block2">
        <div class="about_block2-grid1">
            <span class="about_block2-grid1-rectangle"></span>
            <Image class="about_block2-grid1-img" name="main3"/>
            <!-- <img class="about_block2-grid1-img img" src="assets/images/main3.svg" /> -->
        </div>
        <div class="about_block2-grid2">
            <p class="about_block2-grid2-text2 text">
                Мы уже успешно организовали и <br />
                провели более 100 проектов. <br />
                Посмотрите, как это было классно.
            </p>
            <a class="about_block2-grid2-link link">
                <span class="about_block2-grid2-link_text">Смотреть</span>

                <div class="about_block2-grid2-link_arrow">
                    <SvgIcon class="arrow about_block2-grid2-link_arrow-icon" name="arrow"/>
                    <!-- <svg class="arrow about_block2-grid2-link_arrow-icon">
                        <use xlink:href="assets/icons/symbols.svg#arrow"></use>
                    </svg> -->
                </div>
            </a>
        </div>
    </div>
</section>

</template>

<script setup>


</script>

<style lang="less" scoped>
.about {
    .container();
    &_block1 {
        display: block;
        position: relative;
        margin: 100px 0 80px;
        &-img1 {
            width: 870px;
            height: 577px;
        }

        &-img2 {
            position: absolute;
            top: 50%;
            right: 0;
            width: 404px;
            height: 493px;
        }
    }
    &_text {
        display: flex;
        justify-content: flex-end;
    }
    &_block2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        position: relative;
        margin-top: 100px;

        &-grid1 {
            height: 381px;

            &-rectangle {
                display: block;
                background-color: @red;
                width: 930px;
                height: 246px;
            }

            &-img {
                position: absolute;
                top: 20px;
                left: 48px;
                width: 872px;
                height: 361px;
                z-index: 1;
            }
        }

        &-grid2 {
            display: flex;
            flex-direction: column;
            height: 381px;
            margin: auto;

            &-text2 {
                margin: auto 0;
            }
            &-link {
                display: flex;
                flex-direction: row;
                align-items: center;

                &_arrow {
                    margin-left: auto;
                    &-icon {
                        position: static;
                    }
                }
            }
        }
    }
}

</style>