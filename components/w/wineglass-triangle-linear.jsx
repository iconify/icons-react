import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mym4apf8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mym4apf8n"/>`,
		"fallback": "solar:wineglass-triangle-linear",
	});
}

export default Component;
