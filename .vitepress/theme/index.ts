
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { ImageGroup } from '@miletorix/vitepress-image-group'
import '@miletorix/vitepress-image-group/style.css'
import ImageViewerP from '@miletorix/vitepress-image-viewer'
import '@miletorix/vitepress-image-viewer/style.css'

import './custom.css'
export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.component('ImageGroup', ImageGroup)
        ImageViewerP(ctx.app)
    }
}