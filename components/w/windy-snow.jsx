import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bngkp7yhv.css';
import '../../css/o/o9rdwyb_a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bngkp7yhv"/><path class="o9rdwyb_a"/>`,
		"fallback": "carbon:windy-snow",
	});
}

export default Component;
