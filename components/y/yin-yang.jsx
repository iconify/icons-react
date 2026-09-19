import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsayvsvbw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsayvsvbw"/>`,
		"fallback": "fa6-solid:yin-yang",
	});
}

export default Component;
