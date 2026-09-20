import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3lc6z75g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r3lc6z75g"/>`,
		"fallback": "keyline-icons:wind-turbine",
	});
}

export default Component;
