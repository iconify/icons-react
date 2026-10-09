import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir2g77-jy.css';
import '../../css/f/faoz8ravc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir2g77-jy"/><path class="faoz8ravc"/>`,
		"fallback": "energy-icons:webhook-20",
	});
}

export default Component;
