import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjoyhab7y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjoyhab7y"/>`,
		"fallback": "teenyicons:wifi-none-outline",
	});
}

export default Component;
