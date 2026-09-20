import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq1v61m7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq1v61m7n"/>`,
		"fallback": "prime:wrench",
	});
}

export default Component;
