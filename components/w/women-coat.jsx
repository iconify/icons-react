import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/s/s4ro1caps.css';
import '../../css/w/wdybsacyc.css';
import '../../css/u/utzdrrbns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="s4ro1caps"/><path class="wdybsacyc"/><path class="utzdrrbns"/></g>`,
		"fallback": "icon-park:women-coat",
	});
}

export default Component;
