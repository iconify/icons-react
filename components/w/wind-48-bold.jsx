import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tf47s3b2g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tf47s3b2g"/>`,
		"fallback": "energy-icons:wind-48-bold",
	});
}

export default Component;
