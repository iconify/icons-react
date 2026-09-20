import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-2h1_beu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-2h1_beu"/>`,
		"fallback": "teenyicons:x-small-solid",
	});
}

export default Component;
