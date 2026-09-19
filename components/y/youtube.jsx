import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqmd64fvr.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqmd64fvr"/>`,
		"fallback": "websymbol:youtube",
	});
}

export default Component;
