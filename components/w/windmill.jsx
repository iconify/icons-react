import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f1hw74bbw.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f1hw74bbw"/>`,
		"fallback": "whh:windmill",
	});
}

export default Component;
