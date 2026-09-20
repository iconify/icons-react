import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e67a4j29f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e67a4j29f"/>`,
		"fallback": "mdi:zodiac-taurus",
	});
}

export default Component;
