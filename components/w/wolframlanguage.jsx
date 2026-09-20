import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgfrr_9ri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgfrr_9ri"/>`,
		"fallback": "simple-icons:wolframlanguage",
	});
}

export default Component;
