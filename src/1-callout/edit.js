import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	BlockControls,
	InnerBlocks,
} from "@wordpress/block-editor";

import { ToolbarGroup, ToolbarButton } from "@wordpress/components";

import {
	check,
	warning,
	cancelCircleFilled,
	currencyEuro,
} from "@wordpress/icons";

import "./editor.scss";

export default function Edit(props) {
	const { type, hasButton } = props.attributes;

	const blockProps = useBlockProps({
		className: ` is-${type}`,
	});

	const onChangeType = (type) => {
		props.setAttributes({ type: type });

		if (type !== "promotion-message") {
			props.setAttributes({ hasButton: false });
		} else {
			props.setAttributes({ hasButton: true });
		}
	};

	let BASE_TEMPLATE = [
		[
			"core/paragraph",
			{
				placeholder: __("Add your title…", "studio-val"),
				className: "title",
			},
		],
		[
			"core/paragraph",
			{
				placeholder: __("Add your message…", "studio-val"),
				className: "content",
			},
		],
	];

	hasButton &&
		+BASE_TEMPLATE.push([
			"core/button",
			{
				placeholder: __("Call to action", "studio-val"),
				className: "st-button",
			},
		]);

	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						icon={check}
						label="Positive message"
						onClick={() => onChangeType("positive-message")}
						isPressed={type == "positive-message"}
					/>
					<ToolbarButton
						icon={warning}
						label="Informative message"
						onClick={() => onChangeType("informative-message")}
						isPressed={type == "informative-message"}
					/>
					<ToolbarButton
						icon={cancelCircleFilled}
						label="Danger message"
						onClick={() => onChangeType("danger-message")}
						isPressed={type == "danger-message"}
					/>
					<ToolbarButton
						icon={currencyEuro}
						label="Promotion"
						onClick={() => onChangeType("promotion-message")}
						isPressed={type == "promotion-message"}
					/>
				</ToolbarGroup>
			</BlockControls>

			<div className="wp-block__callout">
				<div {...blockProps}>
					<InnerBlocks
						template={BASE_TEMPLATE}
						templateLock="all" // disable adding new blocks
					/>
				</div>
			</div>
		</>
	);
}
