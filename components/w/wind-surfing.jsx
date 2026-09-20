import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9oun0bdp.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9oun0bdp"/>`,
		"fallback": "temaki:wind-surfing",
	});
}

export default Component;
