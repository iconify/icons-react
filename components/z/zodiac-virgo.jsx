import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn_4rw0pb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn_4rw0pb"/>`,
		"fallback": "vadivam:zodiac-virgo",
	});
}

export default Component;
