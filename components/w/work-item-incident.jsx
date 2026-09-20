import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym69-cbxu.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym69-cbxu"/>`,
		"fallback": "pajamas:work-item-incident",
	});
}

export default Component;
