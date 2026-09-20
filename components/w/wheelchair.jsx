import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dyljlcr5k.css';
import '../../css/k/k3l1toopw.css';
import '../../css/j/jy9j1dbzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dyljlcr5k"/><path class="k3l1toopw"/><path class="jy9j1dbzd"/></g>`,
		"fallback": "mynaui:wheelchair",
	});
}

export default Component;
