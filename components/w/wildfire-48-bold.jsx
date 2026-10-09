import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unx9o7nog.css';
import '../../css/y/ycx93acmx.css';
import '../../css/i/ihmii9b0s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unx9o7nog"/><path class="ycx93acmx"/><path class="ihmii9b0s"/>`,
		"fallback": "energy-icons:wildfire-48-bold",
	});
}

export default Component;
