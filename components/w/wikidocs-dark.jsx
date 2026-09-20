import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckent7btu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckent7btu"/>`,
		"fallback": "selfhst:wikidocs-dark",
	});
}

export default Component;
