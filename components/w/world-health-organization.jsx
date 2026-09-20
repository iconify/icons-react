import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sj7la-b6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sj7la-b6f"/>`,
		"fallback": "thesvg:world-health-organization",
	});
}

export default Component;
