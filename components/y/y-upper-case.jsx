import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii_t20l9f.css';

const viewBox = {"width":524,"height":735};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii_t20l9f"/>`,
		"fallback": "ls:y-upper-case",
	});
}

export default Component;
