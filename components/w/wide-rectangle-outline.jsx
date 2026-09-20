import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hsh-0cd-m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hsh-0cd-m"/>`,
		"fallback": "pinhead:wide-rectangle-outline",
	});
}

export default Component;
