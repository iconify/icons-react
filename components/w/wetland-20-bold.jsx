import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bstt3tdqg.css';
import '../../css/f/fva0wsn1j.css';
import '../../css/h/hgv2l4uaq.css';
import '../../css/q/qusq3nbol.css';
import '../../css/w/wvwyv9bsc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bstt3tdqg"/><path class="fva0wsn1j"/><path class="hgv2l4uaq"/><path class="qusq3nbol"/><path class="wvwyv9bsc"/>`,
		"fallback": "energy-icons:wetland-20-bold",
	});
}

export default Component;
