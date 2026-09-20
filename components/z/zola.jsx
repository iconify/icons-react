import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxk7vks4y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxk7vks4y"/>`,
		"fallback": "thesvg-color:zola",
	});
}

export default Component;
