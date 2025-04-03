<template>
    <div class="form-events">
    <h2 class="form-events_title">Заполните форму<br/>и мы подберем площадку</h2>

    <form class="form-events_form form" id="js-eventForm">
        <div class="field_grid">
            <div class="radio">
                <span class="field_title">Формат мероприятия:</span>
                <label class="radio_item">
                    <input
                        class="radio_input"
                        type="radio"
                        name="format"
                        value="seminar"
                        checked="checked"/>
                    <span class="radio_mark"></span>
                    <span class="radio_label">Мастер-класс/семинар</span>
                </label>
                <label class="radio_item">
                    <input class="radio_input" type="radio" name="format" value="concert"/>
                    <span class="radio_mark"></span>
                    <span class="radio_label">Концерт/выступление</span>
                </label>
                <label class="radio_item">
                    <input class="radio_input" type="radio" name="format" value="concert"/>
                    <span class="radio_mark"></span>
                    <span class="radio_label">Выставка/показ</span>
                </label>
                <label class="radio_item">
                    <input class="radio_input" type="radio" name="format" value="concert"/>
                    <span class="radio_mark"></span>
                    <span class="radio_label">Другое</span>
                </label>
            </div>
            <div class="field_group">
                <label class="field">
                    <span class="field_title">Планируемое количество посетителей:</span>

                    <select
                        class="field_select js-selectric"
                        name="amount"
                        placeholder="Выберите планируемое число посетителей">
                        <option value="20">До 20 человек</option>
                        <option value="100">от 20 до 100 человек</option>
                        <option value="500">от 100 до 500 человек</option>
                        <option value="1000">более 500 человек</option>
                    </select>
                </label>
                <div class="form_field field js-dateField">
                    <h6 class="field_title">Дата проведения:</h6>
                    <div class="field_date">
                        <div class="field_date-inputs">
                            <input
                                class="field_date-input js-dateDay"
                                type="text"
                                placeholder="ДД"
                                readonly="readonly"/>
                            <input
                                class="field_date-input js-dateMonth"
                                type="text"
                                placeholder="ММ"
                                readonly="readonly"/>
                            <input
                                class="field_date-input field_date-input-year js-dateYear"
                                type="text"
                                placeholder="ГГГГ"
                                readonly="readonly"/>
                        </div>
                        <input
                            class="field_date-picker js-dateInput"
                            type="text"
                            name="date"
                            readonly="readonly"
                            required="required"/>
                    </div>
                </div>
            </div>

            <label class="field">
                <span class="field_title">Контакные данные:</span>
                <span class="field_label">Имя*</span>
                <input
                    class="field_input"
                    type="text"
                    placeholder="Имя"
                    name="name"
                    required="required"/>
            </label>

            <label class="field">
                <span class="field_label">Фамилия*</span>
                <input
                    class="field_input"
                    type="text"
                    placeholder="Фамилия"
                    name="surname"
                    required="required"/>
            </label>

            <label class="field">
                <span class="field_label">Телефон*</span>
                <input
                    class="field_input js-mobileMask"
                    type="tel"
                    placeholder="Телефон"
                    maxlength="18"
                    name="phone"
                    required="required"/>
            </label>

            <label class="field">
                <span class="field_label">Email*</span>
                <input
                    class="field_input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required="required"/>
            </label>
        </div>
        <label class="field">
            <span class="field_title">Есть пожелания? Напишите нам:</span>
            <textarea
                class="field_textarea"
                placeholder="Напишите что-нибудь"
                name="Пожелания"></textarea>
        </label>
        <label class="check form-events_btn-check">
            <span class="check_label check_label-s">
                Я соглашаюсь с пользовательским соглашением и с политикой использования
                персональных данных
            </span>
            <input
                type="checkbox"
                name="agree"
                class="check_input"
                required="required"
                checked="checked"/>

            <span class="check_mark"></span>
        </label>
        <div class="form-events_btn">
            <button class="form-events_btn-submit btn" type="submit">Отправить</button>
            <button
                class="form-events_btn-close btn js-ppCloseBtn"
                @click="close"
                type="button">Закрыть</button>
        </div>
    </form>
</div>
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

<style lang="less" scoped>
.form-events { 
    &_title {
            box-sizing: border-box;
            display: flex;
            align-items: center;
            margin: -40px 0 70px -85px;
            padding: 10px 85px;
            width: 595px;
            min-height: 80px;
            background-color: @black;
            text-transform: uppercase;
            font-weight: 400;
            font-family: @font2;
            font-size: 22px;
            line-height: 1.36;
            color: @white;
            letter-spacing: 0.02em;
            z-index: 1;
        }
        &_btn {
            display: flex;
            gap: 45px;
            &-submit {
                width: 50%;
            }
            &-close {
                width: 50%;
                border: none;
            }
            &_btn-check {
                span.error {
                    display: block;
                    margin: 10px 0 0;
                    color: @red;
                }
            }
        }
    }
</style>
 