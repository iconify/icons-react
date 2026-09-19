import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chgg4jbas.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chgg4jbas"/>`,
		"fallback": "carbon:x",
	});
}

export default Component;
