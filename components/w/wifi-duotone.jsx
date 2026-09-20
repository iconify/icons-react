import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jl_mr-bee.css';
import '../../css/c/chh9m8bfh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jl_mr-bee"/><path class="chh9m8bfh"/></g>`,
		"fallback": "keyline-icons:wifi-duotone",
	});
}

export default Component;
