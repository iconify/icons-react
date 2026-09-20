import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imb743brv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imb743brv"/>`,
		"fallback": "thesvg-color:windsurf-light",
	});
}

export default Component;
