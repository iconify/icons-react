import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q0d1hcbit.css';
import '../../css/u/u2n18rsfg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q0d1hcbit"/><path class="u2n18rsfg"/>`,
		"fallback": "selfhst:zoom",
	});
}

export default Component;
