<script setup lang="ts">
import AppContainer from '@/components/app/AppContainer.vue'
import AppText from '@/components/core/text/AppText.vue'

const { title } = defineProps<{
	title: string
	subtitle?: string
}>()
</script>

<template>
	<div class="flex w-full flex-1 flex-col">
		<AppContainer class="py-4">
			<div class="flex items-center justify-between">
				<div class="mr-auto space-y-2">
					<AppText variant="title">
						{{ title }}
					</AppText>
					<AppText v-if="subtitle">
						{{ subtitle }}
					</AppText>
				</div>
				<div class="flex items-center justify-end gap-4">
					<slot name="actions" />
				</div>
			</div>
		</AppContainer>

		<AppContainer class="flex flex-1 flex-col pb-8 pt-6">
			<slot />
		</AppContainer>
	</div>
</template>
