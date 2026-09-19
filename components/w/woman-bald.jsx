import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g87_e866g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g87_e866g"/>`,
		"fallback": "fluent-emoji-high-contrast:woman-bald",
	});
}

export default Component;
