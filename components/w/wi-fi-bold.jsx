import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-yckdk2x.css';
import '../../css/k/kdm4lcb3e.css';
import '../../css/s/seqcy-7oq.css';
import '../../css/l/lri0zsbsm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-yckdk2x"/><path class="kdm4lcb3e"/><path class="seqcy-7oq"/><path class="lri0zsbsm"/>`,
		"fallback": "solar:wi-fi-bold",
	});
}

export default Component;
