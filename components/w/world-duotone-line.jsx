import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vbxbaodhg.css';
import '../../css/g/gsbwbdb1y.css';
import '../../css/y/yx-q3fo9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vbxbaodhg"><circle class="gsbwbdb1y"/><path class="yx-q3fo9n"/></g>`,
		"fallback": "lets-icons:world-duotone-line",
	});
}

export default Component;
