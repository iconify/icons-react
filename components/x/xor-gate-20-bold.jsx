import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzflhmqcl.css';
import '../../css/h/hvkkpmbju.css';
import '../../css/h/h8goprb6e.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzflhmqcl"/><path class="hvkkpmbju"/><path class="h8goprb6e"/>`,
		"fallback": "energy-icons:xor-gate-20-bold",
	});
}

export default Component;
