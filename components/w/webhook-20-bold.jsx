import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ki204cc1a.css';
import '../../css/x/xe7g4rbrg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ki204cc1a"/><path class="xe7g4rbrg"/>`,
		"fallback": "energy-icons:webhook-20-bold",
	});
}

export default Component;
