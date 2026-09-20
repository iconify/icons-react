import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-0y0ftzh.css';
import '../../css/q/q-dq2zato.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-0y0ftzh"/><path class="q-dq2zato"/>`,
		"fallback": "selfhst:windmill-dark",
	});
}

export default Component;
