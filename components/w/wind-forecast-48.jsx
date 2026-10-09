import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh-k8dbly.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lh-k8dbly"/>`,
		"fallback": "energy-icons:wind-forecast-48",
	});
}

export default Component;
