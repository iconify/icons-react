import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucovixi8k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucovixi8k"/>`,
		"fallback": "fluent-emoji-high-contrast:womans-sandal",
	});
}

export default Component;
