import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	RichText,
	BlockControls,
} from "@wordpress/block-editor";

import { ToolbarGroup, ToolbarButton } from "@wordpress/components";

import {
	check,
	warning,
	cancelCircleFilled,
	currencyEuro,
} from "@wordpress/icons";

import "./editor.scss";

import lightBubbleImage from "../../assets/light-bubble.png";
import warningImage from "../../assets/warning.png";
import alertImage from "../../assets/alert.png";

export default function Edit(props) {
	const { title, content, type, image, hasButton } = props.attributes;

	const blockProps = useBlockProps({
		className: ` is-${type}`,
	});

	const onChangeTitle = (event) => {
		props.setAttributes({ title: event });
	};

	const onChangeContent = (event) => {
		props.setAttributes({ content: event });
	};

	const onChangeType = (type) => {
		props.setAttributes({ type: type });

		switch (type) {
			case "positive-message":
				props.setAttributes({ image: lightBubbleImage });
				break;
			case "informative-message":
				props.setAttributes({ image: warningImage });
				break;
			case "danger-message":
				props.setAttributes({ image: alertImage });
				break;
		}

		if (type !== "promotion-message") {
			props.setAttributes({ hasButton: false });
		} else {
			props.setAttributes({ hasButton: true });
		}
	};

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

			<div {...blockProps}>
				{!hasButton && (
					<div className="wp-block-studioval-blocks-callout__image">
						<img src={image} alt={`icon-${type}`} />
					</div>
				)}

				<div>
					<RichText
						tagName="p"
						placeholder={__("Write your title here...", "studioval-blocks")}
						value={title}
						onChange={onChangeTitle}
						className={`wp-block-studioval-callout__title`}
						multiline={false}
					/>

					<RichText
						tagName="p"
						placeholder={__("Write some text here...", "studioval-blocks")}
						value={content}
						onChange={onChangeContent}
						className={`wp-block-studioval-callout__content`}
					/>

					{hasButton && (
						<div className="st-button dark">
							<a href="#">Demandez un devis gratuit</a>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
