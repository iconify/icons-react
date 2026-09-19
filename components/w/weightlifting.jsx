import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ti4q6eknm.css';
import '../../css/q/qyrg7rbnv.css';
import '../../css/d/dm_j5gglv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ti4q6eknm"><path class="qyrg7rbnv"/><path class="dm_j5gglv"/></g>`,
		"fallback": "icon-park-solid:weightlifting",
	});
}

export default Component;
