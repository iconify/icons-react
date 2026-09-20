import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlxc--bra.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlxc--bra"/>`,
		"fallback": "pinhead:wolf-head-and-question-mark",
	});
}

export default Component;
