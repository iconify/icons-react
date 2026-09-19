import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/punal9bvt.css';

const viewBox = {"width":819,"height":661};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="punal9bvt"/>`,
		"fallback": "ls:wifi",
	});
}

export default Component;
