import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nund8c9im.css';

const viewBox = {"width":1534,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nund8c9im"/>`,
		"fallback": "wi:wind-direction-se",
	});
}

export default Component;
