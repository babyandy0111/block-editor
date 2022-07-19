import { TextControl, TextareaControl } from '@wordpress/components'
import './style.css';

const Edit = ({attributes, setAttributes}) => {
    const { question, answer } = attributes
    return (
        <div>
            <TextControl
                label="Question"
                value={question}
                onChange={(question) => setAttributes({ question }) }

            />

            <TextareaControl
                label="Answer"
                value={ answer }
                onChange={ (answer) => setAttributes({ answer }) }
            />

            <div id="faq">
                <h1> FAQ </h1>
                <details open itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                    <summary itemProp="name">{question}</summary>
                    <div className="faq__content" itemProp="text">
                        {answer}
                    </div>
                </details>
            </div>
        </div>
    )
}

export default Edit
