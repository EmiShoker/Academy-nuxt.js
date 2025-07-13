import {configure, defineRule} from "vee-validate";
import {localize, setLocale} from "@vee-validate/i18n";
import ru from '@/json/vee-validate/ru.json';
import {all as rules} from "@vee-validate/rules";

export default defineNuxtPlugin(() => {
	Object.keys(rules).forEach((rule) => defineRule(rule, rules[rule]));

	function isEmpty(value) {
		if (value === null || value === undefined || value === '') {
			return true;
		}
		if (Array.isArray(value) && value.length === 0) {
			return true;
		}
		return false;
	}

	//Custom Rule: phone
	const phoneValidator = (value) => {
		if (value === null || value === undefined || value === "") return true;
		const PHONE_RU = /^(\+7|8)\s?(\(\d{3}\)\s?\d{3}-?\d{2}-?\d{2})$/;
		return PHONE_RU.test(value);
	};
	defineRule('phone', phoneValidator);

	const requiredCheckValidator = (value) => {
		if (value !== true && value !== 1) {
			return false;
		}
		return !!String(value).trim().length;
	};
	defineRule('required_check', requiredCheckValidator);

	const lowercaseValidator = (value) => {
		if (isEmpty(value)) {
			return true;
		}
		return /[a-z]/.test(value);
	};
	defineRule('lowercase', lowercaseValidator);

	const uppercaseValidator = (value) => {
		if (isEmpty(value)) {
			return true;
		}
		return /[A-Z]/.test(value);
	};
	defineRule('uppercase', uppercaseValidator);

	const specialValidator = (value) => {
		if (isEmpty(value)) {
			return true;
		}
		return /[\d!@#$%^&? *]/.test(value);
	};
	defineRule('special', specialValidator);


	configure({
		generateMessage: localize({
			ru,
		}),
	});

	setLocale('ru');


});
