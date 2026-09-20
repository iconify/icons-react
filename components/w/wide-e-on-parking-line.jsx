import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyse3869w.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyse3869w"/>`,
		"fallback": "pinhead:wide-e-on-parking-line",
	});
}

export default Component;
