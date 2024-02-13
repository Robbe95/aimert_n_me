<script setup lang="ts">
import { computed } from 'vue'
import { ref } from 'vue'

import AppCard from '@/components/core/card/AppCard.vue'
import AppDatePicker from '@/components/core/datepicker/AppDatePicker.vue'
import { modalTransition } from '@/transitions'

const date = ref<Date>(new Date())

const minDate = new Date('2024-02-10')
const maxDate = new Date()
const random = computed<number>(() => {
	const seed = date.value.getDate() + date.value.getMonth() + date.value.getFullYear()
	const random = Math.abs(Math.sin(seed))
	return Math.floor(random * (156 - 1 + 1) + 1)
})
</script>

<template>
	<div class="flex flex-1 flex-col items-center justify-center gap-12">
		<Transition
			appear
			mode="out-in"
			v-bind="modalTransition"
		>
			<AppCard class="flex flex-col gap-4 p-4 text-center">
				<h1 class="text-hero font-bold">Happy valentine sweetheart!</h1>
				<p class="text-neutral-500">I love you so much, I hope you like this little gift</p>
				<p class="max-w-[60ch]">
					Every day it will show a new picture of us :P, you can select previous dates to view them again!
				</p>
				<AppDatePicker
					v-model="date"
					:max-date="maxDate"
					:min-date="minDate"
				/>
			</AppCard>
		</Transition>

		<Transition
			appear
			mode="out-in"
			v-bind="modalTransition"
		>
			<img
				:key="random"
				alt="Random picture"
				class="h-96 w-96 rounded-lg border-solid border-primary object-cover"
				:src="`/images/aimert_${random}.jpg`"
			/>
		</Transition>
	</div>
</template>
