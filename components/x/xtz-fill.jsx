import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oi-u46bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oi-u46bzp"/>`,
		"fallback": "ri:xtz-fill",
	});
}

export default Component;
