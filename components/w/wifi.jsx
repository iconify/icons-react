import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy_jkmojz.css';
import '../../css/p/p2m6bbx_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="yy_jkmojz"/><path class="p2m6bbx_z"/></g>`,
		"fallback": "tabler:wifi",
	});
}

export default Component;
