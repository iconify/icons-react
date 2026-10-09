import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i9s39grzg.css';
import '../../css/e/eueslcc2u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i9s39grzg"/><path class="eueslcc2u"/>`,
		"fallback": "energy-icons:wine-bottle-48",
	});
}

export default Component;
