import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of_ijc5ys.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of_ijc5ys"/>`,
		"fallback": "fluent-emoji-high-contrast:white-medium-small-square",
	});
}

export default Component;
