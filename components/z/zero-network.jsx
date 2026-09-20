import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pa41-ac5j.css';
import '../../css/m/mn-fhob2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pa41-ac5j"/><path clip-rule="evenodd" class="mn-fhob2o"/>`,
		"fallback": "token:zero-network",
	});
}

export default Component;
