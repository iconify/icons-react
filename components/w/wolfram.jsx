import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nx_um_bgw.css';
import '../../css/w/w1n9wrt_a.css';
import '../../css/g/genqieb0u.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nx_um_bgw"/><path class="w1n9wrt_a"/><path class="genqieb0u"/>`,
		"fallback": "devicon:wolfram",
	});
}

export default Component;
