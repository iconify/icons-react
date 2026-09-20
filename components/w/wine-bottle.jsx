import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv2j-pbiw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv2j-pbiw"/>`,
		"fallback": "pinhead:wine-bottle",
	});
}

export default Component;
