import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f91fo6bxb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f91fo6bxb"/>`,
		"fallback": "picon:woman",
	});
}

export default Component;
