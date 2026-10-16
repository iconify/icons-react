import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdb70jjls.css';
import '../../css/n/n-cuddbov.css';
import '../../css/k/koaj76bea.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdb70jjls"/><path class="n-cuddbov"/><path class="koaj76bea"/>`,
		"fallback": "energy-icons:xor-gate-48",
	});
}

export default Component;
