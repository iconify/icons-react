import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx2wz8k2v.css';
import '../../css/k/kf_g6jb4r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx2wz8k2v"/><path class="kf_g6jb4r"/>`,
		"fallback": "selfhst:writefreely",
	});
}

export default Component;
