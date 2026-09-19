import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm4461bzp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm4461bzp"/>`,
		"fallback": "cib:wordpress",
	});
}

export default Component;
