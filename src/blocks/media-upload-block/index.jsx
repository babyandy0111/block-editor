import React from 'react'
import Edit from './edit'
import Save from './save'

import { registerBlockType } from '@wordpress/blocks'

export default () => {
    registerBlockType('example/media-upload-block', {
        title: 'Media Upload Block',
        description: 'This is an Media Upload block',
        category: 'text',
        attributes: {
            media: {
                type: 'object',
                default: {}
            }
        },
        edit: Edit,
        save: Save
    })
}
