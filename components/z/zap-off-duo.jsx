import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxpg3nbkx.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kiwhpbcdm.css';
import '../../css/e/eo_76b8fd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxpg3nbkx secondary"/><g class="dt0cm9dhy primary"><path class="kiwhpbcdm"/><path class="eo_76b8fd"/></g>`,
		"fallback": "iconaut:zap-off-duo",
	});
}

export default Component;
