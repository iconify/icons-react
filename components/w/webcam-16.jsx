import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg2fhkbcg.css';
import '../../css/l/l-5p0fbmh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mg2fhkbcg"/><path clip-rule="evenodd" class="l-5p0fbmh"/>`,
		"fallback": "qlementine-icons:webcam-16",
	});
}

export default Component;
