import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/px0v03bju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="px0v03bju"/>`,
		"fallback": "coolicons:wind-turbine-round",
	});
}

export default Component;
