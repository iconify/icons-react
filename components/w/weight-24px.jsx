import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poq_cbc-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="poq_cbc-x"/>`,
		"fallback": "healthicons:weight-24px",
	});
}

export default Component;
