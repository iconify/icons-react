import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b68-ukb-l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b68-ukb-l"/>`,
		"fallback": "teenyicons:wifi-low-outline",
	});
}

export default Component;
