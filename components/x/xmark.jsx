import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvaqsm1-l.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvaqsm1-l"/>`,
		"fallback": "fa6-solid:xmark",
	});
}

export default Component;
