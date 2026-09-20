import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wzdxwkb-z.css';
import '../../css/x/xrk5i0byg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wzdxwkb-z"/><path class="xrk5i0byg"/></g>`,
		"fallback": "tabler:world-upload",
	});
}

export default Component;
