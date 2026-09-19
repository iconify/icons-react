import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqu0-5bax.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqu0-5bax"/>`,
		"fallback": "dinkie-icons:xiaoyuzhou",
	});
}

export default Component;
