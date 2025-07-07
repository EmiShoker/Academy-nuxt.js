<template>
	<div class = "form-events">
		<h2 class = "form-events_title">Заполните форму<br/>и мы подберем площадку</h2>

		<form id = "js-eventForm" class = "form-events_form form">
			<div class = "field_grid">
				<div class = "radio">
					<span class = "field_title">Формат мероприятия:</span> <label class = "radio_item"> <input checked = "checked"
						class = "radio_input"
						name = "format"
						type = "radio"
						value = "seminar"/>
					<span class = "radio_mark"></span> <span class = "radio_label">Мастер-класс/семинар</span> </label>
					<label class = "radio_item"> <input class = "radio_input" name = "format" type = "radio" value = "concert"/>
						<span class = "radio_mark"></span> <span class = "radio_label">Концерт/выступление</span> </label>
					<label class = "radio_item"> <input class = "radio_input" name = "format" type = "radio" value = "concert"/>
						<span class = "radio_mark"></span> <span class = "radio_label">Выставка/показ</span> </label>
					<label class = "radio_item"> <input class = "radio_input" name = "format" type = "radio" value = "concert"/>
						<span class = "radio_mark"></span> <span class = "radio_label">Другое</span> </label>
				</div>
				<div class = "field_group">
					<label class = "field"> <span class = "field_title">Планируемое количество посетителей:</span>

						<select class = "field_select js-selectric"
								name = "amount"
								placeholder = "Выберите планируемое число посетителей">
							<option value = "20">До 20 человек</option>
							<option value = "100">от 20 до 100 человек</option>
							<option value = "500">от 100 до 500 человек</option>
							<option value = "1000">более 500 человек</option>
						</select> </label>
					<div class = "form_field field js-dateField">
						<h6 class = "field_title">Дата проведения:</h6>
						<div class = "field_date">
							<div class = "field_date-inputs">
								<input class = "field_date-input js-dateDay" placeholder = "ДД" readonly = "readonly" type = "text"/>
								<input
										class = "field_date-input js-dateMonth"
										placeholder = "ММ"
										readonly = "readonly"
										type = "text"/> <input class = "field_date-input field_date-input-year js-dateYear"
									placeholder = "ГГГГ"
									readonly = "readonly"
									type = "text"/>
							</div>
							<input class = "field_date-picker js-dateInput"
									name = "date"
									readonly = "readonly"
									required = "required"
									type = "text"/>
						</div>
					</div>
				</div>
			</div>
			<h1 class = "field_title">Контакные данные:</h1>
			<div class = "field_grid">


				<FieldInput
						:config = "{
          name:'name',
          label: 'Имя*',
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
          label: 'Фамилия*',
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
          label: 'Телефон*',
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
          label: 'Email*',
          rules: {
            required: true,
          },
        }"
						:submitCount = "submitCount"
				/>
				<label class = "field"> <span class = "field_label">Email*</span> <input class = "field_input"
						name = "email"
						placeholder = "Email"
						required = "required"
						type = "email"/> </label>
			</div>
			<label class = "field"> <span class = "field_title">Есть пожелания? Напишите нам:</span>
				<textarea class = "field_textarea" name = "Пожелания" placeholder = "Напишите что-нибудь"></textarea> </label>
			<label
					class = "check form-events_btn-check">
            <span class = "check_label check_label-s">
                Я соглашаюсь с пользовательским соглашением и с политикой использования
                персональных данных
            </span> <input checked = "checked"
					class = "check_input"
					name = "agree"
					required = "required"
					type = "checkbox"/>

				<span class = "check_mark"></span> </label>
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

const {submitCount} = useForm();


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
