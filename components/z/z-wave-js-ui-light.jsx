import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngv76bsku.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngv76bsku"/>`,
		"fallback": "selfhst:z-wave-js-ui-light",
	});
}

export default Component;
