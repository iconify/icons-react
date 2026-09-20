import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zidu6t6zd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zidu6t6zd"/>`,
		"fallback": "pajamas:work-item-epic",
	});
}

export default Component;
