import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otcmcwblu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otcmcwblu"/>`,
		"fallback": "streamline-color:wind-flow-1",
	});
}

export default Component;
