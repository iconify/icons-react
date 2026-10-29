import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvk2mbcwh.css';
import '../../css/j/j4446_u0j.css';
import '../../css/z/z_b2a8v8y.css';
import '../../css/k/kzjg8jbqj.css';
import '../../css/f/foipgeybq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvk2mbcwh wm-k"/><path class="j4446_u0j wm-k"/><path class="wm-k z_b2a8v8y"/><path class="kzjg8jbqj wm-k"/><path class="foipgeybq wm-s"/>`,
		"fallback": "withicons-bauhaus:wifi-off",
	});
}

export default Component;
