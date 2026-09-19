import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hscj6zgex.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hscj6zgex"/>`,
		"fallback": "garden:zendesk-fill-16",
	});
}

export default Component;
