import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcwmn2dil.css';
import '../../css/r/rrczhp0ig.css';
import '../../css/b/b3q-odbhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hcwmn2dil"/><path class="rrczhp0ig"/><path class="b3q-odbhn"/>`,
		"fallback": "selfhst:yacht",
	});
}

export default Component;
