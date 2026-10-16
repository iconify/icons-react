import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5fem0brp.css';
import '../../css/m/mu5t7mbov.css';
import '../../css/x/xyen0l77b.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5fem0brp"/><path class="mu5t7mbov"/><path class="xyen0l77b"/>`,
		"fallback": "energy-icons:wind-turbine-off-20-bold",
	});
}

export default Component;
