import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/k3qy2abvl.css';
import '../../css/l/lyvezpbxf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="k3qy2abvl"/><path class="lyvezpbxf"/></g>`,
		"fallback": "withicons-retro:zap-off",
	});
}

export default Component;
