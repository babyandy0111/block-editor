import EditorSettings from "../interfaces/editor-settings"
import fetchHandler from '../lib/fetch-handler'

const defaultSettings: EditorSettings = {
    // Laraberg settings
    fetchHandler,
    height: '500px',
    mediaUpload: undefined,
    disabledCoreBlocks: [
        'core/embed',
        'core/freeform',
        'core/shortcode',
        'core/archives',
        'core/tag-cloud',
        'core/block',
        'core/rss',
        'core/search',
        'core/calendar',
        'core/categories',
        'core/more',
        'core/nextpage'
    ],

    // WordPress settings
    alignWide: true,
    supportsLayout: false,
}

export default defaultSettings
