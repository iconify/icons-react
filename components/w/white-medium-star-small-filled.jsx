import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s4gp4vbyb.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s4gp4vbyb"/>`,
		"fallback": "dinkie-icons:white-medium-star-small-filled",
	});
}

export default Component;
