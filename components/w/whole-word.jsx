import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dyq0purmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dyq0purmq"/>`,
		"fallback": "vadivam:whole-word",
	});
}

export default Component;
