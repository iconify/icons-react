import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txo7vqb3g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txo7vqb3g"/>`,
		"fallback": "dashicons:yes",
	});
}

export default Component;
