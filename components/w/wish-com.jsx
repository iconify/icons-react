import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyf7383ma.css';
import '../../css/o/o703l3o2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyf7383ma"/><path class="o703l3o2b"/>`,
		"fallback": "selfhst:wish-com",
	});
}

export default Component;
