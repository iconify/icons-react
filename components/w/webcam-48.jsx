import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd10_3lgv.css';
import '../../css/c/czm4jwrva.css';
import '../../css/j/jih-r1b_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd10_3lgv"/><path class="czm4jwrva"/><path class="jih-r1b_t"/>`,
		"fallback": "energy-icons:webcam-48",
	});
}

export default Component;
