import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuzmv1qpb.css';
import '../../css/p/p_zjrxi1a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuzmv1qpb"/><path class="p_zjrxi1a"/>`,
		"fallback": "energy-icons:wind-speed-20-bold",
	});
}

export default Component;
