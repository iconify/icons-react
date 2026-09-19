import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/k/ksh1jl82n.css';
import '../../css/d/dm_j5gglv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="ksh1jl82n"/><path class="dm_j5gglv"/></g>`,
		"fallback": "icon-park-outline:weightlifting",
	});
}

export default Component;
