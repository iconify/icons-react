import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3_-pk3ov.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3_-pk3ov"/>`,
		"fallback": "selfhst:wygiwyh-light",
	});
}

export default Component;
