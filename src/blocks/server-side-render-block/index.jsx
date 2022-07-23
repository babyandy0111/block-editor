import React from 'react'
import Edit from './edit'
import Save from './save'

import { registerBlockType } from '@wordpress/blocks'

export default () => {
    registerBlockType('example/server-side-render-block', {
        title: 'Server Side Render Block',
        description: 'This is an example ServerSideRender block',
        category: 'text',
        attributes: {
            title: {
                type: 'string',
                default: ''
            },
            subtitle: {
                type: 'string',
                default: ''
            }
        },
        edit: Edit,
        save: Save
    })
}
