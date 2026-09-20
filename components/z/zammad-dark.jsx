import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfq4j0kqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfq4j0kqj"/>`,
		"fallback": "selfhst:zammad-dark",
	});
}

export default Component;
