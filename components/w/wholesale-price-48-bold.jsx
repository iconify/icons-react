import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5t0sbxt.css';
import '../../css/m/m29p03crh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5t0sbxt"/><path class="m29p03crh"/>`,
		"fallback": "energy-icons:wholesale-price-48-bold",
	});
}

export default Component;
