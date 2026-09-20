import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k20y2qbch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k20y2qbch"/>`,
		"fallback": "mdi:wind-turbine",
	});
}

export default Component;
