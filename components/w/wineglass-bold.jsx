import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vrizk6m0j.css';
import '../../css/j/jcfbmebpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vrizk6m0j"/><path class="jcfbmebpb"/></g>`,
		"fallback": "solar:wineglass-bold",
	});
}

export default Component;
