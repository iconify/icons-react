import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxxj0bxqy.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxxj0bxqy"/>`,
		"fallback": "maki:wetland-15",
	});
}

export default Component;
