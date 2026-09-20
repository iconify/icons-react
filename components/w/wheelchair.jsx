import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpfk69-0z.css';
import '../../css/f/fnee-c65g.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpfk69-0z"/><path class="fnee-c65g"/>`,
		"fallback": "lineicons:wheelchair",
	});
}

export default Component;
