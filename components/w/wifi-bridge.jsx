import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/num_bkpuw.css';
import '../../css/b/bpv7jubps.css';
import '../../css/o/okk3kca1t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="num_bkpuw"/><path class="bpv7jubps"/><path class="okk3kca1t"/>`,
		"fallback": "carbon:wifi-bridge",
	});
}

export default Component;
