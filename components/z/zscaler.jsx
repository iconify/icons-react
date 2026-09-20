import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohw9xt7rc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohw9xt7rc"/>`,
		"fallback": "selfhst:zscaler",
	});
}

export default Component;
