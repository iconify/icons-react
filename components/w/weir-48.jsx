import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wfx3nk7mg.css';
import '../../css/d/d5jwctbqx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wfx3nk7mg"/><path class="d5jwctbqx"/>`,
		"fallback": "energy-icons:weir-48",
	});
}

export default Component;
