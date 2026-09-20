import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om1sbjblc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om1sbjblc"/>`,
		"fallback": "mdi:wrench-clock-outline",
	});
}

export default Component;
