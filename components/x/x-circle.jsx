import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bpv2s9b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bpv2s9b9e"/>`,
		"fallback": "noviair:x-circle",
	});
}

export default Component;
