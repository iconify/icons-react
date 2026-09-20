import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmc80rbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmc80rbtl"/>`,
		"fallback": "lucide:wind-arrow-down",
	});
}

export default Component;
