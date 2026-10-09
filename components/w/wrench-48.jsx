import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbiwgmbyr.css';
import '../../css/h/hbyu2bdtl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbiwgmbyr"/><path class="hbyu2bdtl"/>`,
		"fallback": "energy-icons:wrench-48",
	});
}

export default Component;
