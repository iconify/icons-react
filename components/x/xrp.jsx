import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz78q1_kv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz78q1_kv"/>`,
		"fallback": "lineicons:xrp",
	});
}

export default Component;
