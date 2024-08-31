import { useBlockProps, RichText } from "@wordpress/block-editor";

export default function save(props) {
	const { title, content, type, hasButton } = props.attributes;

	const blockProps = useBlockProps.save();

	// == Add the custom class
	blockProps.className += ` is-${type}`;

	return (
		<div {...blockProps}>
			<div>
				<RichText.Content
					tagName="p"
					className="wp-block-studioval-callout__title"
					value={title}
				/>
				<RichText.Content
					tagName="p"
					className="wp-block-studioval-callout__content"
					value={content}
				/>
				{hasButton && (
					<div className="st-button dark">
						<a href="/contact">Demandez un devis gratuit</a>
					</div>
				)}
			</div>
		</div>
	);
}
