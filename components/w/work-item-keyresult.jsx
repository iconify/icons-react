import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hybfehb-a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hybfehb-a"/>`,
		"fallback": "pajamas:work-item-keyresult",
	});
}

export default Component;
