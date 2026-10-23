import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rs1y6trep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rs1y6trep"/>`,
		"fallback": "vadivam:worm",
	});
}

export default Component;
