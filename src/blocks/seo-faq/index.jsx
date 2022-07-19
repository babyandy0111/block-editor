import Edit from './edit'
import Save from './save'
import { registerBlockType } from '@wordpress/blocks'

export default () => {
    registerBlockType('seo/faq-block', {
        title: 'SEO F&Q Block',
        description: 'This is an seo faq block',
        category: 'text',
        attributes: {
            question: {
                type: 'string',
                default: ''
            },
            answer: {
                type: 'string',
                default: ''
            },
        },
        edit: Edit,
        save: Save
    })
}
