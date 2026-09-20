import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swmzyz2lh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swmzyz2lh"/>`,
		"fallback": "streamline:wind-flow-2",
	});
}

export default Component;
