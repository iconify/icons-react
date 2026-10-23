import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3rs63bdz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3rs63bdz"/>`,
		"fallback": "vadivam:zap-off",
	});
}

export default Component;
