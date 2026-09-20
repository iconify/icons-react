import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bw90ydbel.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bw90ydbel"/>`,
		"fallback": "pinhead:wide-p-on-parking-line",
	});
}

export default Component;
