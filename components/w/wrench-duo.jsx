import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vepb9acyv.css';
import '../../css/x/xj3ej1ogb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vepb9acyv"/><path class="xj3ej1ogb"/></g>`,
		"fallback": "streamline-kameleon-color:wrench-duo",
	});
}

export default Component;
