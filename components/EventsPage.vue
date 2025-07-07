<template>
	<section class = "events">

		<div class = "events_listing">
			<h2 class = "section-title">Мероприятия</h2>

			<div class = "events_list">
				<CardEvent v-for = "(card, cardIdx) in events" :key = "cardIdx" :card = "card"/>
			</div>

			<div class = "events_arrow">
				<a href = "#" class = "events_link link">
					<span>Показать еще</span>
					<SvgIcon class = "events_arrow-icon" name = "arrow" width = "92" height = "62"></SvgIcon>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps(
		{
			events: {
				type: Array,
				default: () => []
			},
		}
);


</script>


<style scoped lang = "less">
.events {
	padding: 100px 0 100px;

	&_list {
		.container;
		display: flex;
		flex-wrap: wrap;

	}

	&_link {
		display: flex;
		text-align: center;
		flex-direction: column;
		max-width: 160px;
		margin: 0 auto;

		&:hover .events_arrow-icon {
			transform: rotate(270deg);
		}
	}

	&_arrow {


		&-icon {
			transition: transform 0.3s;
			padding: 30px 0;
			margin: auto;
			transform: rotate(90deg);
		}
	}

}

</style>