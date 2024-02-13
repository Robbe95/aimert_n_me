<script setup lang="ts">
import { RouterView } from 'vue-router'

import AppModalsContainer from '@/components/core/modal/AppModalsContainer.vue'
import AppToastsContainer from '@/components/core/toast/AppToastContainer.vue'

import { useDocumentTitle } from './composables/core/document-title/documentTitle.composable'

const { setTemplate } = useDocumentTitle()

setTemplate('{title} | App')
</script>

<template>
	<RouterView />
	<AppModalsContainer />
	<AppToastsContainer />
</template>
