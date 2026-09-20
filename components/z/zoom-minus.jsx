import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qcrey0bhe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qcrey0bhe"/>`,
		"fallback": "subway:zoom-minus",
	});
}

export default Component;
