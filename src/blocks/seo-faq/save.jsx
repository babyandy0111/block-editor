import './style.css';

const Save = ({attributes}) => {
    const { question, answer } = attributes
    const seo = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
        "@type": "Question",
        "name": question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": answer
        }}]
    };
    const seoJSON = JSON.stringify(seo);
    return (
        <div id="faq">
            <h1> FAQ </h1>
            <details open itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <summary itemProp="name">{question}</summary>
                <div className="faq__content" itemProp="text">
                    {answer}
                </div>
            </details>
            <script type="application/ld+json">
                {seoJSON}
            </script>
        </div>
    )
}

export default Save
