import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff3rfh2ld.css';
import '../../css/l/les5albff.css';
import '../../css/t/toxedhbmi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ff3rfh2ld"/><path class="les5albff"/><path class="toxedhbmi"/>`,
		"fallback": "token:zcx",
	});
}

export default Component;
