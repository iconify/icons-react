import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmpmiyb4b.css';
import '../../css/v/v81ej1b9s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmpmiyb4b"/><path class="v81ej1b9s"/>`,
		"fallback": "energy-icons:wifi-medium-48-bold",
	});
}

export default Component;
