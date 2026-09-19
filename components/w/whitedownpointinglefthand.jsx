import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lgsqg7sjr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lgsqg7sjr"/>`,
		"fallback": "fxemoji:whitedownpointinglefthand",
	});
}

export default Component;
