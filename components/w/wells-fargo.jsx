import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyh0s5bvl.css';
import '../../css/c/ciel5gbic.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyh0s5bvl"/><path class="ciel5gbic"/>`,
		"fallback": "selfhst:wells-fargo",
	});
}

export default Component;
