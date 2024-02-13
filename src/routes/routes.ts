import type { RouteRecordTyped } from '@/models/core/router/router.model'

export const routes: RouteRecordTyped[] = [
	{
		path: '',
		component: () => import('@/components/layout/AppLayout.vue'),
		children: [
			{
				path: '',
				name: 'index',
				component: () => import('@/modules/aimert/views/PictureView.vue'),
			},
			/**
			 * Authenticated routes
			 */
		],
	},
	/**
	 * Unauthenticated routes
	 */
	{
		path: '/:catchAll(.*)',
		name: '404',
		redirect: {
			name: 'index',
		},
	},
]
