import * as BlockEditor from '../../index'
const { serverSideRender: ServerSideRender } = BlockEditor.wordpress
import { TextControl } from '@wordpress/components'

const Edit = ({attributes, setAttributes}) => {
    const { title, subtitle } = attributes
    return (
        <div>
            <h1>ServerSideRender</h1>
            <h2>Fields</h2>
            <TextControl
                label="Title"
                value={title}
                onChange={(title) => setAttributes({ title })}
            />

            <TextControl
                label="Subtitle"
                value={subtitle}
                onChange={(subtitle) => setAttributes({ subtitle })}
            />

            <h2>Preview</h2>
            <ServerSideRender
                block="example/server-side-render-block"
                attributes={{
                    title,
                    subtitle
                }}
            />
        </div>
    )
}

export default Edit
