import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flo9z28mp.css';
import '../../css/n/ntt7ilb9v.css';
import '../../css/k/kwk2estza.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flo9z28mp"/><path class="ntt7ilb9v"/><path class="kwk2estza"/>`,
		"fallback": "thesvg-color:windmill",
	});
}

export default Component;
