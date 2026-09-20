import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghzw70bgs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghzw70bgs"/>`,
		"fallback": "la:won-sign-solid",
	});
}

export default Component;
