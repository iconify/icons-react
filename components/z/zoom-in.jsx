import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dv1wbeblg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dv1wbeblg"/>`,
		"fallback": "dinkie-icons:zoom-in",
	});
}

export default Component;
