import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmt69hb5b.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nmt69hb5b"/>`,
		"fallback": "temaki:yield",
	});
}

export default Component;
