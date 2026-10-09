import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5ad8vbal.css';
import '../../css/v/v3_ntib1p.css';
import '../../css/y/y50a790-m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5ad8vbal"/><path class="v3_ntib1p"/><path class="y50a790-m"/>`,
		"fallback": "energy-icons:wifi-48-bold",
	});
}

export default Component;
