<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import AppButton from '@/components/core/button/AppButton.vue'
import AppIcon from '@/components/core/icon/AppIcon.vue'
import AppMenu from '@/components/core/menu/AppMenu.vue'
import type { TabWithRoutes } from '@/components/core/tabs/AppTabs.vue'
import { useTypedRouter } from '@/composables/core/router/typedRouter.composable'
import type { MenuConfiguration } from '@/models/core/menu.model'

const { t } = useI18n()
const router = useTypedRouter()

const tabs: TabWithRoutes[] = [
	{
		label: t('shared.clients'),
		to: {
			name: 'clients-overview',
		},
	},
]

const menuConfiguration: MenuConfiguration = [
	{
		text: 'Logout',
		type: 'item',
		onSelect(): void {
			router.replace({
				name: 'login',
			})
		},
	},
]

function onTabClick(tab: TabWithRoutes): void {
	router.push(tab.to)
}

function isRouteActive(tab: TabWithRoutes): boolean {
	return router.currentRoute.value.name === tab.to.name
}
</script>

<template>
	<div class="sticky top-0 z-[100] h-14 w-full border-b border-solid border-border bg-background">
		<div class="container mx-auto flex h-14 items-center justify-between gap-2">
			<AppIcon
				icon="logo"
				size="lg"
			/>
			<div class="flex items-center gap-2">
				<AppButton
					v-for="tab in tabs"
					:key="tab.label"
					:class="{ 'bg-primary/10': isRouteActive(tab) }"
					size="sm"
					variant="ghost"
					@click="onTabClick(tab)"
				>
					{{ tab.label }}
				</AppButton>
			</div>

			<div class="ml-auto" />

			<div class="flex">
				<AppButton
					size="sm"
					variant="ghost"
				>
					<AppIcon
						icon="search"
						size="sm"
					/>
				</AppButton>
				<AppButton
					size="sm"
					variant="ghost"
				>
					<AppIcon
						icon="settings"
						size="sm"
					/>
				</AppButton>
			</div>

			<AppMenu
				is-custom-button
				:menu-configuration="menuConfiguration"
			/>
		</div>
	</div>
</template>
