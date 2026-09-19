import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvk-mpx8a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvk-mpx8a"/>`,
		"fallback": "garden:zendesk-stroke-16",
	});
}

export default Component;
