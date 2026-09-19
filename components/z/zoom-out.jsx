import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nfrpoo3dn.css';
import '../../css/t/t_qou-ite.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nfrpoo3dn"/><path class="t_qou-ite"/>`,
		"fallback": "gridicons:zoom-out",
	});
}

export default Component;
