import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx-hqhb9n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx-hqhb9n"/>`,
		"fallback": "fluent-emoji-high-contrast:white-medium-square",
	});
}

export default Component;
