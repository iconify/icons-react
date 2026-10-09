import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtw_wzb8t.css';
import '../../css/g/gseyqnbcp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtw_wzb8t"/><path class="gseyqnbcp"/>`,
		"fallback": "energy-icons:whistle-20-bold",
	});
}

export default Component;
