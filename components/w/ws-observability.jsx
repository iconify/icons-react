import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n726y5bjy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n726y5bjy"/>`,
		"fallback": "oui:ws-observability",
	});
}

export default Component;
