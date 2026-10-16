import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eg4v4ywuk.css';
import '../../css/g/ghmmfobwp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eg4v4ywuk"/><path class="ghmmfobwp"/>`,
		"fallback": "energy-icons:workflow-20-bold",
	});
}

export default Component;
