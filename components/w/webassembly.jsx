import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snt7n62gc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snt7n62gc"/>`,
		"fallback": "thesvg:webassembly",
	});
}

export default Component;
