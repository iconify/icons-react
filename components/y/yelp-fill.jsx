import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab-pd873z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ab-pd873z"/>`,
		"fallback": "akar-icons:yelp-fill",
	});
}

export default Component;
