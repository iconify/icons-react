import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srefg3b-r.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="srefg3b-r"/>`,
		"fallback": "pinhead:wide-p-in-parking-structure",
	});
}

export default Component;
