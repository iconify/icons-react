import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ac35u9zca.css';
import '../../css/n/n828jkbji.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ac35u9zca"/><path class="n828jkbji"/>`,
		"fallback": "energy-icons:wind-blade-48-bold",
	});
}

export default Component;
