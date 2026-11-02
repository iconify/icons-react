import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8n0gbwvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8n0gbwvy"/>`,
		"fallback": "mingcute:y-skew-fill",
	});
}

export default Component;
