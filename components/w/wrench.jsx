import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f97ienhes.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f97ienhes"/>`,
		"fallback": "vadivam:wrench",
	});
}

export default Component;
