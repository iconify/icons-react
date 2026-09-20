import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uw3mel2bt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uw3mel2bt"/>`,
		"fallback": "selfhst:wekan-dark",
	});
}

export default Component;
