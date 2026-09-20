import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl3nhgb6j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl3nhgb6j"/>`,
		"fallback": "thesvg-color:wisgate",
	});
}

export default Component;
