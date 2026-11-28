import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro42e1bsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary ro42e1bsw"/>`,
		"fallback": "iconaut:workflow-duotone",
	});
}

export default Component;
