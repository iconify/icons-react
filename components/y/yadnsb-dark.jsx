import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf68k4yfn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf68k4yfn"/>`,
		"fallback": "selfhst:yadnsb-dark",
	});
}

export default Component;
