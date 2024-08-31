import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";

export default function save(props) {
	const { type } = props.attributes;

	const blockProps = useBlockProps.save();

	// == Add the custom class
	blockProps.className += ` is-${type}`;

	return (
		<div {...blockProps}>
			<InnerBlocks.Content />
		</div>
	);
}
