import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxuzv3bfk.css';
import '../../css/o/oscggibnn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxuzv3bfk"/><path class="oscggibnn"/>`,
		"fallback": "energy-icons:webhook-48-bold",
	});
}

export default Component;
