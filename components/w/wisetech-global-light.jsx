import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rspr33bfr.css';

const viewBox = {"width":1534,"height":1534};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rspr33bfr"/>`,
		"fallback": "thesvg-color:wisetech-global-light",
	});
}

export default Component;
