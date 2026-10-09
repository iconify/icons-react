import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayli8kbbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayli8kbbg"/>`,
		"fallback": "energy-icons:welding-48",
	});
}

export default Component;
