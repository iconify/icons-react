import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sysz87b-k.css';
import '../../css/k/k5mfz-beo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sysz87b-k"/><path class="k5mfz-beo"/>`,
		"fallback": "energy-icons:workflow-48-bold",
	});
}

export default Component;
