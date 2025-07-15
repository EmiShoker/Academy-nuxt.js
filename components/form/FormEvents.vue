<template>
  <div class = "form-events">
    <h2 class = "form-events_title">Заполните форму<br/>и мы подберем площадку</h2>

    <form class = "form-events_form form" @submit = "onSubmit">
      <div class = "field_list">
        <FieldRadio class = "field form_field form_field--w50"
            :config = "{
          name:'format',
          label: 'Формат мероприятия',
          options: optionsRadio,
          rules: {
            required: true
          },
        }"
            :submitCount = "submitCount"
        />
        <div class = "field_group">
          <FieldSelect class = "field form_field" :config = "{
            name:'amount',
            label:'Планируемое количество посетителей:',
            options: optionsSelect,
            placeholder: 'Выберите планируемое число',
            rulse: {
              required: true
            }
          }" :submitCount = "submitCount"/>

          <div class = "form_field field js-dateField">
            <h6 class = "field_title">Дата проведения:</h6>
            <div class = "field_date">
              <div class = "field_date-inputs">
                <input class = "field_date-input js-dateDay" placeholder = "ДД" readonly = "readonly" type = "text"/>
                <input
                    class = "field_date-input js-dateMonth"
                    placeholder = "ММ"
                    readonly = "readonly"
                    type = "text"/> <input
                  class = "field_date-input field_date-input-year js-dateYear"
                  placeholder = "ГГГГ"
                  readonly = "readonly"
                  type = "text"/>
              </div>
              <input
                  class = "field_date-picker js-dateInput"
                  name = "date"
                  readonly = "readonly"
                  required = "required"
                  type = "text"/>
            </div>
          </div>
        </div>
      </div>
      <h1 class = "field_title">Контакные данные:</h1>
      <div class = "field_list">

        <FieldInput
            :config = "{
          name:'name',
          label: 'Имя',
          rules: {
            required: true
          }
        }"
            :submitCount = "submitCount"
            class = "form_field form-field--w50"
        />

        <FieldInput
            :config = "{
          name:'last_name',
          label: 'Фамилия',
          rules: {
            required: true
          }
        }"
            :submitCount = "submitCount"
            class = "form_field form-field--w50"
        />

        <FieldInput
            :config = "{
          name: 'phone',
          label: 'Телефон',
          inputmode: 'tel',
          mask: '+7 (###) ###-##-##',
          rules: {
            required: true,
          },
        }"
            :submitCount = "submitCount"
            class = "form_field form-field--w50"
        />
        <FieldEmail
            class = "form_field form-field--w50"
            :config = "{
          name: 'email',
          label: 'Email',
          rules: {
						required: true,
          },
        }"
            :submitCount = "submitCount"

        />
      </div>
      <FieldTextArea class = "form_field field"
          :config = "{
            name:'description',
            label: 'Есть пожелания? Напишите нам:',
            placeholder: 'Напишите что-нибудь...',
            rules: {
              required: true,
            },
          }"
          :submitCount = "submitCount"
      />

      <!--      <label class = "field">-->
      <!--				<span class = "field_title">-->
      <!--					Есть пожелания? Напишите нам:-->
      <!--				</span>-->
      <!--        <textarea-->
      <!--            class = "field_textarea"-->
      <!--            name = "Пожелания"-->
      <!--            placeholder = "Напишите что-нибудь">-->

      <!--				</textarea>-->
      <!--      </label>-->

      <FieldCheck
          :config = "{
            name: 'agree',
            label: ' Я соглашаюсь с пользовательским соглашением и с политикой использования персональных данных',
            rules: {
              required: true
            }
        }"
          :initial-value = "1"
          :submitCount = "submitCount"
          class = "form-events_btn-check"
      />

      <div class = "form-events_btn">
        <button class = "form-events_btn-submit btn" type = "submit">Отправить</button>
        <button class = "form-events_btn-close btn js-ppCloseBtn" type = "button" @click = "close">Закрыть
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import {useForm} from 'vee-validate';
import {useStore} from '@/stores';
import FieldTextArea from "~/components/field/FieldTextArea.vue";

const optionsRadio = [
  {
    label: "Мастер-класс/семинар",
    value: "seminar",
  },
  {
    label: "Концерт/выступление",
    value: "concert",
  },
  {
    label: "Выставка/показ",
    value: "show",
  },
  {
    label: "Другое",
    value: "other",
  },
]
const optionsSelect = ['До 20 человек', 'от 20 до 100 человек', 'от 100 до 500 человек', 'более 500 человек'];

const store = useStore();


const {handleSubmit, submitCount} = useForm();
const onSubmit = handleSubmit(async (values) => {
  console.log(values);
})

const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  },
});

const isActive = computed(() => store.modals[props.name]?.show);

const close = () => {
  store.setModal(props.name, {
    show: false,
  });
};
</script>

<style lang = "less" scoped>
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
      div.error {
        display: block;
        margin: 10px 0 0;
        color: @red;
      }
    }
  }
}
</style>
