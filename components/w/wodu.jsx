import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pb2lmabfk.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pb2lmabfk"/>`,
		"fallback": "fa7-brands:wodu",
	});
}

export default Component;
