import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r3_h01beb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r3_h01beb"/>`,
		"fallback": "healthicons:y",
	});
}

export default Component;
