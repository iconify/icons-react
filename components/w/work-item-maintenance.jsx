import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb2rpab_w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb2rpab_w"/>`,
		"fallback": "pajamas:work-item-maintenance",
	});
}

export default Component;
