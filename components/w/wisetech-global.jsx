import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9xzdwbzs.css';

const viewBox = {"width":1534,"height":1534};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9xzdwbzs"/>`,
		"fallback": "thesvg:wisetech-global",
	});
}

export default Component;
