import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kksrbfb_x.css';
import '../../css/x/xa3ht-bbv.css';
import '../../css/j/j3u72_b5w.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kksrbfb_x"/><path class="xa3ht-bbv"/><path class="j3u72_b5w"/>`,
		"fallback": "devicon-plain:xcode",
	});
}

export default Component;
