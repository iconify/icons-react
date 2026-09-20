import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfkqb6b5l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfkqb6b5l"/>`,
		"fallback": "pinhead:wide-rounded-rectangle-outline",
	});
}

export default Component;
