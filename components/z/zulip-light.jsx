import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r25y7b4nf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r25y7b4nf"/>`,
		"fallback": "selfhst:zulip-light",
	});
}

export default Component;
